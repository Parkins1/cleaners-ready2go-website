// llm:cta-migrated
// llm:brand-config-migrated
// llm:callout-banner-migrated
// llm:cta-migrated
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import heroDeep from "@assets/spokane-wa-move-out-cleaning-hero.webp";
import mv480 from "@assets/spokane-wa-move-out-cleaning-hero-480.webp";
import mv768 from "@assets/spokane-wa-move-out-cleaning-hero-768.webp";
import mv1024 from "@assets/spokane-wa-move-out-cleaning-hero-1024.webp";
import mv480Avif from "@assets/spokane-wa-move-out-cleaning-hero-480.avif";
import mv768Avif from "@assets/spokane-wa-move-out-cleaning-hero-768.avif";
import mv1024Avif from "@assets/spokane-wa-move-out-cleaning-hero-1024.avif";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ContentCard from "@/components/ContentCard/ContentCard";
import CalloutBanner from "@/components/CalloutBanner/CalloutBanner";
import { brand } from "@/config/brand";

export default function DeepCleaning() {
  const { open } = useModal();


  const cityList = brand.serviceAreas.cities;

  const faqs = [
    { q: "How is deep cleaning different from regular cleaning?", a: "Deep cleaning targets built-up grime, appliance interiors, baseboards, vents, and other overlooked zones, whereas regular maintenance focuses on visible surfaces." },
    { q: "How long does a Spokane deep clean take?", a: "Most two-bedroom homes take 4–6 hours. Larger properties or restoration projects may require multiple technicians or return visits." },
    { q: "Do I need to be home during service?", a: "No. Many clients provide a lockbox code or garage pin so they can run errands while we work." },
    { q: "Are your products safe for pets and kids?", a: "Yes. We use biodegradable, pH-neutral solutions that meet EPA Safer Choice standards." },
    { q: "Can you remove hard-water stains common in Spokane?", a: "Absolutely. Our mineral-removal process eliminates calcium buildup on glass, fixtures, and tile." },
    { q: "Do you offer move-in/move-out deep cleaning?", a: "Yes. We specialize in landlord inspections and real-estate showcase cleans." },
    { q: "Is there a satisfaction guarantee?", a: "Every service is backed by our 100% Happiness Guarantee any issues are re-cleaned free within 24 hours." },
    { q: "Which payment methods do you accept?", a: "Credit/debit, ACH, Apple Pay, and contactless tap payments." },
    { q: "How far in advance should I book?", a: "We recommend booking 5–7 days ahead for weekends, but weekday slots often open within 48 hours." },
    { q: "Do you clean offices and commercial spaces?", a: "Yes. We provide deep cleaning for clinics, boutiques, and offices up to 10,000 sq ft." },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Cleaners Ready 2 GO",
    image: "https://cleanersready2go.com/logo.png",
    "@id": "https://cleanersready2go.com",
    url: "https://cleanersready2go.com/deep-cleaning-spokane",
    telephone: brand.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.street,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      postalCode: brand.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.6561,
      longitude: -117.4113,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 47.6561,
        longitude: -117.4113,
      },
      geoRadius: 40,
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deep Cleaning",
        },
        priceCurrency: "USD",
        price: "Varies",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <>
      {/* SEO */}
      <title>Deep Cleaning Spokane, WA | Cleaners Ready 2 GO</title>
      <meta name="description" content="Cleaners Ready 2 GO delivers eco-friendly, detail-oriented deep cleaning in Spokane & Spokane Valley. Get your free quote today and enjoy a healthier, spotless home." />
      <link rel="canonical" href="https://cleanersready2go.com/deep-cleaning-spokane" />
      <meta name="keywords" content="deep cleaning Spokane, Spokane deep cleaning services, Spokane Valley house cleaning, eco-friendly deep clean Spokane, move-out cleaning Spokane WA" />

      {/* HERO */}
      <HeroSection
        image={heroDeep}
        title={<h1 className="text-4xl lg:text-6xl font-bold text-text mb-4">Deep Cleaning Spokane, WA</h1>}
        subtitle={<p className="text-lg lg:text-xl text-text mb-8">Local, insured pros delivering wall-to-wall shine on your schedule.</p>}
        actions={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => open("quote")} variant="primary">Get My Free Quote</Button>
            <a href="#includes" aria-label="See What's Included" className="inline-flex items-center justify-center">
              <Button variant="primary">See What's Included <ArrowRight className="w-5 h-5 ml-2" /></Button>
            </a>
          </div>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${mv480} 480w, ${mv768} 768w, ${mv1024} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${mv480Avif} 480w, ${mv768Avif} 768w, ${mv1024Avif} 1024w` }]}
      />

      {/* INTRO */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p>
            Life in the Inland Northwest is glorious towering pines, four true seasons, and plenty of pets, gear, and muddy boots to prove it.
            Unfortunately, all that outdoor fun ends up inside your house as dust, pollen, and stubborn grime. A routine tidy keeps surfaces
            looking OK, but a professional <strong>deep cleaning in Spokane</strong> eliminates the hidden allergens and buildup lurking in vents,
            baseboards, and appliance crevices. Our Spokane-based team at <em>Cleaners Ready 2 GO</em> digs deeper, so you breathe easier and love your space again.
          </p>
          <p>
            Whether you’re prepping for guests, moving into a new home, or reclaiming weekends from endless scrubbing, our detail-obsessed staff brings
            hospital-grade sanitation and small-town courtesy to every job. Discover why families from Browne’s Addition to Otis Orchards trust us for
            the most thorough deep clean in Spokane County.
          </p>
        </div>
      </section>

      {/* INCLUDES */}
      <section id="includes" className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">What Our Spokane Deep Clean Includes</h2>
          <Accordion type="single" collapsible className="w-full rounded-xl bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm shadow-sm border border-white/20">
            <AccordionItem value="kitchen-revival">
              <AccordionTrigger className="text-left"><strong>Kitchen revival</strong></AccordionTrigger>
              <AccordionContent>degrease backsplashes, scrub stovetops, clean inside ovens, microwaves, and refrigerators, sanitize sinks & faucets.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="bathroom-detox">
              <AccordionTrigger className="text-left"><strong>Bathroom detox</strong></AccordionTrigger>
              <AccordionContent>power-clean tile & grout, remove hard-water stains, polish chrome, disinfect tubs, showers, and toilets.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="whole-home-detailing">
              <AccordionTrigger className="text-left"><strong>Whole-home detailing</strong></AccordionTrigger>
              <AccordionContent>hand-wipe baseboards, window sills, door frames, switch plates, and vents; dust ceiling fans and light fixtures up to 12 ft.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="floor-refresh">
              <AccordionTrigger className="text-left"><strong>Floor refresh</strong></AccordionTrigger>
              <AccordionContent>HEPA vacuum carpets & upholstery, edge-vacuum along trim, mop hard floors with pH-balanced solutions, and spot-treat high-traffic stains.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="cabinets-storage">
              <AccordionTrigger className="text-left"><strong>Cabinets & storage</strong></AccordionTrigger>
              <AccordionContent>wipe down doors and clean inside drawers & shelves so you start with a truly blank slate.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <p className="mt-6">
            Need something special like post-renovation dust removal or appliance restoration? Just ask. We love custom projects and bring the right tools for every challenge.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white bg-process-radial">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8 text-center">Our 4-Step Deep Cleaning Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <ContentCard>
              <span className="step-number">1</span>
              <h3 className="mt-2 font-semibold">Free Local Walk-Through & Quote</h3>
              <p>We schedule a quick on-site visit (or video call) to discuss trouble spots and measure square footage. You’ll have a written quote within 30 minutes no guesswork, no hidden fees.</p>
            </ContentCard>
            <ContentCard>
              <span className="step-number">2</span>
              <h3 className="mt-2 font-semibold">Customized Cleaning Plan</h3>
              <p>From South Hill bungalows to Liberty Lake condos, every home is unique. We map a room-by-room checklist prioritizing your goals pet fur, mineral buildup, move-in freshness, you name it.</p>
            </ContentCard>
            <ContentCard>
              <span className="step-number">3</span>
              <h3 className="mt-2 font-semibold">Eco-Friendly Deep Clean</h3>
              <p>Our bonded, background-checked specialists arrive with hospital-grade biodegradable products, color-coded microfiber, and sealed HEPA vacuums that trap 99.97% of particles.</p>
            </ContentCard>
            <ContentCard>
              <span className="step-number">4</span>
              <h3 className="mt-2 font-semibold">Final Walk-Through & 100% Guarantee</h3>
              <p>You inspect every room before we pack up. If something isn’t five-star perfect, we fix it on the spot or come back within 24 hours free of charge.</p>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Why Spokane Homeowners Trust Cleaners Ready 2 GO</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-text">
            <li className="border-l-4 border-[var(--color-accent)] bg-[rgba(200,164,74,0.06)] rounded-sm pl-4 py-2"><strong className="text-accent">Licensed, bonded & insured</strong> – Peace of mind while we’re on your property.</li>
            <li className="border-l-4 border-[var(--color-accent)] bg-[rgba(200,164,74,0.06)] rounded-sm pl-4 py-2"><strong className="text-accent">Green cleaning, healthier air</strong> – Kid-safe, pet-safe solutions and HEPA filtration reduce indoor allergens by up to 75%.</li>
            <li className="border-l-4 border-[var(--color-accent)] bg-[rgba(200,164,74,0.06)] rounded-sm pl-4 py-2"><strong className="text-accent">Transparent pricing</strong> – Flat-rate quotes and digital invoices no surprises.</li>
            <li className="border-l-4 border-[var(--color-accent)] bg-[rgba(200,164,74,0.06)] rounded-sm pl-4 py-2"><strong className="text-accent">5-star reputation</strong> – A+ BBB rating and hundreds of Google reviews averaging 4.9 stars.</li>
          </ul>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-service-band">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-2 text-center">Proudly Serving Spokane County & Beyond</h2>

          {/* subtle gradient bar under headline */}
          <div className="flex justify-center" aria-hidden="true">
            <span className="block h-1 w-28 rounded-full bg-gradient-to-r from-accent to-accent-dark" />
          </div>

          <p className="text-center mt-4">We bring sparkling results to:</p>

          <ul className="flex flex-wrap justify-center gap-4 mt-3 text-text">
            {cityList.map((c) => (
              <li key={c} className="flex items-center gap-2 px-2">
                <MapPin
                  className={`w-4 h-4 ${["Spokane", "Spokane Valley", "Liberty Lake"].includes(c) ? "text-accent" : "text-gray-400"}`}
                  aria-hidden="true"
                />
                <span className={`${["Spokane", "Spokane Valley", "Liberty Lake"].includes(c) ? "text-accent font-semibold" : ""}`}>{c}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-center">If you’re within a 25-mile radius of Riverfront Park, we’ve got you covered.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center">Real Reviews From Your Neighbors</h2>
          <ContentCard as="blockquote">
            <p>“My oven and bathroom haven’t looked this good since I moved in. Professional, on-time, and friendly!”</p>
            <footer className="mt-3 text-sm text-gray-600">  Lena S., South Hill</footer>
          </ContentCard>
          <ContentCard as="blockquote">
            <p>“They erased hard-water spots in one visit and left zero chemical smell. Huge win for our kids’ allergies.”</p>
            <footer className="mt-3 text-sm text-gray-600">  Marcus P., Liberty Lake</footer>
          </ContentCard>
          <ContentCard as="blockquote">
            <p>“Fast, thorough, and trustworthy. Perfect for our Airbnb turnovers.”</p>
            <footer className="mt-3 text-sm text-gray-600">  Dani R., Spokane Valley</footer>
          </ContentCard>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center mb-6">Deep Cleaning FAQ</h2>
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

      {/* BENEFITS */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">The Benefits of Professional Deep Cleaning</h2>
          <p><strong>Healthier indoor air.</strong> Spokane’s pine pollen season means allergens cling to carpet fibers and HVAC vents. Our HEPA vacuums and microfiber cloths trap microscopic particles before they reach your lungs.</p>
          <p><strong>Save time & sanity.</strong> A detailed DIY scrub can swallow an entire weekend. Our multi-tech teams finish in hours, freeing you to hike Riverside State Park or catch a Spokane Indians game instead of scrubbing grout.</p>
          <p><strong>Protect your investment.</strong> Regular deep cleaning extends the life of stainless appliances, stone counters, and hardwood floors by removing abrasive debris that causes premature wear.</p>
          <p><strong>Impress guests & buyers.</strong> Whether you’re hosting Thanksgiving or listing your home, a professional deep clean creates photos that pop and first impressions that last.</p>
        </div>
      </section>

      
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

    </>
  );
}
