# Cleaners Ready 2Go Website Project Documentation

## Content Hierarchy and Information Architecture

### Global Routing
The app uses client-side routing via Wouter in [client/src/App.tsx](client/src/App.tsx:1). Top-level routes:
- “/” → Home
- “/about” → About
- “/residential” → Residential services
- “/move-out” → Move-Out services
- “/locations” → Service areas
- “/blog” → Blog (stubbed page)
- “/team” → Team
- “/contact” → Contact
- catch-all → NotFound

### Global Shell
Navigation (fixed, with CTA “Book Now”) and Footer wrap all pages in [client/src/App.tsx](client/src/App.tsx:18-36). Main content area starts below a 24px top padding for the fixed nav.

### Page-level Structure Examples
- **Home**: Hero with background image, main H1 “Professional Cleaning Made Simple”, supporting tagline, single primary CTA, then a three-card “Services Overview”, plus a dark CTA strip with dual CTAs and modals for Booking and Quote in [client/src/pages/Home.tsx](client/src/pages/Home.tsx:19-141).
- **About**: Logo + page H1, intro copy, two-column “Our Story” with image + text, three feature pillars, and a CTA to open booking modal in [client/src/pages/About.tsx](client/src/pages/About.tsx:14-91).
- **Residential**: Page H1, explainer + checklist bullets, “Recurring Service Focus,” CTA to Quote modal in [client/src/pages/Residential.tsx](client/src/pages/Residential.tsx:15-157).
- **Move-Out**: Page H1, explainer + image, fixed-price vs hourly panels, and “What’s Included” grid in [client/src/pages/MoveOut.tsx](client/src/pages/MoveOut.tsx:15-166).
- **Locations**: Page H1, three area cards, service radius map placeholder, coverage details, and quote CTA in [client/src/pages/Locations.tsx](client/src/pages/Locations.tsx:13-126).
- **Contact**: Page H1, left column form posting to /api/contacts, right column contact details and map placeholder, and a bottom CTA strip in [client/src/pages/Contact.tsx](client/src/pages/Contact.tsx:82-288).

### Headings Usage
- H1 per page: clear and present on pages. Home uses h1, secondary sections use h2/h3 consistently.
- Subsections commonly use h2 (page section titles) and h3 (cards and feature headings), matching a logical hierarchy.

### IA Pattern
Marketing hub-and-spoke anchored by Home with clear paths to key service categories (Residential, Move-Out), proof/credibility (Team, About), conversion paths (Contact, Book modals), and territorial scope (Locations). Blog exists for content marketing but not yet populated.

## Tech Stack

### Front-end
- React 18 + Vite in [vite.config.ts](vite.config.ts:1-37), Wouter for routing in [client/src/App.tsx](client/src/App.tsx:1).
- Tailwind CSS 3 with custom tokens via CSS variables and custom component/utility layers in [client/src/index.css](client/src/index.css:1-379), Tailwind config extends color tokens and animations in [tailwind.config.ts](tailwind.config.ts:1-90).
- Radix UI primitives and shadcn-style UI components under [client/src/components/ui](client/src/components/ui/button.tsx:1).
- Lucide icons, Framer Motion (present in deps, not heavily used in pages), TanStack Query for mutations/queries via [client/src/lib/queryClient.ts](client/src/lib/queryClient.ts:1).

### Back-end
- Express server with unified dev/production handling in [server/index.ts](server/index.ts:1-70).
- API routes for contacts, bookings, quotes with Zod validation against drizzle-zod schemas in [server/routes.ts](server/routes.ts:1-89) and [shared/schema.ts](shared/schema.ts:1-53).
- **Current Persistence**: All data for contacts, bookings, and quotes is currently stored in an in-memory layer defined in [server/storage.ts](server/storage.ts:1-81). This means data is volatile and resets with each server restart.
- **PostgreSQL Integration Readiness**: Drizzle ORM is configured via [drizzle.config.ts](drizzle.config.ts:1-14) and schemas are defined in [shared/schema.ts](shared/schema.ts:1-53). Dependencies for PostgreSQL (Neon/serverless, connect-pg-simple) are installed, indicating readiness for a switch to persistent storage. The current in-memory `MemStorage` implements the `IStorage` interface, making it straightforward to swap with a Drizzle-based implementation.

