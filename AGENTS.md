# Agents Guide

This document replaces ad‑hoc change logs. It gives AI agents and contributors a single source of truth for how to work in this codebase: what to change, how to change it, and how to validate work. Keep this file current instead of creating per‑change markdown logs.

## Goals

- Ship user‑visible improvements safely and predictably
- Prefer minimal, targeted diffs over broad refactors
- Keep performance, accessibility, and SEO guardrails intact
- Document intent in PRs (not scattered change logs)

## Quickstart

- Dev server: `npm run dev` (Express + Vite middleware)
- Type check: `npm run check`
- Build (client + server): `npm run build`
- Start prod build: `npm start`
- Smoke tests (build + run + endpoints): `npm test`

Node 20.x is required (see `package.json:engines`).

## Architecture Overview

- `client/` React 18 + Vite SPA served by Express
  - Tailwind v4 (`client/src/index.css`) with brand tokens in `styles/tokens.css`
  - Component library under `client/src/components/ui` (shadcn-derived, plus custom `optimized-image`, `icon`)
  - Routing via `wouter`; pages under `client/src/pages`
  - SEO via `react-helmet-async` (`SEO` component)
- `server/` Express 5, ESM, serves API and in prod serves built client
  - Dev: attaches Vite middleware (HMR) via `server/vite.ts`
  - Prod: serves static from `public` (copied from `dist/public` on build)
  - Routes in `server/routes.ts`; controllers under `server/controllers/*`
  - Storage abstraction in `server/storage.ts` (in‑memory by default)
- `shared/` Types and schemas (Drizzle + Zod) shared across server/client
- `docs/` Durable design docs and implementation notes (keep conceptual, not per‑change logs)
- `scripts/` CI/automation (e.g., `smoke-tests.sh`)

Build pipeline: `vite build` (client) + `esbuild` (server/shared). CI runs type check, build, starts server, smoke tests (`.github/workflows/ci.yml`).

## Conventions (Client)

- Styling
  - Use Tailwind utilities; prefer token utilities from `client/src/index.css` and `styles/tokens.css`.
  - Avoid raw hex; use OKLCH/HSL tokens (e.g., `text-brand-gold`, `bg-brand-teal`).
  - Use component‑scoped `<style>` blocks only for nuanced patterns (e.g., `CarouselCompact` focus effect) and keep selectors prefixed/data‑scoped.
  - Keep radii/spacing with token scale; avoid magic numbers.

- Components
  - Prefer existing primitives in `client/src/components/ui` (buttons, dialog, carousel, etc.).
  - Icons: use centralized `@/components/ui/icon` (lazy‑loaded Lucide). Do not import Lucide icons directly.
  - Images: use `@/components/ui/optimized-image` for responsive images, `sizes`, and optional `sources`/`imgSrcSet`. Avoid `<img>` unless truly trivial.
  - Service cards: use `ServiceCard`/`ServiceGrid` + `serviceCatalog` when possible.
  - Trust signals: use `TrustSignalsSection`.
  - Carousels: `CarouselCompact` for compact/focus patterns.

- Pages & Routing
  - Pages live in `client/src/pages`. Route using `wouter` (`client/src/routes.ts`).
  - New location pages should compose `LocationPageTemplate` and standard sections.
  - SEO: include `<SEO>` with meaningful `title` and `description`.

- Accessibility
  - Provide `aria-labels` for actionable elements, labels for inputs, and semantic elements for sections (`<section aria-labelledby>` patterns used in components like `TrustSignalsSection`).
  - Maintain focus styles (Tailwind focus utilities are already in place). Ensure keyboard interactions are supported.

- Performance
  - Prevent CLS: reserve media space (see `.hero-media` aspect‑ratio approach). Avoid injecting layout‑affecting CSS late.
  - Split/lazy load where sensible. Icons are already lazy; keep it that way.
  - Optimize images (use the `optimized-image` component, `vite-plugin-image-optimizer`).
  - Optional production RUM: `@vercel/speed-insights` guidance in `docs/speed-insights.md`.

## Conventions (Server/API)

- ESM only; include explicit `.js` in server imports when referencing local files (Node ESM + Vercel).
- Add new routes in `server/routes.ts`; keep controllers pure and testable in `server/controllers/*`.
- Storage
  - Default is in‑memory (`MemStorage` in `server/storage.ts`).
  - Shared types/schemas in `shared/schema.ts` (Drizzle + Zod). If migrating to a real DB, implement an `IStorage` adapter and wire it in `server/storage.ts` without changing handlers.
- Errors
  - Throw with `status`/`statusCode`; global error handler maps to `{ message }` JSON.

## When You Make Changes

- Do
  - Keep diffs minimal and focused on the task; do not refactor unrelated code.
  - Reuse existing components/utilities before adding new ones.
  - Adhere to tokenized styles and accessibility patterns.
  - Update or add durable docs in `docs/` only for new patterns/decisions (architecture, design rationale) — not per‑change logs.
  - Validate locally: `npm run check`, `npm run build`, then `npm test` (smoke).

- Don’t
  - Create ad‑hoc “change log” markdowns. Document intent and outcomes in the PR instead.
  - Introduce raw color values or bypass `optimized-image`/`icon` utilities.
  - Change build tooling or CI without explicit need.

## PR Guidelines (Change Logs Eliminated)

Use the PR description to capture context and decisions. Include:

1) Why: problem, user impact, or goal
2) What: concise summary of changes
3) How: key implementation notes and tradeoffs
4) Risk: edge cases, roll‑back plan if relevant
5) Validation: commands run and results (type check, build, smoke; screenshots if UI)

