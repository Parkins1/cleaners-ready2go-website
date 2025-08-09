import { Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";

export default function MoveOut() {
  const { open } = useModal();

  return (
    <>
      <title>Move-Out Cleaning Services - Cleaners Ready 2Go | Apartment Cleanouts & Hourly Services</title>
      <meta name="description" content="Professional move-out cleaning services in Spokane Valley. Deep cleaning for apartment cleanouts with fixed-price packages and hourly services available." />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text mb-6">Move-Out Cleaning Services</h1>
            <p className="text-xl text-text">Deep cleaning for apartment cleanouts and moving situations</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Empty apartment living room ready for move-out cleaning" 
                className="rounded-xl shadow-lg w-full h-auto" 
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Apartment Cleanouts & Hourly Services</h2>
              <p className="text-text mb-6 leading-relaxed">
                Moving out? Our specialized move-out cleaning service ensures you get your full security deposit back. We understand the specific requirements landlords expect and provide thorough, detailed cleaning that exceeds move-out standards.
              </p>
              <p className="text-text mb-8 leading-relaxed">
                Available as both fixed-price packages and flexible hourly services to meet your specific needs and timeline.
              </p>
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-text">Same-Day Service Available</div>
                  <div className="text-sm text-text">For urgent move-out situations</div>
                </div>
              </div>
              <button
                onClick={() => open("quote")}
                className="btn-primary"
                type="button"
                aria-label="Get Quote"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Service Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-bold text-text mb-6">Fixed-Price Packages</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-text">Studio/1BR</span>
                    <span className="text-accent font-bold">$200</span>
                  </div>
                  <p className="text-sm text-text">Complete move-out cleaning for small apartments</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-text">2BR/2BA</span>
                    <span className="text-accent font-bold">$300</span>
                  </div>
                  <p className="text-sm text-text">Comprehensive cleaning for medium apartments</p>
                </div>
                <div className="pb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-text">3BR/2BA+</span>
                    <span className="text-accent font-bold">$450</span>
                  </div>
                  <p className="text-sm text-text">Full-service cleaning for larger homes</p>
                </div>
              </div>
              <button
                onClick={() => open("booking")}
                className="btn-primary w-full mt-6"
                type="button"
                aria-label="Book Package"
              >
                Book Package
              </button>
            </div>
            <div className="card bg-text text-white">
              <h3 className="text-xl font-bold mb-6 text-white">Hourly Services</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-accent mb-2">$45/hour</div>
                <p className="text-gray-300">Flexible cleaning based on your specific needs</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  <span className="text-sm">Minimum 3-hour booking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  <span className="text-sm">Custom cleaning priorities</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  <span className="text-sm">Perfect for partial cleanouts</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-accent mr-3" />
                  <span className="text-sm">Same-day availability</span>
                </li>
              </ul>
              <button
                onClick={() => open("booking")}
                className="btn-primary w-full"
                type="button"
                aria-label="Book Hourly"
              >
                Book Hourly
              </button>
            </div>
          </div>

          {/* What's Included */}
          <div className="card">
            <h3 className="text-xl font-bold text-text mb-6 text-center">What's Included in Move-Out Cleaning</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-text mb-3">Kitchen</h4>
                <ul className="space-y-2 text-sm text-text">
                  <li>• Deep clean appliances inside & out</li>
                  <li>• Scrub cabinets & drawers</li>
                  <li>• Degrease all surfaces</li>
                  <li>• Clean sink & faucet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text mb-3">Bathrooms</h4>
                <ul className="space-y-2 text-sm text-text">
                  <li>• Scrub tub/shower thoroughly</li>
                  <li>• Disinfect toilet completely</li>
                  <li>• Clean mirrors & fixtures</li>
                  <li>• Mop & sanitize floors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-text mb-3">Throughout</h4>
                <ul className="space-y-2 text-sm text-text">
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

    </>
  );
}