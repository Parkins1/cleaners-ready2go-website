import React from "react";
import { SEO } from "@/components/seo/SEO";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import ContentCard from "@/components/ContentCard/ContentCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
// Use centralized lazy-loaded Icon
import heroMove from "@/assets/spokane-house-cleaning.webp";
import mv480 from "@/assets/spokane-house-cleaning-480.webp";
import mv768 from "@/assets/spokane-house-cleaning-768.webp";
import mv1024 from "@/assets/spokane-house-cleaning-1024.webp";
import mv480Avif from "@/assets/spokane-house-cleaning-480.avif";
import mv768Avif from "@/assets/spokane-house-cleaning-768.avif";
import mv1024Avif from "@/assets/spokane-house-cleaning-1024.avif";
import HeroSection from "@/components/HeroSection/HeroSection";
import { brand } from "@/config/brand";
import JsonLd from "@/components/seo/JsonLd";
import { makeLocalBusiness, makeWebPage, makeService, makeBreadcrumb, makeFAQPage } from "@/components/seo/schema";
import { site } from "@/config/site";

export default function MoveOut() {
  const { open } = useModal();

  const faqs = [
    {
      q: "How is a move-out cleaning different from a regular cleaning?",
      a:
        "Move-out focuses on inspection points: inside appliances, cabinet interiors, window tracks, baseboards, blinds, and high-touch sanitizing—designed to satisfy landlord or property-manager standards and protect your deposit.",
    },
    {
      q: "How long will my service take?",
      a:
        "Most studios/1-bedrooms take 3–5 hours; larger homes can take 6–10 hours or more depending on condition and add-ons. Share photos for a tighter estimate—we plan crew size and timing around your key hand-off.",
    },
    {
      q: "Do I need to be home?",
      a:
        "No. Many clients provide a lockbox/garage code. We send arrival and completion updates, and your lead can walk you through photos if you can’t be onsite.",
    },
    {
      q: "What's included inside the kitchen and bathrooms?",
      a:
        "Kitchen: inside oven and fridge (when scoped), cabinet fronts and interiors (emptied), backsplash, sink/faucet, and floors. Bathrooms: descaling, glass polishing, fixture disinfecting, grout touch-ups (where feasible), and floor sanitation.",
    },
    {
      q: "Are your products safe for pets and kids?",
      a: "Yes. We use eco- and pet-safe solutions with HEPA filtration. If you have sensitivities, let us know—we can adjust products.",
    },
    {
      q: "Can you do a same-day or urgent move-out cleaning?",
      a:
        "Often yes. Choose the Urgent / Same-Day add-on during quoting. Availability depends on crew capacity; we'll confirm instantly.",
    },
    {
      q: "Do you clean walls or paint?",
      a:
        "We perform spot wall cleaning where possible without damaging paint. Full repainting isn't included, but we can refer a painter if needed.",
    },
    {
      q: "Do you handle junk removal or hauling?",
      a: "We don't haul large items. We can connect you with a trusted junk-removal partner and coordinate schedules when possible.",
    },
    {
      q: "How do you price a move-out clean?",
      a:
        "Pricing depends on size, condition, add-ons, and urgency. We provide a transparent estimate after photos or a quick walk-through—no surprises.",
    },
    {
      q: "What if my landlord flags something after you leave?",
      a:
        "Let us know within 24 hours. Our satisfaction-first policy covers reasonable touch-ups related to the original scope.",
    },
  ];

  return (
    <>
      <SEO
        title="Move-Out Cleaning in Spokane Valley, WA | Cleaners Ready 2 GO"
        description="Trusted move-out cleaning in Spokane Valley. Checklist-driven, detail-focused cleans that align with local landlord expectations. Get your free quote."
      />
      <JsonLd
        data={[
          makeLocalBusiness(site.url),
          makeWebPage({
            siteUrl: site.url,
            path: "/move-out",
            title: "Move-Out Cleaning in Spokane Valley, WA | Cleaners Ready 2 GO",
            description:
              "Trusted move-out cleaning in Spokane Valley. Checklist-driven, detail-focused cleans that align with local landlord expectations.",
          }),
          makeService({
            siteUrl: site.url,
            path: "/move-out",
            name: "Move-Out Cleaning",
            description: "Inspection-focused move-out cleaning for Spokane area rentals and homes.",
            areaServed: ["Spokane Valley", "Spokane", "Liberty Lake", "Greenacres"],
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "Move-Out Cleaning", url: `${site.url}/move-out` },
          ]),
          makeFAQPage(faqs, `${site.url}/move-out`),
        ]}
      />
      <meta
        name="description"
        content="Keep your deposit. Pass inspection. Move-out cleaning in Spokane Valley, Spokane, and Liberty Lake—inspection-ready, checklist-driven cleaning."
      />

      {/* HERO */}
      <HeroSection
        image={heroMove}
        title={<h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-sm mb-4">Move-Out Cleaning in Spokane Valley, WA</h1>}
        subtitle={<p className="text-lg lg:text-xl text-slate-100/95 mb-8">Keep your deposit. Pass inspection. Move on. Licensed local pros delivering fast, inspection-ready results for your home.</p>}
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => open("quote")} variant="primary">Get My Free Quote</Button>
            <a href="#includes" aria-label="See What's Included" className="inline-flex items-center justify-center">
              <Button variant="primary">See What's Included <Icon name="ArrowRight" className="w-5 h-5 ml-2" /></Button>
            </a>
          </div>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${mv480} 480w, ${mv768} 768w, ${mv1024} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${mv480Avif} 480w, ${mv768Avif} 768w, ${mv1024Avif} 1024w` }]}
      />

      <section className="py-section bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p className="text-lg text-text">
            Moving out shouldn't mean spending your last night scrubbing oven racks. Cleaners Ready 2 GO delivers a modern, no-nonsense move-out cleaning that fits your timeline and protects your budget. We align with manager and landlord checklists so your home looks inspection-ready—baseboards to blinds, bathrooms to the inside of appliances.
          </p>
          <p className="text-lg text-text">
            Our approach is built for real life in the Inland Northwest: winter grit, summer dust, pet hair, and everything in between. You'll get a precise scope, on-time arrival, eco- and pet-safe products, and a final shine that makes your home feel brand new for the next resident (and your rental history). The result? Less stress, more deposit back, and a smoother hand-off so you can focus on your next place.
          </p>
        </div>
      </section>

      <section id="includes" className="py-section bg-gradient-to-b from-surface to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">
            What Our Move-Out Cleaning Includes
          </h2>

          <div className="grid gap-lg md:grid-cols-2">
            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Kitchen</h3>
              <ul className="list-none space-y-2 text-sm">
                <li>
                  <Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />
                  <Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />
                  Degrease backsplash and cabinet fronts; wipe interiors (emptied)
                </li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Clean inside oven and stovetop; detail hood/extractor</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Clean inside fridge/freezer (defrost if needed); sanitize shelves and drawers</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Sanitize sinks, faucet, and garbage disposal; polish stainless</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Wipe light switches, outlets, door handles; remove reachable cobwebs</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Vacuum and mop floors with pH-balanced solution</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Bathrooms</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Descale and clean shower/tub; polish glass and fixtures</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Disinfect toilets (inside/out), base, hinges, and surrounding floor area</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Clean vanities, mirrors, lighting; wipe drawers and cabinets (emptied)</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Spot-treat grout where feasible; remove soap scum and water spots</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Sanitize high-touch points; vacuum and mop floors</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Whole-Home</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Dust ceiling fans, vents, and light fixtures within safe reach</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Wipe baseboards, trim, doors, and door frames</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Clean interior windows and sills (accessible), blinds, and tracks</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Remove marks on walls where possible without damaging paint</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Detail switch plates, outlet covers, and door hardware</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />HEPA-filter vacuum for all floors; edge clean along baseboards</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Bedrooms & Living Areas</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Dust ledges, shelves, and closet interiors (emptied)</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Wipe closet rods and tracks; vacuum closet floors</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Final walkthrough to catch missed smudges or debris</li>
              </ul>
            </ContentCard>
          </div>

          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full rounded-xl bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm shadow-sm border border-white/20">
              <AccordionItem value="optional-addons">
                <AccordionTrigger className="text-left font-semibold text-lg">Optional Add-Ons (by request)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-none space-y-2 text-sm">
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Inside cabinet degunking (sticky residue treatment)</li>
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Inside dishwasher / washer / dryer drum wipe</li>
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Balcony/patio sweep and glass clean (accessible)</li>
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Inside window track deep-detail</li>
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Spot wall wash or paint touch-ups (light; case-by-case)</li>
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Carpet shampoo / steam (via partner; schedule-dependent)</li>
                    <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Urgent / same-day upgrade (capacity-dependent)</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Note: We don't remove large junk or furniture. For apartment cleanout (trash-out) services, we can refer a trusted partner.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Process—Our 4-Step Breakdown</h2>
          <div className="grid gap-lg md:grid-cols-2">
            <ContentCard>
              <h3 className="font-semibold">Step 1: Fast Quote (Virtual or On‑Site)</h3>
              <p className="mt-2 text-sm">Send a few photos or schedule a local walk-through. We confirm scope, timing, and any add-ons—no surprises.</p>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold">Step 2: Customized Checklist & Schedule</h3>
              <p className="mt-2 text-sm">We tailor our move-out checklist to your home and lease terms, then lock your time slot—standard, rush, or same-day when available.</p>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold">Step 3: Service Day Execution</h3>
              <p className="mt-2 text-sm">We arrive on time with vetted techs, HEPA vacuums, and eco-/pet-safe products. Crew leads verify each checklist section.</p>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold">Step 4: Final Walk-Through & Satisfaction</h3>
              <p className="mt-2 text-sm">We do a quick tour (you or your agent). If something gets flagged within 24 hours, we'll make it right—satisfaction-first.</p>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-8">
            <ContentCard className="flex items-center gap-3 min-h-[44px] py-2">
              <Icon name="ShieldCheck" className="text-teal" />
              <span className="font-medium">Licensed & Insured</span>
            </ContentCard>
            <ContentCard className="flex items-center gap-3 min-h-[44px] py-2">
              <Icon name="Leaf" className="text-teal" />
              <span className="font-medium">Eco & Pet-Safe</span>
            </ContentCard>
            <ContentCard className="flex items-center gap-3 min-h-[44px] py-2">
              <Icon name="Users" className="text-teal" />
              <span className="font-medium">Vetted Local Pros</span>
            </ContentCard>
            <ContentCard className="flex items-center gap-3 min-h-[44px] py-2">
              <Icon name="Sparkles" className="text-teal" />
              <span className="font-medium">Satisfaction Guaranteed</span>
            </ContentCard>
          </div>
          <p className="text-lg text-text max-w-3xl mx-auto text-center">
            Choosing a cleaning service is about trust and reliability. Our Spokane house cleaners are fully insured, bonded,
            and rigorously trained. We use eco-friendly, pet-safe products and back every visit with a satisfaction guarantee.
            As a local business, we prioritize personalized care and exceptional results.
          </p>
        </div>
      </section>

      <section className="py-section bg-service-band">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-2">Service Area</h2>
          <p className="text-lg text-text max-w-3xl mx-auto">We serve Spokane Valley, Spokane, and Liberty Lake, including nearby neighborhoods and communities along I-90. If you're just outside these areas, ask—we can often accommodate with a small travel fee.</p>

          {/* Exactly four location cards linking to the four location pages */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-lg mt-8">
            <ContentCard as="a" href="/locations/spokane" interactive className="text-center">
              <h3 className="text-lg font-semibold">Spokane</h3>
              <p className="text-sm text-text">Citywide coverage</p>
            </ContentCard>
            <ContentCard as="a" href="/locations/spokane-valley" interactive className="text-center">
              <h3 className="text-lg font-semibold">Spokane Valley</h3>
              <p className="text-sm text-text">From Opportunity to Veradale</p>
            </ContentCard>
            <ContentCard as="a" href="/locations/liberty-lake" interactive className="text-center">
              <h3 className="text-lg font-semibold">Liberty Lake</h3>
              <p className="text-sm text-text">Lakefront to town center</p>
            </ContentCard>
            <ContentCard as="a" href="/locations/greenacres" interactive className="text-center">
              <h3 className="text-lg font-semibold">Greenacres</h3>
              <p className="text-sm text-text">River-adjacent & neighborhoods</p>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-section bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center">Testimonials</h2>
          <ContentCard as="blockquote">
            <p>"Flawless move-out clean. The manager said it was the easiest inspection all month. I got my full deposit back."</p>
            <footer className="mt-3 text-sm text-gray-600">—Lauren K., Spokane Valley</footer>
          </ContentCard>
          <ContentCard as="blockquote">
            <p>"Booked on short notice and they still nailed the details—oven, fridge, baseboards—everything looked brand new."</p>
            <footer className="mt-3 text-sm text-gray-600">—Dan R., Liberty Lake</footer>
          </ContentCard>
          <ContentCard as="blockquote">
            <p>"Our tenants left the place rough. Cleaners Ready 2 GO got it ready for photos the next day. Highly recommend."</p>
            <footer className="mt-3 text-sm text-gray-600">—Melissa P., Property Manager, Spokane</footer>
          </ContentCard>
        </div>
      </section>

      <section className="py-section bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center mb-6">FAQ</h2>
          <Accordion type="single" collapsible className="w-full rounded-xl bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm shadow-sm border border-white/20">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i + 1}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

    </>
  );
}
