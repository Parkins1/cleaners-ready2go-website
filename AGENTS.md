always communicate with the user in plain english. avoid technical terms. user is non-technical. 
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

always communicate with the user in plain english. avoid technical terms. user is non-technical. 


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

Troubleshooting
- Hero photo missing: Check that the hero image path exists under `@assets`, and that the overlay isn’t set to a solid white. By default, the hero uses a dark gradient; set `darkOverlay=false` for a lighter look. When using CLS stabilization, pass `useAspect`, `imageWidth`, and `imageHeight`.
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

Recent Changes (2025-08-28)
- Icon lazy-loading: Introduced centralized `Icon` component at `client/src/components/ui/icon.tsx` that lazy-loads individual Lucide icons via dynamic imports. Replaced all direct `lucide-react` imports in pages and UI components with `<Icon name="..." />` for better code-splitting and reduced unused JS.
- Case-sensitive paths: Normalized all imports to use `@/components/ui/icon` (lowercase) to avoid Linux/Vercel case-sensitivity issues. If adding new references, always use lowercase `icon` in the path.
- Build verification: `ANALYZE=true npm run build` produces split icon chunks under `dist/public/assets` (tiny `.js` files per icon). Full bundle report at `dist/stats.html`.
- Smoke tests: Production server validated locally with `npm run build && npm start` and `scripts/smoke-tests.sh` (homepage 200 OK, contact API POST success).
- Deploy flow: Merged `feature/lazy-icons` into `main`. Vercel auto-deploys from `main`. For rollback, use Vercel Deployments → Promote previous deployment, or GitHub Revert on the merge commit.

2025-09-03 (Build Fix + Hero Overlay)
- Build: Set React and React DOM to 18.3.x to match `react-helmet-async@2.x`. This fixes the install failure on Vercel caused by version mismatch.
- Types: Set `@types/react` and `@types/react-dom` to the React 18 line to stay consistent.
- Hero overlay: Changed the hero’s default overlay to a gentle dark fade so hero photos are visible behind the text. To use a light look, pass `darkOverlay={false}` to `HeroSection`.
- Vercel note: Vercel uses Node 20 because `package.json` declares `engines: { node: "20.x" }`. That’s expected and okay.

Developer Notes
- When adding a new icon: update `client/src/components/ui/icon.tsx` to include a new `name → lazy(import(...))` entry. Use the exact Lucide ESM icon path (e.g., `lucide-react/dist/esm/icons/chevron-right`).
- Suspense fallback: The `Icon` component uses a small block fallback while loading. If inline alignment issues appear in text, consider switching the fallback to a `span` with `display:inline-block`.
- Paths and assets: Prefer `@assets/*` for images (mapped to `attached_assets/*`). Ensure any added assets exist at those paths; build fails if paths are missing.

CI/CD & Commands
- CI (PRs only): `.github/workflows/ci.yml` builds, type-checks, then boots the server and runs smoke tests.
- Local build: `npm run check && ANALYZE=true npm run build` (opens `dist/stats.html`).
- Local prod run: `NODE_ENV=production PORT=5001 npm start`.
- Lighthouse: `npx lighthouse http://localhost:5001 --view --only-categories=performance,accessibility,best-practices,seo`.
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
Heroes: Default to a dark gradient (from-black/55 via-black/35 to-transparent) so photos show clearly under headlines. You can switch to a light overlay (bg-white/90) if needed by setting darkOverlay=false.
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
2025-08-29 (Icons, Layout, Locations)
- Icons: Restored centralized lazy-loaded `<Icon>` with per‑icon dynamic ESM imports; removed page‑level direct `lucide-react` icon imports. Added ambient types for ESM icon paths.
  - Files: `client/src/components/ui/icon.tsx`, `client/src/types/lucide-exports.d.ts`
- Accordion spacing: Ensured FAQs align by adding horizontal padding to content.
  - File: `client/src/components/ui/accordion.tsx`
- Business phone: Standardized to `509-232-9810` across brand config and footer; updated Spokane Valley CTA copy.
  - Files: `client/src/config/brand.ts`, `client/src/components/Footer.tsx`, `client/src/pages/SpokaneValley.tsx`
