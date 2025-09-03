 // llm:callout-banner-migrated
// llm:cta-migrated
import { Button } from "@/components/ui/button";
import ContentCard from '@/components/ContentCard/ContentCard';
import ServiceGrid from '@/components/ServiceCard/ServiceGrid';
import { useModal } from '@/components/modal/ModalProvider';
import React from 'react';
import CalloutBanner from "@/components/CalloutBanner/CalloutBanner";
import { ServicesSection, ProcessSection } from "@/components/Sections";
import { SEO } from "@/components/seo/SEO";
import HeroSection from "@/components/HeroSection/HeroSection";
import { brand } from "@/config/brand";

interface LocationPageTemplateProps {
  locationName: string;
  heroImage: string;
  heroAlt?: string;
  heroImgSrcSet?: string;
  heroSources?: { type: string; srcSet: string; sizes?: string }[];
  heroWidth?: number;
  heroHeight?: number;
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
  // Optional: override CTA banner color variant (default | gold)
  ctaVariant?: 'default' | 'gold';
}

export default function LocationPageTemplate({
  locationName,
  heroImage,
  heroAlt,
  heroImgSrcSet,
  heroSources,
  heroWidth,
  heroHeight,
  introText,
  services,
  testimonial,
  extraSections,
  serviceCardIds,
  ctaVariant = 'gold',
}: LocationPageTemplateProps) {
  const { open } = useModal();

  return (
    <>
      <SEO
        title={`Cleaning Services in ${locationName} - Cleaners Ready 2Go`}
        description={`Professional cleaning services in ${locationName}. We offer residential, commercial, and move-out cleaning. Book your service today!`}
      />

      {/* Hero Section */}
      <HeroSection
        image={heroImage}
        imageAlt={heroAlt || `House cleaning in ${locationName}, WA`}
        title={<h1 className="hero-title">Professional <span className="text-brand-gold">House Cleaning</span> in {locationName}, WA</h1>}
        subtitle={<p className="text-lg lg:text-xl text-text mb-8">Locally owned — Licensed & insured — Satisfaction-focused service</p>}
        actions={<Button onClick={() => open('quote')} variant="primary">Request Your FREE Quote</Button>}
        useAspect
        imageWidth={heroWidth}
        imageHeight={heroHeight}
        imgSrcSet={heroImgSrcSet}
        sources={heroSources}
      />

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
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Image / Map Placeholder</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">What Our Clients Say</h2>
          <blockquote className="text-xl text-text italic mb-4">{`"${testimonial.quote}"`}</blockquote>
          <cite className="text-text font-semibold">{`- ${testimonial.name}, ${locationName}`}</cite>
        </div>
      </section>

      {/* Extra Sections */}
      {extraSections && extraSections.map((section, idx) => (
        <section key={idx} className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-text mb-6">{section.title}</h2>
            <div className="text-text leading-relaxed">{section.content}</div>
          </div>
        </section>
      ))}

      <CalloutBanner
        title={`Your Spotless ${locationName} Home Starts Here`}
        body={`Request a free quote — or call ${brand.phone}`}
        variant={ctaVariant}
        actions={
          <Button
            onClick={() => open('quote')}
            variant="primary"
          >
            Request My Quote
          </Button>
        }
      />
    </>
  );
}
