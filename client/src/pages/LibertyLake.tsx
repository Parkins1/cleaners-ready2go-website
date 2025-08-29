import React, { useCallback, useEffect, useState } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import heroLiberty from "@assets/liberty-lake-wa-house-cleaning-hero.webp";
import hero480 from "@assets/liberty-lake-wa-house-cleaning-hero-480.webp";
import hero768 from "@assets/liberty-lake-wa-house-cleaning-hero-768.webp";
import hero1024 from "@assets/liberty-lake-wa-house-cleaning-hero-1024.webp";
import hero480Avif from "@assets/liberty-lake-wa-house-cleaning-hero-480.avif";
import hero768Avif from "@assets/liberty-lake-wa-house-cleaning-hero-768.avif";
import hero1024Avif from "@assets/liberty-lake-wa-house-cleaning-hero-1024.avif";
import ContentCard from "@/components/ContentCard/ContentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useModal } from "@/components/modal/ModalProvider";
import Icon from "@/components/ui/icon";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/**
 * Liberty Lake location page
 * - Re-uses core visual components from the site via LocationPageTemplate:
 *   * ServicesSection (Service cards)
 *   * ProcessSection (4-step how it works)
 * - Adds Liberty Lake specific copy and extra sections without duplicating standard sections
 */
export default function LibertyLake() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { open } = useModal();

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

  const pageDetails = {
    locationName: "Liberty Lake",
    heroImage: heroLiberty,
    heroAlt: 'House cleaning services in Liberty Lake, WA — Cleaners Ready 2Go',
    heroImgSrcSet: `${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`,
    heroSources: [{ type: 'image/avif', srcSet: `${hero480Avif} 480w, ${hero768Avif} 768w, ${hero1024Avif} 1024w` }],
    heroWidth: 1392,
    heroHeight: 752,
    introText:
      "Professional, Reliable & Eco-Friendly Cleaning for Liberty Lake Homes · Locally Owned • Licensed & Insured • 100% Satisfaction Guaranteed",
    services: [
      {
        title: "Regular House Cleaning",
        description:
          "Weekly, bi-weekly, or monthly visits tailored to your schedule — consistent results from a trusted local team.",
      },
      {
        title: "Deep Cleaning",
        description:
          "Thorough, room-by-room deep cleans for spring refreshes, pre-holiday prep, or seasonal allergen removal.",
      },
      {
        title: "Move-In / Move-Out",
        description:
          "Move-focused cleaning that meets landlord and property manager standards so you can transition stress-free.",
      },
    ],
    // reuse the central service card catalog for consistent visuals (mutable array as required by props)
    serviceCardIds: ["residential", "deep-cleaning", "move-out", "apartment-cleaning"],
    testimonial: {
      quote:
        "We've been using Cleaners Ready 2 GO for over two years — reliable, thorough, and respectful of our home.",
      name: "Jennifer & Mark Thompson",
    },
    // Liberty Lake specific long-form sections (doesn't duplicate ProcessSection or ServicesSection)
    extraSections: [
      {
        title: "Liberty Lake Services",
        content: (
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="upkeep" className="w-full">
              <TabsList className="mb-4 grid grid-cols-2 sm:inline-flex gap-2 bg-transparent p-0">
                <TabsTrigger value="upkeep">Upkeep</TabsTrigger>
                <TabsTrigger value="deep">Deep Reset</TabsTrigger>
                <TabsTrigger value="moveout">Move‑Out</TabsTrigger>
                <TabsTrigger value="turnover">STR Turnovers</TabsTrigger>
              </TabsList>

              <TabsContent value="upkeep">
                <ContentCard>
                  <h3 className="text-lg font-bold mb-2 text-brand-gold">Keep‑It‑Clean Routine</h3>
                  <p className="text-sm text-gray-700 mb-3">Weekly, bi‑weekly, or monthly visits tuned to lake‑day schedules and busy weeks.</p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Kitchen, baths, floors, and high‑touch points</li>
                    <li>• Rotating detail tasks to keep baseboards and vents in check</li>
                    <li>• Same vetted technicians whenever possible</li>
                  </ul>
                  <Button variant="primary" onClick={() => open("quote")}>Get My Free Quote</Button>
                </ContentCard>
              </TabsContent>

              <TabsContent value="deep">
                <ContentCard>
                  <h3 className="text-lg font-bold mb-2 text-brand-gold">The Liberty Lake Deep Reset</h3>
                  <p className="text-sm text-gray-700 mb-3">Ideal before summer or after holidays. Focused degrease/descale and hand detail.</p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Cabinet fronts, door tracks, switches, and trim</li>
                    <li>• Interior glass, mirrors, and range‑hood degrease</li>
                    <li>• Grout touch‑ups where feasible</li>
                  </ul>
                  <Button variant="primary" onClick={() => open("quote")}>Plan My Deep Clean</Button>
                </ContentCard>
              </TabsContent>

              <TabsContent value="moveout">
                <ContentCard>
                  <h3 className="text-lg font-bold mb-2 text-brand-gold">Move‑In / Move‑Out</h3>
                  <p className="text-sm text-gray-700 mb-3">Checklist‑guided service aligned with landlord and agent expectations.</p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Book 48–72 hours before the final walkthrough</li>
                    <li>• Utilities on for full lighting and hot water</li>
                    <li>• Inside oven/fridge and cabinets by request</li>
                  </ul>
                  <Button variant="primary" onClick={() => open("quote")}>Schedule My Move‑Out</Button>
                </ContentCard>
              </TabsContent>

              <TabsContent value="turnover">
                <ContentCard>
                  <h3 className="text-lg font-bold mb-2 text-brand-gold">Vacation Rental Turnovers</h3>
                  <p className="text-sm text-gray-700 mb-3">Airbnb/VRBO‑friendly changeovers between lake‑weekend guests.</p>
                  <ul className="text-sm space-y-1 mb-3">
                    <li>• Linen change, amenity restock, and supply inventory</li>
                    <li>• Timestamped photos; notes for damage or left items</li>
                  </ul>
                  <Button variant="primary" onClick={() => open("quote")}>Get Turnover Pricing</Button>
                </ContentCard>
              </TabsContent>
            </Tabs>
          </div>
        ),
      },
      {
        title: "Liberty Lake's Premier House Cleaning Service",
        content: (
          <>
            <p className="mb-4">
              Life in Liberty Lake offers the perfect blend of natural beauty and suburban comfort. From lake days to
              neighborhood events, homeowners here want cleaning service that keeps up with their lifestyle — not slow it down.
            </p>

            <p className="mb-4">
              Cleaners Ready 2 GO provides professional, reliable, and eco-conscious cleaning designed for Liberty Lake
              homes: background-checked teams, HEPA filtration, biodegradable products, and a consistent approach that
              protects your surfaces and your family.
            </p>

            <h3 className="text-xl font-semibold mt-6">Comprehensive House Cleaning Services</h3>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Regular House Cleaning</strong> — Weekly, bi-weekly, or monthly plans to keep a consistently fresh home.
              </li>
              <li>
                <strong>Deep Cleaning</strong> — Seasonal refreshes and thorough attention to hidden buildup (baseboards, vents, grout).
              </li>
              <li>
                <strong>Move-In / Move-Out</strong> — Landlord-ready checklists and deposit-protecting detail.
              </li>
              <li>
                <strong>Specialty Services</strong> — Post-construction cleanup, event prep & recovery, and appliance interior detailing.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Why Liberty Lake Homeowners Trust Us",
        content: (
          <>
            <p className="mb-3">
              We're local and we know the unique considerations of Liberty Lake living: lake humidity, seasonal pollen,
              and a mix of waterfront and planned neighborhoods. That local expertise informs our recommendations and
              yields longer-lasting results.
            </p>
            <ul className="list-inside space-y-2">
              <li>Licensed, bonded & insured for your peace of mind</li>
              <li>Background-checked, trained technicians and consistent teams for recurring clients</li>
              <li>Eco-friendly, pet-safe products and HEPA filtration for healthier indoor air</li>
            </ul>
          </>
        ),
      },
      {
        title: "Move-In / Move-Out — Transition Made Simple",
        content: (
          <>
            <p className="mb-3">
              Moving is stressful. Our move-in / move-out service follows detailed checklists commonly requested by
              property managers and real-estate professionals to help secure deposits and make listings show-ready.
            </p>
            <ul className="list-inside space-y-2">
              <li>Full-service deep clean of kitchens, baths, floors, and inside appliances</li>
              <li>Targeted attention to high-traffic areas and rental-inspection items</li>
              <li>Flexible scheduling to meet turnover windows for short-term rentals</li>
            </ul>
          </>
        ),
      },
      {
        title: "Simple Booking — Professional Results",
        content: (
          <>
            <ol className="list-decimal list-inside space-y-2">
              <li>Request your personalized quote online or call us — tell us home size, frequency, and any special requests.</li>
              <li>Choose the date & time that fits your schedule (weekends available).</li>
              <li>Our trained team arrives with equipment and supplies and completes a thorough cleaning.</li>
              <li>Enjoy a spotless home and more free time to enjoy Liberty Lake.</li>
            </ol>

            <p className="mt-4">
              Ready to reclaim your weekends?{" "}
              <button
                type="button"
                className="underline font-semibold"
                onClick={() => open("quote")}
              >
                Get Your Free Quote Today →
              </button>
            </p>
          </>
        ),
      },
      {
        title: "Service Area & Local Notes",
        content: (
          <>
            <p className="mb-2">
              Primary Service Areas: <strong>Liberty Lake</strong>, Greenacres, Otis Orchards, Post Falls (ID), Spokane Valley.
            </p>
            <p className="text-sm text-gray-600">
              We tailor our approach for lakefront homes, rural acreage, and newer planned neighborhoods so every property
              receives the right level of care.
            </p>
            <p className="mt-2 text-sm">ZIP codes: 99019 — 99016 — 99037 — 99206</p>
          </>
        ),
      },
      {
        title: "Local Cleaning Challenges",
        content: (
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Lake Humidity & Mineral Mist</strong> — Spot prevention on glass and fixtures in lake‑adjacent homes.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Pollen & Tree Debris</strong> — Seasonal window‑track and sill detailing to manage wind‑blown pollen.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Trail & Beach Sand</strong> — Entryway mat care and hard‑floor resets after lake days.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Vacation Turnover Timing</strong> — Checklist‑driven turnovers for Airbnb/VRBO near peak weekends.</span>
            </li>
          </ul>
        ),
      },
      {
        title: "Neighborhoods We Serve",
        content: (
          <ul className="grid md:grid-cols-2 gap-2 list-none text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />River District</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Rocky Hill</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Legacy Ridge</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Meadowwood</li>
          </ul>
        ),
      },
      {
        title: "Highlights",
        content: (
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Instant online pricing</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Color‑coded microfiber system</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Photo‑verified results</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Background‑checked team</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />EPA‑registered options available</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Flexible arrival windows</li>
          </ul>
        ),
      },
      {
        title: "A Fresh, Healthy Home Without Lifting a Finger",
        content: (
          <>
            <p className="mb-3">Weekend plans shouldn’t be lost to chores. We bring a friendly, professional team and a proven checklist so your home feels fresh without the hassle.</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>67‑point checklist for consistent results</li>
              <li>Low‑odor, low‑VOC options; SDS available on request</li>
            </ul>
          </>
        ),
      },
      {
        title: "Packages",
        content: (
          <div className="grid md:grid-cols-2 gap-4">
            <ContentCard>
              <h4 className="font-semibold">Set‑It‑and‑Forget‑It Maintenance</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Weekly</li>
                <li>Bi‑weekly</li>
                <li>Monthly</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h4 className="font-semibold">The Liberty Lake Deep Reset</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Degrease/descale focus</li>
                <li>Baseboards and trim detailing</li>
                <li>Interior glass and mirrors</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h4 className="font-semibold">Checklist‑Driven Turnovers</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Book 48–72 hours ahead</li>
                <li>Utilities on for full walkthrough</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h4 className="font-semibold">Guest‑Ready in Record Time</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Inventory checks</li>
                <li>Damage/photo notes</li>
              </ul>
            </ContentCard>
          </div>
        ),
      },
      {
        title: "Liberty Lake Residents Share Their Experience",
        content: (
          <div className="grid md:grid-cols-3 gap-6">
            <ContentCard as="blockquote">“Sparkling before a lakeside birthday—they handled details we’d miss.” — Jenna P., River District</ContentCard>
            <ContentCard as="blockquote">“Bi‑weekly routine keeps our gear‑heavy home under control.” — David R., Rocky Hill</ContentCard>
            <ContentCard as="blockquote">“Turnover cleans are punctual and thorough—our ratings stay strong.” — Aaron M., Legacy Ridge</ContentCard>
          </div>
        ),
      },
      {
        title: "Satisfaction Promise",
        content: (
          <>
            <p>If an area listed on your cleaning checklist appears missed, contact us within 24 hours. We’ll schedule a touch‑up visit at no added labor cost, provided reasonable access is granted.</p>
            <p className="mt-2 text-sm text-gray-600">Note: Promise limited to areas explicitly included in the agreed scope. Pre‑existing damage or excessive wear may limit results.</p>
          </>
        ),
      },
      {
        title: "Frequently Asked Questions",
        content: (
          <>
            <Accordion type="single" collapsible className="w-full rounded-xl bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm shadow-sm border border-white/20">
              <AccordionItem value="ll-faq-1">
                <AccordionTrigger>What types of house cleaning services do you offer in Liberty Lake?</AccordionTrigger>
                <AccordionContent>
                  We offer standard/recurring cleaning, deep cleaning, move-in/move-out cleaning, and specialized services like post-construction cleanup and vacation rental turnovers, all tailored for Liberty Lake homes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-2">
                <AccordionTrigger>Do you use eco-friendly cleaning products?</AccordionTrigger>
                <AccordionContent>
                  Yes, we use professional-grade, eco-friendly cleaning products and HEPA-filtered vacuums for a safer and healthier home environment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-3">
                <AccordionTrigger>Are your cleaners background-checked and insured?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! Our team members are background-checked, bonded, insured, and trained for consistent, trustworthy service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-4">
                <AccordionTrigger>Can I schedule weekly, bi-weekly, or monthly cleaning?</AccordionTrigger>
                <AccordionContent>
                  Yes, choose from weekly, bi-weekly, or monthly service to match your home’s needs and lifestyle. Many clients prefer bi-weekly as the perfect balance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-5">
                <AccordionTrigger>What is included in your standard house cleaning service?</AccordionTrigger>
                <AccordionContent>
                  Standard cleaning covers dusting, vacuuming, mopping, sanitizing bathrooms, and cleaning kitchens—ideal for regular upkeep.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-6">
                <AccordionTrigger>Do you provide deep cleaning or seasonal cleaning options?</AccordionTrigger>
                <AccordionContent>
                  Yes, our deep cleaning covers baseboards, blinds, grout, and behind appliances—great for spring cleaning or before special events.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-7">
                <AccordionTrigger>How do I book a cleaning appointment for my Liberty Lake home?</AccordionTrigger>
                <AccordionContent>
                  Simply request a quote online or call us. We’ll customize a plan and schedule a convenient appointment that fits your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-8">
                <AccordionTrigger>Do I need to provide any cleaning supplies or equipment?</AccordionTrigger>
                <AccordionContent>
                  No, we bring all necessary supplies and equipment, including eco-friendly products and advanced vacuums.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-9">
                <AccordionTrigger>Can you clean my home while I am not there?</AccordionTrigger>
                <AccordionContent>
                  Yes, we can clean your home while you’re away. Just share access instructions when scheduling and return to a spotless space.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-10">
                <AccordionTrigger>How do you handle special requests or customized cleaning plans?</AccordionTrigger>
                <AccordionContent>
                  We customize every cleaning plan to fit your preferences and home’s layout. Just let us know your specific needs or requests during booking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-11">
                <AccordionTrigger>What should I do to prepare my home for a cleaning visit?</AccordionTrigger>
                <AccordionContent>
                  Just tidy up any personal items or valuables you'd like secured; otherwise, we handle all cleaning preparations and equipment setup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-12">
                <AccordionTrigger>Is your service suitable for vacation homes or Airbnb/VRBO properties?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer comprehensive turnover services for short-term rentals, including fresh linens, supply restock, and prompt changeover cleaning.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-13">
                <AccordionTrigger>What is your satisfaction guarantee policy?</AccordionTrigger>
                <AccordionContent>
                  If you’re not completely satisfied, let us know—we’ll return promptly and ensure your cleaning meets our high standards, guaranteed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-14">
                <AccordionTrigger>Do you offer move-in or move-out cleaning for renters and homeowners?</AccordionTrigger>
                <AccordionContent>
                  Yes, our move-in/move-out service follows detailed checklists to meet landlord or property manager requirements and help secure deposits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ll-faq-15">
                <AccordionTrigger>Which Liberty Lake neighborhoods do you serve?</AccordionTrigger>
                <AccordionContent>
                  We serve all Liberty Lake neighborhoods, including River District, Rocky Hill, Legacy Ridge, and Meadowwood, plus nearby areas like Greenacres and Otis Orchards.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </>
        ),
      },
    ],
  };
  return (
    <>
      <style>{`
        [data-active="true"] {
          transform: scale(1.12);
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
          transform: scale(0.85);
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
        @media (min-width: 1024px) {
          [data-active="true"] { flex: 0 0 48%; max-width: 48%; }
          [data-active="false"] { flex: 0 0 26%; max-width: 26%; }
        }
      `}</style>
      <LocationPageTemplate {...pageDetails} />
    </>
  );
}