### Build, Hosting, Deployment
- Vite dev server integrated into Express for HMR in development in [server/vite.ts](server/vite.ts:22-68).
- Production serves static build from dist/public in [server/vite.ts](server/vite.ts:70-85); build output path configured in [vite.config.ts](vite.config.ts:26-30).
- Replit deployment: autoscale target, Node 20, PostgreSQL 16 module declared, port 5000 internal mapped to 80 external, build and run commands configured in [.replit](.replit:1-39).

## Visual Design System

### Typography
- **Font Families**:
  - **Serif Display (Headings)**: Cinzel, Merriweather, Georgia, serif
  - **Sans-Serif Body**: Open Sans, Montserrat, system-ui, -apple-system, sans-serif
- **Font Sizes and Weights**:
  - **Body Text**: font-sans, font-weight 400, line-height 1.6, letter-spacing -0.01em
  - **Headings (H1, H2, H3, H4, H5, H6)**: font-family Cinzel, Merriweather, font-weight 600, line-height 1.2, letter-spacing 0.02em
  - **Logo Text**: font-family Cinzel, font-weight 600, letter-spacing 0.05em
  - **Tagline Text**: font-family Montserrat, Lato, font-weight 700, text-transform uppercase, letter-spacing 0.1em
- **Size Usage Examples Across Pages**:
  - **Hero H1**: text-5xl lg:text-7xl in [client/src/pages/Home.tsx](client/src/pages/Home.tsx:44-47).
  - **Section H2**: text-4xl to text-6xl in [client/src/pages/Home.tsx](client/src/pages/Home.tsx:114).
  - **Card Titles**: text-lg to text-2xl in [client/src/pages/Home.tsx](client/src/pages/Home.tsx:76).
  - **Page H1s**: text-4xl in interior pages (About, Residential, Move-Out, Locations, Contact).

### Layout Grid and Breakpoints
- **Responsive Breakpoints**: Tailwind's default breakpoints (sm, md, lg) are used.
- **Grid Patterns**:
  - **Two-column Layout**: Used in pages like About and Contact.
    - Example: `.grid md:grid-cols-2`
  - **Three-column Layout**: Used in pages like Home and Residential.
    - Example: `.grid md:grid-cols-2 lg:grid-cols-3`
- **Container Widths**:
  - Common container widths: `max-w-6xl` (80rem), `max-w-7xl` (88rem)
  - Example: `.max-w-6xl`
- **Padding Utilities**:
  - Common padding utilities: `py-16` to `py-32` (vertical padding), `px-4` to `px-8` (horizontal padding)
  - Example: `.section-spacing { @apply py-20 md:py-24 lg:py-32; }`

### Spacing Conventions
- **Section Spacing**: Defined in `index.css` with `.section-spacing`.
  - Example: `.section-spacing { @apply py-20 md:py-24 lg:py-32; }`
- **Content Spacing**: Defined in `index.css` with `.content-spacing`.
  - Example: `.content-spacing { @apply px-4 sm:px-6 lg:px-8; }`
- **Card Padding**: Common padding for cards is `p-6` to `p-8`.
  - Example: `.card-modern { @apply bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-6; }`
- **Inter-component Gaps**: Tailwind's `gap` utilities are used.
  - Example: `.grid gap-8 md:gap-12 lg:gap-16`

### Border Radii
- **Design Token**: `--radius: 0.75rem` in `index.css`.
- **Component Usage**: Components frequently use `rounded-xl` and `rounded-2xl`.
  - Example: `.card-modern { @apply bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 p-6; }`
- **Button Radii**: Buttons use `rounded-2xl`.
  - Example: `.btn-primary { @apply text-blue-600 hover:text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 focus:ring-4 relative overflow-hidden w-64 h-16 flex items-center justify-center; }`

