 // llm:callout-banner-migrated
// llm:cta-migrated
import { Button } from "@/components/ui/button";
import ContentCard from '@/components/ContentCard/ContentCard';
import ServiceGrid from '@/components/ServiceCard/ServiceGrid';
import { useModal } from '@/components/modal/ModalProvider';
import React from 'react';
import CalloutBanner from "@/components/CalloutBanner/CalloutBanner";
import { ServicesSection, ProcessSection } from "@/components/Sections";

interface LocationPageTemplateProps {
  locationName: string;
  heroImage: string;
  introText: string;
  services?: {
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
  // Optional: service card IDs to render standardized ServiceCards
  serviceCardIds?: import("@/components/ServiceCard/catalog").ServiceCatalogId[];
}

export default function LocationPageTemplate({
  locationName,
  heroImage,
  introText,
  services,
  testimonial,
  extraSections,
  serviceCardIds,
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
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm" />
        <div className="relative text-center max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-text mb-4">{`House Cleaning in ${locationName}`}</h1>
          <p className="text-lg lg:text-xl text-text mb-8">
            Your trusted local cleaning experts.
          </p>
          <Button onClick={() => open('quote')} variant="primary">
            Get a Free Quote
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">{`Welcome to Cleaners Ready 2Go ${locationName}`}</h2>
          <p className="text-lg text-text leading-relaxed">{introText}</p>
        </div>
      </section>

      {/* Services (standardized, identical to Home) */}
      <ServicesSection ids={serviceCardIds ?? (["residential","deep-cleaning","move-out","apartment-cleaning"] as const)} />

      {/* Process (standardized, identical to Home) */}
      <ProcessSection />

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

      <CalloutBanner
        title="Ready for a Cleaner Home?"
        body="Let us handle the cleaning so you enjoy your time."
        variant="gold"
        actions={
          <Button
            onClick={() => open('quote')}
            variant="primary"
          >
            Request a Free Quote
          </Button>
        }
      />
    </>
  );
}
