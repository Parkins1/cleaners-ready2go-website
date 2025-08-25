Here's the complete merged repository guidelines document that combines both the original technical guidelines and the GEMINI.md content:

Comprehensive Repository Guidelines
Project Overview
A modern, responsive web app for a professional cleaning business. Uses React + Vite (frontend), Express (backend), in-memory storage, and progressive conversion paths. The codebase aims for a premium, trustworthy look with a gold/serif brand motif and scalable, maintainable architecture.

Tech Stack
Frontend:

React 18 + Vite, Wouter routing
Tailwind CSS 3 (custom tokens/layers), Radix UI, shadcn-style UI
Lucide icons, Framer Motion (optional), TanStack Query
Backend:

Express server, dev/prod switch
API (contacts, bookings, quotes) with Zod/Drizzle validation
In-memory data, Drizzle ORM/Neon/pg-simple prepped (future)
Build/Hosting:

Vite dev server + HMR (Express)
Static build for prod
Replit deployment: Node 20, PG 16, port 80, build/run in .replit
Project Structure & Module Organization
client/: Vite + React SPA (entry: client/src/main.tsx, routes in client/src/routes.tsx).
Path aliases: @ → client/src, @shared → shared, @assets → attached_assets, @components → client/src/components.
server/: Express API (entry: server/index.ts, routes in server/routes.ts).
Dev: Proxies client via Vite.
Prod: Serves static client from dist/public.
shared/: Shared TypeScript types and Drizzle ORM schema (shared/schema.ts).
components/: Reusable React components (client/src/components/).
styles/: Global CSS, including design tokens (styles/tokens.css).
attached_assets/: Static assets (images, icons).
docs/: Documentation files.
scripts/: Utility scripts (e.g., scripts/smoke-tests.sh).
Build output: dist/ (dist/index.js for server, dist/public/ for client).
Routing
Centralized SPA routes defined in client/src/routes.tsx.
Consumed in client/src/App.tsx using Wouter <Switch> for client-side routing.
Design tokens
styles/tokens.css: Single source of truth for brand colors (HSL), spacing, and radii.
Mapped to Tailwind utilities in tailwind.config.ts.
Content Hierarchy & Routing
Global client-side routing with Wouter.
Pages:
/ (Home), /about, /residential, /move-out, /locations, /blog, /team, /contact
Catch-all → NotFound
Nav and Footer fixed globally, with dominant "Book Now" CTA in Nav.
Main content starts after 24px top pad (to clear nav).
Each page uses a single H1, then h2/h3 as needed for logical sections.
Page patterns:

Page	1st Section	Highlights
Home	Hero (bg image, h1)	Main CTA, 3-card services, dual CTA stripe+modals for Book/Quote
About	Logo, h1, intro	Story (2col img+txt), feature pillars, booking modal CTA
Residential	H1, explainer, list	"Recurring Service" highlight, quote modal CTA
Move-Out	H1, explainer+img	Fixed/hourly price panels, "What's Included" grid
Locations	H1, 3 area cards	Map placeholder, coverage details, quote CTA
Contact	H1, form (left)	Details/map (right), CTA strip bottom
Hub-and-spoke IA: Home anchors marketing, clear links to core (Residential, Move-Out), credibility (Team, About), territory (Locations), and conversion (Contact, Book). Blog stub for later SEO.

Visual System & Design Tokens
Typography

Serif Headings: Cinzel/Merriweather/Georgia
Sans Body: Open Sans/Montserrat
Font size/weight scales follow Tailwind conventions
Tagline, hero h1, logo, and card titles documented above
Layout/Grid/Spacing

Responsive: sm, md, lg breakpoints
2col (About/Contact) → .grid md:grid-cols-2
3col (Home/Residential) → .grid md:grid-cols-2 lg:grid-cols-3
Max container widths: max-w-6xl, max-w-7xl
Padding: .section-spacing { py-20 md:py-24 lg:py-32 }, .content-spacing { px-4 sm:px-6 lg:px-8 }
Cards: p-6/p-8, modern glass style
Gaps: gap-8 md:gap-12 lg:gap-16
Border Radii & Buttons

