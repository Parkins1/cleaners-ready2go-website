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
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="btn-glass btn-glass--light p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Weekly</h3>
              <div className="text-3xl font-bold text-brand-secondary mb-2">$120</div>
              <div className="text-brand-primary font-medium mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-secondary mr-2" />
                  <span className="text-sm text-brand-primary font-medium">All rooms cleaned</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-secondary mr-2" />
                  <span className="text-sm text-brand-primary font-medium">Kitchen & bathrooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-secondary mr-2" />
                  <span className="text-sm text-brand-primary font-medium">Vacuum & mop</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary w-full py-3 font-bold"
              >
                Choose Plan
              </button>
            </div>
            <div className="btn-glass btn-glass--secondary p-8 rounded-xl text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Bi-Weekly</h3>
              <div className="text-3xl font-bold text-white mb-2">$140</div>
              <div className="text-white text-opacity-80 mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm text-white">All rooms cleaned</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm text-white">Kitchen & bathrooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm text-white">Vacuum & mop</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm text-white">Dusting & organizing</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--light w-full py-3 font-bold"
              >
                Choose Plan
              </button>
            </div>
            <div className="btn-glass btn-glass--light p-8 rounded-xl text-center">
              <h3 className="text-xl font-bold text-brand-primary mb-4">Monthly</h3>
              <div className="text-3xl font-bold text-brand-secondary mb-2">$180</div>
              <div className="text-brand-primary font-medium mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-secondary mr-2" />
                  <span className="text-sm text-brand-primary font-medium">Deep cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-secondary mr-2" />
                  <span className="text-sm text-brand-primary font-medium">All rooms + extras</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-brand-secondary mr-2" />
                  <span className="text-sm text-brand-primary font-medium">Appliances inside</span>
                </li>
              </ul>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="btn-glass btn-glass--primary w-full py-3 font-bold"
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
