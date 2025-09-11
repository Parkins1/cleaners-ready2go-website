# File Naming and Structure Conventions

## Purpose
This file ensures consistency in how AI agents generate or modify files in the Cleaners Ready 2 Go website project, promoting maintainability, collaboration, and adherence to the React/Node.js/Vite stack standards.

## Overview
Follow these conventions for all new or refactored code. Use TypeScript (.ts/.tsx) where possible for type safety. Enforce via linting rules (see code_quality.md). Always include a clear description of changes in commits/PRs, referencing related issues (e.g., "Addresses #456").

## Naming Rules
- **Components (React)**: PascalCase.tsx (e.g., ServiceCard.tsx, HeroSection.tsx). For hooks: useHook.ts (e.g., useBooking.ts).
- **Pages/Routes**: PascalCase.tsx in /client/src/pages/ (e.g., BookingPage.tsx).
- **Utilities/Helpers**: camelCase.ts (e.g., formatDate.ts, validateBooking.ts).
- **API Routes/Endpoints (Node.js)**: kebab-case in /server/routes/ or controllers (e.g., bookingsController.ts; route: /api/bookings).
- **Database Migrations/Scripts**: snake_case.sql or timestamp-named (e.g., 20240907_add_bookings_table.sql; Prisma migrations auto-named).
- **Tests**: [filename].test.tsx (e.g., ServiceCard.test.tsx) or [filename].spec.ts for backend.
- **Config Files**: lowercase.json/ts (e.g., vite.config.ts, prisma.schema).
- **Assets**: descriptive-name.[ext] with size variants (e.g., icon_service_deep-clean-64.webp).
- **Constants/Enums**: UPPER_SNAKE_CASE.ts (e.g., BOOKING_STATUS.ts with enum values).
- **Avoid**: Abbreviations unless standard (e.g., no "svc" for service; use full words).

## Directory Organization
- **Client-Side (/client/)**:
  - src/components/: Subfolders for UI components (e.g., components/ServiceCard/ServiceCard.tsx).
  - src/pages/: Top-level pages (e.g., pages/HomePage.tsx).
  - src/hooks/: Custom React hooks (e.g., hooks/useAuth.ts).
  - src/lib/: Shared utilities and helpers (e.g., lib/apiClient.ts for fetch wrappers).
  - src/types/: TypeScript interfaces (e.g., types/Booking.ts).
  - src/assets/: Images/icons organized by category (e.g., assets/icons/addons/).
  - public/: Static assets served directly (e.g., public/favicon.ico).
  - Tests: Colocate with source (e.g., ServiceCard.test.tsx next to ServiceCard.tsx) or in __tests__ subfolder.
- **Server-Side (/server/)**:
  - controllers/: Endpoint handlers (e.g., bookingsController.ts).
  - services/: Business logic (e.g., bookingService.ts).
  - repositories/: Data access layer (e.g., bookingRepository.ts).
  - routes/: Express routes (e.g., api/bookings.ts).
  - models/: If not using Prisma, define schemas here.
  - tests/: Backend tests (e.g., controllers/bookings.test.ts).
- **Shared (/shared/)**: Types or utils used by both client/server (e.g., shared/types/User.ts).
- **Root Level**:
  - api/: Serverless functions if using Vercel.
  - docs/: Project documentation (e.g., README.md).
  - scripts/: Build/deploy scripts (e.g., deploy.sh).
  - .vscode/: VS Code settings (e.g., settings.json for linting).
- **Tests Placement**: Alongside source files for unit tests; __tests__/ for integration. E2E in /e2e/ with Cypress.
- **API Routes**: Place in src/api/ for client fetches or /server/routes/ for backend definition. Use RESTful naming (e.g., GET /api/services/:id).

## Change Descriptions and Documentation
- **Commit Messages**: Use conventional commits (e.g., "feat: add booking confirmation page", "fix: resolve auth token expiration").
- **PR Descriptions**: Include:
  1. Summary of changes guided by this agents.md (e.g., "Follows file_conventions.md for component naming").
  2. References to related issues (e.g., "Addresses #456: Implements lazy loading per performance.md").
  3. Before/after code diffs for major refactors.
  4. Test coverage updates if applicable.
- **Inline Comments**: Use JSDoc for functions/components (e.g., /** Creates a new booking */).
- **Migration Docs**: For DB changes, update a changelog.md in /docs/.

## Project-Specific Conventions
- **Components**: All UI components in /components/ follow atomic design (atoms: Icon; molecules: ServiceCard; organisms: HeroSection).
- **API Structure**: Controllers handle req/res; services call repositories. Error responses: JSON with { error: message, code: 400 }.
- **Asset Naming**: Prefix icons with "icon_" and add-ons with "addon_" (e.g., icon_addon_pet_zone.webp).
- **Enforcement**: Use VS Code extensions (ESLint, Prettier) and Husky for pre-commit checks.
- **Exceptions**: Document deviations in code comments (e.g., // Legacy naming for migration compatibility).

## References
- React Naming Conventions: [react.dev](https://react.dev/learn/writing-markup-with-jsx#naming-conventions)
- Node.js Best Practices: [nodejs.org](https://nodejs.org/en/docs/guides/simple-profiling/)
- Always reference: "Updates file structure per conventions - Addresses #789".
