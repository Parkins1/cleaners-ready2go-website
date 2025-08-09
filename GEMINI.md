# GEMINI.md – Cleaners Ready 2Go Website

## Project Overview
A modern, responsive web app for a professional cleaning business. Uses React + Vite (frontend), Express (backend), in-memory storage, and progressive conversion paths. The codebase aims for a premium, trustworthy look with a gold/serif brand motif and scalable, maintainable architecture.

---

## Content Hierarchy & Routing

- Global client-side routing with Wouter.
- Pages: 
  - `/` (Home), `/about`, `/residential`, `/move-out`, `/locations`, `/blog`, `/team`, `/contact`
  - Catch-all → NotFound
- Nav and Footer fixed globally, with dominant "Book Now" CTA in Nav.
- Main content starts after 24px top pad (to clear nav).
- Each page uses a single H1, then h2/h3 as needed for logical sections.

**Page patterns:**  
| Page         | 1st Section           | Highlights                                                                |
|--------------|----------------------|--------------------------------------------------------------------------|
| Home         | Hero (bg image, h1)  | Main CTA, 3-card services, dual CTA stripe+modals for Book/Quote         |
| About        | Logo, h1, intro      | Story (2col img+txt), feature pillars, booking modal CTA                 |
| Residential  | H1, explainer, list  | "Recurring Service" highlight, quote modal CTA                           |
| Move-Out     | H1, explainer+img    | Fixed/hourly price panels, "What's Included" grid                        |
| Locations    | H1, 3 area cards     | Map placeholder, coverage details, quote CTA                             |
| Contact      | H1, form (left)      | Details/map (right), CTA strip bottom                                    |

**Hub-and-spoke IA:** Home anchors marketing, clear links to core (Residential, Move-Out), credibility (Team, About), territory (Locations), and conversion (Contact, Book). Blog stub for later SEO.

---

## Tech Stack

**Frontend:**  
- React 18 + Vite, Wouter routing  
- Tailwind CSS 3 (custom tokens/layers), Radix UI, shadcn-style UI  
- Lucide icons, Framer Motion (optional), TanStack Query

**Backend:**  
- Express server, dev/prod switch  
- API (contacts, bookings, quotes) with Zod/Drizzle validation  
- In-memory data, Drizzle ORM/Neon/pg-simple prepped (future)

**Build/Hosting:**  
- Vite dev server + HMR (Express)  
- Static build for prod  
- Replit deployment: Node 20, PG 16, port 80, build/run in `.replit`

---

## Visual System & Design Tokens

**Typography**  
- Serif Headings: Cinzel/Merriweather/Georgia  
- Sans Body: Open Sans/Montserrat  
- Font size/weight scales follow Tailwind conventions  
- Tagline, hero h1, logo, and card titles documented above

**Layout/Grid/Spacing**  
- Responsive: sm, md, lg breakpoints  
- 2col (About/Contact) → `.grid md:grid-cols-2`  
- 3col (Home/Residential) → `.grid md:grid-cols-2 lg:grid-cols-3`  
- Max container widths: `max-w-6xl`, `max-w-7xl`  
- Padding: `.section-spacing { py-20 md:py-24 lg:py-32 }`, `.content-spacing { px-4 sm:px-6 lg:px-8 }`  
- Cards: `p-6`/`p-8`, modern glass style  
- Gaps: `gap-8 md:gap-12 lg:gap-16`

**_Border Radii_ & Buttons**  
- `--radius: 0.75rem`, rounded-xl/2xl on key comps  
- Primary button: frosted glass, gradient, shadow, animated sheen (`.btn-primary`, see index.css)

**Brand Colors:**  
- Gold: `--brand-gold: #C29B4B`  
- Black: `--brand-black: #181818`, Gray: `#616161`, White: `#FFF`
- Utility classes for text/bg/hover, dark mode supported

---

## UX, Brand, Operational Philosophy

- **Brand:** Serif gold, dark bands, clear CTAs signal premium and trustworthy cleaning
- **Clarity:** Consistent section/card/cta structures ease scanning and conversion
- **Responsive:** Tight grid and spacing rhythm, readable on all devices
- **Future Proof:** API schemas, TanStack Query, and ORM prep enable scalability

---

## Rules & GEMINI Best Practices

