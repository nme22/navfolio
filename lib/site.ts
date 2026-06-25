/**
 * Single source of truth for site-level metadata. Used by the layout,
 * sitemap, robots, and structured data so they never drift apart.
 *
 * NOTE: update `url` to the production domain once deployed.
 */
export const siteConfig = {
   name: 'Navid M. Ebrahimi',
   title: 'Navid M. Ebrahimi, Full-Stack Developer',
   description:
      'The personal site and portfolio of Navid M. Ebrahimi, a full-stack web developer based in the US.',
   url: 'https://navidebrahimi.dev',
   email: 'navidmebrahimi22@gmail.com',
   jobTitle: 'Full-Stack Developer',
} as const;

export type SiteConfig = typeof siteConfig;
