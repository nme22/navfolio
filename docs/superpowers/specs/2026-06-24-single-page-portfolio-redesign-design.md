# Single-Page Portfolio Redesign — Design

**Date:** 2026-06-24
**Status:** Approved

## Goal

Refactor the multi-page portfolio into a single scrolling page and give it a
more professional look. All existing content is preserved; nothing is dropped.

## Decisions

- **Structure:** All four existing pages (Home, Projects, About, Contact) become
  scroll sections on one page. Navbar links become smooth-scroll anchors.
- **Visual direction:** Modern, refined dark theme (dark-only — no light/dark
  toggle).
- **Stack:** Upgrade to Next.js 15 (App Router) + Tailwind CSS, dropping
  Chakra UI v1 and emotion. Keep Framer Motion and react-icons.

## Architecture

```
app/
  layout.js        // root layout: fonts, SEO metadata, dark page background
  page.js          // single page, composes all sections in order
  globals.css      // Tailwind import + theme tokens
components/
  Navbar.js        // sticky top bar, smooth-scroll anchor links
  Section.js       // shared wrapper: spacing + scroll anchor + scroll-reveal
  Hero.js
  About.js
  Projects.js
  ProjectCard.js   // reusable, data-driven card
  Contact.js
  Footer.js
lib/
  data.js          // projects[], skills{}, socials[] — content as data
```

Old `pages/` and `src/components/` are deleted. `public/` images stay. `.next/`
gets added to `.gitignore` and removed from tracking.

**Key refactor:** the five duplicated Projects cards (~250 lines) and the skill
badges become data arrays mapped to single components — resolving the original
code's "refactor into a reusable component" TODO.

## Sections (all content preserved)

1. **Hero** — name, "Full-Stack Developer", photo, intro paragraph, two CTA
   buttons (View Projects / Get in Touch) that smooth-scroll.
2. **About** — skill badges grouped (Languages / Frameworks / Databases / Misc);
   personal narrative (Origins, Hobbies as icon row, Morals & Beliefs) as clean
   text blocks; Spotify playlist embed in a styled frame. Replaces the accordion
   with an always-visible, scannable layout.
3. **Projects** — responsive card grid, data-driven, tech icons + external link,
   subtle hover lift.
4. **Contact** — closing message + "Reach Out" email button.
5. **Footer** — slim bar with social links + copyright.

## Visual system

- **Palette:** near-black base (`zinc-950`); card surfaces `white/5` with
  `white/10` hairline borders; body text `zinc-400`; headings near-white. Single
  accent: a violet→blue gradient used sparingly (key headings, links, hover).
- **Type:** modern sans via `next/font` (Inter). Real hierarchy; drop the
  oblique/italic styling.
- **Spacing:** centered `max-w-5xl` container, uniform section padding. Fixes
  ad-hoc margins (e.g. `m={200}` on the old Projects heading).
- **Motion:** subtle fade/slide-up reveal on scroll (`whileInView`), gentle card
  hover lift.

## Quality

- Preserve accessibility work: semantic headings, `alt` text, `aria-label`s on
  icon-only controls.
- Per-section SEO via App Router `metadata` export.

## Out of scope

- No CMS / backend. Content stays hardcoded in `lib/data.js`.
- No light theme.
