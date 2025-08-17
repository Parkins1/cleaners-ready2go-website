# Service Page Content Template

This template is based on the Deep Cleaning page to ensure all service pages have a consistent, SEO-friendly, and conversion-focused structure.

Usage: duplicate this file per service (e.g., residential, move-out, apartment) and fill the placeholders with service-specific copy, assets, and data.

## Reference
Use [`client/src/pages/DeepCleaning.tsx`](client/src/pages/DeepCleaning.tsx:1) as the canonical example for layout, tone, and required sections.

---

## SEO
- Page title (H1): [Primary keyword + Location] — short, compelling.
- Meta description: 110–155 characters, include primary keyword and main benefit.
- Canonical URL: full URL to this service page.
- Primary keyword: e.g., "deep cleaning Spokane"
- Secondary / LSI keywords: e.g., "move-out cleaning", "eco-friendly cleaning", "Spokane deep clean"
- Structured data: include JSON-LD (LocalBusiness) with serviceArea, address, phone, openingHours, offers.

Recommended lengths:
- Title: 50–70 characters
- Meta description: 110–155 chars

---

## Hero Section
- H1 (primary headline): short, keyword-rich.
- Subtitle / strapline: 1–2 sentences emphasizing value and locality.
- Supporting paragraph: 20–40 words expanding the promise.
- Primary CTA: text + action (e.g., "Get My Free Quote" → open("quote")).
- Secondary CTA: anchor to "What's Included" or services grid (e.g., "See What's Included" → #includes).
- Background image: suggested image path and an alt-text string.
- Accessibility: provide aria-labels for CTAs and descriptive alt text.

Example fields:
- H1: Deep Cleaning Spokane, WA
- Subtitle: Local, insured pros delivering wall-to-wall shine on your schedule.
- Primary CTA: Get My Free Quote
- Secondary CTA: See What's Included

---

## Intro / Lead Paragraph
- 2–4 short paragraphs (total 100–200 words) explaining:
  - why the service matters
  - local relevance (neighborhoods, climate effects)
  - a quick promise (guarantee, green products, vetted staff)

---

## What It Includes (Service Breakdown)
- Section heading: "What Our [Service] Includes"
- Provide a grid or bulleted list of core areas, each with a 1-line description:
  - Kitchen — degrease backsplashes, clean inside appliances, sanitize sinks.
  - Bathroom — grout cleaning, disinfect fixtures, polish glass.
  - Whole-home — baseboards, vents, ceiling fans, high-touch sanitizing.
  - Floors — HEPA vacuum, edge-clean, mop with pH-balanced solution.
- Optionally include "Optional Add-Ons" as a separate list (oven interior, carpet shampoo, inside-fridge).

---

## Process / 4-Step Breakdown
- Step 1: Free local walk-through & quote — what to expect and timing.
- Step 2: Customized checklist & scheduling — how items are prioritized.
- Step 3: Service day — crew arrival, equipment, product notes (eco, HEPA).
- Step 4: Final walk-through & guarantee — re-clean policy and timeframe.

Tone: concise steps, each 1–2 sentences.

---

## Packages / Pricing Overview
- Present packages (e.g., Essentials, Deluxe, Restoration) in a table or cards:
  - Name | Highlights | Great for | Price (or "Starting at")
- Pricing guidance: per sq ft or flat-rate guidance; mention minimum booking hours if relevant.
- Note: Provide a "contact for custom quote" line for large or unusual jobs.

---

## Why Choose Us / Trust Signals
- Short bullets (3–8) with trust signals:
  - Insured & bonded
  - Background-checked, trained staff
  - Eco & pet-safe products
  - HEPA filtration, hospital-grade sanitation
  - Satisfaction guarantee / complimentary re-visit
  - Local years-in-business / review average (if available)
- Include any badges (BBB, local membership) or review stats.

---

## Service Area
- Short paragraph listing primary cities and neighborhoods.
- Provide zip codes or radius details.
- Map embed instructions / placeholder: "Embed Google Maps for interactive view" (include anchor or dev note).

---

## Testimonials / Social Proof
- 2–4 short testimonials (quote, name, neighborhood).
- Format: Italic quote + bold name + small location.
- Provide guidance to solicit testimonials (before/after photos optional).

---

## How It Works (Quick Steps)
- Short ordered list (4 items) summarizing booking to completion:
  1. Request a quote
  2. Approve the checklist & price
  3. We clean (team delivers)
  4. Final review & satisfaction check

---

## FAQ (Accordion)
- Provide 6–12 common Q&A pairs tailored to service.
- Each answer should be 30–80 words and actionable where relevant.

Suggested FAQ prompts:
- How is this different from a regular cleaning?
- How long will my service take?
- Do I need to be home?
- What products do you use? Are they pet-safe?
- Do you provide all supplies?
- What payment methods do you accept?

---

## Benefits / Outcome Statements
- 3–5 short bullets covering:
  - Healthier indoor air & allergen reduction
  - Time savings for customers
  - Prolonged life of surfaces & appliances
  - Photo-ready results for hosting or listing

---

## About the Team (Optional)
- Short paragraph about training, assignment consistency, background checks, and local ownership.
- If available, include a CTA to the Team page.

---

## Environmental Commitment (Optional)
- 2–4 lines describing eco policies: biodegradable products, reusable bottles, microfiber use, any offsets.

---

## Booking / CTA Block
- Heading: short and urgent (e.g., "Book Your Deep Clean Today")
- 1–2 line supporting text
- Primary CTA button and secondary contact methods (phone link).

---

## Callout Banner (Short)
- One-line headline and two CTAs (e.g., Schedule / Call)
- Used near bottom of page to reinforce urgency and support conversions.

---

## Footer Info (Page-level structured content)
- Business name
- Full address
- Phone (tel:)
- Email (mailto:)
- Hours
- Copyright line

---

## JSON-LD Snippet
- Provide LocalBusiness schema including:
  - name, image, url, telephone
  - address (street, city, state, zip)
  - geo (latitude, longitude)
  - openingHoursSpecification
  - serviceArea and makesOffer array
- Dev note: inject via <script type="application/ld+json"> using page data.

---

## Tone & Style Guidance
- Tone: local, professional, reassuring
- Voice: benefits-first, plain language, active voice
- Avoid heavy jargon; explain technical terms briefly.
- SEO: include primary keyword in H1 and meta description; use local signals (neighborhoods/cities).

---

## Content-Length & Readability Targets
- Hero headline: 6–12 words
- Hero subtitle: 15–35 words
- Intro: 100–200 words total
- Section intros: 25–100 words each
- FAQ answers: 30–80 words
- Keep paragraphs short (1–3 sentences), use lists for scannability.

---

## Required Assets / Admin Data (to provide with the content)
- Hero image file or path + alt text
- ServiceCard IDs for ServiceGrid (e.g., ["residential","deep-cleaning","move-out","apartment-cleaning"])
- Testimonials list (quote, name, location)
- City list / ZIP codes
- Pricing guidance or specific prices
- Business contact data for JSON-LD

---

## Example Content Blocks (copy-ready placeholders)
- H1: Deep Cleaning Spokane, WA
- Subtitle: Local, insured pros delivering wall-to-wall shine on your schedule.
- Intro para: Life in the Inland Northwest... (describe why deep cleaning matters)
- Includes bullet example: Kitchen revival — degrease backsplashes, clean inside ovens, sanitize sinks & faucets.
- Process example: Free local walk-through & quote — we measure square footage and provide a written estimate within 30 minutes.

---

## Checklist for Content Author
1. Fill H1 and meta description with primary keyword.
2. Provide hero image and alt text.
3. Supply 3–5 testimonials with locations.
4. Provide list of local service areas (cities + ZIP codes).
5. Supply pricing details or rules-of-thumb.
6. Attach any certifications or badge images (if applicable).
7. Provide business phone and hours for JSON-LD.

---

## Implementation Notes for Dev
- Use `ServiceGrid` and `LocationPageTemplate` to populate services and extraSections.
- Hook hero primary CTA to open("quote") or link to /booking.
- Insert JSON-LD with dangerouslySetInnerHTML or equivalent server-side injection.
- Keep CTAs consistent: "Get My Free Quote" / "Schedule Cleaning" across pages.

---

## Copy-ready FAQ Suggestions
- "How long does a deep clean take?" — Most two-bedroom homes take 4–6 hours; larger homes require more time or multiple technicians.
- "Are your products safe for pets and kids?" — Yes. We use biodegradable, pH-neutral solutions and HEPA filtration where required.
- "Do I need to be home during service?" — No. Many clients provide a lockbox code or garage pin; we send arrival/departure confirmations.
- "How far in advance should I book?" — We recommend 5–7 days for weekends; weekday slots may be available within 48 hours.

---

## Notes & Best Practices
- Keep the primary CTA visible above the fold and repeated in the final CTA block.
- Ensure "What's Included" uses clear subheadings per room for both SEO and user clarity.
- Maintain consistent CTA language and button styles across service pages.
- Use the DeepCleaning page as the structural standard for all service pages.

---

Edit and duplicate this file per service as needed (e.g., `docs/service-page-template-residential.md`).

For the example that inspired this template see [`client/src/pages/DeepCleaning.tsx`](client/src/pages/DeepCleaning.tsx:1).