// llm:cta-migrated
import Icon from "@/components/ui/icon";
import { OptimizedImage } from "@/components/ui/optimized-image";
import residentialCardImg from "@/assets/residential-cleaning-card.webp";
import res480 from "@/assets/residential-cleaning-card-480.webp";
import res768 from "@/assets/residential-cleaning-card-768.webp";
import res1024 from "@/assets/residential-cleaning-card-1024.webp";
import res480Avif from "@/assets/residential-cleaning-card-480.avif";
import res768Avif from "@/assets/residential-cleaning-card-768.avif";
import res1024Avif from "@/assets/residential-cleaning-card-1024.avif";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard/ContentCard";
import IconCard from "@/components/IconCard/IconCard";
import { useModal } from "@/components/modal/ModalProvider";
import { SEO } from "@/components/seo/SEO";
import JsonLd from "@/components/seo/JsonLd";
import { makeWebPage, makeService, makeBreadcrumb } from "@/components/seo/schema";
import { site } from "@/config/site";
import TrustSignalsSection from "@/components/TrustSignals/TrustSignalsSection";
import { brand } from "@/config/brand";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import iconKitchen from "@/assets/icon_kitchen.webp";
import PackagesSection from "@/components/Sections/PackagesSection";
import { FourStepSection } from "@/components/Sections";
import Map from '@/components/Map/Map';

// Icons: use centralized Lucide loader via IconCard.iconName

