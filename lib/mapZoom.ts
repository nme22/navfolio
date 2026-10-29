export const MIN_SCALE = 1;
export const MAX_SCALE = 8;
export const ZOOM_STEP = 1.6;

export interface Transform {
   k: number;
   x: number;
   y: number;
}

export const IDENTITY: Transform = { k: MIN_SCALE, x: 0, y: 0 };

export function clampScale(k: number): number {
   return Math.min(MAX_SCALE, Math.max(MIN_SCALE, k));
}

// Clamp the translate so the scaled content always covers the viewport with
// no empty gutters. With transform `translate(x,y) scale(k)`, content x-range
// [0,width] maps to [x, x + k*width]; covering [0,width] needs
// (1-k)*width <= x <= 0. At k=1 that pins x to 0.
export function clampTranslate(
   t: Transform,
   width: number,
   height: number
): Transform {
   const k = clampScale(t.k);
   const minX = (1 - k) * width;
   const minY = (1 - k) * height;
   return {
      k,
      x: Math.min(0, Math.max(minX, t.x)),
      y: Math.min(0, Math.max(minY, t.y)),
   };
}

// Zoom by `factor` about a focal point in viewport coordinates, keeping the
// content under that focal point stationary, then clamp scale and translate.
export function zoomToward(
   t: Transform,
   factor: number,
   focusX: number,
   focusY: number,
   width: number,
   height: number
): Transform {
   const k2 = clampScale(t.k * factor);
   const x2 = focusX - (k2 / t.k) * (focusX - t.x);
   const y2 = focusY - (k2 / t.k) * (focusY - t.y);
   return clampTranslate({ k: k2, x: x2, y: y2 }, width, height);
}
