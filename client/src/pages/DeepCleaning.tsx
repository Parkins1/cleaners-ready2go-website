import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import heroDeep from "@/assets/move-out-hero-image.jpeg";
import logoImage from "@/assets/cleaners_ready2go_logo_transparent_1753378992010.png";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function DeepCleaning() {
  const { open } = useModal();

  const packages = [
    { name: "Essentials", highlights: "Surface deep clean of kitchens, baths, floors, and dusting", forWhom: "Quarterly refresh or pre-holiday spruce-up" },
    { name: "Deluxe", highlights: "Includes appliance interiors, cabinet interiors, grout scrubbing, blind cleaning", forWhom: "First-time clients, spring cleaning, move-outs" },
    { name: "Restoration", highlights: "Heavy buildup removal, smoke residue, post-construction or disaster cleanup", forWhom: "Fixer-uppers, estate cleanouts, insurance claims" },
  ];

  const cityList = [
    "Spokane","Spokane Valley","Liberty Lake","Cheney","Otis Orchards","Airway Heights","Mead","Colbert"
  ];

  const faqs = [
    { q: "How is deep cleaning different from regular cleaning?", a: "Deep cleaning targets built-up grime, appliance interiors, baseboards, vents, and other overlooked zones, whereas regular maintenance focuses on visible surfaces." },
    { q: "How long does a Spokane deep clean take?", a: "Most two-bedroom homes take 4–6 hours. Larger properties or restoration projects may require multiple technicians or return visits." },
    { q: "Do I need to be home during service?", a: "No. Many clients provide a lockbox code or garage pin so they can run errands while we work." },
    { q: "Are your products safe for pets and kids?", a: "Yes. We use biodegradable, pH-neutral solutions that meet EPA Safer Choice standards." },
    { q: "Can you remove hard-water stains common in Spokane?", a: "Absolutely. Our mineral-removal process eliminates calcium buildup on glass, fixtures, and tile." },
    { q: "Do you offer move-in/move-out deep cleaning?", a: "Yes. We specialize in landlord inspections and real-estate showcase cleans." },
    { q: "Is there a satisfaction guarantee?", a: "Every service is backed by our 100% Happiness Guarantee—any issues are re-cleaned free within 24 hours." },
    { q: "Which payment methods do you accept?", a: "Credit/debit, ACH, Apple Pay, and contactless tap payments." },
    { q: "How far in advance should I book?", a: "We recommend booking 5–7 days ahead for weekends, but weekday slots often open within 48 hours." },
    { q: "Do you clean offices and commercial spaces?", a: "Yes. We provide deep cleaning for clinics, boutiques, and offices up to 10,000 sq ft." },
  ];

  return (
    <>
      {/* SEO */}
      <title>Deep Cleaning Spokane, WA | Cleaners Ready 2 GO</title>
      <meta name="description" content="Cleaners Ready 2 GO delivers eco-friendly, detail-oriented deep cleaning in Spokane & Spokane Valley. Get your free quote today and enjoy a healthier, spotless home." />
      <link rel="canonical" href="https://cleanersready2go.com/deep-cleaning-spokane" />
      <meta name="keywords" content="deep cleaning Spokane, Spokane deep cleaning services, Spokane Valley house cleaning, eco-friendly deep clean Spokane, move-out cleaning Spokane WA" />

      {/* HERO */}
      <section
        className="hero relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroDeep})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Deep Cleaning Hero"
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="relative text-center max-w-4xl mx-auto px-6 py-20">
          <div className="mb-6">
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-text mb-4">Deep Cleaning Spokane, WA</h1>
          <p className="text-lg lg:text-xl text-text mb-8">
            Local, insured pros delivering wall-to-wall shine—on your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button">
              Get My Free Quote
            </button>
            <a href="#includes" aria-label="See What's Included" className="inline-flex items-center justify-center">
              <button className="btn-secondary" type="button">
                See What's Included <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <p>
            Life in the Inland Northwest is glorious—towering pines, four true seasons, and plenty of pets, gear, and muddy boots to prove it.
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
          <ul className="grid md:grid-cols-2 gap-6 text-text">
            <li><strong>Kitchen revival</strong> – degrease backsplashes, scrub stovetops, clean inside ovens, microwaves, and refrigerators, sanitize sinks & faucets.</li>
            <li><strong>Bathroom detox</strong> – power-clean tile & grout, remove hard-water stains, polish chrome, disinfect tubs, showers, and toilets.</li>
            <li><strong>Whole-home detailing</strong> – hand-wipe baseboards, window sills, door frames, switch plates, and vents; dust ceiling fans and light fixtures up to 12 ft.</li>
            <li><strong>Floor refresh</strong> – HEPA vacuum carpets & upholstery, edge-vacuum along trim, mop hard floors with pH-balanced solutions, and spot-treat high-traffic stains.</li>
            <li><strong>Glass & mirrors</strong> – streak-free cleaning of interior windows, patio doors, and mirrors for crystal-clear views of Spokane’s sunsets.</li>
            <li><strong>Cabinets & storage</strong> – wipe down doors and clean inside drawers & shelves so you start with a truly blank slate.</li>
          </ul>
          <p className="mt-6">
            Need something special—like post-renovation dust removal or appliance restoration? Just ask. We love custom projects and bring the right tools for every challenge.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8 text-center">Our 4-Step Deep Cleaning Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card">
              <span className="step-number">1</span>
              <h3 className="mt-2 font-semibold">Free Local Walk-Through & Quote</h3>
              <p>We schedule a quick on-site visit (or video call) to discuss trouble spots and measure square footage. You’ll have a written quote within 30 minutes—no guesswork, no hidden fees.</p>
            </div>
            <div className="card">
              <span className="step-number">2</span>
              <h3 className="mt-2 font-semibold">Customized Cleaning Plan</h3>
              <p>From South Hill bungalows to Liberty Lake condos, every home is unique. We map a room-by-room checklist prioritizing your goals—pet fur, mineral buildup, move-in freshness, you name it.</p>
            </div>
            <div className="card">
              <span className="step-number">3</span>
              <h3 className="mt-2 font-semibold">Eco-Friendly Deep Clean</h3>
              <p>Our bonded, background-checked specialists arrive with hospital-grade biodegradable products, color-coded microfiber, and sealed HEPA vacuums that trap 99.97% of particles.</p>
            </div>
            <div className="card">
              <span className="step-number">4</span>
              <h3 className="mt-2 font-semibold">Final Walk-Through & 100% Guarantee</h3>
              <p>You inspect every room before we pack up. If something isn’t five-star perfect, we fix it on the spot or come back within 24 hours—free of charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-8 text-center">Flexible Packages & Scheduling</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Package</th>
                  <th className="p-3 border">Highlights</th>
                  <th className="p-3 border">Great For</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((p) => (
                  <tr key={p.name} className="bg-white">
                    <td className="p-3 border font-semibold">{p.name}</td>
                    <td className="p-3 border">{p.highlights}</td>
                    <td className="p-3 border">{p.forWhom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-text">Choose one-time, weekly, bi-weekly, or monthly service. Minimum booking: 4 hours.</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">Why Spokane Homeowners Trust Cleaners Ready 2 GO</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-text">
            <li><strong>True locals</strong> – We’ve served Spokane County for 15+ years; we know the hard-water quirks and seasonal allergy spikes.</li>
            <li><strong>Licensed, bonded & insured</strong> – Peace of mind while we’re on your property.</li>
            <li><strong>Green cleaning, healthier air</strong> – Kid-safe, pet-safe solutions and HEPA filtration reduce indoor allergens by up to 75%.</li>
            <li><strong>Transparent pricing</strong> – Flat-rate quotes and digital invoices—no surprises.</li>
            <li><strong>5-star reputation</strong> – A+ BBB rating and hundreds of Google reviews averaging 4.9 stars.</li>
          </ul>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4 text-center">Proudly Serving Spokane County & Beyond</h2>
        <p className="text-center">We bring sparkling results to:</p>
          <p className="mt-2 text-center text-text">{cityList.join(" · ")}</p>
          <p className="mt-2 text-center">If you’re within a 25-mile radius of Riverfront Park, we’ve got you covered.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center">Real Reviews From Your Neighbors</h2>
          <blockquote className="card">
            <p>“My oven and bathroom haven’t looked this good since I moved in. Professional, on-time, and friendly!”</p>
            <footer className="mt-3 text-sm text-gray-600">— Lena S., South Hill</footer>
          </blockquote>
          <blockquote className="card">
            <p>“They erased hard-water spots in one visit and left zero chemical smell. Huge win for our kids’ allergies.”</p>
            <footer className="mt-3 text-sm text-gray-600">— Marcus P., Liberty Lake</footer>
          </blockquote>
          <blockquote className="card">
            <p>“Fast, thorough, and trustworthy. Perfect for our Airbnb turnovers.”</p>
            <footer className="mt-3 text-sm text-gray-600">— Dani R., Spokane Valley</footer>
          </blockquote>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-text text-center mb-6">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-text">
            <li>Request your quote online or call <a className="underline" href="tel:+15095550123">(509) 555-0123</a>.</li>
            <li>Approve the custom checklist & price.</li>
            <li>Relax while we deliver a hotel-grade deep clean.</li>
            <li>Enjoy a healthier, photo-ready home—all without lifting a finger.</li>
          </ol>
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

      {/* ABOUT TEAM */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">Meet Your Spokane Cleaning Crew</h2>
          <p>We’re not a gig app. Cleaners Ready 2 GO is family-owned, and every technician completes a 40-hour training program covering chemical safety, green certifications, and infection-control protocols. Many of our senior leads have been with us over a decade and treat clients like extended family—watering plants, securing pets, and sending text updates during service.</p>
          <p>Because we value consistency, we assign the same trusted team to recurring customers whenever possible. You’ll know your cleaner’s name, and they’ll know your preferences—like which antique hutch needs extra-gentle care or where Fido’s treats are stashed.</p>
        </div>
      </section>

      {/* ENVIRONMENT */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">Our Environmental Commitment</h2>
          <p>Spokane’s aquifer and rivers are precious. That’s why we choose biodegradable concentrates, reusable bottles, and glass spray triggers over single-use plastics. By swapping paper towels for color-coded microfiber we divert an estimated 3,000 lbs of waste from local landfills each year.</p>
          <p>We also offset 100% of fuel emissions from our service vehicles via regional re-forestation projects coordinated with the <a className="underline" href="https://inlandnwland.org" target="_blank" rel="noreferrer">Inland Northwest Land Conservancy</a>.</p>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">Simple, Honest Pricing</h2>
          <p>Deep cleans start at <strong>$0.15 per square foot</strong>, with package discounts for recurring service. Your quote includes labor, supplies, and travel within Spokane County. The price you see is the price you pay—sales tax and all. We never upsell on the spot or tack on bogus “service fees.”</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button">Get My Free Quote</button>
            <button onClick={() => open("booking")} className="btn-secondary" type="button">Schedule Cleaning</button>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-text">Book Your Spokane Deep Clean in 60 Seconds</h2>
          <p>Use our streamlined booking form to choose your date, package, and any add-ons (carpet shampoo, inside windows, oven detailing). You’ll receive instant confirmation plus SMS reminders. Need help? Our live Spokane-based support answers calls in under 25 seconds.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button">Get My Free Quote</button>
            <a href="tel:+15095550123" aria-label="Call (509) 555-0123" className="inline-flex">
              <button className="btn-secondary" type="button">(509) 555-0123</button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="footer py-20 relative overflow-hidden" aria-label="CTA Banner">
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready for a Dust-Free, Healthier Home?</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button">Schedule My Deep Clean</button>
            <a href="tel:+15095550123" aria-label="Call (509) 555-0123" className="inline-flex">
              <button className="btn-secondary" type="button">(509) 555-0123</button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER INFO (page-level structured content) */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-sm text-gray-700 space-y-1">
          <p><strong>Cleaners Ready 2 GO</strong></p>
          <p>123 E Sprague Ave, Spokane, WA 99202</p>
          <p>Phone: <a className="underline" href="tel:+15095550123">(509) 555-0123</a> · Email: <a className="underline" href="mailto:hello@cleanersready2go.com">hello@cleanersready2go.com</a></p>
          <p>Hours: Mon–Sat 8 a.m.–6 p.m.</p>
          <p>© 2025 Cleaners Ready 2 GO. All rights reserved.</p>
        </div>
      </section>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"LocalBusiness",
        "name":"Cleaners Ready 2 GO",
        "image":"https://cleanersready2go.com/logo.png",
        "@id":"https://cleanersready2go.com",
        "url":"https://cleanersready2go.com/deep-cleaning-spokane",
        "telephone":"+1-509-555-0123",
        "address":{
          "@type":"PostalAddress",
          "streetAddress":"123 E Sprague Ave",
          "addressLocality":"Spokane",
          "addressRegion":"WA",
          "postalCode":"99202",
          "addressCountry":"US"
        },
        "geo":{
          "@type":"GeoCoordinates",
          "latitude":47.6561,
          "longitude":-117.4113
        },
        "openingHoursSpecification":[{
          "@type":"OpeningHoursSpecification",
          "dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          "opens":"08:00",
          "closes":"18:00"
        }],
        "serviceArea":{
          "@type":"GeoCircle",
          "geoMidpoint":{"@type":"GeoCoordinates","latitude":47.6561,"longitude":-117.4113},
          "geoRadius":40
        },
        "makesOffer":[{
          "@type":"Offer",
          "itemOffered":{"@type":"Service","name":"Deep Cleaning"},
          "priceCurrency":"USD",
          "price":"Varies",
          "availability":"https://schema.org/InStock"
        }]
      })}} />

    </>
  );
}