export default function Residential() {
  const { open } = useModal();

  const callHref = `tel:${brand.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      <SEO
        title="Residential Cleaning That Elevates Your Home | Cleaners Ready 2 Go"
        description="Modern, consistent home cleaning built around your home—clear scope, trained teams, and results you can see. Weekly, bi‑weekly, monthly, and deep clean options."
      />
      <JsonLd
        data={[
          makeWebPage({
            siteUrl: site.url,
            path: "/residential",
            title: "Residential Cleaning That Elevates Your Home | Cleaners Ready 2 Go",
            description:
              "Modern, consistent home cleaning built around your home—clear scope, trained teams, and results you can see.",
          }),
          makeService({
            siteUrl: site.url,
            path: "/residential",
            name: "Residential Cleaning",
            description:
              "Recurring and one-time residential house cleaning services in Spokane and nearby areas.",
            areaServed: ["Spokane", "Spokane Valley", "Liberty Lake", "Greenacres"],
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "Residential", url: `${site.url}/residential` },
          ]),
        ]}
      />

      {/* Hero */}
      <HeroSection
        image={residentialCardImg}
        title={
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-sm mb-4">
            Residential Cleaning That Elevates <span className="text-brand-gold">Your Home</span>
          </h1>
        }
        subtitle={
          <p className="text-xl lg:text-2xl text-slate-100/95 leading-snug sm:leading-normal mb-6 max-w-[42ch] mx-auto">
            Modern, standardized cleaning built around your home—not guesswork.
          </p>
        }
        actions={
          <>
            <Button onClick={() => open("quote")} aria-label="Get a Free Quote" variant="primary">
              Get a Free Quote
            </Button>
            <Button asChild variant="outline" aria-label="See What's Included">
              <a href="#includes" className="inline-flex items-center gap-2">
                See What's Included
              </a>
            </Button>
          </>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${res480} 480w, ${res768} 768w, ${res1024} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${res480Avif} 480w, ${res768Avif} 768w, ${res1024Avif} 1024w` }]}
      />

      {/* Quick highlights under hero */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <ul className="grid gap-md text-sm text-text md:grid-cols-3">
            <li className="border-l-4 border-brand-gold bg-brand-gold/5 rounded-sm pl-4 py-2 flex items-start gap-2">
              <Icon name="Sparkles" className="w-4 h-4 mt-1 text-brand-gold flex-shrink-0" />
              <span>Licensed & insured • 100% Satisfaction Promise</span>
            </li>
            <li className="border-l-4 border-brand-gold bg-brand-gold/5 rounded-sm pl-4 py-2 flex items-start gap-2">
              <Icon name="Sparkles" className="w-4 h-4 mt-1 text-brand-gold flex-shrink-0" />
              <span>Pro-grade tools (HEPA, microfiber systems) • Eco-friendly options</span>
            </li>
            <li className="border-l-4 border-brand-gold bg-brand-gold/5 rounded-sm pl-4 py-2 flex items-start gap-2">
              <Icon name="Sparkles" className="w-4 h-4 mt-1 text-brand-gold flex-shrink-0" />
              <span>Digital checklists • Consistent teams • Clear, honest scope</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Quality Benchmark */}
      <TrustSignalsSection
        title={<>What “Done Right” Looks Like <span className="text-brand-gold">(Our Quality Benchmark)</span></>}
        items={[
          { highlight: "Surfaces", text: "Ceiling fans, light fixtures, and high areas are dust‑free.", icon: "CheckCircle" },
          { highlight: "Glass", text: "Windows (inside only), mirrors, and glass are streak‑free and spotless.", icon: "CheckCircle" },
          { highlight: "Hard Floors", text: "Vacuumed, mopped, dry, and no streaks or residue.", icon: "CheckCircle" },
          { highlight: "Carpets & Rugs", text: "Thoroughly vacuumed—no visible dirt or debris.", icon: "CheckCircle" },
          { highlight: "High‑Touch Points", text: "Door handles/knobs, switches, and wall plates are clean and smudge‑free.", icon: "CheckCircle" },
          { highlight: "Overall", text: "Spaces look tidy and organized—nothing out of place.", icon: "CheckCircle" },
        ]}
        columns={2}
        className="bg-white"
      />

      {/* Scope: Room by Room */}
      <section id="includes" className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-xl">Exactly What We Clean (Room‑by‑Room Scope)</h2>
          <div className="grid gap-xl md:grid-cols-2">
            {/* Living Room / Family Spaces */}
            <IconCard
              iconName="Home"
              title="Living Room / Family Spaces"
              items={[
                "Wipe wood and hard surfaces until smudge‑free with a residue‑free cleaner.",
                "Dust flat surfaces and decorative items (frames, shelves, vases).",
                "Remove cobwebs/lint from corners and reachable high areas.",
                "Tidy resets: pillows fluffed, throws folded, items straightened.",
                "Glass/mirrors cleaned to a streak‑free finish.",
                "Floors vacuumed and (if hard surfaces) mopped dry and streak‑less.",
              ]}
            />

            {/* Kitchen */}
            <IconCard
              iconName="Home"
              title="Kitchen"
              items={[
                "Fridge exterior scrubbed clean—no streaks or fingerprints.",
                "Stovetop cleaned and debris removed; surface polished as appropriate.",
                "Microwave inside & out cleaned and degreased.",
                "Countertops scrubbed; items lifted and replaced; no residue.",
                "Sink & faucet cleaned and polished; metal shines where applicable.",
                "Dishwasher exterior wiped free of smudges.",
                "Floors swept/vacuumed, then mopped; dry and streak‑free.",
              ]}
            />

            {/* Bathrooms */}
            <IconCard
              iconName="Home"
              title="Bathrooms"
              items={[
                "Toilets cleaned and disinfected; no stains or buildup.",
                "Tub/shower cleaned; soap scum and water spots removed.",
                "Sinks & counters scrubbed; residue‑free.",
                "Mirrors crystal clear, streak‑free.",
                "Faucets/fixtures polished.",
                "Floors swept/mopped; dry, residue‑free.",
                "Trash emptied.",
              ]}
            />

            {/* Bedrooms */}
            <IconCard
              iconName="Home"
              title="Bedrooms"
              items={[
                "Mirrors streak‑free.",
                "Carpets/rugs vacuumed thoroughly; no visible dirt.",
                "Light fixtures & ceiling fans dust‑free.",
                "Window sills wiped; no dust/debris.",
                "Tidy reset: surfaces straightened; obvious floor items organized.",
              ]}
            />

            {/* Hallways & Stairs */}
            <IconCard
              iconName="Home"
              title="Hallways & Stairs"
              items={[
                "Handrails, switches, and plates cleaned (smudge‑free).",
                "Floors vacuumed; hard surfaces mopped clean and dry.",
                "Frames, art, and wall hangings dusted.",
              ]}
            />

            {/* Laundry Room (if applicable) */}
            <IconCard
              iconName="Home"
              title="Laundry Room (if applicable)"
              items={[
                "Washer/dryer exteriors wiped free of lint/residue.",
                "Counters/shelving dusted and wiped.",
                "Floors vacuumed and mopped; dry and streak‑free.",
              ]}
            />

            {/* Whole‑Home Final Check */}
            <ContentCard className="md:col-span-2">
              <h3 className="text-xl font-semibold text-text mb-3">Whole‑Home Final Check</h3>
              <ul className="space-y-2 text-sm text-text">
                {[
                  "Subtle fresh scent (light, never overwhelming).",
                  "Spaces look organized; nothing out of place.",
                  "Appliance exteriors (covered in scope) clean and smudge‑free.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="w-4 h-4 mt-1 text-brand-gold" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text mt-3">
                Need more? Add‑ons include: <strong>inside oven or fridge, interior glass, detailed blinds, cabinet‑front hand wipe, baseboard deep pass, window tracks, range‑hood degrease</strong>, and more.
              </p>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Our Four‑Step System */}
      <FourStepSection
        title="Our Four‑Step System (Built for Consistency)"
        steps={[
          {
            title: "1) Book & Scope",
            body: "Tell us about your home, frequency, and priorities. We confirm scope, timing, and a clear price—no ambiguity.",
            iconName: "CircleDashed",
          },
          {
            title: "2) Arrival & Setup",
            body: "You get an ETA window and Lead Tech name. We align on focus zones, protect floors, and stage supplies.",
            iconName: "CircleDotDashed",
          },
          {
            title: "3) Clean & Quality Control",
            body: "We clean to your digital checklist with color‑coded microfiber and HEPA. Lead Tech signs off to our standards.",
            iconName: "CircleDot",
          },
          {
            title: "4) Feedback & Optimization",
            body: "You’ll get a summary. Share preferences—we lock them in so the next visit is even better.",
            iconName: "CircleCheck",
          },
        ]}
      />

      {/* Why We’re Trusted */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-xl">Why We’re Trusted: Expertise You Can See</h2>
          <div className="grid gap-xl md:grid-cols-2">
            <ContentCard>
              <h3 className="text-xl font-semibold mb-3">Standardized Training (No Guesswork)</h3>
              <ul className="space-y-2 text-sm text-text">
                {[
                  "pH‑smart chemistry for stone, tile, stainless, wood, and glass.",
                  "Residue control to avoid dull films and streaks.",
                  "Cross‑contamination prevention with color‑coded cloths and sequencing.",
                  "Fixture safety for finishes, oiled woods, natural stone, and soft metals.",
                  "Detail rotations to prevent dust buildup in overlooked zones.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><Icon name="CheckCircle" className="w-4 h-4 mt-1 text-brand-gold" /><span>{t}</span></li>
                ))}
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-xl font-semibold mb-3">Pro‑Grade Tools & Techniques</h3>
              <ul className="space-y-2 text-sm text-text">
                {[
                  "HEPA vacuums reduce fine dust, pollen, and pet dander.",
                  "Premium microfiber (fresh each home) traps more soil with less chemical.",
                  "Non‑etch glass process delivers predictable streak‑free results.",
                  "Edge vacuuming & crevice tools for baseboards and tight corners.",
                  "Low‑residue mopping keeps hard floors clean and glossy—not sticky.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><Icon name="CheckCircle" className="w-4 h-4 mt-1 text-brand-gold" /><span>{t}</span></li>
                ))}
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-xl font-semibold mb-3">Eco‑Friendly Options (On Request)</h3>
              <p className="text-sm text-text">We maintain an eco lineup appropriate for most surfaces. If you have sensitivities, we’ll match products to your home’s needs (fragrance‑free, plant‑based, etc.).</p>
            </ContentCard>

            <ContentCard>
              <h3 className="text-xl font-semibold mb-3">Documentation & Accountability</h3>
              <ul className="space-y-2 text-sm text-text">
                {[
                  "Digital checklists per visit",
                  "Lead Tech sign‑off",
                  "Photo verification on request",
                  "Clear notes for your next service",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><Icon name="CheckCircle" className="w-4 h-4 mt-1 text-brand-gold" /><span>{t}</span></li>
                ))}
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Packages */}
      <PackagesSection />

      {/* Add‑Ons */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">Add‑Ons & Upgrades (Customize Your Clean)</h2>
          <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3 text-sm text-text">
            {/* Inside oven or refrigerator */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Inside oven or refrigerator</span>
            </div>
            
            {/* Interior windows/glass (inside only) */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Interior windows/glass (inside only)</span>
            </div>
            
            {/* Cabinet‑front hand wipe; baseboard deep pass */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Cabinet‑front hand wipe; baseboard deep pass</span>
            </div>
            
            {/* Detailed blinds (material‑appropriate) */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Detailed blinds (material‑appropriate)</span>
            </div>
            
            {/* Window tracks and sliding door rails */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Window tracks and sliding door rails</span>
            </div>
            
            {/* Range‑hood/backsplash degrease */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Range‑hood/backsplash degrease</span>
            </div>
            
            {/* Pet zones (kennels, feeding areas) */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Pet zones (kennels, feeding areas)</span>
            </div>
            
            {/* Finished basements and garage sweep */}
            <div className="flex items-center gap-3">
              <Icon name="Sparkles" className="w-5 h-5 md:w-6 md:h-6 text-brand-gold flex-shrink-0 mt-1" aria-hidden="true" />
              <span>Finished basements and garage sweep</span>
            </div>
          </div>
        </div>
      </section>

      {/* Difference grid */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-xl">The Cleaners Ready 2 Go Difference</h2>
          <div className="grid gap-xl md:grid-cols-2 lg:grid-cols-3">
            {/* Outcome‑First Standards */}
            <IconCard
              iconName="Sparkles" // Placeholder icon
              title="Outcome‑First Standards"
              items={[
                "We train to a visible result: dust‑free, streak‑free, residue‑free. If it doesn't meet the outcome, we're not done."
              ]}
            />
            
            {/* Chemistry That Protects Surfaces */}
            <IconCard
              iconName="Sparkles" // Placeholder icon
              title="Chemistry That Protects Surfaces"
              items={[
                "Granite, marble, quartz, stainless, oiled wood—we match products and processes to protect finishes long‑term."
              ]}
            />
            
            {/* Allergy‑Aware Dust Control */}
            <IconCard
              iconSrc={iconKitchen} // Placeholder until icon is available
              title="Allergy‑Aware Dust Control"
              items={[
                "HEPA filtration + microfiber = less airborne dust, better capture, cleaner air feel in your home."
              ]}
            />
            
            {/* Cross‑Contamination Controls */}
            <IconCard
              iconSrc={iconKitchen} // Placeholder until icon is available
              title="Cross‑Contamination Controls"
              items={[
                "Bathroom to kitchen? Never the same cloths. Color coding and tool sequencing keep clean zones clean."
              ]}
            />
            
            {/* Predictable Time & Scope */}
            <IconCard
              iconSrc={iconKitchen} // Placeholder until icon is available
              title="Predictable Time & Scope"
              items={[
                "Digital checklists, realistic windows, and consistent teams reduce surprises and deliver repeatable quality."
              ]}
            />
            
            {/* Friendly, Professional Teams */}
            <IconCard
              iconSrc={iconKitchen} // Placeholder until icon is available
              title="Friendly, Professional Teams"
              items={[
                "Background‑checked, uniformed, coached for hospitality as well as skill."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing & Quotes */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">Pricing & Quotes (Transparent by Design)</h2>
          <p className="text-text/90 mb-6">
            We price by home size, current condition, and frequency—then hold the scope accountable to our standards. Share a few details (and photos if you’d like) and we’ll provide a precise quote with optional add‑ons. No upsell pressure, ever.
          </p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => open("quote")} aria-label="Get a Free Quote" variant="primary">Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Satisfaction Promise */}
      <section className="py-section bg-brand-gray-light">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-text mb-3">Satisfaction Promise</h2>
          <p className="text-text/90">
            If anything misses the mark, tell us within 24 hours. We’ll return promptly to fix it—no charge, no friction. Your trust matters, and your home should look exactly the way we promised.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-xl">Testimonials</h2>
          <div className="grid gap-xl md:grid-cols-3">
            {[
              {
                quote: "The checklists and Lead Tech notes are a game‑changer. Our kitchen glass is finally streak‑free.",
                author: "K. Marshall",
              },
              {
                quote: "They consistently hit the small details—switch plates, handles, and trim. Our bi‑weekly visits feel like a deep clean.",
                author: "R. Nguyen",
              },
              {
                quote: "Professional, on time, and thorough. They documented preferences and nailed them the next visit.",
                author: "A. Lopez",
              },
            ].map((t, i) => (
              <ContentCard key={i} as="blockquote" className="h-full">
                <p className="text-text/90">“{t.quote}”</p>
                <footer className="mt-3 font-semibold">—{t.author}</footer>
              </ContentCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6">FAQ</h2>
          <Accordion type="single" collapsible className="w-full border rounded-md">
            {[
              ["What’s included in a standard residential clean?", "Dusting of reachable surfaces/high areas, bathrooms sanitized, kitchen wipe‑downs (appliance exteriors), glass/mirrors streak‑free, and full floor care (vacuum/mop). High‑touch points and tidy resets are included, plus rotational detailing."],
              ["How is a Deep Clean different?", "More time and detail: baseboards/trim hand‑wipe, blind/vent/fixture detailing, grout/descale focus, under/behind items, and additional degrease where needed."],
              ["Do you bring supplies?", "Yes. We bring pro‑grade tools (HEPA vacuums, premium microfiber) and surface‑appropriate products. Eco options available."],
              ["Can I request fragrance‑free?", "Absolutely. We can run unscented across the board—just tell us."],
              ["Do I have to be home?", "No. Many clients use a lockbox or smart lock. We keep your home secure and text updates if needed."],
              ["Are you insured?", "Yes—full liability and workers’ comp."],
              ["How do you avoid streaks on glass and floors?", "We use a low‑residue process: right dilution, clean pads, and a two‑pass technique that leaves glass/floors clean and dry—no film."],
              ["Do you clean inside the oven or fridge?", "Yes—popular add‑ons. We can schedule them one‑time or on a rotation."],
              ["How do you handle delicate surfaces?", "We match products to pH and finish. For natural stone, oiled woods, soft metals, and specialty coatings, we follow protective SOPs."],
              ["What about pets?", "We’re pet‑friendly. Let us know names and any containment needs. We avoid strong scents and secure exterior doors."],
              ["What’s the best frequency?", "Weekly for high‑traffic/pets/allergies; bi‑weekly for balanced upkeep; monthly for lower traffic—often paired with seasonal deep cleans."],
              ["Can I customize my checklist?", "Yes. Prioritize rooms, add small projects, or set rotations (e.g., inside fridge quarterly)."],
              ["How long will it take?", "Depends on size/condition/scope. We provide a realistic range up front and refine after your first visit."],
              ["Do you bring step ladders for high areas?", "We tackle reachable high areas safely. For unusually high fixtures, we’ll advise solutions or specialty add‑ons."],
              ["What if something isn’t right?", "Tell us within 24 hours. We return quickly to make it right—our 100% Satisfaction Promise."],
            ].map(([q, a], i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-text/90">{a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center mb-10">
            Our Service Area
          </h2>
          <Map locationName="Spokane, WA" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-2">Ready to Transform <span className="text-brand-gold">Your Home</span>?</h2>
          <p className="text-text/90 mb-6">Predictable quality. Professional teams. Results you can see.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button onClick={() => open("quote")} aria-label="Get Your Free Quote" variant="primary">Get Your Free Quote</Button>
            <Button asChild variant="outline" aria-label="Call us now">
              <a href={callHref} className="inline-flex items-center gap-2">
                <Icon name="Phone" className="w-4 h-4" /> Call {brand.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
