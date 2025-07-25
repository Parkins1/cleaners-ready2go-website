import { useState } from "react";
import { Clock, CheckCircle } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";

export default function MoveOut() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <title>Move-Out Cleaning Services - Cleaners Ready 2Go | Apartment Cleanouts & Hourly Services</title>
      <meta name="description" content="Professional move-out cleaning services in Spokane Valley. Deep cleaning for apartment cleanouts with fixed-price packages and hourly services available." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-6">Move-Out Cleaning Services</h1>
            <p className="text-xl text-brand-gray">Deep cleaning for apartment cleanouts and moving situations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Empty apartment living room ready for move-out cleaning" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Apartment Cleanouts & Hourly Services</h2>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Moving out? Our specialized move-out cleaning service ensures you get your full security deposit back. We understand the specific requirements landlords expect and provide thorough, detailed cleaning that exceeds move-out standards.
              </p>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Available as both fixed-price packages and flexible hourly services to meet your specific needs and timeline.
              </p>
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-brand-black">Same-Day Service Available</div>
                  <div className="text-sm text-brand-gray">For urgent move-out situations</div>
                </div>
              </div>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="btn-primary text-lg"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Service Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Fixed-Price Packages Card */}
            <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[480px] flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-6 text-center group-hover:text-brand-primary transition-colors duration-300">Fixed-Price Packages</h3>
              <div className="space-y-6 flex-grow">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-brand-black text-lg">Studio/1BR</span>
                    <span className="text-brand-secondary font-bold text-2xl">$200</span>
                  </div>
                  <p className="text-brand-gray">Complete move-out cleaning for small apartments</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-brand-black text-lg">2BR/2BA</span>
                    <span className="text-brand-secondary font-bold text-2xl">$300</span>
                  </div>
                  <p className="text-brand-gray">Comprehensive cleaning for medium apartments</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-brand-black text-lg">3BR/2BA+</span>
                    <span className="text-brand-secondary font-bold text-2xl">$450</span>
                  </div>
                  <p className="text-brand-gray">Full-service cleaning for larger homes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-brand-primary hover:bg-brand-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl mt-6"
              >
                Book Package
              </button>
            </div>

            {/* Hourly Services Card */}
            <div className="group bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[480px] flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-6 text-center group-hover:text-brand-primary transition-colors duration-300">Hourly Services</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-brand-secondary mb-2 text-center">$45/hour</div>
                <p className="text-brand-gray text-center text-lg">Flexible cleaning based on your specific needs</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-brand-gray font-medium">Minimum 3-hour booking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-brand-gray font-medium">Custom cleaning priorities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-brand-gray font-medium">Perfect for partial cleanouts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-brand-gray font-medium">Same-day availability</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-brand-primary hover:bg-brand-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
              >
                Book Hourly
              </button>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-brand-black mb-6 text-center">What's Included in Move-Out Cleaning</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-brand-black mb-3">Kitchen</h4>
                <ul className="space-y-2 text-sm text-brand-gray">
                  <li>• Deep clean appliances inside & out</li>
                  <li>• Scrub cabinets & drawers</li>
                  <li>• Degrease all surfaces</li>
                  <li>• Clean sink & faucet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-black mb-3">Bathrooms</h4>
                <ul className="space-y-2 text-sm text-brand-gray">
                  <li>• Scrub tub/shower thoroughly</li>
                  <li>• Disinfect toilet completely</li>
                  <li>• Clean mirrors & fixtures</li>
                  <li>• Mop & sanitize floors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-brand-black mb-3">Throughout</h4>
                <ul className="space-y-2 text-sm text-brand-gray">
                  <li>• Vacuum all carpets</li>
                  <li>• Mop all hard floors</li>
                  <li>• Wipe down all surfaces</li>
                  <li>• Clean light fixtures & fans</li>
                </ul>
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