### Brand Color Palette
- **Base Tokens**:
  - `--brand-gold`: hsl(40, 45%, 53%) /* #C29B4B */
  - `--brand-gold-light`: hsl(40, 45%, 63%)
  - `--brand-gold-dark`: hsl(40, 45%, 43%)
  - `--brand-black`: hsl(0, 0%, 9%) /* #181818 */
  - `--brand-gray`: hsl(0, 0%, 38%) /* #616161 */
  - `--brand-gray-light`: hsl(0, 0%, 96%) /* #F5F5F5 */
  - `--brand-white`: hsl(0, 0%, 100%) /* #FFFFFF */
  - `--brand-teal`: hsl(180, 25%, 25%)
- **Utility Classes**: Expose brand colors for text, background, border, and hover states.
  - Example: `.text-brand-gold { color: hsl(var(--brand-gold)); }`
- **Dark Mode Behavior**: Dark mode overrides some variables to ensure contrast and readability.
  - Example: `.dark { --background: hsl(240, 10%, 3.9%); --foreground: hsl(0, 0%, 98%); }`

### Buttons and Cards
- **Buttons (.btn-primary/.btn-secondary/.btn-outline)**: Implement modern frosted glass styling with backdrop-filter, gradient backgrounds, layered shadows, and animated sheen on hover in [client/src/index.css](client/src/index.css:182-285).
- **Cards (.card-modern)**: Provide glass-like gradient with hover lift; an additional Tailwind-styled definition ensures a clean, legible white card variant for general use in [client/src/index.css](client/src/index.css:287-319).

## How Technical and Aesthetic Choices Shape UX and Brand Identity

### Brand Signal and Trust
- Serif display (Cinzel) for headings produces a premium, traditional craft signal; gold accents underscore a refined, trustworthy identity suitable for professional services. The restrained use of gold ensures emphasis without sacrificing readability.
- Dark CTA bands with gold highlights focus user attention on calls-to-action, supporting conversion while visually distinguishing important sections.

### Clarity, Scannability, and Conversion
- Pages follow consistent patterns (H1 + intro, feature grid, pricing/offer panels, context-specific CTA), making information easy to scan and compare. Uniform card structures and spacing create predictable rhythm.
- Primary CTAs are consistently accessible: fixed nav “Book Now,” hero CTA, service-specific CTAs, and Contact page form. Modal flows reduce navigation friction, enabling quick conversion from anywhere.

### Responsiveness and Readability
- Standardized max container widths and responsive paddings maintain comfortable line lengths and margins across devices. Grid patterns gracefully scale from single-column to multi-column layouts.
- Typography pairings balance display elegance (Cinzel) with practical body type (Open Sans/Montserrat), improving readability while reinforcing brand tone.

### Operational Soundness and Scalability
- API endpoints are validated via Zod, returning consistent JSON envelopes. Even with in-memory storage, the schema-driven approach (drizzle-orm + drizzle-zod) makes database integration straightforward (Neon-compatible).
- TanStack Query centralizes data interactions, setting the stage for richer features (admin views, booking management, analytics) with minimal refactoring.

## Future Roadmap
- **Wire PostgreSQL via Neon**: The primary next step is to replace the in-memory `MemStorage` with a Drizzle ORM-based implementation that connects to a PostgreSQL database (e.g., Neon). This will involve:
    - Creating a `PgStorage` class that implements `IStorage` and uses Drizzle to interact with the database.
    - Updating `server/storage.ts` to export an instance of `PgStorage` instead of `MemStorage` based on environment variables.
    - Leveraging existing schemas in [shared/schema.ts](shared/schema.ts:1-53) and `drizzle.config.ts` for database migrations.
- **Consolidate Typography Scale**: Encoding current practice into design tokens or Tailwind theme (fontSize scale).
- **Extract Spacing Scale**: Documenting standard radii, spacing rhythm used in cards, buttons, sections.
- **Add Color Documentation**: Including HEX equivalents and dark-mode mapping notes.
- **Populate Blog**: Supporting SEO around service queries and local areas.