import { forwardRef, useEffect, useRef, useState } from "react";
import { CanvasLayer, CanvasConfig, generateLayeredCanvas, resolveImage } from "../canvasUtils";

export const LayeredCanvas = forwardRef((props: CanvasConfig, ref: any) => {
  const [layers, setLayers] = useState<Array<CanvasLayer>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { layers: propsLayers, height, children, reset, width, onLoadLayers } = props;
  
  useEffect(() => {
    if (reset) {
      setLayers([]);
    } else {
      Promise.all(
        propsLayers.map(l => {
          if (typeof l.src === 'string') {
            return resolveImage(l.src).then(img => {
              return {
                ...l,
                src: img
              }
            })
          }
  
          return Promise.resolve(l);
      })).then((newLayers) => {
        setLayers(newLayers as any);
        if (newLayers?.length > 0 && onLoadLayers) {
          onLoadLayers(newLayers);
        }
      });
    }
  }, [propsLayers, reset]);

  useEffect(() => {
    if ((ref?.current || canvasRef?.current)) {
      generateLayeredCanvas(
        {
          ...props,
          layers
        },
        ref?.current || canvasRef?.current
      );
    }
  }, [layers, props, ref, canvasRef]);

  return (
    <>
      {!reset && <canvas height={height} width={width} ref={ref || canvasRef} />}
      { children || null }
    </>
  )
})

export default LayeredCanvas;