import {
   clampScale,
   clampTranslate,
   zoomToward,
   IDENTITY,
   MIN_SCALE,
   MAX_SCALE,
   ZOOM_STEP,
} from '@/lib/mapZoom';

const W = 800;
const H = 420;

describe('clampScale', () => {
   it('clamps below MIN_SCALE', () => {
      expect(clampScale(0.2)).toBe(MIN_SCALE);
   });
   it('clamps above MAX_SCALE', () => {
      expect(clampScale(100)).toBe(MAX_SCALE);
   });
   it('passes through an in-range value', () => {
      expect(clampScale(4)).toBe(4);
   });
});

describe('clampTranslate', () => {
   it('forces translate to {0,0} at scale 1', () => {
      const r = clampTranslate({ k: 1, x: -300, y: 200 }, W, H);
      expect(r).toEqual({ k: 1, x: 0, y: 0 });
   });
   it('prevents gutters at scale 2', () => {
      // bounds: x in [(1-2)*800, 0] = [-800, 0]
      expect(clampTranslate({ k: 2, x: -1000, y: 50 }, W, H).x).toBe(-800);
      expect(clampTranslate({ k: 2, x: 100, y: 50 }, W, H).x).toBe(0);
      expect(clampTranslate({ k: 2, x: -400, y: -100 }, W, H).x).toBe(-400);
   });
});

describe('zoomToward', () => {
   it('zooms in within bounds and keeps the focal point fixed', () => {
      const r = zoomToward(IDENTITY, ZOOM_STEP, W / 2, H / 2, W, H);
      expect(r.k).toBeCloseTo(ZOOM_STEP);
      // the content point under the viewport center is unchanged
      const contentXBefore = (W / 2 - IDENTITY.x) / IDENTITY.k;
      const contentXAfter = (W / 2 - r.x) / r.k;
      expect(contentXAfter).toBeCloseTo(contentXBefore);
   });
   it('does not zoom out past MIN_SCALE and resets translate there', () => {
      const r = zoomToward(IDENTITY, 1 / ZOOM_STEP, W / 2, H / 2, W, H);
      expect(r).toEqual(IDENTITY);
   });
   it('clamps scale at MAX_SCALE', () => {
      const r = zoomToward({ k: MAX_SCALE, x: 0, y: 0 }, ZOOM_STEP, 0, 0, W, H);
      expect(r.k).toBe(MAX_SCALE);
   });
   it('round-trips zoom in then out back to identity', () => {
      const inOnce = zoomToward(IDENTITY, ZOOM_STEP, W / 2, H / 2, W, H);
      const back = zoomToward(inOnce, 1 / ZOOM_STEP, W / 2, H / 2, W, H);
      expect(back).toEqual(IDENTITY);
   });
});
