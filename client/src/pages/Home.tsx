import { Home as HomeIcon, CheckCircle, ArrowRight, ShieldCheck, Leaf, Users, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import heroImage from "@/assets/spokane-house-cleaning.jpeg";
import residentialCardImg from "@/assets/residential-cleaning-card.jpeg";
import moveOutCardImg from "@/assets/move-out-cleaning-card.jpeg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceCard from "@/components/ServiceCard/ServiceCard"; // Import ServiceCard
import { ServiceCardProps } from "@/components/ServiceCard/types"; // Import ServiceCardProps

export default function Home() {
  const { open } = useModal();

  const services: ServiceCardProps[] = [ // Explicitly type services array
    {
      id: "standard-cleaning",
      title: "Standard/Recurring House Cleaning",
      blurb:
        "Routine dusting, vacuuming, mopping, bathroom sanitization, and kitchen cleaning. Ideal for weekly, bi-weekly, or monthly upkeep.",
      href: "/residential",
      img: residentialCardImg,
      icon: <HomeIcon className="w-10 h-10 text-white" />,
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning",
      blurb:
        "Meticulous care beyond regular maintenance: baseboards, blinds, behind appliances, grout, and more. Perfect before hosting or seasonally.",
      href: "/deep-cleaning",
      img: residentialCardImg,
      icon: <CheckCircle className="w-10 h-10 text-white" />,
    },
    {
      id: "move-cleaning",
      title: "Move-in/Move-out Cleaning",
      blurb:
        "Comprehensive cabinets, appliances, fixtures, floors, and surfaces—ideal for renters, property managers, and homeowners in transition.",
      href: "/move-out",
      img: moveOutCardImg,
      icon: <Send className="w-10 h-10 text-white" />,
    },
    {
      id: "apartment-cleaning",
      title: "Apartment Cleaning",
      blurb:
        "Flexible, efficient cleaning tailored to apartment living. Keep your space consistently tidy with packages that fit your lifestyle.",
      href: "/deep-cleaning",
      img: residentialCardImg,
      icon: <CheckCircle className="w-10 h-10 text-white" />,
    },
  ];

  const testimonials = [
    { quote: "“Exceptional cleaning service! Reliable and thorough every time.”", name: "Emily S.", location: "Spokane Valley" },
    { quote: "“Fantastic move-out cleaning. Got my full deposit back!”", name: "David L.", location: "Liberty Lake" },
    { quote: "“Their eco-friendly products are perfect for my allergies. Highly recommend!”", name: "Rachel M.", location: "Millwood" },
  ];

  const faqs = [
    { q: "Are you insured and bonded?", a: "Yes, all our cleaners are fully insured, bonded, and background-checked." },
    { q: "What products do you use?", a: "We use safe, eco-friendly, and hypoallergenic cleaning products." },
    { q: "How do I book services?", a: "You can book via phone, email, or our online form." },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Top Residential House Cleaning Services in Spokane, WA</title>
      <meta
        name="description"
        content="Professional, eco-friendly residential house cleaning services in Spokane, Spokane Valley, Liberty Lake, and surrounding areas. Insured, bonded, and satisfaction guaranteed."
      />

      {/* Hero Section (Introduction) */}
      <section
        id="intro"
        className="hero relative min-h-[85vh] flex items-center justify-center scroll-mt-24"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="relative text-center max-w-4xl mx-auto px-6 py-20">
          <div className="mb-8">
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-text mb-6 leading-tight">
            Expert House Cleaning in Spokane, WA
          </h1>
          <p className="text-lg lg:text-xl text-text mb-10 leading-relaxed max-w-2xl mx-auto">
            Welcome to Spokane's most trusted residential cleaning service! We provide detailed, reliable, and eco-friendly
            cleaning throughout Spokane, Spokane Valley, Liberty Lake, and nearby areas—so you can enjoy more time while we
            make your home sparkle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button" aria-label="Get Free Estimate">
              Get Free Estimate
            </button>
            <a href="#services" aria-label="See Services">
              <button className="btn-secondary" type="button">
                See Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-16 bg-surface scroll-mt-24" aria-labelledby="why-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="why-title" className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">
            Why Choose Our House Cleaners Near You?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card flex items-center gap-3">
              <ShieldCheck className="text-teal" />
              <span className="font-medium">Insured & Bonded</span>
            </div>
            <div className="card flex items-center gap-3">
              <Leaf className="text-teal" />
              <span className="font-medium">Eco & Pet-Safe</span>
            </div>
            <div className="card flex items-center gap-3">
              <Users className="text-teal" />
              <span className="font-medium">Vetted Local Pros</span>
            </div>
            <div className="card flex items-center gap-3">
              <Sparkles className="text-teal" />
              <span className="font-medium">Satisfaction Guaranteed</span>
            </div>
          </div>
          <p className="text-lg text-text max-w-3xl mx-auto text-center">
            Choosing a cleaning service is about trust and reliability. Our Spokane house cleaners are fully insured, bonded,
            and rigorously trained. We use eco-friendly, pet-safe products and back every visit with a satisfaction guarantee.
            As a local business, we prioritize personalized care and exceptional results.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white scroll-mt-24" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 id="services-title" className="text-4xl lg:text-5xl font-bold text-text mb-4">
              Comprehensive Residential Cleaning Services
            </h2>
            <p className="text-xl text-text">Professional, reliable, and tailored to your home</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className="card relative group block rounded-lg overflow-hidden border-4 border-teal focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`${s.title} - Learn more`}
                style={{
                  backgroundImage: `url(${s.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                <div className="relative z-10 flex flex-col justify-end items-center h-80 p-6 text-center">
                  <div className="bg-accent rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-white/90">{s.blurb}</p>
                  <span className="mt-4 inline-flex items-center text-white font-semibold">
                    Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 bg-surface scroll-mt-24" aria-labelledby="process-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="process-title" className="text-3xl lg:text-4xl font-bold text-text mb-8 text-center">
            Our Simple House Cleaning Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="card">
              <span className="step-number">1</span>
              <h3 className="mt-2 font-semibold">Request Your Quote</h3>
              <p className="text-sm text-text">Call or request online for a fast, customized estimate.</p>
            </div>
            <div className="card">
              <span className="step-number">2</span>
              <h3 className="mt-2 font-semibold">Customize Your Plan</h3>
              <p className="text-sm text-text">We tailor services to your home, schedule, and preferences.</p>
            </div>
            <div className="card">
              <span className="step-number">3</span>
              <h3 className="mt-2 font-semibold">Pro Clean Day</h3>
              <p className="text-sm text-text">Our punctual, equipped team delivers a detailed clean.</p>
            </div>
            <div className="card">
              <span className="step-number">4</span>
              <h3 className="mt-2 font-semibold">Follow-up & Satisfaction</h3>
              <p className="text-sm text-text">We check in to ensure everything’s perfect—guaranteed.</p>
            </div>
          </div>
          <p className="mt-8 text-lg text-text max-w-3xl mx-auto text-center">
            Getting your Spokane home professionally cleaned is straightforward with our seamless process. Request a free quote,
            choose your plan and schedule, and enjoy a refreshed home—every time.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-white scroll-mt-24" aria-labelledby="pricing-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up">
          <h2 id="pricing-title" className="text-3xl lg:text-4xl font-bold text-text mb-4">Transparent Pricing & Free Estimates</h2>
          <p className="text-lg text-text max-w-3xl mx-auto mb-6">
            Costs vary by home size, cleaning type, and frequency. Standard services typically start around $110 per visit.
            Deep or move-out cleanings are quoted individually. Recurring plans offer meaningful savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button">
              Get My Free Estimate
            </button>
          </div>
        </div>
      </section>

      {/* Team & Trust */}
      <section id="team" className="py-16 bg-white scroll-mt-24" aria-labelledby="team-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="team-title" className="text-3xl lg:text-4xl font-bold text-text mb-4 text-center">Meet Our Trusted Spokane Cleaning Team</h2>
          <p className="text-lg text-text max-w-3xl mx-auto text-center">
            Our local team is fully vetted, background-checked, insured, bonded, and professionally trained to deliver consistent,
            high-quality results—built on trust, reliability, and excellent customer service.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 bg-surface scroll-mt-24" aria-labelledby="areas-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="areas-title" className="text-3xl lg:text-4xl font-bold text-text mb-4 text-center">Our Spokane Area Service Locations</h2>
          <p className="text-lg text-text max-w-3xl mx-auto text-center">
            Spokane, Spokane Valley, Liberty Lake, Millwood, Mead, Dishman, Greenacres, Veradale, Otis Orchards. ZIP codes:
            99201, 99206, 99208, 99037.
          </p>
          <div className="mt-6 text-center">
            <a href="/locations" className="inline-flex">
              <Button variant="secondary" className="w-full sm:w-72 mx-auto">View full service area</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white scroll-mt-24" aria-labelledby="testimonials-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="testimonials-title" className="text-3xl lg:text-4xl font-bold text-text mb-8 text-center">
            Real Customer Reviews & Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="card">
                <p className="italic text-text">{t.quote}</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-surface scroll-mt-24" aria-labelledby="faqs-title">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="faqs-title" className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">
            Frequently Asked Questions (FAQs)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}

            <AccordionItem value="item-deep-clean-included">
              <AccordionTrigger className="text-left">What’s included in a deep house cleaning in Spokane?</AccordionTrigger>
              <AccordionContent>
                A deep house cleaning in Spokane usually includes scrubbing bathrooms and kitchens, cleaning baseboards, dusting vents and ceiling fans, and sanitizing high-touch areas. It goes beyond standard cleaning to cover hard-to-reach spots.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-maid-cost">
              <AccordionTrigger className="text-left">How much does maid service cost in Spokane?</AccordionTrigger>
              <AccordionContent>
                Maid service in Spokane typically costs between $100 and $500+ per visit, depending on the size of your home and how detailed the cleaning is. Deep cleaning or move-out services will cost more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-moveout-required">
              <AccordionTrigger className="text-left">Is move-out cleaning required when I leave a rental in Spokane?</AccordionTrigger>
              <AccordionContent>
                Yes, many Spokane landlords require professional move-out cleaning as part of the lease. Hiring a local cleaning service ensures you meet the standards for getting your deposit back.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-eco-friendly">
              <AccordionTrigger className="text-left">Are there eco-friendly house cleaners in Spokane?</AccordionTrigger>
              <AccordionContent>
                Yes, several Spokane cleaning companies offer green cleaning options using non-toxic, eco-friendly products that are safe for kids and pets. Cleaners Ready 2 GO is Spokane’s favorite.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-how-often">
              <AccordionTrigger className="text-left">How often should I get a professional house cleaning in Spokane?</AccordionTrigger>
              <AccordionContent>
                Most Spokane residents schedule cleanings every two weeks or once a month. Homes with pets, kids, or allergy concerns may benefit from weekly cleanings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-supplies">
              <AccordionTrigger className="text-left">Do house cleaners in Spokane bring their own supplies?</AccordionTrigger>
              <AccordionContent>
                Yes, most Spokane cleaning companies bring their own equipment and eco-friendly products. You can request specific products or methods if needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-same-day">
              <AccordionTrigger className="text-left">Can I get same-day house cleaning in Spokane?</AccordionTrigger>
              <AccordionContent>
                Some companies offer same-day or next-day house cleaning in Spokane, but availability depends on the schedule. Booking ahead is recommended for deep cleans or larger jobs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-deep-before-selling">
              <AccordionTrigger className="text-left">Is deep cleaning worth it before listing my Spokane home for sale?</AccordionTrigger>
              <AccordionContent>
                Definitely. Deep cleaning your Spokane home before listing can boost curb appeal, make a better impression on buyers, and help your home sell faster.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-find-best">
              <AccordionTrigger className="text-left">How do I find the best house cleaning service near me in Spokane?</AccordionTrigger>
              <AccordionContent>
                Look for Spokane cleaning companies with great reviews, bonded and insured teams, and satisfaction guarantees. Ask about their cleaning checklists and eco-friendly options.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA / Closing */}
      <section id="cta" className="footer py-20 relative overflow-hidden scroll-mt-24" aria-labelledby="cta-title">
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 id="cta-title" className="text-4xl lg:text-6xl font-bold text-text mb-6 leading-tight">
            Book Your Cleaning Service Today!
          </h2>
          <p className="text-lg lg:text-xl text-text mb-10">
            We promise reliable, thorough, and eco-friendly cleaning that exceeds expectations. Get your free estimate or book now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <button onClick={() => open("quote")} className="btn-primary" type="button" aria-label="Get Free Estimate">
              Get Free Estimate
            </button>
            <Button onClick={() => open("booking")} className="btn-secondary" type="button" aria-label="Schedule Cleaning">
              Schedule Cleaning
            </Button>
          </div>
          {/* Removed call and email buttons as requested */}
        </div>
      </section>

    </>
  );
}