import { useState } from "react";
import { Home as HomeIcon, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";
import logoImage from "@assets/cleaners_ready2go_logo_transparent_1753378992010.png";

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
        className="relative min-h-screen flex items-center animate-fade-in"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 animate-slide-up">
              <div className="flex items-center justify-center lg:justify-start mb-12">
                <img 
                  src={logoImage} 
                  alt="Cleaners Ready 2Go Logo" 
                  className="h-40 w-auto filter drop-shadow-2xl"
                />
              </div>
              <div className="flex items-center mb-8">
                <div className="flex space-x-1 mr-4">
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-brand-gold rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-brand-gold font-semibold text-sm tracking-wider uppercase">Professional Cleaning</span>
              </div>
              <h1 className="text-5xl lg:text-8xl font-bold text-white mb-10 leading-tight drop-shadow-lg">
                Your Home, <span className="text-brand-gold">Spotless</span> and Ready to Go
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed drop-shadow-md">
                Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. 
                From weekly maintenance to deep move-out cleans, we're ready when you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="btn-primary text-lg shadow-2xl"
                >
                  Book a Cleaning
                </Button>
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="btn-secondary text-lg shadow-2xl"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up lg:flex lg:justify-end">
              <div className="card-modern p-12 text-center backdrop-blur-sm bg-white/95 max-w-md">
                <div className="gradient-gold rounded-full w-36 h-36 mx-auto mb-10 flex items-center justify-center shadow-2xl">
                  <HomeIcon className="w-20 h-20 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-heading mb-6">Ready When You Are</h3>
                <p className="text-body text-lg mb-8 leading-relaxed">Professional, reliable, and thorough cleaning services for your home</p>
                <div className="flex items-center justify-center">
                  <div className="bg-green-100 p-4 rounded-full mr-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-heading text-xl">100% Satisfaction</div>
                    <div className="text-subheading text-lg">Guaranteed Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="card-modern p-8 text-center group">
              <div className="gradient-gold rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <HomeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">Residential Cleaning</h3>
              <p className="text-body mb-6 leading-relaxed">Regular weekly, bi-weekly, or monthly cleaning to keep your home spotless and welcoming.</p>
              <a href="/residential" className="text-brand-gold font-semibold hover:text-brand-gold-dark flex items-center justify-center transition-colors">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="card-modern p-8 text-center group">
              <div className="gradient-gold rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">Move-Out Cleaning</h3>
              <p className="text-body mb-6 leading-relaxed">Deep cleaning for apartment cleanouts and move-out situations. Hourly services available.</p>
              <a href="/move-out" className="text-brand-gold font-semibold hover:text-brand-gold-dark flex items-center justify-center transition-colors">
                Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="card-modern p-8 text-center group">
              <div className="gradient-gold rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-heading mb-4">Service Areas</h3>
              <p className="text-body mb-6 leading-relaxed">Serving Spokane Valley, Liberty Lake, and Greenacres with reliable cleaning services.</p>
              <a href="/locations" className="text-brand-gold font-semibold hover:text-brand-gold-dark flex items-center justify-center transition-colors">
                View Areas <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black to-brand-teal opacity-90"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">Ready for a <span className="text-brand-gold">Spotless</span> Home?</h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">Book your cleaning service today and experience the difference professional cleaning makes.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-primary text-lg"
            >
              Book a Cleaning
            </Button>
            <a 
              href="tel:+1234567890" 
              className="btn-secondary text-lg inline-block text-center"
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
