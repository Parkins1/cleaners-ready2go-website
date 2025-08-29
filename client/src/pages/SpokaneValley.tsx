 // llm:spokane-valley-migrated
 import React, { useCallback, useEffect, useState } from 'react';
 import { Button } from "@/components/ui/button";
 import { useModal } from "@/components/modal/ModalProvider";
 import HeroSection from "@/components/HeroSection/HeroSection";
import heroImage from "@assets/spokane-valley-wa-house-cleaning-hero.webp";
import hero480 from "@assets/spokane-valley-wa-house-cleaning-hero-480.webp";
import hero768 from "@assets/spokane-valley-wa-house-cleaning-hero-768.webp";
import hero1024 from "@assets/spokane-valley-wa-house-cleaning-hero-1024.webp";
import hero480Avif from "@assets/spokane-valley-wa-house-cleaning-hero-480.avif";
import hero768Avif from "@assets/spokane-valley-wa-house-cleaning-hero-768.avif";
import hero1024Avif from "@assets/spokane-valley-wa-house-cleaning-hero-1024.avif";
 import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
 import ContentCard from "@/components/ContentCard/ContentCard";
import Icon from "@/components/ui/icon";
 import { ServicesSection, ProcessSection } from "@/components/Sections";
 import CalloutBanner from "@/components/CalloutBanner/CalloutBanner";
 import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
   type CarouselApi,
 } from "@/components/ui/carousel";