--radius: 0.75rem, rounded-xl/2xl on key comps
Primary button: frosted glass, gradient, shadow, animated sheen (.btn-primary, see index.css)
Brand Colors:

Gold: --brand-gold: #C29B4B
Black: --brand-black: #181818, Gray: #616161, White: #FFF
Utility classes for text/bg/hover, dark mode supported
UX, Brand & Operational Philosophy
Brand: Serif gold, dark bands, clear CTAs signal premium and trustworthy cleaning
Clarity: Consistent section/card/cta structures ease scanning and conversion
Responsive: Tight grid and spacing rhythm, readable on all devices
Future Proof: API schemas, TanStack Query, and ORM prep enable scalability
Coding Style & Naming Conventions
Language
TypeScript (strict mode enabled) with ES modules.
Indentation: 2 spaces, semicolons required.
Enforce strict null checks and no implicit any (tsconfig.json).
React
Components and pages: PascalCase (e.g., DeepCleaning.tsx).
Hooks and utilities: camelCase (e.g., useFormValidation.ts).
Use functional components with TypeScript interfaces for props.
Avoid any types; prefer explicit typing (e.g., interface Props { ... }).
Server
Files: lowerCamelCase (e.g., routes.ts, authMiddleware.ts).
Use async/await for API routes; avoid callback-based APIs.
Imports
Prefer path aliases ('@/...', '@shared/...') over relative paths (e.g., ../../../).
Organize imports: standard libraries, third-party, then local (separated by blank lines).
CSS
Use Tailwind utilities for styling; avoid inline styles.
Shared UI components in client/src/components/.
Use design tokens (e.g., text-brand-gold, rounded-lg) from styles/tokens.css.
SEO
Use <SEO> component (@components/seo/SEO.tsx) for page metadata.
Wrap app in HelmetProvider (configured in client/src/main.tsx).
Avoid inline <title> or <meta> tags in components.
Buttons
Use shadcn/ui <Button> (@components/ui/button) with variants (e.g., variant="primary").
Avoid legacy .btn-* classes.
Ensure WCAG AA compliance (contrast ratio ≥ 4.5:1).
Build, Test & Development Commands
npm run dev: Starts Express + Vite dev server on PORT (default: 5001).
npm run build: Builds client (Vite) and server (esbuild) into dist/. Includes image optimization.
npm start: Runs production server (dist/index.js), serving static client.
npm run check: Runs TypeScript type-checking with tsc --noEmit.
npm run db:push: Applies Drizzle schema to database (requires DATABASE_URL).
npm run smoke-test: Runs API/UI smoke tests (scripts/smoke-tests.sh).
npm run stop: Kills process on port 5001.
npm run restart: Runs stop followed by dev.
ANALYZE=true npm run build: Generates bundle analysis report at dist/stats.html.
Testing Guidelines
Frameworks
Server: Jest + Supertest for API tests.
Client: React Testing Library for component tests.
Locations
Server tests: server/tests/ (e.g., contacts.test.ts).
Client tests: Colocate with components (e.g., Button.test.tsx).
Run
Server: npx jest server/tests (add --coverage for reports).
Client: npx jest client/src or specific files (e.g., npx jest Button.test.tsx).
Smoke tests: npm run smoke-test.
Best Practices
Write unit tests for all new components and API routes.
Mock external dependencies (e.g., database, APIs) in tests.
Aim for ≥80% test coverage (monitor with --coverage).
Performance Optimization Guidelines
Bundle Analysis
Run ANALYZE=true npm run build to generate dist/stats.html.
Monitor against performance-budget.json limits.
Image Optimization
Use <OptimizedImage> (@components/ui/optimized-image.tsx).
Features: Lazy loading, responsive sizing, error handling.
Preferred format: .webp for size efficiency.
Conversion: node scripts/optimize-images.mjs converts .jpg/.png to .webp.
Example: <OptimizedImage src={heroImg} alt="Description" priority sizes="100vw" />.
ServiceCard sizes: (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw.
Code Splitting
Routes use React.lazy() for automatic code splitting.
Wrap routes in <Suspense> with fallback loading states.
Routes defined in client/src/routes.tsx.
Icon Optimization
Use <Icon> (@components/ui/icon.tsx) for lazy-loaded Lucide icons.
Example: <Icon name="ArrowRight" className="w-5 h-5" />.
PWA
Configured via vite-plugin-pwa in vite.config.ts.
Features: Service worker caching, offline support, installable app.
Caches Google Fonts and static assets.
Performance Budget
Targets: LCP < 2.5s, FID < 100ms, CLS < 0.1.
Limits: JS ≤ 150KB, CSS ≤ 50KB, images ≤ 500KB.
Monitor with Lighthouse and browser dev tools.
Performance Monitoring
Dev-only console logging for Core Web Vitals and bundle sizes.
Location: client/src/lib/performance.ts.
Security & Configuration
Environment Variables
Required: PORT (default: 5001), DATABASE_URL for Drizzle.
Never commit secrets; use .env files (excluded via .gitignore).
Validate inputs with Zod in API routes (server/routes.ts).
Feature Flags
VITE_USE_NEW_CONTACT_FORM: Toggles new ContactForm (React Hook Form + Zod) vs. legacy SnippetContactForm.
Set in .env or build environment; defaults to false.
Security Practices
Sanitize user inputs to prevent XSS/SQL injection.
Use HTTPS in production (enforced via server/middleware/forceHttps.ts).
Implement CSRF protection for forms (server/middleware/csrf.ts).
UI Cards: ServiceCard vs. ContentCard
ServiceCard
Purpose: Image-driven cards for service teasers (e.g., Home services grid).
Location: client/src/components/ServiceCard/ServiceCard.tsx.
Props: { id, title, blurb, href, img, icon }.
Anatomy
Container: relative block overflow-hidden rounded-xl border border-slate-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all.
Focus: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-teal)].
Media: <img> with absolute inset-0 h-full w-full object-cover brightness-[0.85] object-center sm:object-[center_30%].
Overlay: absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent.
Text: Title (text-white text-lg sm:text-xl font-semibold drop-shadow-sm), body (text-slate-100/95).
Accessibility
Full-card <a> link for large tap target.
Strong keyboard focus ring (WCAG 2.1 compliant).
Usage
Render with <ServiceCard {...item} /> from client/src/components/ServiceCard/catalog.tsx.
Use ServiceGrid (client/src/components/ServiceCard/ServiceGrid.tsx) for responsive 2-column layouts.
ContentCard
Purpose: Text-first cards for pricing, features, testimonials, etc.
Location: client/src/components/ContentCard/ContentCard.tsx.
Props
as: Render as div, section, blockquote, a, etc. (default: div).
interactive: Adds hover/focus effects for links/buttons.
className: Extends styling (e.g., bg-accent text-white).
Anatomy
Container: relative rounded-xl border border-slate-300 bg-white p-6 sm:p-8 shadow.
Interactive: transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-400.
Adds tabIndex=0 for non-focusable tags when interactive is true.
Examples
Static: <ContentCard><h3>Weekly</h3><p>…</p></ContentCard>.
Link: <ContentCard as="a" href="/pricing" interactive>…</ContentCard>.
Quote: <ContentCard as="blockquote">“Great service!”</ContentCard>.
Choosing Cards
ServiceCard: Use for image-driven, navigational cards (e.g., service grids).
ContentCard: Use for text-heavy, non-image cards (e.g., pricing, testimonials).
Consistency
Maintain consistent frame (radius, border, shadow, padding).
Express creativity via imagery/icons, not frame alterations.
Ensure interactive cards have clear hover/focus states; static cards should not.
Implementation Notes
Catalog: Use client/src/components/ServiceCard/catalog.tsx for service content.
Grid: ServiceGrid renders responsive service card layouts.
Location Pages: LocationPageTemplate accepts serviceCardIds for standardized cards.
Docs: See docs/project.md for service catalog and routing details.
Contrast & Accessibility
Modals: Use bg-white/95 backdrop-blur-sm with bg-black/50 scrim.
Heroes: Use <img> with dark gradient (from-black/55 via-black/35 to-transparent) or light overlay (bg-white/90) for text legibility.
Buttons: Ensure high contrast (e.g., navy #003366 with white text, ≥ 4.5:1 ratio).
Text: Apply subtle text-shadow on h1, h2 for contrast over imagery.
SEO & Routing
Use <SEO> for page metadata (title, description, OG/Twitter tags).
Routes defined in client/src/routes.tsx, consumed in App.tsx with Wouter.
Design Tokens
Defined in styles/tokens.css (HSL colors, spacing, radii).
Mapped in tailwind.config.ts (e.g., brand-gold, radius-lg).
Use token utilities over raw values (e.g., text-brand-gold).
Buttons
Use <Button> (@components/ui/button) with variant (e.g., primary) and size.
Replaced legacy .btn-* classes in Navigation/ContactForm.
Rules & Best Practices
Consistency

Use only defined routes and layout patterns.
H1 per page, correct heading nesting (h2 → h3 for cards/features).
Content/Copy

Tone: Friendly, professional, trustworthy.
Avoid jargon; favor brevity in hero/CTA text.
No "content for content's sake" - Blog stubs allowed but mark as such.
Do Not

Do NOT touch .env/configs in prod.
Do NOT delete test, schema, or utility files.
Never create new modals or cards without matching spacing/visual rules.
Code/Build

New frontend comps in client/src/components/ui, use Radix primitives when possible.
Edit Tailwind tokens/config to expand only if required and document changes in GEMINI.md.
Validate any added API endpoints with Zod/Drizzle schemas.
Deploy only with main branch merged & passing basic build.
Workflow

Branch naming: feature/xyz, bugfix/xyz.
PRs reviewed before merge, tests preferred but may be stubbed if logic is UI-only.
Document any new spacing/typography/color patterns here for Gemini memory.
Commit & Pull Request Guidelines
Commits
Use clear, present-tense subjects (e.g., "Add user auth middleware").
Optional scopes: client:, server:, shared: (e.g., client: Fix SEO component rendering).
Keep subjects < 72 characters.
PRs
Include: Description, linked issue, test evidence, and UI screenshots/GIFs (if applicable).
Note changes to config, schema, or dependencies.
Ensure CI passes (tests, linting, type-checking).
Roadmap (Short-Term Prompts)
Wire PostgreSQL/Neon for persistence in contacts/bookings/quotes
Extract and formalize typography scale into theme tokens
Add HEX color documentation for branding
Populate Blog for SEO; generate area/service posts
Example Prompts (for AI use)
"Summarize the difference between Residential and Move-Out services, including pricing approach."
"Generate a card for a new service using card-modern style and color tokens above."
"Extract all service and CTA entries for analytics."
"Suggest CTA copy that matches the home hero's tone and length."
"List all file paths where typography guidelines are enforced."
Recent Updates & Edit Log
2025-08-19
Added HelmetProvider in main.tsx; migrated pages to <SEO>.
Centralized routes in routes.tsx.
Introduced styles/tokens.css and updated tailwind.config.ts.
Standardized buttons with shadcn <Button>.
Added VITE_USE_NEW_CONTACT_FORM flag.
2025-08-23
Fixed <OptimizedImage> to render src directly, improved lazy loading.
Added scripts/optimize-images.mjs for .webp conversion.
Cleaned up unused assets; updated imports to .webp.
2025-08-25
Increased footer/navigation logo sizes.
Standardized move-out cleaning icon in catalog.
Streamlined Home page (removed "Meet Our Team").
Updated Deep Cleaning page (removed "True locals" and CTA).
Improved Move Out page (checkmarks, accordion for add-ons).
Enhanced Spokane page (accordions, reordered sections).
Added text-shadow for h1, h2 legibility.
2025-08-06 (Style Enhancement)
Enhanced the .btn-primary style for more visual impact ("pop"). The hover effect is now more dynamic with increased scale and a more pronounced shadow. The animated shine effect was brightened and the transition speed was increased for better responsiveness.
File Changes: client/src/index.css: Updated the .btn-primary class and its :hover, :active, and ::before pseudo-elements.
2025-08-06 (Style Update)
Standardized all hero CTA buttons on the Home page to use the primary frosted glass style (.btn-primary).
File Changes: client/src/pages/Home.tsx: Removed the secondary "Book a Cleaning" button and restyled the "Get Free Estimate" and "See Services" buttons to use the .btn-primary class for a consistent, high-contrast look.
2025-08-08 (Navigation & Routing Update)
Corrected header Location dropdown links to point to location subroutes and added explicit routes for those pages.
File Changes: client/src/components/Navigation.tsx: Updated "Location" children hrefs to /locations/spokane, /locations/spokane-valley, /locations/liberty-lake. client/src/App.tsx: Imported Spokane, SpokaneValley, LibertyLake pages and added Route entries for /locations/spokane, /locations/spokane-valley, /locations/liberty-lake.
2025-08-25 (Move-Out Page & Navigation Updates)
Enhanced Move-Out cleaning page design and fixed navigation routing.
Removed bullet points from service lists, updated check mark icons to brand gold color for visual consistency, and added gradient background for smooth section transitions.
Fixed Greenacres navigation link to point to dedicated page instead of section anchor.
File Changes: client/src/pages/MoveOut.tsx: Updated list styling, check mark colors, and section background. client/src/components/Navigation.tsx: Corrected Greenacres href from /locations#greenacres to /locations/greenacres.

2025-08-25 (Liberty Lake Page Enhancement)
Added interactive card carousel showcasing Liberty Lake-specific services.
Created 5 content cards covering home care routines, refresh services, move-in/move-out, and vacation rental turnarounds.
Implemented using existing Carousel and ContentCard components with responsive design and brand-consistent styling.
Enhanced carousel with focus effect: center item scales up (1.05x) with full opacity while side items scale down (0.95x) with reduced opacity (0.6) for visual hierarchy.
2025-08-25 (Spokane Page Enhancement)
Added premium interactive carousel with enhanced focus effects to the Spokane page.
File Changes: [`client/src/pages/Spokane.tsx:1`](client/src/pages/Spokane.tsx:1)

2025-08-25 (Spokane Valley Page Enhancement)
Added premium interactive carousel with enhanced focus effects to the Spokane Valley page.
File Changes: [`client/src/pages/SpokaneValley.tsx:1`](client/src/pages/SpokaneValley.tsx:1)

2025-08-25 (Greenacres Page Enhancement)
Added premium interactive carousel with enhanced focus effects to the Greenacres page.
File Changes: [`client/src/pages/Greenacres.tsx:1`](client/src/pages/Greenacres.tsx:1)
File Changes: client/src/pages/LibertyLake.tsx: Added carousel section with 5 service-specific cards using brand gold headings, responsive breakpoints, and dynamic focus effects.
2025-08-25 (Spokane Page Enhancement)
Added premium interactive carousel with enhanced focus effects to the Spokane page.
File Changes: [`client/src/pages/Spokane.tsx:1`](client/src/pages/Spokane.tsx)

2025-08-25 (Spokane Valley Page Enhancement)
Added premium interactive carousel with enhanced focus effects to the Spokane Valley page.
File Changes: [`client/src/pages/SpokaneValley.tsx:1`](client/src/pages/SpokaneValley.tsx)

2025-08-25 (Greenacres Page Enhancement)
Added premium interactive carousel with enhanced focus effects to the Greenacres page.
File Changes: [`client/src/pages/Greenacres.tsx:1`](client/src/pages/Greenacres.tsx)

2025-08-25 (Refactor & Optimization)
- Fixed malformed button elements in `FloatingCTA.tsx`, `BookingModal.tsx`, and `SnippetContactForm.tsx` to ensure valid JSX and proper event handling.
- Removed incorrect `asChild` usage and restored correct `<button>` or `<Button>` usage per project standards.
- Verified all images are already in `.webp` format; no conversion needed.
- Wrapped all `console.log` statements in `client/src/lib/performance.ts` with `process.env.NODE_ENV === 'development'` checks to avoid logging in production.
- Confirmed all routes in `client/src/routes.ts` use `React.lazy` for code splitting.