import { forwardRef, useEffect, useState } from "react";
import { BaseCanvasConfig } from "../canvasUtils";
import { AvatarView, CanvasConfig } from "../Avatar/types";
import LayeredCanvas from "../LayeredCanvas";
import { createAvatarCanvasLayers } from "../Avatar/utils";

type AvatarCanvasConfig = CanvasConfig & BaseCanvasConfig;

export const AvatarCanvas = forwardRef((props: AvatarCanvasConfig, ref: any) => {
  const { traits, height, children, reset, bordered, width, view, baseUrl, type, tokenId, crossHairs, onLoadLayers } = props;

  const [stateView, setStateView] = useState<AvatarView>(view);
  const [stateTokenId, setStateTokenId] = useState<string>(tokenId || '');

  useEffect(() => {
    if (view) {
      setStateView(view);
    }
  }, [view]);

  useEffect(() => {
    if (tokenId) {
      setStateTokenId(tokenId);
    }
  }, [tokenId]);

  return (
    <LayeredCanvas 
      width={width}
      height={height}
      reset={reset || view !== stateView}
      ref={ref}
      bordered={bordered}
      children={children}
      crossHairs={crossHairs}
      onLoadLayers={onLoadLayers}
      layers={
        createAvatarCanvasLayers({
          view: stateView,
          type,
          tokenId: stateTokenId,
          traits,
          height,
          width,
          baseUrl
        })
      }
    />
  )
})

export default AvatarCanvas;