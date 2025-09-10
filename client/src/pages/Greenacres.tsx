import React from 'react';
import LocationPageTemplate from './LocationPageTemplate';
import heroImage from "@/assets/spokane-house-cleaning.webp";
import hero480 from "@/assets/spokane-house-cleaning-480.webp";
import hero768 from "@/assets/spokane-house-cleaning-768.webp";
import hero1024 from "@/assets/spokane-house-cleaning-1024.webp";
import hero480Avif from "@/assets/spokane-house-cleaning-480.avif";
import hero768Avif from "@/assets/spokane-house-cleaning-768.avif";
import hero1024Avif from "@/assets/spokane-house-cleaning-1024.avif";
import ContentCard from '@/components/ContentCard/ContentCard';
import Icon from "@/components/ui/icon";
import CarouselCompact from '@/components/Carousel/CarouselCompact';

export default function Greenacres() {
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
        sectionClassName: "py-section bg-white",
        content: (
          <div className="py-8">
            <CarouselCompact
              items={[
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Greenacres Cleaning, Matched To Your Routine</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Professional cleaning services designed around Greenacres living near the river, trails, and parks. Our dedicated Team Lead ensures consistent, premium care.
                    </p>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Effortless Upkeep</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Weekly, bi-weekly, or monthly plans to keep your home guest-ready for river days or trail outings.
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Weekly:</strong> Best for active households and allergy concerns</li>
                        <li><strong>Bi-weekly:</strong> A popular balance of consistency and value</li>
                        <li><strong>Monthly:</strong> A reliable reset that restores freshness</li>
                      </ul>
                    </div>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">The Greenacres Deep Reset</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Ideal for seasonal deep cleans or post-event recovery. Includes targeted descaling and detailed baseboards.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Interior glass and mirrors polished to clarity</li>
                      <li>• Baseboards, switches, and frames detailed</li>
                    </ul>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Checklist-Guided Move-Outs</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      We follow landlord checklists for stress-free move-outs, focusing on "show well" details.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Book 48–72 hours before your final walkthrough</li>
                      <li>• Keep utilities on for light and hot water</li>
                    </ul>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">STR Turnovers, On Schedule</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      We sync with Airbnb/VRBO calendars for smooth guest changeovers near the Spokane River.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Supply inventory confirmation</li>
                      <li>• Photo notes for damage or left items</li>
                    </ul>
                  </ContentCard>
                ),
              ]}
            />
          </div>
        ),
      },
      {
        title: 'A Fresh, Healthy Home Without Lifting a Finger',
        sectionClassName: "py-section bg-surface",
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
        sectionClassName: "py-section bg-white",
        content: (
          <div className="grid md:grid-cols-2 gap-xl">
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
        sectionClassName: "py-section bg-surface",
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
        title: 'Local Cleaning Challenges',
        sectionClassName: "py-section bg-white",
        content: (
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Pine Pollen Surges</strong> — Quarterly pollen‑flush damp‑wipe to trap particulates.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Wood & Pellet Heat Residue</strong> — Anti‑static cloths followed by microfiber rinses for mantels and beams.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Hard‑Water Mineral Buildup</strong> — Mild descalers to restore clarity without harsh acids.</span>
            </li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Trail & River Residue</strong> — Extra entryway focus to keep grit at the threshold.</span>
            </li>
          </ul>
        ),
      },
      {
        title: 'Neighborhoods We Serve',
        sectionClassName: "py-section bg-surface",
        content: (
          <ul className="grid md:grid-cols-2 gap-md list-none text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Greenacres (Sprague/Appleway Corridor)</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Ponderosa</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Trentwood</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Opportunity</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Veradale</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Saltese Flats / Upriver</li>
          </ul>
        ),
      },
      {
        title: 'Service Area (ZIP Codes)',
        sectionClassName: "py-section bg-white",
        content: (
          <p className="text-sm">ZIP codes: 99016, 99019, 99037, 99206, 99212, 99216, 99217</p>
        ),
      },
      {
        title: 'Satisfaction Promise',
        sectionClassName: "py-section bg-surface",
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
        sectionClassName: "py-section bg-white",
        content: (
          <div className="grid md:grid-cols-3 gap-xl">
            <ContentCard as="blockquote">“Booked a deep clean before a family reunion—our home felt airy and dust‑free.” — Amanda H., Greenacres</ContentCard>
            <ContentCard as="blockquote">“Our Liberty Lake short‑term rental keeps five‑star cleanliness thanks to Ready 2 GO.” — Chris R., Liberty Lake</ContentCard>
            <ContentCard as="blockquote">“Move‑out clean was thorough—the property manager commented on how great it looked.” — Jordan M., Veradale</ContentCard>
          </div>
        ),
      },
      {
        title: 'Frequently Asked Questions',
        sectionClassName: "py-section bg-surface",
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
