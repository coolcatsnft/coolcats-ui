import { PropsWithChildren } from "react";

export type BaseCanvasConfig = PropsWithChildren & {
  height: number;
  width: number;
  debug?: boolean;
  reset?: boolean;
  bordered?: boolean;
  background?: string;
  crossHairs?: boolean;
  onLoadLayers?: Function;
}

export type CanvasConfig = BaseCanvasConfig & {
  layers: CanvasLayer[];
}

export type BaseCanvasLayer = {
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  cropX?: number;
  cropY?: number;
  stickerWidth?: number;
  label?: string;
}

export type RenderedCanvasLayer = BaseCanvasLayer & {
  canvas: HTMLCanvasElement;
  stickerExempt?: boolean;
}

export type CanvasLayer = BaseCanvasLayer & {
  transform?: Array<number>;
  rotate?: number;
  flip?: 'horizontal' | 'vertical';
  arc?: [number, number, number, number, number, boolean?];
  background?: string;
  parentBackground?: string;
  border?: string;
  src?: string | HTMLImageElement | HTMLCanvasElement;
  transparent?: boolean,
  borderRadius?: string;
  text?: string;
  textCallback?: Function;
  skipTextFilter?: boolean;
  stickerExempt?: boolean;
  minFontSize?: number;
  maxFontSize?: number;
  font?: string;
  maxLimit?: number;
  color?: string;
  shadow?: boolean;
  sticker?: boolean;
  stickerSpecial?: boolean;
  canvasCallbacks?: Function[]
}

const imgCache = {} as any;

const hex = (arrayBuffer: any) => {
  return Array.prototype.map.call(
    new Uint8Array(arrayBuffer),
    n => n.toString(16).padStart(2, "0")
  ).join("");
}

/**
 * @returns {HTMLCanvasElement}
 */
export function createClientCanvas(width: number, height: number) {
  const canv = document.createElement('canvas')
  canv.width = width;
  canv.height = height;

  return canv;
}

/**
 * Download an image from a canvas
 *
 * @param {HTMLCanvasElement} canvas
 * @param {String} tokenId
 */
export const downloadImage = (canvas: HTMLCanvasElement, tokenId: string | number) => {
  const link = document.createElement('a');
  link.download = `${tokenId}.png`;
  link.href = canvas.toDataURL();
  link.click();
};

export const drawImageWrapper = (ctx: CanvasRenderingContext2D, src: any, x?: number, y?: number, width?: number, height?: number, cropX?: number, cropY?: number) => {
  try {
    const w = width || ctx?.canvas?.width || 1000;
    const h = height || ctx?.canvas?.height || 1000;
    if (cropX || cropY) {
      const sourceX = 0;
      const sourceY = 0;
      const sourceWidth = src?.width * (cropX || 1);
      const sourceHeight = src?.height * (cropY || 1);
      const destX = 0;
      const destY = 0;
      const destWidth = w * (cropX || 1);
      const destHeight = h * (cropY || 1);

      ctx.drawImage(
        src,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        destX,
        destY,
        destWidth,
        destHeight
      );
    } else {
      ctx.drawImage(
        src,
        x || 0,
        y || 0,
        w,
        h
      );
    }
  } catch(e) {
    console.error(`Error drawing ${src?.src} onto canvas`);
  }
}

export const fillRectWrapper = (ctx: CanvasRenderingContext2D, x?: number, y?: number, width?: number, height?: number) => {
  ctx.fillRect(x || 0, y || 0, width || ctx.canvas?.width || 1000, height || ctx.canvas?.height || 1000);
}

/**
 * @returns {HTMLCanvasElement}
 */
export const imageToCanvas = (img: HTMLImageElement, width: number, height: number, createCanvas?: Function): HTMLCanvasElement => {
  const canvas = createCanvas ? createCanvas(width, height) : document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.height = height;
  canvas.width = width;
  drawImageWrapper(ctx, img, 0, 0, width, height);

  return canvas;
}

/**
 * @returns {Promise<string>}
 */
export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader();
      reader.onload = (result) => {
        onSuccess(result?.target?.result as string);
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      onError(e);
    }
  });
}

/**
 * @returns {Promise<Blob>}
 */
export const fetchImageBlob = async (url: string): Promise<Blob> => {
  return fetch(url, { mode: 'cors' }).then((response: Response) => {
    return response.blob();
  });
};

/**
 * @returns {Promise<string>}
 */
export const imageUrlToBase64 = async (url: string): Promise<string> => {
  return fetchImageBlob(url).then((blob: Blob) => {
    return blobToBase64(blob);
  });
};

