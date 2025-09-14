# Repository Guidelines

## Project Structure & Module Organization
- `client/`: React + Vite app (`src/components`, `src/pages`, `src/lib`).
- `server/`: Express API (`controllers`, `services`, `repositories`, `tests`).
- `shared/`: Shared TypeScript types and helpers.
- `scripts/`: Tooling (performance budget, smoke tests).
- `public/`: Built client assets (copied from `dist/public`).
- `api/`: Vercel Serverless entry re-exporting the Express app.
- `prisma/`, `drizzle.config.ts`: Data layer configuration.
- `agents/`, `docs/`: Project docs and agent guidelines.

## Build, Test, and Development Commands
- `npm run dev`: Start Express with Vite HMR for the client.
- `npm run build`: Build client and server to `dist/` and copy public assets.
- `npm start`: Run the production server from `dist/`.
- `npm run check`: Type-check the project with `tsc`.
- `npm test`: Build, run server on port 5001, then execute smoke tests.
- `npm run smoke-test`: Run curl-based checks; override with `BASE_URL=http://localhost:5002`.
- Performance budget: `npm run build && node scripts/check-performance-budget.mjs`.

## Coding Style & Naming Conventions
- TypeScript, 2-space indent, prefer explicit types at boundaries.
- React components: PascalCase files (e.g., `components/HeroSection/HeroSection.tsx`).
- Pages: PascalCase (e.g., `pages/Contact.tsx`).
- Hooks/utilities: match existing patterns (e.g., `hooks/use-mobile.tsx`, `lib/api.ts`).
- Tailwind CSS v4: keep styles utility-first; see `tailwind.config.ts`.

## Testing Guidelines
- Primary: smoke tests via `npm test` (server must start cleanly).
- Unit tests: server under `server/tests/*.test.ts`; client under `client/src/**/*.test.tsx`.
- Prefer Testing Library for UI; Supertest for API. Ensure new routes have basic smoke coverage.

## Commit & Pull Request Guidelines
- Conventional Commits: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `deps` with optional scope (e.g., `feat(seo): ...`).
- PRs: clear description, linked issues, screenshots for UI changes, steps to verify.
- Before opening: run `npm run check`, `npm run build`, `npm test`, and the performance budget script.

## Agent-Specific Notes
- See `agents/index.md` for modes and rules (auth, performance, code quality, testing, file conventions).
- Keep changes minimal, focused, and consistent with existing patterns.