- Location template polish: Fixed container width typos (`max-w-4xl/6xl`), updated hero and CTA copy to spec.
  - File: `client/src/pages/LocationPageTemplate.tsx`
- Location content standardization: Added “Local Cleaning Challenges” (4 items) and “Neighborhoods We Serve” sections with cohesive styling across Spokane, Spokane Valley, Liberty Lake, and Greenacres. Added ZIPs section to Greenacres.
  - Files: `client/src/pages/Spokane.tsx`, `client/src/pages/SpokaneValley.tsx`, `client/src/pages/LibertyLake.tsx`, `client/src/pages/Greenacres.tsx`
- Liberty Lake enhancements: Added Highlights, Value Prop, Packages, Testimonials, Satisfaction Promise. Replaced minimal FAQ with full accordion (15 Q&A), styled like Home.
  - File: `client/src/pages/LibertyLake.tsx`
- Carousel UX (default style): Unified location page carousels to a compact style (from Spokane Valley):
  - Card typography: `h3` text-lg, body text-sm, lists text-xs; paddings `p-5 md:p-6`.
  - Desktop layout: fewer/wider visible slides (`md:basis-2/3`, `lg:basis-1/2`, `xl:basis-1/3`).
  - Focus: active slide scale ≈1.12, side slides ≈0.85, with desktop flex-basis to widen center and minimize sides.
  - Files: `client/src/pages/Spokane.tsx`, `client/src/pages/SpokaneValley.tsx`, `client/src/pages/LibertyLake.tsx`, `client/src/pages/Greenacres.tsx`
- ServiceCard navigation: Switched from `wouter` `<Link>` to `<a>` with `useLocation()` programmatic navigate to preserve middle/modified-click behavior while keeping full-card link semantics.
  - File: `client/src/components/ServiceCard/ServiceCard.tsx`
- Vite typing: Annotated `transformIndexHtml(html: string)` for clarity.
  - File: `vite.config.ts`

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

2025-08-26 (Bug Bash & Content Cleanup)
- Contact Page Crash: Fixed a runtime error on the /contact page caused by a `<Select.Item>` with an empty value prop in `SnippetContactForm.tsx`.
  - File Changes: [`client/src/components/ContactForm/SnippetContactForm.tsx:30`](client/src/components/ContactForm/SnippetContactForm.tsx:30)
- Modal Functionality:
  - Ensured BookingModal respects parent-controlled visibility by gating on the `isOpen` prop and unmounting when false.
  - Defaulted `isOpen` to `false` to prevent unintended auto-open on page load; provider passes `isOpen` explicitly when opening.
  - File Changes: [`client/src/components/BookingModal.tsx:1`](client/src/components/BookingModal.tsx:1), [`client/src/components/modal/ModalProvider.tsx:1`](client/src/components/modal/ModalProvider.tsx:1)
- Button & Link Functionality:
  - Wired non-functional “Get a Quote”/CTA buttons to open the centralized Quote modal; updated Liberty Lake inline CTA to call modal manager.
  - Repaired Locations page “Spokane” link to navigate via Wouter Link to `/locations/spokane`.
  - File Changes: [`client/src/pages/LibertyLake.tsx:1`](client/src/pages/LibertyLake.tsx:1), [`client/src/pages/Locations.tsx:1`](client/src/pages/Locations.tsx:1)
- Content Updates:
  - 404 page copy replaced with a user-friendly message and a homepage link.
  - Blog page replaced with a clear “coming soon” message and standardized SEO component usage.
  - File Changes: [`client/src/pages/not-found.tsx:1`](client/src/pages/not-found.tsx:1), [`client/src/pages/Blog.tsx:1`](client/src/pages/Blog.tsx:1)
2025-08-26 (HOM-001 Home CLS Remediation)
- Reduced Home page CLS below 0.1 by reserving hero space and adding intrinsic dimensions.
- Hero stabilization:
  - Implemented CSS aspect-ratio reserved container (.hero-media) for the hero (single consistent 16/9 ratio) to prevent pre-image layout shifts.
  - Inline critical CSS added in HTML head to reserve space before Tailwind/CSS loads.
  - Fallback minHeight path retained for other pages.
