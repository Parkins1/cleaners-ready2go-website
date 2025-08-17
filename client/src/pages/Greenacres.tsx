import LocationPageTemplate from './LocationPageTemplate';
import ContentCard from '@/components/ContentCard/ContentCard';

export default function Greenacres() {
  const pageDetails = {
    locationName: 'Greenacres',
    heroImage: 'https://via.placeholder.com/1920x1080',
    introText:
      "We proudly serve Greenacres with reliable, satisfaction-focused house cleaning. From river-adjacent townhomes to family homes near Greenacres Middle School, our team delivers consistent, repeatable results.",
    serviceCardIds: (['residential','deep-cleaning','move-out','apartment-cleaning'] as import("@/components/ServiceCard/catalog").ServiceCatalogId[]),
    testimonial: {
      quote: 'Booked a deep clean before a family reunion—our home felt airy and dust‑free.',
      name: 'Amanda H.',
    },
    extraSections: [
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

  return <LocationPageTemplate {...pageDetails} />;
}