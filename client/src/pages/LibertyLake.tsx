import React, { useCallback, useEffect, useState } from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import heroLiberty from "@assets/spokane-house-cleaning.webp";
import ContentCard from "@/components/ContentCard/ContentCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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
                      Liberty Lake Home Care, Tuned To Your Weekends
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Professional cleaning services designed around your Liberty Lake lifestyle. From lake days to weekend gatherings, we keep your home ready for the moments that matter.
                    </p>
                  </ContentCard>
                </CarouselItem>

                <CarouselItem
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                  data-active={isActive(1)}
                >
                  <ContentCard className="p-6 md:p-8">
                    <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                      Keep-It-Clean Routine
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-600 mb-2">
                        Opt for weekly, bi-weekly, or monthly visits to stay guest-ready for lake days and impromptu gatherings.
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Weekly:</strong> Perfect for active, gear-heavy homes and pets</li>
                        <li><strong>Bi-weekly:</strong> Our most chosen balance of polish and price</li>
                        <li><strong>Monthly:</strong> A thorough refresh that restores that just-cleaned feel</li>
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
                      The Liberty Lake Refresh
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Great before summer season or after a busy holiday stretch. Includes hand-wiping cabinet fronts, detailing door tracks, washing interior windows, degreasing range hoods, and spot-treating fixtures.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Focused kitchen/bath degrease and scale removal</li>
                      <li>• Detailed baseboards, switch plates, and door frames</li>
                      <li>• Streak-free interior glass and mirrors</li>
                    </ul>
                  </ContentCard>
                </CarouselItem>

                <CarouselItem
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                  data-active={isActive(3)}
                >
                  <ContentCard className="p-6 md:p-8">
                    <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                      Turnovers That Pass Muster
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      We align with Liberty Lake landlord and agent expectations, emphasizing show-ready details.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Schedule 48–72 hours before the final walkthrough</li>
                      <li>• Leave utilities on for full lighting and warm water</li>
                      <li>• Cabinet/drawer interiors and oven/fridge on request</li>
                    </ul>
                  </ContentCard>
                </CarouselItem>

                <CarouselItem
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-300"
                  data-active={isActive(4)}
                >
                  <ContentCard className="p-6 md:p-8">
                    <h3 className="text-lg font-semibold mb-3 text-brand-gold">
                      Vacation Rental Turnarounds
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      We integrate with Airbnb/VRBO for predictable changeovers between lake weekends. Fresh linens, amenity restock, and timestamped photos keep your ratings strong.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Supply and toiletry inventory tracking</li>
                      <li>• Immediate photo-noted damage or left items</li>
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
              <a className="underline font-semibold" href="#quote">
                Get Your Free Quote Today →
              </a>
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
          </>
        ),
      },
      {
        title: "Frequently Asked Questions",
        content: (
          <>
            <h4 className="font-semibold">Do you provide all supplies and equipment?</h4>
            <p className="mb-3">Yes. Our teams bring professional-grade, eco-friendly products and HEPA-filtered vacuums.</p>

            <h4 className="font-semibold">Can you service short-term rentals?</h4>
            <p className="mb-3">
              Yes — we offer checklist-driven turnover cleanings with fast turnarounds for Airbnb and VRBO hosts.
            </p>
          </>
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