- Optimized hero image delivery:
  - Switched hero to use &lt;OptimizedImage&gt; with intrinsic dimensions (1392x752), priority load, sizes="100vw", decoding="sync", fetchpriority="high".
  - Enhanced OptimizedImage API to accept width, height, fetchpriority, and imgClassName; priority now forces eager loading and sync decoding.
- Preload:
  - Added Helmet-based &lt;link rel="preload" as="image"&gt; hint for the critical hero image on Home only.
- Suspense fallback:
  - Matched reserved hero space in Suspense fallback to avoid pre-hydration layout shift.
- Misc:
  - Gated Replit dev banner injection to only load on Replit hosts, preventing a late top-of-page insert that could cause CLS in local dev.

Files changed:
- [`client/src/components/ui/optimized-image.tsx:1`](client/src/components/ui/optimized-image.tsx:1) — Added width, height, imgClassName, fetchpriority; priority forces eager+sync; prop forwarding.
- [`client/src/components/HeroSection/HeroSection.tsx:1`](client/src/components/HeroSection/HeroSection.tsx:1) — Added useAspect path using CSS aspect-ratio; forwards intrinsic width/height; CLS rationale comments.
- [`client/src/pages/Home.tsx:1`](client/src/pages/Home.tsx:1) — Enabled useAspect; provided imageWidth=1392, imageHeight=752; added Helmet preload.
- [`client/src/App.tsx:1`](client/src/App.tsx:1) — Suspense fallback reserves hero space; fixed Route typing by rendering Component as child.
- [`client/src/index.css:1`](client/src/index.css:1) — Added .hero-media aspect-ratio: 16/9 with CLS documentation comment.
- [`client/index.html:1`](client/index.html:1) — Inline critical CSS for .hero-media; gated Replit banner script to avoid local CLS.

Results:
- Verified CLS consistently &lt; 0.01 across reloads (target &lt; 0.10). LCP visually stable with no major reflow.

Notes:
- Service cards already reserve space via min-height; above-the-fold stability is ensured by the hero’s reserved space and the static “Why Choose Us” strip (no image shifts). Future work can add intrinsic dimensions to card media if we surface them above the fold on smaller viewports.
2025-08-26 (HOM-002: Home FAQ Accordion Fix)
- Restored FAQ accordion functionality and ARIA semantics on Home page.
- Root cause: Trigger element in Accordion primitive lacked an explicit type attribute, which can default to "submit" inside form contexts, preventing toggle behavior in some cases.
- Fixes:
  - Added explicit button type to Accordion trigger: [client/src/components/ui/accordion.tsx](client/src/components/ui/accordion.tsx:25) — AccordionPrimitive.Trigger now renders with type="button" ensuring click and keyboard toggle work reliably.
  - Documented accessibility and keyboard behavior in Home FAQ block and verified correct usage with type="single" and collapsible: [client/src/pages/Home.tsx](client/src/pages/Home.tsx:251).
  - Corrected Helmet preload attribute casing to satisfy TypeScript: imageSizes/fetchPriority: [client/src/pages/Home.tsx](client/src/pages/Home.tsx:40).
- ARIA/Keyboard:
  - aria-expanded toggles on the trigger; aria-controls points to the matching content id (managed by Radix).
  - Space/Enter toggle the focused trigger; focus-visible ring is shown via utilities.
- Notes:
  - Tailwind keyframes for accordion transitions already defined and compatible with Radix variables, no changes required.
  - No CLS-related changes included in this task.
2025-08-26 (SEO-001 Blog noindex)
- Added optional robots control to shared SEO component via boolean noindex prop.
  - Types: [`client/src/components/seo/types.ts:1`](client/src/components/seo/types.ts:1)
  - Component: [`client/src/components/seo/SEO.tsx:1`](client/src/components/seo/SEO.tsx:1) — when noindex is true, renders:
    - &lt;meta name="robots" content="noindex, nofollow" /&gt;
    - &lt;meta name="googlebot" content="noindex, nofollow" /&gt;
  - Default behavior unchanged: no robots meta rendered unless noindex is set.
- Blog page wired to unique metadata and noindex:
  - [`client/src/pages/Blog.tsx:1`](client/src/pages/Blog.tsx:1)
  - Title: “Blog — Coming Soon | Ready2Go Cleaners”
  - Description: “Our blog is under construction. New guides and tips are coming soon.”
  - Inline comment documents temporary noindex until content is published.
