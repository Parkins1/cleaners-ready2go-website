import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useModal } from '@/components/modal/ModalProvider';
import React from 'react';

interface LocationPageTemplateProps {
  locationName: string;
  heroImage: string;
  introText: string;
  services: {
    title: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
  };
  extraSections?: {
    title: string;
    content: React.ReactNode;
  }[];
}

export default function LocationPageTemplate({
  locationName,
  heroImage,
  introText,
  services,
  testimonial,
  extraSections,
}: LocationPageTemplateProps) {
  const { open } = useModal();

  return (
    <>
      <title>{`Cleaning Services in ${locationName} - Cleaners Ready 2Go`}</title>
      <meta
        name="description"
        content={`Professional cleaning services in ${locationName}. We offer residential, commercial, and move-out cleaning. Book your service today!`}
      />

      {/* Hero Section */}
      <section
        className="hero relative min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-label={`${locationName} Hero`}
      >
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="relative text-center max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-text mb-4">{`House Cleaning in ${locationName}`}</h1>
          <p className="text-lg lg:text-xl text-text mb-8">
            Your trusted local cleaning experts.
          </p>
          <button onClick={() => open('quote')} className="btn-primary" type="button">
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">{`Welcome to Cleaners Ready 2Go ${locationName}`}</h2>
          <p className="text-lg text-text leading-relaxed">{introText}</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-text mb-4">{service.title}</h3>
                <p className="text-text">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Placeholder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6mx mx-auto px-6">
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Image / Map Placeholder</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4mx mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">What Our Clients Say</h2>
          <blockquote className="text-xl text-text italic mb-4">{`"${testimonial.quote}"`}</blockquote>
          <cite className="text-text font-semibold">{`- ${testimonial.name}, ${locationName}`}</cite>
        </div>
      </section>

      {/* Extra Sections */}
      {extraSections && extraSections.map((section, idx) => (
        <section key={idx} className="py-16 bg-white">
          <div className="max-w-4mx mx-auto px-6">
            <h2 className="text-3xl font-bold text-text mb-6">{section.title}</h2>
            <div className="text-text leading-relaxed">{section.content}</div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="footer py-20 relative overflow-hidden">
        <div className="max-w-4mx mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">Ready for a Cleaner Home?</h2>
          <p className="text-lg text-text mb-8">Let us handle the cleaning so you enjoy your time.</p>
          <button onClick={() => open('quote')} className="btn-primary" type="button">
            Request a Free Quote
          </button>
        </div>
      </section>
    </>
  );
}