/**
 * @returns {Promise<HTMLImageElement>}
 */
export function resolveImage(src: string) {
  if (imgCache[src]) {
    const img = new Image()
    img.crossOrigin = "Anonymous";
    img.src = imgCache[src];
    return Promise.resolve(img);
  }

  return new Promise((resolve, reject) => {
    return imageUrlToBase64(src).then((dUri) => {
      const img = new Image()
      img.crossOrigin = "Anonymous";
      img.src = dUri;
      imgCache[src] = dUri;

      resolve(img);
    }).catch(reject)
  });
}

export function drawMultilineText(ctx: CanvasRenderingContext2D, text: string, options: any) {
  let opts = options;
  if (!opts)
    opts = {}
  if (!opts.font)
    opts.font = `sans-serif`;
  if (!opts.rect)
    opts.rect = {
      x: 0,
      y: 0,
      width: ctx.canvas.width,
      height: ctx.canvas.height
    }
  if (!opts.lineHeight)
    opts.lineHeight = 1.1
  if (!opts.minFontSize)
    opts.minFontSize = 30
  if (!opts.maxFontSize)
    opts.maxFontSize = 100

  const words = text.split(' ');
  let lines = [];
  let y;
  let fontSize;
  let lastFittingLines = [] as any;
  let lastFittingFont;
  let lastFittingY = 1;
  let lastFittingLineHeight = 1;
  for (fontSize = opts.minFontSize; fontSize <= opts.maxFontSize; fontSize += 1) {
    // Line height
    const lineHeight = fontSize * opts.lineHeight;

    // Set font for testing with measureText()
    ctx.font = `${fontSize}px ${opts.font}`;

    // Start
    const { x } = opts.rect;
    y = lineHeight;
    lines = [];
    let line = '';
    
    if (words.length > 1) {
      // eslint-disable-next-line no-restricted-syntax
      for (const word of words) {
        // Add next word to line
        const linePlus = `${line}${word} `;
  
        // If added word exceeds rect width...
        if (ctx.measureText(linePlus).width >= opts.rect.width) {
          // ..."prints" (save) the line without last word
          lines.push({ text: line, x, y });
          // New line with ctx last word
          line = `${word} `;
          y += lineHeight
        } else {
          // ...continues appending words
          line = linePlus
        }
      }
    } else {
      line = words.join('');
    }

    if (ctx.measureText(line).width > opts.rect.width) {
      break;
    }

    lines.push({ text: line, x, y })

    // If bottom of rect is reached then breaks "fontSize" cycle
    if (y > opts.rect.height)                                           
      break;
        
    lastFittingLines = lines;
    lastFittingFont = ctx.font;
    lastFittingY = y;
    lastFittingLineHeight = lineHeight;
  }

  lines = lastFittingLines;
  ctx.font = lastFittingFont || options.font;                                        
  const offset = opts.rect.y - (lastFittingLineHeight / 4) + (opts.rect.height - lastFittingY) / 2;

  // eslint-disable-next-line no-restricted-syntax
  for (const line of lines) {
    let l = line.text.trim();
    if (ctx.measureText(l).width > opts.rect.width) {
      while (ctx.measureText(l).width > opts.rect.width) {
        const a = l.split('');
        a.pop();
        l = a.join('');
      }
    }
    ctx.fillText(l, line.x + (opts.rect.width / 2), line.y + offset);
  }

  return fontSize;
}

const calcThickness = (width: number, stickerWidth?: number) => {
  return width * (stickerWidth || 0.02);
}

const applyStickerEffect = (canvasCreate: Function, layerCanvas: HTMLCanvasElement, stickerWidth?: number) => {
  const thickness = calcThickness(layerCanvas.width, stickerWidth);
  const samples = 36;
  const x = thickness + 1;
  const y = thickness + 1;

  const stickerCanv = canvasCreate((layerCanvas.width + x * 2), layerCanvas.height + y * 2);
  const stickerCtx = stickerCanv.getContext('2d');

  for (let angle = 0; angle < 360; angle += 360 / samples) {
    drawImageWrapper(
      stickerCtx,
      layerCanvas,
      thickness * Math.sin((Math.PI * 2 * angle) / 360) + x,
      thickness * Math.cos((Math.PI * 2 * angle) / 360)
    );
  }

  stickerCtx.globalCompositeOperation = 'source-in';
  stickerCtx.fillStyle = 'white';
  fillRectWrapper(stickerCtx, 0, 0, stickerCanv.width, stickerCanv.height);

  stickerCtx.globalCompositeOperation = 'source-over';
  drawImageWrapper(stickerCtx, layerCanvas, x, 0);
  stickerCanv.thickness = thickness;

  return stickerCanv;
}

