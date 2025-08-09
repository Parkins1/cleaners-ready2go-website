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
