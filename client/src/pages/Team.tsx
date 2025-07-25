import { useState } from "react";
import { Award, Heart, Zap } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function Team() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sarah Martinez",
      role: "Team Leader & Founder",
      description: "With 8 years in professional cleaning, Sarah founded Cleaners Ready 2Go to bring reliable, quality service to the Spokane Valley community.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional woman team leader smiling in business attire"
    },
    {
      name: "Mike Thompson",
      role: "Senior Cleaning Specialist",
      description: "Mike specializes in deep cleaning and move-out services. His attention to detail ensures every corner meets our high standards.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional man in cleaning uniform smiling confidently"
    },
    {
      name: "Lisa Chen",
      role: "Residential Specialist",
      description: "Lisa loves helping families maintain beautiful homes. She's known for her efficiency and friendly demeanor with clients.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional woman with friendly smile wearing cleaning uniform"
    },
    {
      name: "David Rodriguez",
      role: "Quality Control Manager",
      description: "David ensures every cleaning meets our quality standards. He oversees training and maintains our commitment to excellence.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional man in business casual attire with confident smile"
    },
    {
      name: "Emma Wilson",
      role: "Customer Success",
      description: "Emma coordinates schedules and ensures seamless communication between our team and clients for the best experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional woman with warm smile in business attire"
    },
    {
      name: "Carlos Gutierrez",
      role: "Eco-Friendly Specialist",
      description: "Carlos leads our green cleaning initiatives, specializing in eco-friendly products and sustainable cleaning practices.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Professional man with friendly demeanor in work attire"
    }
  ];

  return (
    <>
      <title>Meet the Team - Cleaners Ready 2Go | Professional Cleaning Staff</title>
      <meta name="description" content="Meet our dedicated professional cleaning team serving Spokane Valley, Liberty Lake, and Greenacres. Fully trained, background checked, and ready to go!" />
      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-4">Meet the Team</h1>
            <h2 className="text-xl text-brand-gold font-medium mb-6">Cleaners Ready to Go</h2>
            <p className="text-xl text-brand-gray">The dedicated professionals who make your home spotless</p>
          </div>

          {/* Team Introduction */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-brand-black mb-6">Our Cleaning Family</h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                Every member of our team is carefully selected, thoroughly trained, and passionate about delivering exceptional cleaning services. We believe that great cleaning starts with great people, and we're proud of the dedicated professionals who represent Cleaners Ready 2Go in your home.
              </p>
              <p className="text-brand-gray mb-8 leading-relaxed">
                Our team undergoes comprehensive background checks, professional training, and ongoing education to ensure they deliver the highest standards of service, safety, and reliability.
              </p>
              <div className="flex items-center">
                <div className="bg-brand-gold p-2 rounded-lg mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-brand-black">Fully Trained & Background Checked</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional cleaning team in uniform with cleaning supplies" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="group glass-card bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] text-center min-h-[320px] flex flex-col">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.alt} 
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-brand-secondary to-yellow-500' :
                    index === 1 ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                    index === 2 ? 'bg-gradient-to-br from-pink-500 to-rose-600' :
                    index === 3 ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                    index === 4 ? 'bg-gradient-to-br from-purple-500 to-indigo-600' :
                    'bg-gradient-to-br from-orange-500 to-red-600'
                  }`}>
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-primary transition-colors duration-300">{member.name}</h4>
                <div className="text-brand-secondary font-bold mb-4 text-lg">{member.role}</div>
                <p className="text-brand-gray leading-relaxed flex-grow">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-brand-black rounded-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Team Values</h3>
              <p className="text-gray-300">What drives us to deliver exceptional service every day</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-gold p-3 rounded-lg w-fit mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Reliability</h4>
                <p className="text-gray-300 text-sm">We show up on time, every time, and deliver consistent quality you can count on.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-gold p-3 rounded-lg w-fit mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Care</h4>
                <p className="text-gray-300 text-sm">We treat your home with the same care and respect we'd give our own family.</p>
              </div>
              <div className="text-center">
                <div className="bg-brand-gold p-3 rounded-lg w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
                <p className="text-gray-300 text-sm">We're never satisfied with "good enough" - we strive for perfection in every detail.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-brand-black mb-4">Ready to Meet Our Team?</h3>
            <p className="text-brand-gray mb-8">Experience the difference that professional, caring service makes in your home.</p>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-brand-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Book Your First Cleaning
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
