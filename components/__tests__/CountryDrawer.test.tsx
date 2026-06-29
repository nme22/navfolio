import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CountryDrawer from '@/components/CountryDrawer';
import type { VisitedCountry } from '@/lib/types';

const country: VisitedCountry = {
   name: 'Spain',
   blurb: 'A wonderful trip.',
   cities: ['Madrid', 'Seville'],
   people: ['College friends'],
   photos: [{ src: '/a.svg', alt: 'first photo' }],
};

describe('CountryDrawer', () => {
   it('renders nothing when country is null', () => {
      render(<CountryDrawer country={null} onClose={() => {}} />);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
   });

   it('renders the country details when open', () => {
      render(<CountryDrawer country={country} onClose={() => {}} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Spain')).toBeInTheDocument();
      expect(screen.getByText('A wonderful trip.')).toBeInTheDocument();
      expect(screen.getByText('Madrid')).toBeInTheDocument();
      expect(screen.getByText('College friends')).toBeInTheDocument();
      expect(screen.getByAltText('first photo')).toBeInTheDocument();
   });

   it('hides the cities and people sections when empty', () => {
      render(
         <CountryDrawer
            country={{ ...country, cities: [], people: [] }}
            onClose={() => {}}
         />
      );
      expect(screen.queryByText(/cities/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/who i was with/i)).not.toBeInTheDocument();
   });

   it('calls onClose when the close button is clicked', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<CountryDrawer country={country} onClose={onClose} />);
      await user.click(screen.getByRole('button', { name: /close/i }));
      expect(onClose).toHaveBeenCalledTimes(1);
   });

   it('calls onClose when the backdrop is clicked', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<CountryDrawer country={country} onClose={onClose} />);
      await user.click(screen.getByTestId('drawer-backdrop'));
      expect(onClose).toHaveBeenCalledTimes(1);
   });

   it('calls onClose when Escape is pressed', async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<CountryDrawer country={country} onClose={onClose} />);
      await user.keyboard('{Escape}');
      expect(onClose).toHaveBeenCalledTimes(1);
   });
});
