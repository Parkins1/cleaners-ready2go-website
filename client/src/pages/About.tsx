import { useState } from "react";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import logoImage from "@assets/cleaners_ready2go_logo_transparent_1753378992010.png";

export default function About() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <title>About Us - Cleaners Ready 2Go | Professional Cleaning Team</title>
      <meta name="description" content="Learn about our professional cleaning team serving Spokane Valley, Liberty Lake, and Greenacres. Trusted by 500+ local families." />
      
      <section className="gradient-subtle py-20 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex justify-center mb-10">
              <img 
                src={logoImage} 
                alt="Cleaners Ready 2Go Logo" 
                className="h-28 w-auto"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-heading mb-8 leading-tight">About Cleaners Ready 2Go</h1>
            <p className="text-xl lg:text-2xl text-body">Professional cleaning services you can trust</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional cleaning team working in a home" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-black mb-6">Our Story</h2>
              <p className="text-brand-gray font-medium mb-6 leading-relaxed">
                Founded with a simple mission: to provide reliable, professional cleaning services that give you more time to focus on what matters most. We understand that a clean home is more than just appearance—it's about creating a healthy, comfortable environment for you and your family.
              </p>
              <p className="text-brand-gray font-medium mb-6 leading-relaxed">
                Serving the Spokane Valley, Liberty Lake, and Greenacres communities, we've built our reputation on trust, quality, and consistent results. Our team of trained professionals brings the same attention to detail to every home we clean.
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="font-semibold text-brand-black">Trusted by 500+ local families</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Quality Guaranteed Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] text-center min-h-[280px] flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-secondary to-yellow-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Quality Guaranteed</h3>
              <p className="text-brand-gray text-lg leading-relaxed flex-grow">100% satisfaction guarantee on every cleaning service</p>
            </div>

            {/* Always On Time Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] text-center min-h-[280px] flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Always On Time</h3>
              <p className="text-brand-gray text-lg leading-relaxed flex-grow">Reliable scheduling that fits your busy lifestyle</p>
            </div>

            {/* Fully Insured Card */}
            <div className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] text-center min-h-[280px] flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-brand-black font-bold text-xl mb-4 group-hover:text-brand-primary transition-colors duration-300">Fully Insured</h3>
              <p className="text-brand-gray text-lg leading-relaxed flex-grow">Complete peace of mind with full insurance coverage</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-primary text-lg"
            >
              Book a Cleaning
            </button>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