export default function SpokaneValley() {
  const { open } = useModal();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isActive = useCallback(
    (index: number) => {
      return current === index;
    },
    [current]
  );

  const faqs = [
    { q: "Do I need to be home?", a: "No. Provide a code or key; we text arrival and departure photos for your records." },
    { q: "Are your products eco-friendly?", a: "Whenever feasible, we choose cleaning solutions that carry reputable third-party eco-labels or low-toxicity ratings. Documentation is available on request." },
    { q: "Will you guarantee I get my full deposit back?", a: "While many clients report positive outcomes, final deposit decisions rest solely with property managers or landlords." },
    { q: "How far in advance should I book?", a: "Peak seasons (May–August, December) fill 7–10 days out. Book as early as possible to secure your preferred slot." },
    { q: "Can you remove hard-water stains?", a: "We use mild descalers designed for mineral buildup, but severe etching may not be fully reversible." },
    { q: "Do you bring your own supplies?", a: "Yes. We bring professional-grade tools and solutions suitable for most surfaces. If you prefer specific products, we’re happy to use them if provided." },
    { q: "How do you handle pets?", a: "We love pets. Please let us know about pets in advance and any gate/crate notes. For safety, we avoid rooms with stressed animals." },
    { q: "What forms of payment do you accept?", a: "Most major cards and invoicing for recurring clients. Payment is typically due upon completion unless otherwise arranged." },
  ];

  return (
    <>
      <title>Professional House Cleaning in Spokane Valley, WA</title>
      <meta name="description" content="Locally owned, licensed & insured, satisfaction-focused house cleaning services in Spokane Valley, WA. Request your FREE quote today!" />

      <HeroSection
        image={heroImage}
        imageAlt="House cleaning services in Spokane Valley, WA — Cleaners Ready 2Go"
        title="Professional House Cleaning in Spokane Valley, WA"
        subtitle={
          <>
            <p className="text-lg lg:text-xl text-text mb-10 leading-relaxed max-w-2xl mx-auto">
              Locally owned - Licensed & insured - Satisfaction-focused service
            </p>
          </>
        }
        actions={
          <Button onClick={() => open("quote")} variant="primary" size="lg">
            Request Your FREE Quote
          </Button>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${hero480Avif} 480w, ${hero768Avif} 768w, ${hero1024Avif} 1024w` }]}
      />

      {/* Standardized sections to match Home placement: Services then Process */}
      <ServicesSection />
      <ProcessSection />

      {/* Spokane Valley Services Carousel */}
      <section className="py-8 bg-white">
        <div className="py-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                data-active={isActive(0)}
              >
                <ContentCard className="p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-gold">
                    Spokane Valley Cleaning, Matched To Your Routine
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Professional cleaning services tailored to Valley commuter schedules, pets, and yard-work dust. Your dedicated Team Lead maintains consistent standards.
                  </p>
                </ContentCard>
              </CarouselItem>

              <CarouselItem
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                data-active={isActive(1)}
              >
                <ContentCard className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                    Effortless Upkeep
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600 mb-2">
                      Weekly, bi-weekly, or monthly service to handle commuter schedules, pets, and yard-work dust.
                    </p>
                    <ul className="space-y-1 text-xs">
                      <li><strong>Weekly:</strong> Best for busy families and allergy-prone homes</li>
                      <li><strong>Bi-weekly:</strong> Our most requested mix of value and consistency</li>
                      <li><strong>Monthly:</strong> A reliable reset that keeps freshness on track</li>
                    </ul>
                  </div>
                </ContentCard>
              </CarouselItem>

              <CarouselItem
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                data-active={isActive(2)}
              >
                <ContentCard className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                    The Valley Deep Reset
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Ideal for seasonal deep cleans, pre-market prep, or post-event recovery. Includes kitchen/bath degrease with targeted descaling.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Detailed baseboards, switches, and door frames</li>
                    <li>• Interior glass and mirrors polished to clarity</li>
                  </ul>
                </ContentCard>
              </CarouselItem>

              <CarouselItem
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                data-active={isActive(3)}
              >
                <ContentCard className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                    Checklist-Guided Move-Outs
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Built around Spokane Valley landlord and broker standards. We focus on "show well" touches.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Book 48–72 hours before your final walkthrough</li>
                    <li>• Ensure utilities remain on for light and hot water</li>
                  </ul>
                </ContentCard>
              </CarouselItem>

              <CarouselItem
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                data-active={isActive(4)}
              >
                <ContentCard className="p-6 md:p-8">
                  <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                    STR Turnovers, On Schedule
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    We sync with Airbnb/VRBO to keep your place guest-ready between bookings off I‑90.
                  </p>
                  <ul className="text-xs space-y-1">
                    <li>• Toiletry and supply inventory confirmation</li>
                    <li>• Photo notes for damage or forgotten items</li>
                  </ul>
                </ContentCard>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="py-8 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
              <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Instant online pricing   no surprise fees</li>
              <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Color‑coded microfiber system to help reduce cross‑contamination</li>
              <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Photo-verified results after every clean</li>
              <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Background-checked team</li>
              <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />EPA-registered options available</li>
              <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Flexible arrival windows</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">A Fresh, Healthy Home Without Lifting a Finger</h2>
          <p className="text-lg text-text leading-relaxed">
            Weekends in Spokane Valley are for Centennial Trail rides, float trips on the Spokane River, and grilling at Mirabeau Meadows not scouring grout lines. Cleaners Ready 2 GO bridges the gap between “wish it were clean” and “wow, it is clean.” Our uniformed technicians follow a 67-point checklist and, where appropriate, use EPA-registered products to help reduce common household germs and allergens.*
          </p>
          <p className="text-lg text-text leading-relaxed mt-4">
            We’re homeowners and renters too we know the difference a professionally cleaned space makes for daily routines, allergies, and peace of mind. From high-touch surfaces to forgotten corners, our process is designed for consistent, repeatable results you can feel the moment you walk in.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *EPA registration verifies a product has been tested for efficacy; actual in-home results can vary based on surface condition and dwell time.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Cleaning Packages Built for Valley Lifestyles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">Set-It-and-Forget-It Maintenance</h3>
              <p className="text-text">
                Choose weekly, bi-weekly, or monthly visits and keep surprise guests from catching you off guard. Our Team Lead notes your preferences like which heirloom glassware stays hand-washed and updates your digital checklist after every clean.
              </p>
              <p className="text-text mt-2">
                Recurring visits focus on kitchens, baths, floors, and high-touch areas. We rotate detail tasks so even baseboards, vents, and window sills get regular attention over time.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Weekly: best for busy households, pets, or allergy concerns</li>
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Bi-weekly: our most popular balance of value and upkeep</li>
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Monthly: a reliable reset between deeper refreshes</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">The Valley Reset Clean</h3>
              <p className="text-text">
                Ideal for seasonal turnovers or post-holiday clutter. We hand-wipe cabinet fronts, detail door tracks, wash interior windows, degrease range hoods, and spot-treat light fixtures. Customers report this service helps them start the season feeling refreshed.
              </p>
              <p className="text-text mt-2">
                Expect more time invested in build-up areas under appliances (when accessible), tile/grout lines, and hard-to-reach trim. It pairs well with a follow-up recurring plan for easier maintenance.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Thorough bath and kitchen degrease and descale focus</li>
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Baseboards, switch plates, door frames detailed</li>
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Interior glass and mirrors polished for clarity</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">Checklist-Driven Turnovers</h3>
              <p className="text-text">
                Our move cleans follow common Spokane-area landlord and Realtor checklists to help you present the property in its best light. While we can’t guarantee every deposit outcome, many renters say our thorough cleaning contributed to positive final inspections.
              </p>
              <p className="text-text mt-2">
                We target “show well” details inside cabinets/drawers, inside oven/fridge (upon request), and edges where dust collects. Add carpet extraction or garage sweep-outs for a complete turnover.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Book 48–72 hours before your final walkthrough</li>
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Leave utilities on for better lighting and warm water</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">Guest-Ready in Record Time</h3>
              <p className="text-text">
                We sync with Airbnb/VRBO calendars, replace linens, restock amenities, and send timestamped photos so you have documentation for each stay.
              </p>
              <p className="text-text mt-2">
                Fast turnarounds, consistent staging, and consumables tracking keep your listing’s cleanliness reviews on point without you being on-site.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Inventory checks for toiletries and supplies</li>
                <li className="flex items-center"><Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />Damage/left-behind item notes with photos</li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Why Spokane Valley Chooses Cleaners Ready 2 GO</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            <div>
              <Icon name="ShieldCheck" className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Local Presence</h3>
              <p className="text-sm">Our office off Sprague Ave lets us reach Greenacres or Veradale quickly.</p>
            </div>
            <div>
              <Icon name="Leaf" className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Licensed & Insured</h3>
              <p className="text-sm">Proper coverage gives homeowners added peace of mind.</p>
            </div>
            <div>
              <Icon name="Sparkles" className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Evidence-Based Products</h3>
              <p className="text-sm">We select EPA-registered or third-party-certified solutions whenever possible and follow manufacturer directions for effective use.</p>
            </div>
            <div>
              <Icon name="Users" className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Transparent Pricing</h3>
              <p className="text-sm">Flat rates based on square footage; any add-ons are quoted before work begins.</p>
            </div>
            <div>
              <Icon name="CheckCircle" className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Photo Log</h3>
              <p className="text-sm">Receive before-and-after images for added transparency and easy remote approval.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-6 text-center">Cleaning Challenges Unique to Spokane Valley</h2>
          <ul className="space-y-4">
            <li><strong>Pine Pollen Surges</strong> – April’s yellow dust embeds in carpets. Our quarterly pollen-flush damp-wipe is designed to trap particulates instead of pushing them back into the air.</li>
            <li><strong>Wood & Pellet Heat</strong> – Winter micro-ash collects on beams. Anti-static cloths followed by microfiber rinses help reduce streaking.</li>
            <li><strong>Hard-Water Wells</strong> – Minerals cloud shower glass. We apply mild descalers intended to restore clarity without harsh acids.</li>
            <li><strong>Outdoor-Adventure Residue</strong> – Boats from Liberty Lake or bikes from Centennial Trail haul mud inside. Extra entryway attention keeps soil at the threshold.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-8 text-center">The Four-Step Shine System</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">1. Instant Quote</h3>
              <p>Enter square footage, bed/bath count, and frequency online. Our estimator tool provides an instant flat-rate price.</p>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">2. Book Online</h3>
              <p>Select optional add-ons, choose a two-hour arrival window, sign electronically, and you’re booked.</p>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">3. We Clean</h3>
              <p>Crew arrives in Cleaners Ready 2 GO uniforms and shoe covers, using color-coded microfiber to help prevent cross-contamination.</p>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-4">4. You Relax</h3>
              <p>Walk through with the Team Lead or review photos remotely. If something seems off, let us know within 24 hours and we’ll address it at no additional labor cost (access required).</p>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">Proudly Serving Every Corner of Spokane Valley</h2>
          <p className="text-lg text-text leading-relaxed">
            From Liberty Lake riverfront condos to ranch homes near Opportunity Elementary, we cover:
          </p>
          <p className="text-lg text-text leading-relaxed font-bold mt-4">
            Greenacres - Opportunity - Veradale - Dishman - Trentwood - Ponderosa - Barker & Sprague Corridor
          </p>
          <p className="text-lg text-text leading-relaxed mt-4">
            ZIP codes: 99016 - 99037 - 99206 - 99212 - 99216 - 99217
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-6 text-center">Satisfaction Promise*</h2>
          <p className="text-lg text-text leading-relaxed">
            If an area listed on your cleaning checklist appears missed, contact us within 24 hours. We’ll schedule a touch-up visit at no added labor cost, provided reasonable access is granted.
          </p>
          <p className="text-lg text-text leading-relaxed mt-4">
            We aim for clarity and fairness. Your checklist defines the scope; if you need more than the original scope, we’ll quote the difference up front no surprises.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            *This promise is limited to areas explicitly included in the agreed scope of work. Conditions such as pre-existing damage or excessive wear may limit achievable results.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">Valley Residents Share Their Experience</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ContentCard>
              <p>“Booked a deep clean before Hoopfest weekend. The place felt refreshingly airy, and the pollen dust was gone.”</p>
              <p className="font-bold mt-4"> Katie L., Greenacres</p>
            </ContentCard>
            <ContentCard>
              <p>“Our Airbnb near Brown’s Park has maintained high cleanliness scores since partnering with Ready 2 GO.”</p>
              <p className="font-bold mt-4"> Travis S., Trentwood</p>
            </ContentCard>
            <ContentCard>
              <p>“They handled the move-out cleaning and the property manager said it looked great helped us avoid extra fees.”</p>
              <p className="font-bold mt-4"> Morgan D., Veradale</p>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-text mb-6">Your Spotless Valley Home Starts Here</h2>
          <p className="text-lg text-text leading-relaxed mb-8">
            Click “Request My Quote” or call 509-232-9810. Weekend slots fill fast—book today and enjoy more time for life’s adventures.
          </p>
          <Button onClick={() => open("quote")} variant="primary" size="lg">
            Request My Quote
          </Button>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full rounded-xl bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm shadow-sm border border-white/20">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <CalloutBanner
        title="Make Your Spokane Valley Home Shine"
        body="Request a free quote and let our licensed, local team handle the rest."
        variant="gold"
        actions={<Button onClick={() => open("quote")} variant="primary">Request My Quote</Button>}
      />
      <style>{`
        [data-active="true"] {
          transform: scale(1.08);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(197, 155, 75, 0.3);
          border: 2px solid rgba(197, 155, 75, 0.4);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(197, 155, 75, 0.02));
          padding: 2rem 2.5rem;
        }
        [data-active="true"] .text-brand-gold {
          font-weight: 800;
          text-shadow: 0 1px 2px rgba(197, 155, 75, 0.3);
        }
        [data-active="true"] .text-gray-600 {
          font-weight: 600;
          color: #374151;
        }
        [data-active="false"] {
          transform: scale(0.92);
          opacity: 0.5;
          z-index: 1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          padding: 1.5rem 2rem;
        }
        [data-active="false"] .text-brand-gold {
          font-weight: 600;
        }
        [data-active="false"] .text-gray-600 {
          font-weight: 400;
          color: #6b7280;
        }

        @media (min-width: 768px) {
          [data-active="true"] {
            padding: 2.5rem 3rem;
          }
          [data-active="false"] {
            padding: 2rem 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