- Scope: Only /blog includes robots noindex; other routes unaffected.
2025-08-27 (SEO-001 Blog noindex)
- Extended shared SEO component with optional noindex boolean to render robots directives when true.
  - Types updated: [`client/src/components/seo/types.ts:1`](client/src/components/seo/types.ts:1)
  - Component updated: [`client/src/components/seo/SEO.tsx:1`](client/src/components/seo/SEO.tsx:1) — when noindex is true, renders:
    - &lt;meta name="robots" content="noindex, nofollow" /&gt;
    - &lt;meta name="googlebot" content="noindex, nofollow" /&gt;
  - Default behavior unchanged: robots meta not rendered unless explicitly set via noindex.
- Blog page wired with unique metadata and temporary noindex:
  - [`client/src/pages/Blog.tsx:1`](client/src/pages/Blog.tsx:1)
  - Title: “Blog — Coming Soon | Ready2Go Cleaners”
  - Description: “Our blog is under construction. New guides and tips are coming soon.”
  - Inline comment documents temporary noindex until content is published.
- Scope: Only /blog includes robots noindex; other routes remain unaffected.

2025-08-29 (TrustSignals Section Extraction)
- Extracted reusable TrustSignalsSection to standardize “Why Choose Us / Trust Signals” blocks across service pages.
  - Component: [`client/src/components/TrustSignals/TrustSignalsSection.tsx`](client/src/components/TrustSignals/TrustSignalsSection.tsx:1)
  - Props: `title`, `items: { highlight?: string; text: string }[]`, `columns` (default 2), `className`, `containerClassName`, `id`.
  - Styling: Uses token utilities (`border-brand-gold`, `bg-brand-gold/5`, `text-brand-gold`) instead of inline rgba / raw CSS vars.
- Refactor: Replaced custom “Why Spokane Homeowners Trust…” section in Deep Cleaning page with the new component.
  - File Changes: [`client/src/pages/DeepCleaning.tsx:1`](client/src/pages/DeepCleaning.tsx:1)
- Tests: Added RTL test for rendering and semantics.
  - File: [`client/src/components/TrustSignals/TrustSignalsSection.test.tsx:1`](client/src/components/TrustSignals/TrustSignalsSection.test.tsx:1)
- Docs: Documented component API and usage under reusable components design.
  - File: [`docs/reusable_components_design.md:1`](docs/reusable_components_design.md:1)

2025-08-30 (IconCard Component & Residential Page Iconography)
- Created a new reusable IconCard component to display an icon, title, and list of items.
  - Component: [`client/src/components/IconCard/IconCard.tsx`](client/src/components/IconCard/IconCard.tsx:1)
  - Props: `iconSrc`, `title`, `items`, `className`, `children`.
  - Styling: Uses `OptimizedImage` for the icon and follows the project's design tokens.
- Updated the Residential Cleaning page to use iconography throughout key sections:
  - "Exactly What We Clean" section now uses IconCard components with room-specific icons.
  - "Packages" section now uses IconCard components with package-specific icons.
  - "Add-Ons & Upgrades" section now displays icons next to each add-on.
  - "The Ready2Go Difference" section now uses IconCard components.
- Ran `scripts/optimize-images.mjs` to compress and generate responsive variants of all icons.
- Files Changed:
  - [`client/src/pages/Residential.tsx:1`](client/src/pages/Residential.tsx:1)
  - [`client/src/components/IconCard/IconCard.tsx:1`](client/src/components/IconCard/IconCard.tsx:1)

2025-09-02 (Global Punctuation, Locations Redesign, Deep Cleaning Updates)
- Global Punctuation: Standardized dash punctuation ("—") across all text content for consistent, professional typography.
- Locations Page Redesign:
  - Updated the main /locations page to remove descriptive text and restyle the city cards for a cleaner appearance.
  - Standardized the Spokane, Spokane Valley, Liberty Lake, and Greenacres pages by refactoring them to use a consistent LocationPageTemplate, unifying section background colors, and ensuring all carousels use the same CarouselCompact style.
- Deep Cleaning Page Content:
  - Replaced the accordion on the /deep-cleaning page with a more visual IconCard layout for the "What's Included" section.
  - Updated the "Trust Signals" section with new text.
