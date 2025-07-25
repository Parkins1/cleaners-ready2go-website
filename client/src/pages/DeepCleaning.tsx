import { useState } from "react";
import { CheckCircle, Clock, Star, Shield } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";

export default function DeepCleaning() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <title>Deep Cleaning Services - Cleaners Ready 2Go | Comprehensive Home Cleaning</title>
      <meta name="description" content="Professional deep cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Spring cleaning, move-in preparation, and seasonal deep cleans available." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-primary mb-6">Deep Cleaning Services</h1>
            <p className="text-xl text-brand-primary font-medium">Comprehensive cleaning for a fresh start</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-6">When You Need More Than Regular Cleaning</h2>
              <p className="text-brand-primary font-medium mb-6 leading-relaxed">
                Our deep cleaning service goes beyond regular maintenance cleaning. Perfect for seasonal refreshes, move-in preparation, post-construction cleanup, or when you want to reset your home to pristine condition.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                  <span className="text-brand-primary font-medium">Complete top-to-bottom cleaning</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                  <span className="text-brand-primary font-medium">Inside appliances and cabinets</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                  <span className="text-brand-primary font-medium">Baseboards, window sills, and light fixtures</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3" />
                  <span className="text-brand-primary font-medium">Detailed bathroom and kitchen scrubbing</span>
                </div>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="btn-glass btn-glass--primary text-lg font-bold"
              >
                Get a Quote
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional deep cleaning of modern bathroom with attention to detail" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Deep Cleaning Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12">
            <div className="w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center glass-card min-h-[280px] sm:min-h-[320px]">
              <div className="icon-container mb-3 sm:mb-4 flex-shrink-0">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-brand-secondary" />
              </div>
              <h3 className="text-brand-primary font-heading text-lg sm:text-xl mb-2 text-center">Thorough Process</h3>
              <p className="text-white text-opacity-90 mb-4 text-center text-sm sm:text-base leading-relaxed flex-grow">
                Our deep cleaning takes 4-8 hours depending on home size, ensuring every detail is addressed.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary font-bold mt-auto text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
              >
                Book Now
              </button>
            </div>
            <div className="w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center glass-card min-h-[280px] sm:min-h-[320px]">
              <div className="icon-container mb-3 sm:mb-4 flex-shrink-0">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-brand-secondary" />
              </div>
              <h3 className="text-brand-primary font-heading text-lg sm:text-xl mb-2 text-center">Premium Service</h3>
              <p className="text-white text-opacity-90 mb-4 text-center text-sm sm:text-base leading-relaxed flex-grow">
                Professional-grade equipment and eco-friendly products for exceptional results.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary font-bold mt-auto text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
              >
                Book Now
              </button>
            </div>
            <div className="w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 flex flex-col items-center glass-card min-h-[280px] sm:min-h-[320px] md:col-span-2 lg:col-span-1">
              <div className="icon-container mb-3 sm:mb-4 flex-shrink-0">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-brand-secondary" />
              </div>
              <h3 className="text-brand-primary font-heading text-lg sm:text-xl mb-2 text-center">Satisfaction Guaranteed</h3>
              <p className="text-white text-opacity-90 mb-4 text-center text-sm sm:text-base leading-relaxed flex-grow">
                100% satisfaction guarantee - we'll return within 24 hours if anything is missed.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary font-bold mt-auto text-sm sm:text-base px-4 py-2 w-full sm:w-auto"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Deep Cleaning Checklist */}
          <div className="bg-brand-neutral rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-brand-primary mb-6 text-center">Complete Deep Cleaning Checklist</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-brand-primary mb-3">Kitchen</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Inside oven and microwave</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Inside refrigerator</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Cabinet fronts and interiors</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Detailed backsplash cleaning</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-3">Bathrooms</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Grout and tile deep scrubbing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Shower door and fixture detailing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Medicine cabinet cleaning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Ventilation fan cleaning</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-brand-primary mb-3">Throughout Home</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">All baseboards and trim</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Light fixtures and ceiling fans</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Window sills and tracks</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-secondary mr-2 flex-shrink-0" />
                    <span className="text-brand-primary">Switch plates and door frames</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Deep Cleaning Investment</h3>
            <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl p-8 max-w-md mx-auto glass-card">
              <div className="text-4xl font-bold text-brand-secondary mb-2">Starting at $299</div>
              <div className="text-brand-primary mb-4">Based on home size and condition</div>
              <p className="text-white text-opacity-90 text-sm mb-6">
                Final pricing determined after free consultation and walkthrough
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="btn-glass btn-glass--primary w-full py-3 font-bold"
                >
                  Get Custom Quote
                </button>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="btn-glass btn-glass--secondary w-full py-3 font-bold"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
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