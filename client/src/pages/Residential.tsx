import { CheckCircle } from "lucide-react";
import residentialCardImg from "@/assets/residential-cleaning-card.jpeg";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";

export default function Residential() {
  const { open } = useModal();

  return (
    <>
      <title>Residential Cleaning Services - Cleaners Ready 2Go | Recurring Home Cleaning</title>
      <meta
        name="description"
        content="Professional residential cleaning services in Spokane Valley. Weekly, bi-weekly, and monthly cleaning schedules available. Book your recurring service today!"
      />

      {/* Full-Window Hero Section */}
      <section aria-label="Cozy, clean residential living room." className="hero relative min-h-screen flex items-center justify-center group overflow-hidden"
        style={{
          backgroundImage: `url(${residentialCardImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
            Residential Cleaning Services
          </h1>
          <p className="text-xl lg:text-2xl text-white mb-8">
            Regular cleaning services to keep your home spotless
          </p>
          <button
            onClick={() => open("quote")}
            className="btn-primary"
            type="button"
            aria-label="Get a Quote"
          >
            Get a Quote
          </button>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <h3 className="text-xl font-bold text-text mb-4">Weekly</h3>
              <div className="text-3xl font-bold text-accent mb-2">$120</div>
              <div className="text-text font-medium mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    All rooms cleaned
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Kitchen & bathrooms
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Vacuum & mop
                  </span>
                </li>
              </ul>
              <button
                onClick={() => open("booking")}
                className="btn-primary w-full"
                type="button"
                aria-label="Choose Weekly Plan"
              >
                Choose Plan
              </button>
            </div>
            <div className="card bg-accent text-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-text text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-4">Bi-Weekly</h3>
              <div className="text-3xl font-bold mb-2">$140</div>
              <div className="text-yellow-100 mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">All rooms cleaned</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">Kitchen & bathrooms</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">Vacuum & mop</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">Dusting & organizing</span>
                </li>
              </ul>
              <button
                onClick={() => open("booking")}
                className="btn-primary w-full"
                type="button"
                aria-label="Choose Bi-Weekly Plan"
              >
                Choose Plan
              </button>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-bold text-text mb-4">Monthly</h3>
              <div className="text-3xl font-bold text-accent mb-2">$180</div>
              <div className="text-text font-medium mb-6">
                per cleaning
              </div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Deep cleaning
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    All rooms + extras
                  </span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Appliances inside
                  </span>
                </li>
              </ul>
              <button
                onClick={() => open("booking")}
                className="btn-primary w-full"
                type="button"
                aria-label="Choose Monthly Plan"
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}