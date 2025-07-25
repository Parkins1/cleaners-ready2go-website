import { useState } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function Locations() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <title>Service Areas - Cleaners Ready 2Go | Spokane Valley, Liberty Lake, Greenacres</title>
      <meta name="description" content="Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Same-day service available. No travel fees within our service areas." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-6">Service Areas</h1>
            <p className="text-xl text-brand-gray">Proudly serving the greater Spokane area</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Spokane Valley Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[320px] flex flex-col text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-yellow-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Spokane Valley</h3>
              <p className="text-brand-gray text-lg leading-relaxed flex-grow mb-4">Our primary service area with full availability for all cleaning services.</p>
              <div className="bg-gray-100 rounded-lg p-4 mt-auto">
                <div className="font-semibold text-brand-black mb-2">ZIP Codes:</div>
                <div className="text-brand-gray font-medium">99206, 99212, 99216</div>
              </div>
            </div>

            {/* Liberty Lake Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[320px] flex flex-col text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Liberty Lake</h3>
              <p className="text-brand-gray text-lg leading-relaxed flex-grow mb-4">Comprehensive residential and move-out cleaning services available.</p>
              <div className="bg-gray-100 rounded-lg p-4 mt-auto">
                <div className="font-semibold text-brand-black mb-2">ZIP Codes:</div>
                <div className="text-brand-gray font-medium">99019</div>
              </div>
            </div>

            {/* Greenacres Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] min-h-[320px] flex flex-col text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-2xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Greenacres</h3>
              <p className="text-brand-gray text-lg leading-relaxed flex-grow mb-4">Full-service cleaning solutions for residential and commercial properties.</p>
              <div className="bg-gray-100 rounded-lg p-4 mt-auto">
                <div className="font-semibold text-brand-black mb-2">ZIP Codes:</div>
                <div className="text-brand-gray font-medium">99016</div>
              </div>
            </div>
          </div>

          {/* Service Radius Map Placeholder */}
          <div className="bg-gray-100 rounded-xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-brand-black mb-4">Service Area Map</h3>
              <div className="bg-white rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-brand-gray">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Service Area Map</p>
                  <p className="text-sm">Map integration available for embedded Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-brand-black mb-4">Service Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-black">Same-Day Service</div>
                    <div className="text-sm text-brand-gray">Available in all three service areas for urgent cleaning needs</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-black">No Travel Fees</div>
                    <div className="text-sm text-brand-gray">Free travel within our service areas</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-black">Flexible Scheduling</div>
                    <div className="text-sm text-brand-gray">7 days a week availability</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-black mb-4">Outside Service Area?</h3>
              <p className="text-brand-gray mb-4 leading-relaxed">
                We may be able to accommodate locations outside our primary service areas on a case-by-case basis. Additional travel fees may apply for areas beyond our standard service radius.
              </p>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Contact us to discuss your specific location and cleaning needs. We're always looking to expand our service to help more families in the greater Spokane area.
              </p>
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="btn-primary px-6 py-3"
              >
                Request Service Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
}
