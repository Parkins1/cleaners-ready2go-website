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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-brand-black mb-6 leading-tight">
              Expert House Cleaning in Spokane, WA
            </h1>
            <p className="text-xl text-brand-gray font-medium max-w-4xl mx-auto leading-relaxed">
              Welcome to Spokane's most trusted residential cleaning service! Proudly serving Spokane, Spokane Valley, Liberty Lake, and surrounding neighborhoods, we provide detailed, reliable, and eco-friendly cleaning tailored to your needs. Our commitment to customer satisfaction ensures your home sparkles every visit, freeing you from household chores so you can enjoy more family and leisure time.
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
            <h2 className="text-4xl font-bold text-brand-black mb-6">Why Choose Our House Cleaners Near You?</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Choosing a cleaning service is about trust and reliability. Our Spokane house cleaners are fully insured, bonded, and rigorously trained to deliver the highest cleaning standards. We exclusively use eco-friendly, pet-safe products, providing peace of mind and a healthier home environment for your family. Our satisfaction guarantee means if you're not completely happy with our cleaning, we'll promptly return to address any concerns at no extra charge.
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
            <h2 className="text-4xl font-bold text-brand-black mb-6">Comprehensive Residential Cleaning Services</h2>
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
            <h2 className="text-4xl font-bold text-brand-black mb-6">Our Simple House Cleaning Process</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Getting your Spokane home professionally cleaned is straightforward with our seamless process. Begin by requesting your free, customized quote via phone or online. We'll tailor your cleaning service to fit your specific requirements and schedule preferences. On the scheduled day, our experienced, punctual cleaning team arrives fully equipped and ready to work. After thorough cleaning, we'll follow up to ensure you're completely satisfied.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Transparent Pricing & Free Estimates</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Curious about house cleaning costs in Spokane? We provide transparent, competitive pricing with no hidden fees. Costs vary based on home size, cleaning type, and frequency. Typically, standard cleaning services start around $110 per visit, while deep or move-out cleanings are individually quoted. Our affordable recurring cleaning plans offer significant savings.
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
            <h2 className="text-4xl font-bold text-brand-black mb-6">Meet Our Trusted Spokane Cleaning Team</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Our professional cleaning team members are Spokane locals, fully vetted through extensive background checks and professionally trained to deliver exceptional cleaning services. We're insured, bonded, and committed to delivering consistently high-quality results. Our strong community reputation is built upon trust, reliability, and excellent customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-black mb-6">Our Spokane Area Service Locations</h2>
            <p className="text-lg text-brand-gray max-w-4xl mx-auto leading-relaxed mb-8">
              We proudly serve Spokane and surrounding communities including Spokane Valley, Liberty Lake, Millwood, Mead, Dishman, Greenacres, Veradale, Otis Orchards, and surrounding ZIP codes like 99201, 99206, 99208, and 99037. Not sure if your neighborhood is covered? Simply contact us! Whether you reside in downtown Spokane, suburbs, or nearby areas, we're here to provide convenient, professional cleaning services.
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
            <h2 className="text-4xl font-bold text-brand-black mb-6">Real Customer Reviews & Testimonials</h2>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Book Your Cleaning Service Today!</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Get Your Free Estimate Now! Call (Your Number), email us at (Your Email), or conveniently book online today for fast, easy scheduling and guaranteed satisfaction.
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
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-brand-black mb-6">Our Cleaning Promise to You</h2>
          <div className="glass-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <p className="text-lg text-brand-gray leading-relaxed">
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