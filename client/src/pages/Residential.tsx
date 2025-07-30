import { useState } from "react";
import { CheckCircle, Star, Phone, Mail, MapPin, Clock, Shield, Users, Sparkles, ChevronDown } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";
import backgroundImage from "@assets/background_1753905280293.webp";

export default function Residential() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Standard/Recurring House Cleaning",
      description: "Our standard house cleaning includes routine tasks such as dusting, vacuuming, mopping, bathroom sanitization, and kitchen cleaning. Ideal for weekly, bi-weekly, or monthly service, it ensures your home remains tidy and welcoming without effort on your part. Enjoy a consistently clean home and the peace of mind that comes with our trusted cleaning professionals.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Deep Cleaning",
      description: "Choose our deep cleaning service when your home needs meticulous care beyond regular maintenance. We address often-overlooked areas like baseboards, blinds, behind appliances, and grout cleaning. Recommended seasonally, before hosting guests, or after renovations, our deep cleaning ensures your home feels refreshed, sanitized, and looks its absolute best.",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Our move-in/move-out cleaning is perfect for renters, property managers, and homeowners transitioning between homes. We perform comprehensive cleaning covering cabinets, appliances, fixtures, floors, and surfaces. This meticulous service ensures your property is spotless, helping you secure deposits or prepare your new space for comfortable living right from the start.",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      title: "Apartment Cleaning",
      description: "Our apartment cleaning service is specially designed for smaller spaces and busy lifestyles. We provide flexible scheduling, tailored cleaning packages, and efficient service customized to apartment living. Experience stress-free apartment upkeep that fits seamlessly into your lifestyle, ensuring a consistently tidy and enjoyable living space.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "One-Time & Eco-Friendly Cleaning",
      description: "Need specialized or eco-friendly cleaning? Our one-time, green, and specialty cleanings cater to your unique needs. Perfect for allergy sufferers, pet owners, or environmentally conscious households, we use natural, hypoallergenic products and customizable cleaning plans. Trust our detailed attention to transform your home environment safely, sustainably, and comfortably.",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional cleaning service! Reliable and thorough every time.",
      name: "Emily S.",
      location: "Spokane Valley"
    },
    {
      quote: "Fantastic move-out cleaning. Got my full deposit back!",
      name: "David L.",
      location: "Liberty Lake"
    },
    {
      quote: "Their eco-friendly products are perfect for my allergies. Highly recommend!",
      name: "Rachel M.",
      location: "Millwood"
    }
  ];

  const faqs = [
    {
      question: "Are you insured and bonded?",
      answer: "Yes, all our cleaners are fully insured, bonded, and background-checked."
    },
    {
      question: "What products do you use?",
      answer: "We use safe, eco-friendly, and hypoallergenic cleaning products."
    },
    {
      question: "How do I book services?",
      answer: "You can book via phone, email, or online form."
    }
  ];

  return (
    <>
      <title>Top Residential House Cleaning Services in Spokane, WA</title>
      <meta name="description" content="Professional, eco-friendly residential house cleaning services in Spokane, Spokane Valley, Liberty Lake, and surrounding areas. Insured, bonded, and satisfaction guaranteed." />
      
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container-spacing">
          <div className="text-center text-spacing">
            <h1 className="text-6xl md:text-7xl font-display font-bold text-brand-black mb-8 leading-tight tracking-tight">
              Expert House Cleaning in Spokane, WA
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray font-medium max-w-5xl mx-auto leading-relaxed">
              Welcome to Spokane's most trusted residential cleaning service! Proudly serving Spokane, Spokane Valley, Liberty Lake, and surrounding neighborhoods, we provide detailed, reliable, and eco-friendly cleaning tailored to your needs. Our commitment to customer satisfaction ensures your home sparkles every visit, freeing you from household chores so you can enjoy more family and leisure time.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="btn-glass btn-glass--primary text-lg font-ui font-semibold px-10 py-5 rounded-2xl"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--secondary text-lg font-ui font-semibold px-10 py-5 rounded-2xl"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing bg-white">
        <div className="container-spacing">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Why Choose Our House Cleaners Near You?</h2>
            <p className="text-xl md:text-2xl text-brand-gray max-w-5xl mx-auto leading-relaxed font-medium">
              Choosing a cleaning service is about trust and reliability. Our Spokane house cleaners are fully insured, bonded, and rigorously trained to deliver the highest cleaning standards. We exclusively use eco-friendly, pet-safe products, providing peace of mind and a healthier home environment for your family.
            </p>
          </div>
          
          <div className="card-grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="card-modern text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-black mb-4">Fully Insured & Bonded</h3>
              <p className="text-brand-gray leading-relaxed font-medium">Background-checked professionals you can trust in your home with complete peace of mind.</p>
            </div>
            <div className="card-modern text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-black mb-4">Eco-Friendly Products</h3>
              <p className="text-brand-gray leading-relaxed font-medium">Safe, natural cleaning solutions that protect your family, pets, and the environment.</p>
            </div>
            <div className="card-modern text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brand-black mb-4">Satisfaction Guaranteed</h3>
              <p className="text-brand-gray leading-relaxed font-medium">Not completely satisfied? We'll return to make it right—no questions asked, guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-spacing">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Comprehensive Residential Cleaning Services</h2>
          </div>
          
          <div className="card-grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="card-modern group">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mr-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-black leading-tight">{service.title}</h3>
                </div>
                <p className="text-brand-gray leading-relaxed font-medium text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-spacing bg-white">
        <div className="container-spacing">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Our Simple House Cleaning Process</h2>
            <p className="text-xl md:text-2xl text-brand-gray max-w-5xl mx-auto leading-relaxed font-medium">
              Getting your Spokane home professionally cleaned is straightforward with our seamless process. Begin by requesting your free, customized quote via phone or online. We'll tailor your cleaning service to fit your specific requirements and schedule preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-spacing">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Transparent Pricing & Free Estimates</h2>
            <p className="text-xl md:text-2xl text-brand-gray max-w-5xl mx-auto leading-relaxed font-medium">
              Curious about house cleaning costs in Spokane? We provide transparent, competitive pricing with no hidden fees. Costs vary based on home size, cleaning type, and frequency.
            </p>
            <div className="mt-12">
              <div className="card-modern inline-block bg-white">
                <div className="text-5xl font-display font-bold text-brand-secondary mb-4">Starting at $110</div>
                <div className="text-xl text-brand-gray font-medium">per standard cleaning visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing bg-white">
        <div className="container-spacing">
          <div className="text-center text-spacing">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Meet Our Trusted Spokane Cleaning Team</h2>
            <p className="text-xl md:text-2xl text-brand-gray max-w-5xl mx-auto leading-relaxed font-medium">
              Our professional cleaning team members are Spokane locals, fully vetted through extensive background checks and professionally trained to deliver exceptional cleaning services. We're insured, bonded, and committed to delivering consistently high-quality results.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-spacing">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Our Spokane Area Service Locations</h2>
            <p className="text-xl md:text-2xl text-brand-gray max-w-5xl mx-auto leading-relaxed font-medium mb-12">
              We proudly serve Spokane and surrounding communities including Spokane Valley, Liberty Lake, Millwood, Mead, Dishman, Greenacres, Veradale, Otis Orchards, and surrounding ZIP codes. Whether you reside in downtown Spokane, suburbs, or nearby areas, we're here to provide convenient, professional cleaning services.
            </p>
            <div className="card-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {["Spokane", "Spokane Valley", "Liberty Lake", "Millwood", "Greenacres", "Mead", "Dishman", "Veradale", "Otis Orchards"].map((city) => (
                <div key={city} className="card-modern text-center bg-white">
                  <span className="font-display font-semibold text-brand-black text-lg">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-white">
        <div className="container-spacing">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Real Customer Reviews & Testimonials</h2>
          </div>
          
          <div className="card-grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-modern group">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-brand-gray italic mb-6 leading-relaxed text-lg font-medium">"{testimonial.quote}"</p>
                <div className="font-display font-bold text-brand-black text-xl">{testimonial.name}</div>
                <div className="text-brand-gray font-medium">{testimonial.location}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-brand-gray text-lg font-medium">
              See more five-star reviews on Google and Facebook. We're proud to maintain a 4.9-star average with hundreds of happy customers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-spacing max-w-4xl">
          <div className="text-center text-spacing mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-8">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-modern bg-white overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-8 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-display font-bold text-brand-black text-xl">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-brand-gray transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-8">
                    <p className="text-brand-gray leading-relaxed text-lg font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container-spacing text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-8">Book Your Cleaning Service Today!</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed font-medium max-w-4xl mx-auto">
            Get Your Free Estimate Now! Call us, email us, or conveniently book online today for fast, easy scheduling and guaranteed satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-brand-primary font-ui font-bold px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-brand-secondary text-white font-ui font-bold px-10 py-5 rounded-2xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Book Cleaning
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-xl opacity-90">
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-3" />
              <span className="font-medium">(509) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-3" />
              <span className="font-medium">info@cleanersready2go.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="section-spacing bg-white">
        <div className="container-spacing max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold text-brand-black mb-12">Our Cleaning Promise to You</h2>
          <div className="card-modern bg-gradient-to-br from-blue-50 to-indigo-50">
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-medium">
              We promise reliable, thorough, and eco-friendly cleaning services that exceed your expectations. Experience our unmatched commitment to quality and customer satisfaction—book your service and reclaim your time today.
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