Commit style: short, imperative subject; optionally group with prefixes like `feat:`, `fix:`, `perf:`, `docs:`. Avoid noisy/partial commits; keep logical units.

## Testing & Validation

- Type safety: `npm run check`
- Build correctness: `npm run build`
- Runtime sanity: `npm start` then verify key routes load
- Smoke tests: `npm test` (builds, starts, hits `/` and `/api/contacts`)
- Component tests: Jest libs are present; UI tests are not wired into CI by default. If adding/using tests under `client/src/**.test.tsx`, coordinate adding a script to run them.

## Common Patterns & References

- Location page composition: `client/src/pages/LocationPageTemplate.tsx`
- Service cards: `client/src/components/ServiceCard/*`
- Trust signals: `client/src/components/TrustSignals/TrustSignalsSection.tsx`
- Carousel compact: `client/src/components/Carousel/CarouselCompact.tsx`
- Icons: `client/src/components/ui/icon.tsx`
- Optimized images: `client/src/components/ui/optimized-image.tsx`
- Tokens: `styles/tokens.css`; utilities bound in `client/src/index.css`

## SEO Schema (JSON‑LD)

- Helpers live in `client/src/components/seo/schema.ts` and are rendered via `client/src/components/seo/JsonLd.tsx`.
- Site base URL lives in `client/src/config/site.ts` (`site.url`). Update once; all schema uses absolute URLs automatically.
- See also: `docs/seo-schema.md` for deeper guidance and validation steps.

Recommended snippets by page type:

- Home/sitewide
  - `makeWebSite(site.url, { bookingPath?: '/booking', contactPath?: '/contact', searchPathTemplate?: '/search?q={search_term_string}' })`
  - `makeLocalBusiness(site.url)`
  - `makeWebPage({ siteUrl: site.url, path: '/', title, description, images? })`
  - `makeBreadcrumb([{ name: 'Home', url: site.url + '/' }])`
  - `makeFAQPage(faqs, site.url + '/')` when FAQs are present

- Service pages (e.g., deep cleaning, move‑out, apartment, residential)
  - `makeLocalBusiness(site.url)`
  - `makeWebPage({ siteUrl: site.url, path, title, description, images? })`
  - `makeService({ siteUrl: site.url, path, name, description, areaServed: ['Spokane','Spokane Valley','Liberty Lake'] })`
  - `makeBreadcrumb([...])`

- Location pages
  - Use `LocationPageTemplate`; it already injects LocalBusiness + WebPage + Service + Breadcrumbs.
  - Pass `currentPath` if the inferred path from the location name isn’t correct.

- About/Contact/Locations/Blog index
  - `makeLocalBusiness(site.url)` + `makeWebPage(...)` + `makeBreadcrumb(...)`
  - Blog index can remain `noindex` until content exists.

Usage pattern (copy/paste into a page):

```
import JsonLd from '@/components/seo/JsonLd';
import { makeLocalBusiness, makeWebPage, makeService, makeBreadcrumb, makeFAQPage } from '@/components/seo/schema';
import { site } from '@/config/site';

<JsonLd
  data={[
    makeLocalBusiness(site.url),
    makeWebPage({ siteUrl: site.url, path: '/my-path', title: 'My Title', description: 'My description' }),
    // Optional for service pages
    makeService({ siteUrl: site.url, path: '/my-path', name: 'Service Name', description: 'What it is', areaServed: ['Spokane'] }),
    makeBreadcrumb([
      { name: 'Home', url: `${site.url}/` },
      { name: 'My Page', url: `${site.url}/my-path` },
    ]),
    // Optional FAQ
    // makeFAQPage(faqs, `${site.url}/my-path`),
  ]}
/>
```

Notes

- Builders emit stable `@id`s for cross‑referencing: WebPage uses `#webpage`; Service uses `#service`; LocalBusiness uses `#business`.
- Images can be relative; helpers absolutize them and set `primaryImageOfPage` as an `ImageObject`.
- If you add site search or booking, wire `makeWebSite` on Home with `searchPathTemplate`/`bookingPath`.

## Adding New UI

1) Identify an existing primitive/composition to extend; prefer not to invent new patterns
2) Keep props typed, minimal, and documented with JSDoc where unclear
3) Honor responsive breakpoints already used by adjacent components
4) Use token utilities; avoid hard‑coded colors and ad‑hoc spacing
5) Validate: type check → build → smoke; attach screenshots to PR

## Adding/Changing API Endpoints

1) Define handler in `server/controllers/*` (pure, typed against `shared/schema.ts`)
2) Add route in `server/routes.ts`
3) Extend `IStorage` if persistence needed; prefer swapping storage adapters
4) Update smoke tests only when endpoints change in ways that break the contract

## Performance Guardrails

- Reserve media space to avoid CLS (aspect‑ratio or fixed containers)
- Lazy‑load non‑critical UI where possible
- Minimize inline `<style>` blocks; scope them with data attributes when needed
- Keep bundle sizes reasonable; rely on centralized lazy icon loader

## Accessibility Guardrails

- Use semantic elements and ARIA labels/headings relationships
- Ensure focus states and keyboard operability for interactive elements
- Provide descriptive `alt` text for images

## Documentation Policy

- Durable docs (architecture, reusable patterns, reference guides) live in `docs/`
- Do not create per‑change logs; use PR descriptions for change context
- Keep this AGENTS.md updated if conventions or workflows change

---

Questions or proposed deviations? Summarize rationale and tradeoffs in the PR and, if adopted, reflect the new rule here or in `docs/` as appropriate.
