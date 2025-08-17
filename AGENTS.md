# Repository Guidelines

## Project Structure & Module Organization
- `client/`: Vite + React UI (entry: `client/src/main.tsx`, routes in `client/src/App.tsx`). Aliases: `@` → `client/src`, `@shared` → `shared`, `@assets` → `attached_assets`, `@components` → `components`.
- `server/`: Express API (`server/index.ts`, routes in `server/routes.ts`). Dev serves client via Vite; prod serves from `dist/public`.
- `shared/`: Cross-cutting types and Drizzle schema (`shared/schema.ts`).
- `components/`, `styles/`, `attached_assets/`: Global UI building blocks and assets.
- `docs/`, `scripts/`: Docs and utilities (e.g., `scripts/smoke-tests.sh`).
- Build output: `dist/` (`dist/index.js` server, `dist/public/` client).

## Build, Test, and Development Commands
- `npm run dev`: Start Express + Vite in development on `PORT` (default 5001).
- `npm run build`: Build client (Vite) and bundle server (esbuild) into `dist/`.
- `npm start`: Run the bundled server (`dist/index.js`). Serves static client.
- `npm run check`: Type-check with `tsc`.
- `npm run db:push`: Push Drizzle schema (requires `DATABASE_URL`).
- `npm run smoke-test`: Basic API/UI smoke checks.
- `npm run stop` / `restart`: Free port 5001 / stop-then-dev.

## Coding Style & Naming Conventions
- Language: TypeScript + ES modules. Indent 2 spaces; keep semicolons.
- React: Components and pages in PascalCase (e.g., `DeepCleaning.tsx`). Hooks/utilities in camelCase.
- Server: Files in lowerCamel/flat (`routes.ts`, `storage.ts`).
- Imports: Prefer path aliases (`@/...`, `@shared/...`) over relative ladders.
- CSS: Tailwind utilities; avoid inline styles. Keep shared UI in `components/`.

## Testing Guidelines
- Frameworks: Jest + Supertest for server; Testing Library available for React.
- Locations: Server tests in `server/tests/` (example: `contacts.test.ts`). Place client tests next to components as `*.test.tsx`.
- Run: `npx jest server/tests` (add `--coverage` when needed). Smoke: `npm run smoke-test`.

## Commit & Pull Request Guidelines
- Commits: Use clear, present-tense subjects (seen in history). Prefer scopes when helpful, e.g., `client:`, `server:`. Keep < 72 chars.
- PRs: Include a concise description, linked issue, test notes, and UI screenshots/GIFs when applicable. Note any config or schema changes.

## Security & Config Tips
- Env: `PORT` (defaults 5001), `DATABASE_URL` for Drizzle. Never commit secrets. Validate input with Zod as in `server/routes.ts`.

## UI Cards: ServiceCard vs ContentCard

- Purpose: Establish a single source of truth for card visuals and behavior across the app.

- ServiceCard: Image-led service teaser cards
  - Location: `client/src/components/ServiceCard/ServiceCard.tsx`
  - Use for: Service discovery blocks (e.g., Home services grid) where an image represents a service and the entire card links to a route.
  - Anatomy (contrast-first):
    - Container: `relative block overflow-hidden rounded-xl border border-slate-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all`
    - Focus: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-teal)]`
    - Media: real `<img>` layer `absolute inset-0 h-full w-full object-cover brightness-[.85] object-center sm:object-[center_30%]`
    - Overlay: `absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent`
    - Text block: `absolute inset-x-0 bottom-0 p-4 sm:p-5 backdrop-blur-[2px] max-w-[28ch] sm:max-w-[36ch] mx-auto`
    - Text: title `text-white text-lg sm:text-xl font-semibold drop-shadow-sm`; body `text-slate-100/95`
  - Accessibility: Full-card link, large tap target; strong keyboard focus ring.
  - Example:
    - In pages, supply `{ id, title, blurb, href, img, icon }` and render `<ServiceCard {...item} />`.

- ContentCard: Text/feature/pricing/general-purpose cards
  - Location: `client/src/components/ContentCard/ContentCard.tsx`
  - Use for: Pricing tiles, feature steps, testimonials, and service lists; any text-first card without a hero image.
  - Props:
    - `as`: element/tag to render (default `div`). Examples: `as="section"`, `as="blockquote"`, `as="a"`.
    - `interactive`: boolean; when true, adds hover depth and focus ring. Use with `as="a"`/`as="button"` or keep as `div` for static.
    - `className`: extend visuals (e.g., `bg-accent text-white`).
  - Anatomy:
    - Container: `relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow`
    - Interactive: `transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-400`
    - Note: Adds `tabIndex=0` when `interactive` to ensure keyboard focus for non-focusable tags.
  - Examples:
    - Static: `<ContentCard><h3>Weekly</h3><p>…</p></ContentCard>`
    - Interactive link: `<ContentCard as="a" href="/pricing" interactive>…</ContentCard>`
    - Quote: `<ContentCard as="blockquote">“Great service!”</ContentCard>`

- When to choose which
  - Use ServiceCard when the card’s visual identity is driven by photography and the whole card navigates.
  - Use ContentCard when content is text-first (lists, steps, pricing, testimonials) and doesn’t require an image overlay.

- Consistency vs creativity
  - Keep the frame consistent (radius, border, shadow, padding) across cards.
  - Express creativity through imagery (ServiceCard), iconography, and internal accents (e.g., icon pills, headings), not by changing the frame.
  - Only make cards interactive when they truly act as links or actions; static information cards should not have hover/focus affordances.

- Implementation notes
  - Home services grid uses `<ServiceCard>` for all four cards.
  - Ad-hoc `.card` styles were removed; use `<ContentCard>` instead for non-image cards.
  - For full-width mobile tap targets, ensure wrappers are block-level anchors (ServiceCard already is; for ContentCard use `as="a"` + `interactive`).
  - Central catalog: Use `client/src/components/ServiceCard/catalog.tsx` for a single source of truth for service content (id, title, blurb, href, img, icon).
  - Grid helper: Use `client/src/components/ServiceCard/ServiceGrid.tsx` to render a 2-column responsive grid of ServiceCards from a list of catalog ids.
  - Location pages: `LocationPageTemplate` accepts `serviceCardIds` to render standardized ServiceCards across location pages.
  - Docs: See `project.md` → “Service Cards: Central Catalog & Grid” for steps to add services, wire routes, and use `serviceCardIds`.

## Contrast & Overlays
- Modals: Use near-solid surfaces over imagery for legibility: `bg-white/95 backdrop-blur-sm` on modal containers with a dimmed scrim `bg-black/50`.
- Hero sections over photos: Prefer image `<img>` + overlay. For dark-on-light copy, use a light near-solid overlay (e.g., `bg-white/90–95`). For white-on-image, use a dark gradient: `from-black/55 via-black/35 to-transparent` and constrain copy width to `~28–36ch`.
- Buttons on busy or gold backgrounds: Favor high-contrast solids (e.g., navy `#003366` with white text) meeting at least WCAG AA.
