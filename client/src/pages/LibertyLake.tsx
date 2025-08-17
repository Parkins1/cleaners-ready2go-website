import React from "react";
import LocationPageTemplate from "./LocationPageTemplate";
import heroLiberty from "@assets/spokane-house-cleaning.jpeg";

/**
 * Liberty Lake location page
 * - Re-uses core visual components from the site via LocationPageTemplate:
 *   * ServicesSection (Service cards)
 *   * ProcessSection (4-step how it works)
 * - Adds Liberty Lake specific copy and extra sections without duplicating standard sections
 */
export default function LibertyLake() {
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

  return <LocationPageTemplate {...pageDetails} />;
}
