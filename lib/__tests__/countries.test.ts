import { getTier, getVisitedCountry, getDisplayName } from '@/lib/countries';

describe('getTier', () => {
   it('classifies a visited country', () => {
      expect(getTier('Spain')).toBe('visited');
   });
   it('classifies a wishlist country', () => {
      expect(getTier('Japan')).toBe('wishlist');
   });
   it('classifies an unknown country as other', () => {
      expect(getTier('Brazil')).toBe('other');
   });
   it('is case-insensitive', () => {
      expect(getTier('spain')).toBe('visited');
   });
});

describe('getVisitedCountry', () => {
   it('returns the record for a visited country', () => {
      const spain = getVisitedCountry('Spain');
      expect(spain?.name).toBe('Spain');
      expect(spain?.photos.length).toBeGreaterThan(0);
   });
   it('returns undefined for a non-visited country', () => {
      expect(getVisitedCountry('Japan')).toBeUndefined();
   });
});

describe('getDisplayName', () => {
   it('prefers the displayName override', () => {
      expect(getDisplayName('United States of America')).toBe('United States');
   });
   it('falls back to the raw name', () => {
      expect(getDisplayName('Brazil')).toBe('Brazil');
   });
});
