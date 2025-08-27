import React, { useCallback, useEffect, useState } from 'react';
import LocationPageTemplate from './LocationPageTemplate';
import heroImage from "@assets/greenacres-wa-house-cleaning-hero.webp";
import hero480 from "@assets/greenacres-wa-house-cleaning-hero-480.webp";
import hero768 from "@assets/greenacres-wa-house-cleaning-hero-768.webp";
import hero1024 from "@assets/greenacres-wa-house-cleaning-hero-1024.webp";
import hero480Avif from "@assets/greenacres-wa-house-cleaning-hero-480.avif";
import hero768Avif from "@assets/greenacres-wa-house-cleaning-hero-768.avif";
import hero1024Avif from "@assets/greenacres-wa-house-cleaning-hero-1024.avif";
import ContentCard from '@/components/ContentCard/ContentCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

export default function Greenacres() {
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
    (index: number) => current === index,
    [current]
  );
  const pageDetails = {
    locationName: 'Greenacres',
    heroImage: heroImage,
    heroAlt: 'House cleaning services in Greenacres, WA — Cleaners Ready 2Go',
    heroImgSrcSet: `${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`,
    heroSources: [{ type: 'image/avif', srcSet: `${hero480Avif} 480w, ${hero768Avif} 768w, ${hero1024Avif} 1024w` }],
    heroWidth: 1392,
    heroHeight: 752,
    introText:
      "We proudly serve Greenacres with reliable, satisfaction-focused house cleaning. From river-adjacent townhomes to family homes near Greenacres Middle School, our team delivers consistent, repeatable results.",
    serviceCardIds: (['residential','deep-cleaning','move-out','apartment-cleaning'] as import("@/components/ServiceCard/catalog").ServiceCatalogId[]),
    testimonial: {
      quote: 'Booked a deep clean before a family reunion—our home felt airy and dust‑free.',
      name: 'Amanda H.',
    },
    extraSections: [
      {
        title: 'Greenacres Services',
        content: (
          <div className="py-8">
            <Carousel
              opts={{
                align: 'center',
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
                      Greenacres Cleaning, Matched To Your Routine
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Professional cleaning services designed around Greenacres living near the river, trails, and parks. Our dedicated Team Lead ensures consistent, premium care.
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
                        Weekly, bi-weekly, or monthly plans to keep your home guest-ready for river days or trail outings.
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Weekly:</strong> Best for active households and allergy concerns</li>
                        <li><strong>Bi-weekly:</strong> A popular balance of consistency and value</li>
                        <li><strong>Monthly:</strong> A reliable reset that restores freshness</li>
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
                      The Greenacres Deep Reset
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Ideal for seasonal deep cleans or post-event recovery. Includes targeted descaling and detailed baseboards.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Interior glass and mirrors polished to clarity</li>
                      <li>• Baseboards, switches, and frames detailed</li>
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
                      We follow landlord checklists for stress-free move-outs, focusing on "show well" details.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Book 48–72 hours before your final walkthrough</li>
                      <li>• Keep utilities on for light and hot water</li>
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
                      We sync with Airbnb/VRBO calendars for smooth guest changeovers near the Spokane River.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Supply inventory confirmation</li>
                      <li>• Photo notes for damage or left items</li>
                    </ul>
                  </ContentCard>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ),
      },
      {
        title: 'A Fresh, Healthy Home Without Lifting a Finger',
        content: (
          <>
            <p>
              Weekends in Greenacres are for time on the Centennial Trail, afternoons by the Spokane River, youth sports at nearby parks,
              and quick trips to Liberty Lake—not scrubbing baseboards. Our uniformed technicians follow a 67‑point checklist and, where
              appropriate, use EPA‑registered products to help reduce common household germs and allergens.
            </p>
            <p className="mt-4">
              We’re homeowners and renters too—so we know the difference a professionally cleaned space makes for daily routines, allergies,
              and peace of mind. From high‑touch surfaces to forgotten corners, our process delivers consistent results you can feel the
              moment you walk in.
            </p>
          </>
        ),
      },
      {
        title: 'Cleaning Packages Built for Greenacres Lifestyles',
        content: (
          <div className="grid md:grid-cols-2 gap-8">
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-2">Set‑It‑and‑Forget‑It Maintenance</h3>
              <p>
                Choose weekly, bi‑weekly, or monthly visits and keep surprise guests from catching you off guard. Our Team Lead notes your
                preferences and updates your digital checklist after every clean. We rotate detail tasks so baseboards, vents, and window
                sills get attention over time.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>• Weekly: best for busy households, pets, or allergy concerns</li>
                <li>• Bi‑weekly: our most popular balance of value and upkeep</li>
                <li>• Monthly: a reliable reset between deeper refreshes</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-2">The Greenacres Reset Clean</h3>
              <p>
                Ideal for seasonal turnovers or post‑holiday clutter. We hand‑wipe cabinet fronts, detail door tracks, wash interior
                windows, degrease range hoods, and spot‑treat light fixtures. Expect extra time on build‑up areas and hard‑to‑reach trim.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>• Thorough bath and kitchen degrease and descale focus</li>
                <li>• Baseboards, switch plates, door frames detailed</li>
                <li>• Interior glass and mirrors polished for clarity</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-2">Checklist‑Driven Turnovers</h3>
              <p>
                Our move cleans follow common Spokane‑area landlord and Realtor checklists. We target “show well” details inside
                cabinets/drawers, oven/fridge (upon request), and edges where dust collects.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>• Book 48–72 hours before your final walkthrough</li>
                <li>• Leave utilities on for better lighting and warm water</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h3 className="text-xl font-bold text-text mb-2">Guest‑Ready in Record Time</h3>
              <p>
                We sync with Airbnb/VRBO calendars, replace linens, restock amenities, and send timestamped photos so you have documentation
                for each stay. Fast turnarounds and consistent staging help keep your listing’s cleanliness reviews on point.
              </p>
              <ul className="mt-3 space-y-1 text-sm">
                <li>• Inventory checks for toiletries and supplies</li>
                <li>• Damage/left‑behind item notes with photos</li>
              </ul>
            </ContentCard>
          </div>
        ),
      },
      {
        title: 'Why Greenacres Chooses Cleaners Ready 2 GO',
        content: (
          <ul className="space-y-2">
            <li><strong>Local Presence</strong> — We reach Greenacres, Liberty Lake, and Veradale quickly.</li>
            <li><strong>Licensed & Insured</strong> — Proper coverage for added peace of mind.</li>
            <li><strong>Evidence‑Based Products</strong> — EPA‑registered or third‑party‑certified options with manufacturer guidance.</li>
            <li><strong>Transparent Pricing</strong> — Flat rates based on square footage; add‑ons quoted up front.</li>
            <li><strong>Photo Log</strong> — Before‑and‑after images for transparency and easy remote approval.</li>
          </ul>
        ),
      },
      {
        title: 'Cleaning Challenges Unique to Greenacres',
        content: (
          <ul className="space-y-2">
            <li><strong>Pine Pollen Surges</strong> — Quarterly pollen‑flush damp‑wipe to trap particulates.</li>
            <li><strong>Wood & Pellet Heat Residue</strong> — Anti‑static cloths followed by microfiber rinses for mantels and beams.</li>
            <li><strong>Hard‑Water Mineral Buildup</strong> — Mild descalers to restore clarity without harsh acids.</li>
            <li><strong>Trail & River Residue</strong> — Extra entryway focus to keep grit at the threshold.</li>
          </ul>
        ),
      },
      {
        title: 'Proudly Serving Greenacres and Nearby Communities',
        content: (
          <>
            <p>Greenacres — Liberty Lake — Veradale — Opportunity — Trentwood — Ponderosa</p>
            <p className="mt-2">ZIP codes: 99016 — 99019 — 99037 — 99206 — 99216</p>
          </>
        ),
      },
      {
        title: 'Satisfaction Promise',
        content: (
          <>
            <p>
              If an area listed on your cleaning checklist appears missed, contact us within 24 hours. We’ll schedule a touch‑up visit at
              no added labor cost, provided reasonable access is granted.
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Note: Promise limited to areas explicitly included in the agreed scope. Pre‑existing damage or excessive wear may limit results.
            </p>
          </>
        ),
      },
      {
        title: 'Greenacres Residents Share Their Experience',
        content: (
          <div className="grid md:grid-cols-3 gap-6">
            <ContentCard as="blockquote">“Booked a deep clean before a family reunion—our home felt airy and dust‑free.” — Amanda H., Greenacres</ContentCard>
            <ContentCard as="blockquote">“Our Liberty Lake short‑term rental keeps five‑star cleanliness thanks to Ready 2 GO.” — Chris R., Liberty Lake</ContentCard>
            <ContentCard as="blockquote">“Move‑out clean was thorough—the property manager commented on how great it looked.” — Jordan M., Veradale</ContentCard>
          </div>
        ),
      },
      {
        title: 'Frequently Asked Questions',
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>Do I need to be home?</li>
            <li>Are your products eco‑friendly?</li>
            <li>Will you guarantee I get my full deposit back?</li>
            <li>How far in advance should I book?</li>
            <li>Can you remove hard‑water stains?</li>
            <li>Do you bring your own supplies?</li>
            <li>How do you handle pets?</li>
            <li>What forms of payment do you accept?</li>
          </ul>
        ),
      },
    ],
  };

    return (
      <>
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
        <LocationPageTemplate {...pageDetails} />
      </>
    );
}
