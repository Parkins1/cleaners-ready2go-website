
import { useState } from "react";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BookingModal from "@/components/BookingModal";
import JsonLd from "@/components/seo/JsonLd";
import { makeLocalBusiness, makeWebPage, makeBreadcrumb } from "@/components/seo/schema";
import { site } from "@/config/site";
import { OptimizedImage } from "@/components/ui/optimized-image";
import logo128Avif from "@/assets/icon_logo-128.avif";
import logo256Avif from "@/assets/icon_logo-256.avif";
import logo128Webp from "@/assets/icon_logo-128.webp";
import logo256Webp from "@/assets/icon_logo-256.webp";

function About() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="About Us - Cleaners Ready 2Go | Professional Cleaning Team"
        description="Learn about our professional cleaning team serving Spokane Valley, Liberty Lake, and Greenacres. Trusted by 500+ local families."
      />
      <JsonLd
        data={[
          makeLocalBusiness(site.url),
          makeWebPage({
            siteUrl: site.url,
            path: "/about",
            title: "About Us - Cleaners Ready 2Go | Professional Cleaning Team",
            description:
              "Learn about our professional cleaning team serving Spokane Valley, Liberty Lake, and Greenacres.",
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "About", url: `${site.url}/about` },
          ]),
        ]}
      />
      
      <section className="py-section">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-xl animate-slide-up">
            <div className="flex justify-center mb-10">
              <OptimizedImage
                src={logo128Webp}
                imgSrcSet={`${logo128Webp} 128w, ${logo256Webp} 256w`}
                sources={[
                  {
                    type: "image/avif",
                    srcSet: `${logo128Avif} 128w, ${logo256Avif} 256w`,
                  },
                ]}
                sizes="112px"
                width={112}
                height={112}
                alt="Cleaners Ready 2Go Logo"
                imgClassName="h-28 w-auto"
              />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-text mb-8 leading-tight">About Cleaners Ready 2Go</h1>
            <p className="text-xl lg:text-2xl text-text">Professional cleaning services you can trust</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-xl items-center mb-xl">
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
                  <Icon name="CheckCircle" className="w-6 h-6 text-brand-gold" />
                </div>
                <span className="font-semibold text-text">Trusted by 500+ local families</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-xl mb-xl">
            <div className="card text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Award" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Quality Guaranteed</h3>
              <p className="text-text font-medium">100% satisfaction guarantee on every cleaning service</p>
            </div>
            <div className="card text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Clock" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Always On Time</h3>
              <p className="text-text font-medium">Reliable scheduling that fits your busy lifestyle</p>
            </div>
            <div className="card text-center">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon name="Shield" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Fully Insured</h3>
              <p className="text-text font-medium">Complete peace of mind with full insurance coverage</p>
            </div>
          </div>

          <div className="text-center">
            <Button onClick={() => setIsBookingModalOpen(true)} variant="primary">
              Book a Cleaning
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

About.displayName = "About";

export default About;