const removeCanvas = (c: HTMLCanvasElement) => {
  // c.width = 0;
  // c.height = 0;
  // c.remove();
}

export const generateLayeredCanvas = (
  config: CanvasConfig,
  canvas?: HTMLCanvasElement,
  createCanvas?: Function,
) => {
  const { width, height, layers, debug, background, crossHairs } = config;
  const parentBackground = layers.find(l => l.parentBackground);
  const stickerEffect = layers.find(l => l.stickerSpecial);
  const renderedLayers = [] as RenderedCanvasLayer[];

  const canvasCreate = createCanvas || function(w: number, h: number) {
    const canv = document.createElement('canvas');
    canv.width = w;
    canv.height = h;

    return canv;
  };

  const layeredCanvas = (canvas || canvasCreate(width, height));
  const ctx = layeredCanvas.getContext('2d');

  ctx.clearRect(0, 0, width, height);
  if (background || parentBackground) {
    ctx.fillStyle = (background || parentBackground?.parentBackground);
    fillRectWrapper(ctx, 0, 0, width, height);
  }

  layers.forEach((l, index) => {
    const lWidth = l.width || width;
    const lHeight = l.height || height;
    const layerCanvas = canvasCreate(
      lWidth,
      lHeight
    );

    const layerCtx = layerCanvas.getContext('2d', { willReadFrequently: true });

    if (l.rotate) {
      layerCtx.translate(lWidth / 2, lHeight / 2);
      layerCtx.rotate((-l.rotate) * Math.PI / l.rotate);
      layerCtx.translate(-lWidth / 2,-lHeight / 2);
    }

    if (l.flip === 'horizontal') {
      layerCtx.translate(lWidth, 0);
      layerCtx.scale(-1, 1);
    }
  
    if (l.transform) {
      layerCtx.transform(
        l.transform[0],
        l.transform[1],
        l.transform[2],
        l.transform[3],
        l.transform[4],
        l.transform[5]
      );
    }

    const bg = debug ? 'blue' : (l.background || '');
    if (bg && bg !== 'inherit') {
      layerCtx.fillStyle = debug ? 'blue' : (l.background || '');
      fillRectWrapper(layerCtx, 0, 0, layerCanvas.width, layerCanvas.height);
    }

    if (typeof (l as any).src !== 'undefined') {
      if (l.transparent === true || l.background === 'inherit') {
        const tokenCanv = canvasCreate(layerCanvas.width, layerCanvas.height);
        const tokenCtx = tokenCanv.getContext('2d', { willReadFrequently: true });
        drawImageWrapper(tokenCtx, l.src, 0, 0, layerCanvas.width, layerCanvas.height);
        const pixelData = tokenCtx.getImageData(0, 0, 1, 1).data;
        const imageData = tokenCtx.getImageData(0, 0, lWidth, lHeight);
        const hexBg = hex(pixelData);
        const shortendHexBg = hexBg.substring(0, hexBg.length - 2).toLowerCase();
    
        if (l.background === 'inherit') {
          const bgCanvas = canvasCreate(
            width,
            height
          );
          const bgCtx = bgCanvas.getContext('2d');
          bgCtx.fillStyle = `#${shortendHexBg}`;
          fillRectWrapper(bgCtx, 0, 0, width, height);
          drawImageWrapper(
            ctx,
            bgCanvas,
            0,
            0,
            bgCanvas.width,
            bgCanvas.height
          );
        }
        if (l.transparent === true) {
          for (let i = 0; i < imageData.data.length; i += 4) {
            const red = imageData.data[i];
            const green = imageData.data[i + 1];
            const blue = imageData.data[i + 2];
    
            // check if the pixel color matches the color to remove
            if (red == pixelData[0] && green == pixelData[1] && blue == pixelData[2]) {
              // set the pixel color to transparent
              imageData.data[i + 3] = 0;
            }
          }
  
          tokenCtx.putImageData(imageData, 0, 0);
        }
  
        drawImageWrapper(
          layerCtx,
          tokenCanv,
          0,
          0,
          layerCanvas.width,
          layerCanvas.height
        );

        removeCanvas(tokenCanv);
      } else if (l.src) {
        drawImageWrapper(
          layerCtx,
          l.src,
          0,
          0,
          layerCanvas.width,
          layerCanvas.height,
          l.cropX,
          l.cropY
        );
      }

    } else if (typeof (l as any).text !== 'undefined') {
      const textCallbackFunction = l.textCallback ? l.textCallback : (t: string) => t;

      let sentence = textCallbackFunction((l as any).text || '');
      const { maxLimit, color, shadow, minFontSize, maxFontSize, font } = l as any;
      
      // validate text length
      if (maxLimit && sentence.length >= maxLimit) {
        sentence = sentence.slice(0, maxLimit - 3).trim().concat('...');
      }

      const tempCanvas = canvasCreate(
        layerCanvas.width,
        layerCanvas.height
      );

      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.textAlign = 'center';
      tempCtx.fillStyle = color || '#fff';

      if (shadow) {
        tempCtx.shadowColor = "black";
        tempCtx.shadowBlur = 4;
        tempCtx.lineWidth = 2;
      }

      drawMultilineText(tempCtx, sentence, {
        minFontSize: minFontSize || 20,
        maxFontSize: maxFontSize || 300,
        font: font || undefined
      });

      drawImageWrapper(
        tempCtx,
        tempCanvas,
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );

      drawImageWrapper(
        layerCtx,
        tempCanvas,
        0,
        0,
        tempCanvas.width,
        tempCanvas.height
      );

      removeCanvas(tempCanvas);
    }

    if (l.canvasCallbacks && l.canvasCallbacks.length > 0) {
      l.canvasCallbacks.forEach(effect => {
        effect(layerCanvas, layerCtx, l, canvasCreate, index);
      })
    }

    if (l.sticker) {
      const stickerCanv = applyStickerEffect(canvasCreate, layerCanvas, l.stickerWidth);
      renderedLayers.push({
        canvas: stickerCanv,
        x: l.x || 0,
        y: l.y || 0,
        width: layerCanvas.width,
        height: layerCanvas.height,
        stickerExempt: l.stickerExempt || false,
        stickerWidth: l.stickerWidth,
        label: l.label
      })
    } else {
      renderedLayers.push({
        canvas: layerCanvas,
        x: l.x || 0,
        y: l.y || 0,
        width: layerCanvas.width,
        height: layerCanvas.height,
        stickerExempt: l.stickerExempt || false,
        stickerWidth: l.stickerWidth,
        label: l.label
      })
    }
  });

  if (stickerEffect) {
    const hasBg = renderedLayers.find(l => l.label === 'BACKGROUND');
    if (hasBg) {
      drawImageWrapper(
        ctx,
        hasBg.canvas,
        hasBg.x,
        hasBg.y,
        hasBg.width,
        hasBg.height
      );
    }
    
    const forground = canvasCreate(width, height);
    const forgroundCtx = forground.getContext('2d');
    renderedLayers.forEach(r => {
      if (!['BACKGROUND', 'EFFECT'].includes(r?.label || '')) {
        drawImageWrapper(
          forgroundCtx,
          r.canvas,
          r.x,
          r.y,
          r.width,
          r.height
        );
      }
    });

    const stickerCanv = applyStickerEffect(canvasCreate, forground, renderedLayers[0]?.stickerWidth);

    removeCanvas(forground);

    drawImageWrapper(
      ctx,
      stickerCanv,
      stickerCanv.thickness * -1,
      0,
      width + stickerCanv.thickness,
      height
    );

    renderedLayers.filter(l => l.stickerExempt).forEach(r => {
      drawImageWrapper(
        ctx,
        r.canvas,
        r.x,
        r.y,
        r.width,
        r.height
      );
    });

    removeCanvas(stickerCanv);

  } else {
    renderedLayers.forEach(r => {
      drawImageWrapper(
        ctx,
        r.canvas,
        r.x,
        r.y,
        r.width,
        r.height
      );
    })
  }

  // Kill old canvases
  renderedLayers.forEach(r => {
    removeCanvas(r.canvas);
  });

  if (crossHairs) {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas?.height, canvas?.width);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(0, canvas?.width);
    ctx.lineTo(canvas?.height, 0);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo((canvas?.width || 0) / 2, 0);
    ctx.lineTo((canvas?.width || 0) / 2, canvas?.height);
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(0, (canvas?.height || 0) / 2);
    ctx.lineTo(canvas?.width, (canvas?.height || 0) / 2);
    ctx.stroke();

    const centerX = ((canvas?.width || 0)) / 2;
    const centerY = ((canvas?.height || 0)) / 2;
    const radius = ((canvas?.height || 0)) / 2;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
  }

  return layeredCanvas;
}