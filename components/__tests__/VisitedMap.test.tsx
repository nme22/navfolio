import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VisitedMap from '@/components/VisitedMap';
import type { Feature, Geometry } from 'geojson';

// JSDOM 25 ships without PointerEvent; polyfill it so fireEvent.pointerDown
// carries clientX/clientY (required for drag-threshold detection).
if (typeof globalThis.PointerEvent === 'undefined') {
   // @ts-expect-error -- test-only polyfill; production uses native PointerEvent
   globalThis.PointerEvent = class PointerEvent extends MouseEvent {};
}

// Minimal GeoJSON features (real polygons) so geoPath/geoCentroid work.
function box(
   name: string,
   lon: number,
   lat: number
): Feature<Geometry, { name: string }> {
   return {
      type: 'Feature',
      properties: { name },
      geometry: {
         type: 'Polygon',
         coordinates: [
            [
               [lon, lat],
               [lon + 5, lat],
               [lon + 5, lat + 5],
               [lon, lat + 5],
               [lon, lat],
            ],
         ],
      },
   };
}

const features = [
   box('Spain', -4, 40), // visited
   box('Japan', 138, 36), // wishlist
   box('Brazil', -50, -10), // other
];

describe('VisitedMap', () => {
   it('opens the drawer when a visited country is clicked', async () => {
      const user = userEvent.setup();
      render(<VisitedMap initialFeatures={features} />);
      const spain = document.querySelector('[data-country="Spain"]');
      expect(spain).not.toBeNull();
      await user.click(spain as Element);
      expect(await screen.findByRole('dialog')).toBeInTheDocument();
      expect(
         screen.getByRole('heading', { name: 'Spain' })
      ).toBeInTheDocument();
   });

   it('does not open a drawer when a wishlist country is clicked', async () => {
      const user = userEvent.setup();
      render(<VisitedMap initialFeatures={features} />);
      const japan = document.querySelector('[data-country="Japan"]');
      await user.click(japan as Element);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
   });

   it('marks each country path with its tier', () => {
      render(<VisitedMap initialFeatures={features} />);
      expect(
         document
            .querySelector('[data-country="Spain"]')
            ?.getAttribute('data-tier')
      ).toBe('visited');
      expect(
         document
            .querySelector('[data-country="Japan"]')
            ?.getAttribute('data-tier')
      ).toBe('wishlist');
      expect(
         document
            .querySelector('[data-country="Brazil"]')
            ?.getAttribute('data-tier')
      ).toBe('other');
   });

   it('zooms in when the zoom-in control is clicked', async () => {
      const user = userEvent.setup();
      render(<VisitedMap initialFeatures={features} />);
      const layer = document.querySelector('[data-testid="zoom-layer"]');
      expect(layer?.getAttribute('transform')).toBe('translate(0 0) scale(1)');
      await user.click(screen.getByRole('button', { name: /zoom in/i }));
      expect(layer?.getAttribute('transform')).toContain('scale(1.6)');
   });

   it('reset is disabled at identity and restores it after zooming', async () => {
      const user = userEvent.setup();
      render(<VisitedMap initialFeatures={features} />);
      const reset = screen.getByRole('button', { name: /reset zoom/i });
      expect(reset).toBeDisabled();
      await user.click(screen.getByRole('button', { name: /zoom in/i }));
      expect(reset).toBeEnabled();
      await user.click(reset);
      const layer = document.querySelector('[data-testid="zoom-layer"]');
      expect(layer?.getAttribute('transform')).toBe('translate(0 0) scale(1)');
      expect(reset).toBeDisabled();
   });

   it('pans the map when dragging', () => {
      render(<VisitedMap initialFeatures={features} />);
      const svg = document.querySelector('svg[role="img"]') as Element;
      // zoom in first so there is room to pan (at scale 1, translate pins to 0)
      fireEvent.click(screen.getByRole('button', { name: /zoom in/i }));
      fireEvent.pointerDown(svg, { clientX: 100, clientY: 100 });
      fireEvent.pointerMove(svg, { clientX: 60, clientY: 70 });
      fireEvent.pointerUp(svg, { clientX: 60, clientY: 70 });
      const layer = document.querySelector('[data-testid="zoom-layer"]');
      expect(layer?.getAttribute('transform')).not.toBe(
         'translate(0 0) scale(1.6)'
      );
   });

   it('does not open the drawer when a country is dragged', () => {
      render(<VisitedMap initialFeatures={features} />);
      const spain = document.querySelector('[data-country="Spain"]') as Element;
      fireEvent.pointerDown(spain, { clientX: 100, clientY: 100 });
      fireEvent.pointerMove(spain, { clientX: 140, clientY: 130 });
      fireEvent.pointerUp(spain, { clientX: 140, clientY: 130 });
      fireEvent.click(spain);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
   });
});
