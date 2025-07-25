import { useState } from "react";
import { Home as HomeIcon, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";
import logoImage from "@assets/cleaners_ready2go_logo_transparent_1753378992010.png";
import heroImage from "@assets/hero-cleaning-image.jpeg";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Cleaners Ready 2Go - Professional Cleaning Services | Spokane Valley, Liberty Lake, Greenacres</title>
      <meta name="description" content="Professional residential and move-out cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Book your cleaning today!" />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Semi-transparent white overlay for glass effect */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        
        {/* Centered Content */}
        <div className="relative text-center max-w-4xl mx-auto px-6 py-20">
          {/* Subtle Logo */}
          <div className="mb-12">
            <img 
              src={logoImage} 
              alt="Cleaners Ready 2Go" 
              className="h-16 w-auto mx-auto opacity-90"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="logo-text text-5xl lg:text-7xl font-bold text-brand-black mb-8 leading-tight">
            Professional Cleaning<br />
            <span className="text-brand-gold">Made Simple</span>
          </h1>
          
          {/* Subheadline */}
          <p className="tagline-text text-lg lg:text-xl text-gray-700 mb-16 leading-relaxed max-w-2xl mx-auto uppercase tracking-wider">
            Trusted cleaning services for Spokane Valley, Liberty Lake, and Greenacres
          </p>
          
          {/* Single CTA Button */}
          <Button
            onClick={() => setIsBookingModalOpen(true)}
            className="btn-primary text-xl"
          >
            Book Your Cleaning
          </Button>
        </div>
      </section>
      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-heading mb-6">Our Cleaning Services</h2>
            <p className="text-xl lg:text-2xl text-body">Professional, reliable, and ready when you need us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 flex flex-col items-center glass-card">
              <div className="icon-container mb-4">
                <HomeIcon className="w-10 h-10 text-brand-secondary" />
              </div>
              <h3 className="text-brand-primary font-heading text-xl mb-2">Residential Cleaning</h3>
              <p className="text-white text-opacity-90 mb-4 text-center">
                Regular weekly, bi-weekly, or monthly cleaning to keep your home spotless and welcoming.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary font-bold mt-auto"
              >
                Book Now
              </button>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 flex flex-col items-center glass-card">
              <div className="icon-container mb-4">
                <svg className="w-10 h-10 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </div>
              <h3 className="text-brand-primary font-heading text-xl mb-2">Move-Out Cleaning</h3>
              <p className="text-white text-opacity-90 mb-4 text-center">
                Deep cleaning for apartment cleanouts and move-out situations. Hourly services available.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary font-bold mt-auto"
              >
                Book Now
              </button>
            </div>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 flex flex-col items-center glass-card">
              <div className="icon-container mb-4">
                <svg className="w-10 h-10 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-brand-primary font-heading text-xl mb-2">Service Areas</h3>
              <p className="text-white text-opacity-90 mb-4 text-center">
                Serving Spokane Valley, Liberty Lake, and Greenacres with reliable cleaning services.
              </p>
              <a 
                href="/locations"
                className="btn-glass btn-glass--primary font-bold mt-auto"
              >
                View Areas
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-20 bg-brand-black relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight text-[#0f171a]">Ready for a <span className="text-brand-gold">Spotless</span> Home?</h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">Book your cleaning service today and experience the difference professional cleaning makes.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-primary text-lg"
            >
              Book a Cleaning
            </button>
            <a 
              href="tel:+1234567890" 
              className="btn-secondary text-lg"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>
      {/* Modals */}
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
