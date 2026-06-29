import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VisitedMap from '@/components/VisitedMap';
import type { Feature, Geometry } from 'geojson';

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
});
