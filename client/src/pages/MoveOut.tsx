import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import HeroSection from "@/components/HeroSection/HeroSection";
import ContentCard from "@/components/ContentCard/ContentCard";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import heroMove from "@assets/move-out-hero-image.jpeg";
import iconKitchenDegrease from "@/assets/icon_kitchen_degrease.png";
import iconCabinetInteriors from "@/assets/icon_cabinet_interiors.png";
import iconBathroomDescaling from "@/assets/icon_bathroom_descaling.png";
import iconBaseboards from "@/assets/icon_baseboards.png";
import iconBlinds from "@/assets/icon_blinds.png";
import iconInsideOven from "@/assets/icon_inside_oven.png";
import iconInsideFridge from "@/assets/icon_inside_fridge.png";
import photoEntryHandleSanitizing from "@/assets/photo_entry_handle_sanitizing_1024x1792.png";
import iconWindowTracks from "@/assets/icon_window_tracks.png";
import { brand } from "@/config/brand";

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
      q: "What’s included inside the kitchen and bathrooms?",
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
        "Often yes. Choose the Urgent / Same-Day add-on during quoting. Availability depends on crew capacity; we’ll confirm instantly.",
    },
    {
      q: "Do you clean walls or paint?",
      a:
        "We perform spot wall cleaning where possible without damaging paint. Full repainting isn’t included, but we can refer a painter if needed.",
    },
    {
      q: "Do you handle junk removal or hauling?",
      a: "We don’t haul large items. We can connect you with a trusted junk-removal partner and coordinate schedules when possible.",
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

  const packages = [
    {
      name: "Essentials",
      highlights: "Kitchen + baths deep clean, baseboards, blinds, floors, high-touch points",
      greatFor: "Smaller spaces in good condition",
      note: "Starting at studio/1-bedroom; final price after scope",
    },
    {
      name: "Deluxe",
      highlights:
        "Essentials + inside fridge/oven, window tracks (accessible), closet interiors",
      greatFor: "Most standard move-outs",
      note: "Starting at typical 2–3 bedroom homes",
    },
    {
      name: "Restoration",
      highlights:
        "Deluxe + heavy buildup focus, hard-water/soap-scum treatment, extra time",
      greatFor: "Long-term tenancies, tougher soils",
      note: "Custom quote after photos/walk-through",
    },
  ];

  return (
    <>
      <title>Move-Out Cleaning in Spokane Valley, WA | Cleaners Ready 2 GO</title>
      <meta
        name="description"
        content="Keep your deposit. Pass inspection. Move-out cleaning in Spokane Valley, Spokane, and Liberty Lake—inspection-ready, checklist-driven cleaning."
      />

      <HeroSection
        image={heroMove}
        darkOverlay
        focal="center"
        title={
          <>
            Move-Out Cleaning in Spokane Valley, WA
            <span className="sr-only">
              Professional cleaner finishing a sparkling, empty apartment kitchen in Spokane Valley
            </span>
          </>
        }
        subtitle={
          <>
            Keep your deposit. Pass inspection. Move on. Licensed local pros delivering fast, inspection-ready results for your home.
          </>
        }
        actions={
          <>
            <Button onClick={() => open("quote")} variant="primary" aria-label="Get a free move-out cleaning quote">
              Get My Free Quote
            </Button>
            <a href="#includes" aria-label="Jump to what's included" className="inline-flex">
              <Button variant="secondary">
                See What’s Included <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </>
        }
      />

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p>
            Moving out shouldn’t mean spending your last night scrubbing oven racks. Cleaners Ready 2 GO delivers a modern, no-nonsense move-out cleaning that fits your timeline and protects your budget. We align with manager and landlord checklists so your home looks inspection-ready—baseboards to blinds, bathrooms to the inside of appliances.
          </p>
          <p>
            Our approach is built for real life in the Inland Northwest: winter grit, summer dust, pet hair, and everything in between. You’ll get a precise scope, on-time arrival, eco- and pet-safe products, and a final shine that makes your home feel brand new for the next resident (and your rental history). The result? Less stress, more deposit back, and a smoother hand-off so you can focus on your next place.
          </p>
        </div>
      </section>

      <section id="includes" className="py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">
            What Our Move-Out Cleaning Includes
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Kitchen</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <img src={iconKitchenDegrease} alt="Degrease icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />
                  <img src={iconCabinetInteriors} alt="Cabinet interiors icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />
                  Degrease backsplash and cabinet fronts; wipe interiors (emptied)
                </li>
                <li>Clean inside oven and stovetop; detail hood/extractor</li>
                <li>Clean inside fridge/freezer (defrost if needed); sanitize shelves and drawers</li>
                <li>Sanitize sinks, faucet, and garbage disposal; polish stainless</li>
                <li>Wipe light switches, outlets, door handles; remove reachable cobwebs</li>
                <li>Vacuum and mop floors with pH-balanced solution</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Bathrooms</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><img src={iconBathroomDescaling} alt="Descale and clean icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />Descale and clean shower/tub; polish glass and fixtures</li>
                <li>Disinfect toilets (inside/out), base, hinges, and surrounding floor area</li>
                <li>Clean vanities, mirrors, lighting; wipe drawers and cabinets (emptied)</li>
                <li>Spot-treat grout where feasible; remove soap scum and water spots</li>
                <li>Sanitize high-touch points; vacuum and mop floors</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Whole-Home</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Dust ceiling fans, vents, and light fixtures within safe reach</li>
                <li><img src={iconBaseboards} alt="Baseboards icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />Wipe baseboards, trim, doors, and door frames</li>
                <li><img src={iconBlinds} alt="Blinds icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />Clean interior windows and sills (accessible), blinds, and tracks</li>
                <li>Remove marks on walls where possible without damaging paint</li>
                <li>Detail switch plates, outlet covers, and door hardware</li>
                <li>HEPA-filter vacuum for all floors; edge clean along baseboards</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Bedrooms & Living Areas</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Dust ledges, shelves, and closet interiors (emptied)</li>
                <li>Wipe closet rods and tracks; vacuum closet floors</li>
                <li>Final walkthrough to catch missed smudges or debris</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">High-Touch Areas</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  Sanitize high-touch points
                  <img
                    src={photoEntryHandleSanitizing}
                    alt="Sanitizing door handle at entry"
                    className="w-full h-auto mt-4 rounded-lg object-cover"
                  />
                </li>
              </ul>
            </ContentCard>
          </div>

          <div className="mt-6">
            <ContentCard>
              <h3 className="font-semibold text-lg mb-2">Optional Add-Ons (by request)</h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li><img src={iconInsideOven} alt="Inside oven icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />Inside cabinet degunking (sticky residue treatment)</li>
                <li><img src={iconInsideFridge} alt="Inside appliance drum icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />Inside dishwasher / washer / dryer drum wipe</li>
                <li>Balcony/patio sweep and glass clean (accessible)</li>
                <li><img src={iconWindowTracks} alt="Window tracks icon" aria-hidden className="w-5 h-5 mr-2 inline-block align-middle" />Inside window track deep-detail</li>
                <li>Spot wall wash or paint touch-ups (light; case-by-case)</li>
                <li>Carpet shampoo / steam (via partner; schedule-dependent)</li>
                <li>Urgent / same-day upgrade (capacity-dependent)</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Note: We don’t remove large junk or furniture. For apartment cleanout (trash-out) services, we can refer a trusted partner.
              </p>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Process — Our 4-Step Breakdown</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
              <p className="mt-2 text-sm">We do a quick tour (you or your agent). If something gets flagged within 24 hours, we’ll make it right—satisfaction-first.</p>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Packages / Pricing Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Package</th>
                  <th className="p-3 border">Highlights</th>
                  <th className="p-3 border">Great For</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((p) => (
                  <tr key={p.name} className="bg-white">
                    <td className="p-3 border font-semibold">{p.name}</td>
                    <td className="p-3 border">{p.highlights}</td>
                    <td className="p-3 border">{p.greatFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text">Pricing guidance: final cost depends on size, condition, add-ons, and urgency. Minimum booking applies. Share photos for the most accurate estimate.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Why Choose Us</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-text">
            <li>Locally owned and active across Spokane Valley, Spokane, and Liberty Lake</li>
            <li>Licensed & insured; vetted, background-checked pros</li>
            <li>Eco- & pet-safe products; HEPA filtration</li>
            <li>Checklist-driven for inspection-ready results</li>
            <li>On-time arrivals with live updates and photo documentation</li>
            <li>Satisfaction-first policy (flag issues within 24 hours and we’ll make it right)</li>
            <li>Clear scopes & no surprises on quotes and timelines</li>
          </ul>
        </div>
      </section>

      <section className="py-12 bg-service-band">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-2">Service Area</h2>
          <p>We serve Spokane Valley, Spokane, and Liberty Lake, including nearby neighborhoods and communities along I-90. If you’re just outside these areas, ask—we can often accommodate with a small travel fee.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center">Testimonials</h2>
          <ContentCard as="blockquote">
            <p>“Flawless move-out clean. The manager said it was the easiest inspection all month. I got my full deposit back.”</p>
            <footer className="mt-3 text-sm text-gray-600">— Lauren K., Spokane Valley</footer>
          </ContentCard>
          <ContentCard as="blockquote">
            <p>“Booked on short notice and they still nailed the details—oven, fridge, baseboards—everything looked brand new.”</p>
            <footer className="mt-3 text-sm text-gray-600">— Dan R., Liberty Lake</footer>
          </ContentCard>
          <ContentCard as="blockquote">
            <p>“Our tenants left the place rough. Cleaners Ready 2 GO got it ready for photos the next day. Highly recommend.”</p>
            <footer className="mt-3 text-sm text-gray-600">— Melissa P., Property Manager, Spokane</footer>
          </ContentCard>
        </div>
      </section>

      <section className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center mb-6">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i + 1}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-700 space-y-1">
          <p><strong>Cleaners Ready 2 GO</strong></p>
          <p>{brand.address.street}, {brand.address.city}, {brand.address.state} {brand.address.zip}</p>
          <p>Phone: <a className="underline" href={`tel:${brand.phone}`}>{brand.phone}</a> · Email: <a className="underline" href={`mailto:${brand.email}`}>{brand.email}</a></p>
          <p>Hours: {brand.hours}</p>
          <p>© 2025 Cleaners Ready 2 GO. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
