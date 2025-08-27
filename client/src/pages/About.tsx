
import { useState } from "react";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";
import BookingModal from "@/components/BookingModal";

function About() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <title>About Us - Cleaners Ready 2Go | Professional Cleaning Team</title>
      <meta name="description" content="Learn about our professional cleaning team serving Spokane Valley, Liberty Lake, and Greenacres. Trusted by 500+ local families." />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <div className="flex justify-center mb-10">
              <img 
                src="/logo.png" 
                alt="Cleaners Ready 2Go Logo" 
                className="h-28 w-auto"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-text mb-8 leading-tight">About Cleaners Ready 2Go</h1>
            <p className="text-xl lg:text-2xl text-text">Professional cleaning services you can trust</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional house cleaning team in a Spokane Valley home" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text mb-6">Our Story</h2>
              <p className="text-text font-medium mb-6 leading-relaxed">
                Founded with a simple mission: to provide reliable, professional cleaning services that give you more time to focus on what matters most. We understand that a clean home is more than just appearance it's about creating a healthy, comfortable environment for you and your family.
              </p>
              <p className="text-text font-medium mb-6 leading-relaxed">
                Serving the Spokane Valley, Liberty Lake, and Greenacres communities, we've built our reputation on trust, quality, and consistent results. Our team of trained professionals brings the same attention to detail to every home we clean.
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <span className="font-semibold text-text">Trusted by 500+ local families</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Quality Guaranteed</h3>
              <p className="text-text font-medium">100% satisfaction guarantee on every cleaning service</p>
            </div>
            <div className="card text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Always On Time</h3>
              <p className="text-text font-medium">Reliable scheduling that fits your busy lifestyle</p>
            </div>
            <div className="card text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Fully Insured</h3>
              <p className="text-text font-medium">Complete peace of mind with full insurance coverage</p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="btn-primary"
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

About.displayName = "About";

export default About;
