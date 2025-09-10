
import { useState } from "react";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BookingModal from "@/components/BookingModal";

function Team() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const teamMembers = [
    {
      name: "Sarah Martinez",
      role: "Team Leader & Founder",
      description: "With 8 years in professional cleaning, Sarah founded Cleaners Ready 2 Go to bring reliable, quality service to the Spokane Valley community.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Spokane cleaning team leader smiling in business attire"
    },
    {
      name: "Mike Thompson",
      role: "Senior Cleaning Specialist",
      description: "Mike specializes in deep cleaning and move-out services. His attention to detail ensures every corner meets our high standards.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Spokane cleaning specialist in uniform smiling confidently"
    },
    {
      name: "Lisa Chen",
      role: "Residential Specialist",
      description: "Lisa loves helping families maintain beautiful homes. She's known for her efficiency and friendly demeanor with clients.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Spokane residential cleaner with friendly smile wearing uniform"
    },
    {
      name: "David Rodriguez",
      role: "Quality Control Manager",
      description: "David ensures every cleaning meets our quality standards. He oversees training and maintains our commitment to excellence.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Spokane quality manager in business casual attire with confident smile"
    },
    {
      name: "Emma Wilson",
      role: "Customer Success",
      description: "Emma coordinates schedules and ensures seamless communication between our team and clients for the best experience.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Spokane customer success specialist with warm smile in business attire"
    },
    {
      name: "Carlos Gutierrez",
      role: "Eco-Friendly Specialist",
      description: "Carlos leads our green cleaning initiatives, specializing in eco-friendly products and sustainable cleaning practices.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Spokane eco-friendly cleaning specialist with friendly demeanor in work attire"
    }
  ];

  return (
    <>
      <SEO
        title="Meet the Team - Cleaners Ready 2 Go | Professional Cleaning Staff"
        description="Meet our dedicated professional cleaning team serving Spokane Valley, Liberty Lake, and Greenacres. Fully trained, background checked, and ready to go!"
      />
      
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-xl">
            <h1 className="text-4xl font-bold text-text mb-4">Meet the Team</h1>
            <h2 className="text-xl text-accent font-medium mb-6">Cleaners Ready to Go</h2>
            <p className="text-xl text-text">The dedicated professionals who make your home spotless</p>
          </div>

          {/* Team Introduction */}
          <div className="grid lg:grid-cols-2 gap-xl items-center mb-xl">
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Our Cleaning Family</h3>
              <p className="text-text mb-6 leading-relaxed">
                Every member of our team is carefully selected, thoroughly trained, and passionate about delivering exceptional cleaning services. We believe that great cleaning starts with great people, and we're proud of the dedicated professionals who represent Cleaners Ready 2 Go in your home.
              </p>
              <p className="text-text mb-8 leading-relaxed">
                Our team undergoes comprehensive background checks, professional training, and ongoing education to ensure they deliver the highest standards of service, safety, and reliability.
              </p>
              <div className="flex items-center">
                <div className="bg-accent p-2 rounded-lg mr-4">
                  <Icon name="Award" className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-text">Fully Trained & Background Checked</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Spokane house cleaning team in uniform with cleaning supplies" 
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </div>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl mb-xl">
            {teamMembers.map((member) => (
              <div key={member.name} className="card text-center">
                <img 
                  src={member.image} 
                  alt={member.alt} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-text mb-2">{member.name}</h4>
                <div className="text-accent font-medium mb-3">{member.role}</div>
                <p className="text-sm text-text leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Values */}
          <div className="bg-text rounded-xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Team Values</h3>
              <p className="text-gray-300">What drives us to deliver exceptional service every day</p>
            </div>
            <div className="grid md:grid-cols-3 gap-xl">
              <div className="text-center">
                <div className="bg-accent p-3 rounded-lg w-fit mx-auto mb-4">
                  <Icon name="Award" className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Reliability</h4>
                <p className="text-gray-300 text-sm">We show up on time, every time, and deliver consistent quality you can count on.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent p-3 rounded-lg w-fit mx-auto mb-4">
                  <Icon name="Heart" className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Care</h4>
                <p className="text-gray-300 text-sm">We treat your home with the same care and respect we'd give our own family.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent p-3 rounded-lg w-fit mx-auto mb-4">
                  <Icon name="Zap" className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Excellence</h4>
                <p className="text-gray-300 text-sm">We're never satisfied with "good enough" - we strive for perfection in every detail.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-xl">
            <h3 className="text-2xl font-bold text-text mb-4">Ready to Meet Our Team?</h3>
            <p className="text-text mb-8">Experience the difference that professional, caring service makes in your home.</p>
            <Button onClick={() => setIsBookingModalOpen(true)} variant="primary">
              Book Your First Cleaning
            </Button>
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

Team.displayName = "Team";

export default Team;