1. **Consistency**
   - Use only defined routes and layout patterns.
   - H1 per page, correct heading nesting (h2 → h3 for cards/features).

2. **Content/Copy**
   - Tone: Friendly, professional, trustworthy.
   - Avoid jargon; favor brevity in hero/CTA text.
   - No “content for content’s sake” — Blog stubs allowed but mark as such.

3. **Do Not**
   - **Do NOT** touch `.env`/configs in prod.
   - **Do NOT** delete test, schema, or utility files.
   - Never create new modals or cards without matching spacing/visual rules.

4. **Code/Build**
   - New frontend comps in `client/src/components/ui`, use Radix primitives when possible.
   - Edit Tailwind tokens/config to expand only if required and document changes in GEMINI.md.
   - Validate any added API endpoints with Zod/Drizzle schemas.
   - Deploy only with main branch merged & passing basic build.

5. **Workflow**
   - Branch naming: `feature/xyz`, `bugfix/xyz`.
   - PRs reviewed before merge, tests preferred but may be stubbed if logic is UI-only.
   - Document any new spacing/typography/color patterns here for Gemini memory.

---

## Roadmap (Short-Term Prompts)

- Wire PostgreSQL/Neon for persistence in contacts/bookings/quotes
- Extract and formalize typography scale into theme tokens
- Add HEX color documentation for branding
- Populate Blog for SEO; generate area/service posts

---

## Example Prompts (for Gemini use in this repo)
- "Summarize the difference between Residential and Move-Out services, including pricing approach."
- "Generate a card for a new service using card-modern style and color tokens above."
- "Extract all service and CTA entries for analytics."
- "Suggest CTA copy that matches the home hero's tone and length."
- "List all file paths where typography guidelines are enforced."

---

---

## Gemini Edit Log

- **2025-08-06:**
  - **Style Enhancement:** Enhanced the `.btn-primary` style for more visual impact ("pop"). The hover effect is now more dynamic with increased scale and a more pronounced shadow. The animated shine effect was brightened and the transition speed was increased for better responsiveness.
  - **File Changes:**
    - `client/src/index.css`: Updated the `.btn-primary` class and its `:hover`, `:active`, and `::before` pseudo-elements.
- **2025-08-06:**
  - **Style Update:** Standardized all hero CTA buttons on the Home page to use the primary frosted glass style (`.btn-primary`).
  - **File Changes:**
    - `client/src/pages/Home.tsx`: Removed the secondary "Book a Cleaning" button and restyled the "Get Free Estimate" and "See Services" buttons to use the `.btn-primary` class for a consistent, high-contrast look.
    - `client/src/index.css`: Removed a duplicate, conflicting style definition for `.btn-primary` to ensure the frosted glass effect was applied correctly.

- **2025-08-08:**
  - **Navigation & Routing Update:** Corrected header Location dropdown links to point to location subroutes and added explicit routes for those pages.
    - **File Changes:**
      - `client/src/components/Navigation.tsx`: Updated "Location" children hrefs to `/locations/spokane`, `/locations/spokane-valley`, `/locations/liberty-lake`.
      - `client/src/App.tsx`: Imported Spokane, SpokaneValley, LibertyLake pages and added Route entries for `/locations/spokane`, `/locations/spokane-valley`, `/locations/liberty-lake`.
  - **Spokane Page Enhancement:** Added an accordion section with statement-style headers titled “Service Details for Spokane Homeowners”.
    - Implemented using existing Radix-based Accordion components to keep stack consistent (no new dependency); behavior and animations leverage current Tailwind + shadcn patterns.
    - Content covers: local insight, bonding/insurance, satisfaction policy, staff training/screening, eco-conscious products, and provided equipment/supplies.
    - **File Changes:**
      - `client/src/pages/Spokane.tsx`: Imported Accordion components and added the new accordion section before the Business Hours block.
  - **Documentation/Research:** Reviewed DaisyUI collapse/accordion patterns via Context7 MCP (library `/saadeghi/daisyui`) to validate accordion behavior and UX patterns without adding DaisyUI as a dependency.

> This file is maintained to anchor project discipline, automate best practices, enable zero-drift design/dev handoff, and maximize Gemini’s generative accuracy for Cleaners Ready 2Go. Update with each significant change.

