/**
 * Single source of truth for site-level metadata. Used by the layout,
 * sitemap, robots, and structured data so they never drift apart.
 *
 * NOTE: update `url` to the production domain once deployed.
 */
export const siteConfig = {
   name: 'Navid M. Ebrahimi',
   title: 'Navid M. Ebrahimi — Full-Stack Developer',
   description:
      'Portfolio of Navid M. Ebrahimi, a full-stack web developer. Projects, skills, and contact.',
   url: 'https://navidebrahimi.dev',
   email: 'navidmebrahimi22@gmail.com',
   jobTitle: 'Full-Stack Developer',
} as const;

export type SiteConfig = typeof siteConfig;
