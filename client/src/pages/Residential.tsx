import { useState } from "react";
import { CheckCircle } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import QuoteModal from "@/components/QuoteModal";

export default function Residential() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <title>Residential Cleaning Services - Cleaners Ready 2Go | Recurring Home Cleaning</title>
      <meta name="description" content="Professional residential cleaning services in Spokane Valley. Weekly, bi-weekly, and monthly cleaning schedules available. Book your recurring service today!" />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-6">Residential Cleaning Services</h1>
            <p className="text-xl text-brand-gray font-medium">Regular cleaning services to keep your home spotless</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Recurring Service Focus</h2>
              <p className="text-brand-gray font-medium mb-6 leading-relaxed">
                Our residential cleaning services are designed around consistency and reliability. We understand that maintaining a clean home is an ongoing process, which is why we specialize in recurring cleaning schedules that work with your lifestyle.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-brand-gray font-medium">Weekly, bi-weekly, or monthly schedules</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-brand-gray font-medium">Same team for consistency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-brand-gray font-medium">Customizable cleaning checklist</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-brand-gray font-medium">Eco-friendly cleaning products</span>
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
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Clean modern kitchen with white cabinets and granite countertops" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Service Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Weekly Plan Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[420px] flex flex-col text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">W</span>
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Weekly</h3>
              <div className="text-3xl font-bold text-brand-secondary mb-2">$120</div>
              <div className="text-brand-gray font-medium mb-6 text-base">per cleaning</div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">All rooms cleaned</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Kitchen & bathrooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Vacuum & mop</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-brand-primary hover:bg-brand-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
              >
                Choose Plan
              </button>
            </div>

            {/* Bi-Weekly Plan Card (Most Popular) */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl border-2 border-brand-secondary hover:border-brand-primary transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[420px] flex flex-col text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-secondary to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-yellow-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg mt-4">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Bi-Weekly</h3>
              <div className="text-3xl font-bold text-brand-secondary mb-2">$140</div>
              <div className="text-brand-gray font-medium mb-6 text-base">per cleaning</div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">All rooms cleaned</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Kitchen & bathrooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Vacuum & mop</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Dusting & organizing</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-gradient-to-r from-brand-secondary to-yellow-500 hover:from-brand-primary hover:to-brand-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
              >
                Choose Plan
              </button>
            </div>

            {/* Monthly Plan Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[420px] flex flex-col text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-2xl font-bold text-white">M</span>
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Monthly</h3>
              <div className="text-3xl font-bold text-brand-secondary mb-2">$180</div>
              <div className="text-brand-gray font-medium mb-6 text-base">per cleaning</div>
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Deep cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">All rooms + extras</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-brand-secondary mr-3 flex-shrink-0" />
                  <span className="text-sm text-brand-gray font-medium">Appliances inside</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-brand-primary hover:bg-brand-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
              >
                Choose Plan
              </button>
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
