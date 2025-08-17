 // llm:spokane-valley-migrated
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import HeroSection from "@/components/HeroSection/HeroSection";
import heroImage from "@assets/spokane-house-cleaning.jpeg"; // Using an existing image for now
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContentCard from "@/components/ContentCard/ContentCard";
import { CheckCircle, ShieldCheck, Leaf, Users, Sparkles } from "lucide-react";
import { ServicesSection, ProcessSection } from "@/components/Sections";

export default function SpokaneValley() {
  const { open } = useModal();

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
      />

      {/* Standardized sections to match Home placement: Services then Process */}
      <ServicesSection />
      <ProcessSection />

      <section className="py-8 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-xl border border-slate-300 bg-white p-4 sm:p-6 shadow-sm">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
              <li className="flex items-start"><CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Instant online pricing   no surprise fees</li>
              <li className="flex items-start"><CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Color‑coded microfiber system to help reduce cross‑contamination</li>
              <li className="flex items-start"><CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Photo-verified results after every clean</li>
              <li className="flex items-start"><CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Background-checked team</li>
              <li className="flex items-start"><CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />EPA-registered options available</li>
              <li className="flex items-start"><CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-accent flex-none" />Flexible arrival windows</li>
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
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Weekly: best for busy households, pets, or allergy concerns</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Bi-weekly: our most popular balance of value and upkeep</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Monthly: a reliable reset between deeper refreshes</li>
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
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Thorough bath and kitchen degrease and descale focus</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Baseboards, switch plates, door frames detailed</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Interior glass and mirrors polished for clarity</li>
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
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Book 48–72 hours before your final walkthrough</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Leave utilities on for better lighting and warm water</li>
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
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Inventory checks for toiletries and supplies</li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Damage/left-behind item notes with photos</li>
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
              <ShieldCheck className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Local Presence</h3>
              <p className="text-sm">Our office off Sprague Ave lets us reach Greenacres or Veradale quickly.</p>
            </div>
            <div>
              <Leaf className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Licensed & Insured</h3>
              <p className="text-sm">Proper coverage gives homeowners added peace of mind.</p>
            </div>
            <div>
              <Sparkles className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Evidence-Based Products</h3>
              <p className="text-sm">We select EPA-registered or third-party-certified solutions whenever possible and follow manufacturer directions for effective use.</p>
            </div>
            <div>
              <Users className="mx-auto h-12 w-12 text-accent" />
              <h3 className="text-lg font-bold mt-4">Transparent Pricing</h3>
              <p className="text-sm">Flat rates based on square footage; any add-ons are quoted before work begins.</p>
            </div>
            <div>
              <CheckCircle className="mx-auto h-12 w-12 text-accent" />
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
            Click “Request My Quote” or call 509-555-0123. Weekend slots fill fast book today and enjoy more time for life’s adventures.
          </p>
          <Button onClick={() => open("quote")} variant="primary" size="lg">
            Request My Quote
          </Button>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}