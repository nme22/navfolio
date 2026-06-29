import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PhotoCarousel from '@/components/PhotoCarousel';
import type { TravelPhoto } from '@/lib/types';

const photos: TravelPhoto[] = [
   { src: '/a.svg', alt: 'first photo' },
   { src: '/b.svg', alt: 'second photo' },
];

describe('PhotoCarousel', () => {
   it('shows a placeholder when there are no photos', () => {
      render(<PhotoCarousel photos={[]} />);
      expect(screen.getByText(/photos coming soon/i)).toBeInTheDocument();
   });

   it('shows the first photo initially', () => {
      render(<PhotoCarousel photos={photos} />);
      expect(screen.getByAltText('first photo')).toBeInTheDocument();
   });

   it('advances to the next photo and wraps around', async () => {
      const user = userEvent.setup();
      render(<PhotoCarousel photos={photos} />);
      await user.click(screen.getByRole('button', { name: /next photo/i }));
      expect(screen.getByAltText('second photo')).toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: /next photo/i }));
      expect(screen.getByAltText('first photo')).toBeInTheDocument();
   });

   it('wraps backwards from the first photo', async () => {
      const user = userEvent.setup();
      render(<PhotoCarousel photos={photos} />);
      await user.click(screen.getByRole('button', { name: /previous photo/i }));
      expect(screen.getByAltText('second photo')).toBeInTheDocument();
   });

   it('jumps to a photo via its dot', async () => {
      const user = userEvent.setup();
      render(<PhotoCarousel photos={photos} />);
      await user.click(screen.getByRole('button', { name: /go to photo 2/i }));
      expect(screen.getByAltText('second photo')).toBeInTheDocument();
   });
});
