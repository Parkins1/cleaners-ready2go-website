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
      <section className="bg-gradient-to-br from-white to-gray-50 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <img 
                  src={logoImage} 
                  alt="Cleaners Ready 2Go Logo" 
                  className="h-32 w-auto"
                />
              </div>
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
                  <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                </div>
                <span className="text-brand-gold font-medium text-sm tracking-wide">PROFESSIONAL CLEANING</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-brand-black mb-6 leading-tight">
                Your Home, <span className="text-brand-gold">Spotless</span> and Ready to Go
              </h1>
              <p className="text-xl text-brand-gray mb-8 leading-relaxed">
                Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. 
                From weekly maintenance to deep move-out cleans, we're ready when you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
                >
                  Book a Cleaning
                </Button>
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  variant="outline"
                  className="border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern clean living room interior" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-black">100% Satisfaction</div>
                    <div className="text-sm text-brand-gray">Guaranteed Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-black mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-brand-gray">Professional, reliable, and ready when you need us</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-brand-gold p-3 rounded-lg w-fit mb-6">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">Residential Cleaning</h3>
              <p className="text-brand-gray mb-4">Regular weekly, bi-weekly, or monthly cleaning to keep your home spotless.</p>
              <a href="/residential" className="text-brand-gold font-medium hover:text-yellow-600 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-brand-gold p-3 rounded-lg w-fit mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">Move-Out Cleaning</h3>
              <p className="text-brand-gray mb-4">Deep cleaning for apartment cleanouts and move-out situations. Hourly services available.</p>
              <a href="/move-out" className="text-brand-gold font-medium hover:text-yellow-600 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-brand-gold p-3 rounded-lg w-fit mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">Service Areas</h3>
              <p className="text-brand-gray mb-4">Serving Spokane Valley, Liberty Lake, and Greenacres with reliable cleaning services.</p>
              <a href="/locations" className="text-brand-gold font-medium hover:text-yellow-600 flex items-center">
                View Areas <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-brand-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready for a Spotless Home?</h2>
          <p className="text-xl text-gray-300 mb-8">Book your cleaning service today and experience the difference professional cleaning makes.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book a Cleaning
            </Button>
            <a 
              href="tel:+1234567890" 
              className="border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
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
