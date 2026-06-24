# Navfolio

Personal portfolio of **Navid M. Ebrahimi** — a single-page site built with
Next.js and Tailwind CSS, with a modern, refined dark theme.

## Tech stack

| Concern   | Choice                                                            |
| --------- | ----------------------------------------------------------------- |
| Framework | [Next.js 15](https://nextjs.org) (App Router)                     |
| Language  | TypeScript (strict)                                               |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com)                        |
| Animation | [Framer Motion](https://www.framer.com/motion/)                   |
| Icons     | [react-icons](https://react-icons.github.io/react-icons/)         |
| Tooling   | ESLint (flat config), Prettier, EditorConfig, Husky + lint-staged |
| CI        | GitHub Actions (typecheck · lint · format · build)                |

## Getting started

```bash
npm install      # installs deps and sets up git hooks (husky)
npm run dev      # start the dev server at http://localhost:3000
```

## Scripts

| Script                 | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the dev server              |
| `npm run build`        | Production build                  |
| `npm start`            | Serve the production build        |
| `npm run lint`         | Lint with ESLint                  |
| `npm run typecheck`    | Type-check with `tsc --noEmit`    |
| `npm run format`       | Format the codebase with Prettier |
| `npm run format:check` | Verify formatting (used in CI)    |

## Project structure

```
app/
  layout.tsx       Root layout: fonts, metadata, JSON-LD structured data
  page.tsx         The single page — composes every section
  globals.css      Tailwind import + theme tokens
  sitemap.ts       Generated sitemap
  robots.ts        Generated robots.txt
components/         Presentational section/UI components
lib/
  data.ts          Site content (projects, skills, hobbies, socials …)
  site.ts          Site-level config (name, url, email) — single source of truth
  types.ts         Shared TypeScript models
```

Content lives as typed data in `lib/`, keeping components purely presentational
and the site easy to update without touching markup.

## Conventions

- **Strict TypeScript** with shared models in `lib/types.ts`.
- **Content as data:** sections render from typed arrays/objects in `lib/data.ts`.
- **Tailwind hover colors** are stored as semantic keys and mapped to full,
  static class strings so they survive Tailwind v4's purge.
- **Pre-commit:** Husky runs lint-staged (ESLint `--fix` + Prettier) on staged
  files.

## Deployment

Optimized for [Vercel](https://vercel.com). Push to the default branch and import
the repo, or run `npm run build && npm start`. Update `siteConfig.url` in
`lib/site.ts` to your production domain so metadata, sitemap, and robots resolve
correctly.
