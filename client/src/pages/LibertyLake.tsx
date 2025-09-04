import React from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import heroLiberty from "@/assets/spokane-house-cleaning.webp";
import hero480 from "@/assets/spokane-house-cleaning-480.webp";
import hero768 from "@/assets/spokane-house-cleaning-768.webp";
import hero1024 from "@/assets/spokane-house-cleaning-1024.webp";
import hero480Avif from "@/assets/spokane-house-cleaning-480.avif";
import hero768Avif from "@/assets/spokane-house-cleaning-768.avif";
import hero1024Avif from "@/assets/spokane-house-cleaning-1024.avif";
import ContentCard from "@/components/ContentCard/ContentCard";
import CarouselCompact from "@/components/Carousel/CarouselCompact";
import { useModal } from "@/components/modal/ModalProvider";
import Icon from "@/components/ui/icon";
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
  const { open } = useModal();

  const pageDetails = {
    locationName: "Liberty Lake",
    heroImage: heroLiberty,
    heroAlt: 'House cleaning services in Liberty Lake, WA—Cleaners Ready 2Go',
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
          "Weekly, bi-weekly, or monthly visits tailored to your schedule—consistent results from a trusted local team.",
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
        "We've been using Cleaners Ready 2 GO for over two years—reliable, thorough, and respectful of our home.",
      name: "Jennifer & Mark Thompson",
    },
    // Liberty Lake specific long-form sections (doesn't duplicate ProcessSection or ServicesSection)
    extraSections: [
      {
        title: "Liberty Lake Services",
        sectionClassName: "py-8 bg-white",
        noContainer: true,
        hideTitle: true,
        content: (
          <div className="py-8">
            <CarouselCompact
              items={[
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Liberty Lake Home Care, Tuned To Your Weekends</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Professional cleaning services designed around your Liberty Lake lifestyle. From lake days to weekend gatherings, we keep your home ready for the moments that matter.
                    </p>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Keep‑It‑Clean Routine</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Opt for weekly, bi‑weekly, or monthly visits to stay guest‑ready for lake days and impromptu gatherings.
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Weekly:</strong> Perfect for active, gear‑heavy homes and pets</li>
                        <li><strong>Bi‑weekly:</strong> Our most chosen balance of polish and price</li>
                        <li><strong>Monthly:</strong> A thorough refresh that restores that just‑cleaned feel</li>
                      </ul>
                    </div>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">The Liberty Lake Deep Reset</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Great before summer season or after a busy holiday stretch. Includes hand‑wiping cabinet fronts, detailing door tracks, washing interior windows, degreasing range hoods, and spot‑treating fixtures.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Focused kitchen/bath degrease and scale removal</li>
                      <li>• Detailed baseboards, switch plates, and door frames</li>
                      <li>• Streak‑free interior glass and mirrors</li>
                    </ul>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Turnovers That Pass Muster</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      We align with Liberty Lake landlord and agent expectations, emphasizing show‑ready details.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Schedule 48–72 hours before the final walkthrough</li>
                      <li>• Leave utilities on for full lighting and warm water</li>
                      <li>• Cabinet/drawer interiors and oven/fridge on request</li>
                    </ul>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Vacation Rental Turnarounds</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      We integrate with Airbnb/VRBO for predictable changeovers between lake weekends. Fresh linens, amenity restock, and timestamped photos keep your ratings strong.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Supply and toiletry inventory tracking</li>
                      <li>• Immediate photo‑noted damage or left items</li>
                    </ul>
                  </ContentCard>
                ),
              ]}
            />
          </div>
        ),
      },
      {
        title: "Liberty Lake's Premier House Cleaning Service",
        sectionClassName: "py-16 bg-surface",
        content: (
          <>
            <p className="mb-4">
              Life in Liberty Lake offers the perfect blend of natural beauty and suburban comfort. From lake days to
              neighborhood events, homeowners here want cleaning service that keeps up with their lifestyle—not slow it down.
            </p>

            <p className="mb-4">
              Cleaners Ready 2 GO provides professional, reliable, and eco-conscious cleaning designed for Liberty Lake
              homes: background-checked teams, HEPA filtration, biodegradable products, and a consistent approach that
              protects your surfaces and your family.
            </p>

            <h3 className="text-xl font-semibold mt-6">Comprehensive House Cleaning Services</h3>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Regular House Cleaning</strong>—Weekly, bi-weekly, or monthly plans to keep a consistently fresh home.
              </li>
              <li>
                <strong>Deep Cleaning</strong>—Seasonal refreshes and thorough attention to hidden buildup (baseboards, vents, grout).
              </li>
              <li>
                <strong>Move-In / Move-Out</strong>—Landlord-ready checklists and deposit-protecting detail.
              </li>
              <li>
                <strong>Specialty Services</strong>—Post-construction cleanup, event prep & recovery, and appliance interior detailing.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Why Liberty Lake Homeowners Trust Us",
        sectionClassName: "py-16 bg-white",
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
        title: "Move-In / Move-Out—Transition Made Simple",
        sectionClassName: "py-16 bg-surface",
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
        title: "Simple Booking—Professional Results",
        sectionClassName: "py-16 bg-white",
        content: (
          <>
            <ol className="list-decimal list-inside space-y-2">
              <li>Request your personalized quote online or call us—tell us home size, frequency, and any special requests.</li>
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
        sectionClassName: "py-16 bg-surface",
        content: (
          <>
            <p className="mb-2">
              Primary Service Areas: <strong>Liberty Lake</strong>, Greenacres, Otis Orchards, Post Falls (ID), Spokane Valley.
            </p>
            <p className="text-sm text-gray-600">
              We tailor our approach for lakefront homes, rural acreage, and newer planned neighborhoods so every property
              receives the right level of care.
            </p>
            <p className="mt-2 text-sm">ZIP codes: 99019—99016—99037—99206</p>
          </>
        ),
      },
      {
        title: "Local Cleaning Challenges",
        sectionClassName: "py-16 bg-surface",
        content: (
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Lake Humidity & Mineral Mist</strong>—Spot prevention on glass and fixtures in lake‑adjacent homes.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Pollen & Tree Debris</strong>—Seasonal window‑track and sill detailing to manage wind‑blown pollen.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Trail & Beach Sand</strong>—Entryway mat care and hard‑floor resets after lake days.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Vacation Turnover Timing</strong>—Checklist‑driven turnovers for Airbnb/VRBO near peak weekends.</span>
            </li>
          </ul>
        ),
      },
      {
        title: "Neighborhoods We Serve",
        sectionClassName: "py-16 bg-white",
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
        sectionClassName: "py-8 bg-white",
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
        sectionClassName: "py-16 bg-surface",
        content: (
          <>
            <p>
              Weekends in Liberty Lake are for time at the lake, neighborhood events, and quick trips to Greenacres—not scrubbing baseboards. 
              Our uniformed technicians follow a 67‑point checklist and, where appropriate, use EPA‑registered products to help reduce common 
              household germs and allergens.
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
        title: "Cleaning Packages Built for Liberty Lake Lifestyles",
        sectionClassName: "py-16 bg-white",
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
              <h3 className="text-xl font-bold text-text mb-2">The Liberty Lake Reset Clean</h3>
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
        title: 'Why Liberty Lake Chooses Cleaners Ready 2 GO',
        sectionClassName: 'py-16 bg-surface',
        content: (
          <ul className="space-y-2">
            <li><strong>Local Presence</strong> — We reach Liberty Lake, Greenacres, and Veradale quickly.</li>
            <li><strong>Licensed & Insured</strong> — Proper coverage for added peace of mind.</li>
            <li><strong>Evidence‑Based Products</strong> — EPA‑registered or third‑party‑certified options with manufacturer guidance.</li>
            <li><strong>Transparent Pricing</strong> — Flat rates based on square footage; add‑ons quoted up front.</li>
            <li><strong>Photo Log</strong> — Before‑and‑after images for transparency and easy remote approval.</li>
          </ul>
        ),
      },
      {
        title: 'Service Area (ZIP Codes)',
        sectionClassName: 'py-16 bg-white',
        content: (
          <p className="text-sm">ZIP codes: 99019—99016—99037—99206</p>
        ),
      },
      {
        title: 'Satisfaction Promise',
        sectionClassName: 'py-16 bg-surface',
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
        title: 'Liberty Lake Residents Share Their Experience',
        sectionClassName: 'py-16 bg-white',
        content: (
          <div className="grid md:grid-cols-3 gap-6">
            <ContentCard as="blockquote">“We've been using Cleaners Ready 2 GO for over two years—reliable, thorough, and respectful of our home.” — Jennifer & Mark Thompson, Liberty Lake</ContentCard>
            <ContentCard as="blockquote">“Our Liberty Lake short‑term rental keeps five‑star cleanliness thanks to Ready 2 GO.” — Chris R., Liberty Lake</ContentCard>
            <ContentCard as="blockquote">“Move‑out clean was thorough—the property manager commented on how great it looked.” — Jordan M., Veradale</ContentCard>
          </div>
        ),
      },
      {
        title: 'Frequently Asked Questions',
        sectionClassName: 'py-16 bg-surface',
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

    return <LocationPageTemplate {...pageDetails} />;
}
