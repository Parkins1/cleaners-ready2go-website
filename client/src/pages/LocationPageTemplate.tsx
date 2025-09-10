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
import JsonLd from "@/components/seo/JsonLd";
import { makeWebPage, makeBreadcrumb, makeService, makeLocalBusiness } from "@/components/seo/schema";
import { site } from "@/config/site";

interface LocationPageTemplateProps {
  locationName: string;
  heroImage: string;
  heroAlt?: string;
  heroImgSrcSet?: string;
  heroSources?: { type: string; srcSet: string; sizes?: string }[];
  heroWidth?: number;
  heroHeight?: number;
  introText: string;
  /** Optional: the route path for this page (e.g. "/locations/spokane"). If omitted, a slug will be inferred. */
  currentPath?: string;
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
    sectionClassName?: string;
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
  currentPath,
}: LocationPageTemplateProps) {
  const { open } = useModal();
  const inferredPath = `/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`;
  const path = currentPath || inferredPath;

  return (
    <>
      <SEO
        title={`Cleaning Services in ${locationName} - Cleaners Ready 2Go`}
        description={`Professional cleaning services in ${locationName}. We offer residential, commercial, and move-out cleaning. Book your service today!`}
      />

      {/* JSON-LD: LocalBusiness, WebPage, Service, Breadcrumbs */}
      <JsonLd
        data={[
          makeWebPage({
            siteUrl: site.url,
            path,
            title: `Cleaning Services in ${locationName} - Cleaners Ready 2Go`,
            description: `Professional cleaning services in ${locationName}. We offer residential, commercial, and move-out cleaning. Book your service today!`,
          }),
          makeService({
            siteUrl: site.url,
            path,
            name: `House Cleaning in ${locationName}`,
            description: `Residential and move-out cleaning services in ${locationName} and nearby areas.`,
            areaServed: locationName,
          }),
          makeBreadcrumb([
            { name: 'Home', url: `${site.url}/` },
            { name: 'Locations', url: `${site.url}/locations` },
            { name: locationName, url: `${site.url}${path}` },
          ]),
        ]}
      />

      {/* Hero Section */}
      <HeroSection
        image={heroImage}
        imageAlt={heroAlt || `House cleaning in ${locationName}, WA`}
        title={<h1 className="hero-title">Professional <span className="text-brand-gold">House Cleaning</span> in {locationName}, WA</h1>}
        subtitle={<p className="text-lg lg:text-xl text-slate-100/95 mb-8">Locally owned—Licensed & insured—Satisfaction-focused service</p>}
        actions={<Button onClick={() => open('quote')} variant="primary">Request Your FREE Quote</Button>}
        useAspect
        imageWidth={heroWidth}
        imageHeight={heroHeight}
        imgSrcSet={heroImgSrcSet}
        sources={heroSources}
      />

      {/* Intro Section */}
      <section className="py-section bg-white">
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
      <section className="py-section bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Image / Map Placeholder</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-section bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text mb-6">What Our Clients Say</h2>
          <blockquote className="text-xl text-text italic mb-4">{`"${testimonial.quote}"`}</blockquote>
          <cite className="text-text font-semibold">{`- ${testimonial.name}, ${locationName}`}</cite>
        </div>
      </section>

      {/* Extra Sections */}
      {extraSections && extraSections.map((section, idx) => {
        const secClass = section.sectionClassName ?? 'py-section bg-white';
        return (
          <section key={idx} className={secClass}>
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-text mb-6">{section.title}</h2>
              <div className="text-text leading-relaxed">{section.content}</div>
            </div>
          </section>
        );
      })}

      <CalloutBanner
        title={`Your Spotless ${locationName} Home Starts Here`}
        body={`Request a free quote—or call ${brand.phone}`}
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
