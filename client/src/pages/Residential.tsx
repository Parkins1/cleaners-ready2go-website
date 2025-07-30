import { useState } from "react";
import { CheckCircle, Star, Phone, Mail, MapPin, Clock, Shield, Users, Sparkles, ChevronDown } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";

export default function Residential() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Standard/Recurring House Cleaning",
      description: "Our recurring house cleaning service is perfect for busy families and professionals who want a consistently tidy home. Enjoy regular visits (weekly, bi-weekly, or monthly) that cover dusting, vacuuming, kitchen and bath cleaning, trash removal, and more. We keep your home healthy and comfortable, so you can relax and focus on life—not chores.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Deep Cleaning",
      description: "Deep cleaning is our specialty for homes that need some extra TLC. We scrub all the nooks and crannies, including baseboards, behind appliances, light fixtures, and neglected corners. Perfect for spring cleaning, post-renovation, or prepping for guests. This comprehensive service tackles built-up grime and restores your space to its best.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Moving? Leave the stress—and the mess—to us! Our move-in/move-out cleaning service is ideal for renters, landlords, and homeowners. We ensure every surface is spotless for the next occupant, including inside cabinets, appliances, closets, and more. Impress landlords or buyers and secure your deposit with our detailed approach.",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: "Apartment Cleaning",
      description: "Apartment dwellers get the same five-star treatment as homeowners, with service tailored for smaller spaces and unique building requirements. We're flexible to fit around busy schedules, HOA rules, or pet needs. Our apartment cleaning is perfect for urban professionals, students, and anyone who values a sparkling retreat.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "One-Time/Specialty/Eco-Friendly Cleanings",
      description: "Have a special project, allergy concern, or big event? Our one-time and specialty cleanings are fully customizable. We offer green cleaning with hypoallergenic, fragrance-free, and pet-safe products. Whether you're prepping for a party or need post-construction cleaning, just tell us what you need—we'll make it happen.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      quote: "I've never seen my house so clean! The team was friendly, professional, and right on time.",
      name: "Sarah P.",
      location: "Spokane Valley"
    },
    {
      quote: "They worked magic on my rental. I got my whole deposit back!",
      name: "Tom B.",
      location: "Liberty Lake"
    },
    {
      quote: "Love their eco-friendly products. My allergies are finally under control.",
      name: "Nina K.",
      location: "Millwood"
    }
  ];

  const faqs = [
    {
      question: "What cleaning products do you use?",
      answer: "We use eco-friendly, family- and pet-safe products. If you have allergies or special requests, just let us know!"
    },
    {
      question: "Are you insured and bonded?",
      answer: "Absolutely. Every cleaner is insured, bonded, and background-checked."
    },
    {
      question: "What's included in a standard clean?",
      answer: "Kitchens, bathrooms, living areas, bedrooms—dusting, floors, surfaces, trash, and more. We'll customize for your needs!"
    },
    {
      question: "Do I need to be home?",
      answer: "No need. Many clients provide entry instructions. We'll secure your home before leaving."
    },
    {
      question: "How do I book or reschedule?",
      answer: "Book online, call, or email—whatever's easiest. We offer flexible rescheduling with 24 hours' notice."
    }
  ];

  return (
    <>
      <title>Residential House Cleaning Spokane, WA | Spotless Results, Easy Booking</title>
      <meta name="description" content="Top-rated residential cleaning in Spokane, Spokane Valley, Liberty Lake, and more. Eco-friendly, insured, and satisfaction guaranteed. Get a fast quote!" />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-brand-black mb-6 leading-tight">
              Residential House Cleaning in Spokane, WA
            </h1>
            <p className="text-xl text-brand-gray font-medium max-w-4xl mx-auto leading-relaxed">
              Welcome to the trusted name in residential house cleaning for Spokane and the surrounding areas! Our mission is simple: give busy homeowners a cleaner, healthier, and stress-free home—without lifting a finger. Whether you're in downtown Spokane, Spokane Valley, Liberty Lake, or nearby, our professional cleaning team is ready to deliver five-star service with every visit.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="btn-glass btn-glass--primary text-lg font-bold px-8 py-4"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--secondary text-lg font-bold px-8 py-4"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Why Choose Our House Cleaners Near Me?</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Trust is at the heart of everything we do. All of our house cleaners are thoroughly background-checked, fully insured, and professionally trained for your complete peace of mind. We're a locally owned team—not a franchise—so every client is a neighbor, not a number. Our cleaners use eco-friendly products that are tough on dirt but safe for your family and pets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">Fully Insured & Bonded</h3>
              <p className="text-brand-gray">Background-checked professionals you can trust in your home.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">Eco-Friendly Products</h3>
              <p className="text-brand-gray">Safe for your family, pets, and the environment.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">Satisfaction Guaranteed</h3>
              <p className="text-brand-gray">Not thrilled? We'll come back and fix it—no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Our Residential Cleaning Services</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mr-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black">{service.title}</h3>
                </div>
                <p className="text-brand-gray leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Cleaning Process & What to Expect</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Booking with us is easy! Start with a quick phone call or online quote. We'll discuss your needs, answer questions, and provide a clear estimate with no hidden fees. Pick a date and time that fits your life—we work weekends and evenings too. On cleaning day, our uniformed team arrives on time, with all supplies. We'll walk through your home, confirm your preferences, and get to work.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Pricing, Estimates & How Much Do House Cleaners Cost?</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              We believe in upfront, transparent pricing—no surprises. Cleaning costs depend on your home's size, condition, and the level of service you choose. Standard cleaning for a typical Spokane-area home starts at just $110 per visit; deep cleans or move-in/move-out jobs are quoted individually based on your needs.
            </p>
            <div className="mt-8">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl font-bold text-brand-secondary mb-2">Starting at $110</div>
                <div className="text-brand-gray">per standard cleaning visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Our Team & Trust Signals</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Meet Spokane's most trusted cleaning team! Our staff are carefully selected, extensively trained, and undergo thorough background checks for your peace of mind. We're bonded, insured, and locally operated—no faceless out-of-town franchise. You'll see familiar faces at each visit, and we treat your home with the same care as our own.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Service Areas: Spokane & Surrounding Cities</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed mb-8">
              We're proud to serve Spokane and all surrounding communities, including Spokane Valley, Liberty Lake, Millwood, Greenacres, Mead, Dishman, Veradale, Otis Orchards, and nearby zip codes: 99201, 99202, 99203, 99204, 99205, 99206, 99207, 99208, 99037, and more.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {["Spokane", "Spokane Valley", "Liberty Lake", "Millwood", "Greenacres", "Mead", "Dishman", "Veradale", "Otis Orchards"].map((city) => (
                <div key={city} className="bg-white rounded-lg p-4 shadow-md">
                  <span className="font-medium text-brand-black">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Customer Reviews & Testimonials</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-brand-gray italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-bold text-brand-black">{testimonial.name}</div>
                <div className="text-brand-gray text-sm">{testimonial.location}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-brand-gray">
              See more five-star reviews on Google and Facebook. We're proud to maintain a 4.9-star average with hundreds of happy customers. Real names, real cities, real results!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Frequently Asked Questions (FAQ)</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-card bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-bold text-brand-black">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-brand-gray transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Free Estimate & Book Now</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Ready for a spotless home—without the hassle? Click below for a free, no-obligation estimate, or call us now to book your cleaning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-brand-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-brand-secondary text-white font-bold px-8 py-4 rounded-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Book Cleaning
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg opacity-90">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>(509) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@cleanersready2go.com</span>
            </div>
          </div>
          
          <p className="mt-6 opacity-80">
            Experience the Spokane cleaning service everyone's talking about—fast quotes, easy scheduling, and guaranteed satisfaction.
          </p>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-black mb-6">Our Brand Promise</h2>
          <div className="glass-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <p className="text-lg text-brand-gray leading-relaxed">
              We believe everyone deserves to come home to clean. From our family to yours, we promise honest pricing, respectful service, and sparkling results—every time. Life's too short to spend it cleaning. Let us do the dirty work, so you can get back to what matters. Book your free estimate today and discover the difference local care makes.
            </p>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
}