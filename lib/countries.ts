import { visitedCountries, wishlistCountries } from '@/lib/data';
import type { VisitedCountry } from '@/lib/types';

export type CountryTier = 'visited' | 'wishlist' | 'other';

const visitedByName = new Map(
   visitedCountries.map((c) => [c.name.toLowerCase(), c])
);
const wishlistByName = new Map(
   wishlistCountries.map((c) => [c.name.toLowerCase(), c])
);

export function getTier(name: string): CountryTier {
   const key = name.toLowerCase();
   if (visitedByName.has(key)) return 'visited';
   if (wishlistByName.has(key)) return 'wishlist';
   return 'other';
}

export function getVisitedCountry(name: string): VisitedCountry | undefined {
   return visitedByName.get(name.toLowerCase());
}

export function getDisplayName(name: string): string {
   const key = name.toLowerCase();
   return (
      visitedByName.get(key)?.displayName ??
      wishlistByName.get(key)?.displayName ??
      name
   );
}
