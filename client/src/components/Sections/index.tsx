import React from "react";
import ServiceGrid from "@/components/ServiceCard/ServiceGrid";
import ContentCard from "@/components/ContentCard/ContentCard";
import type { ServiceCatalogId } from "@/components/ServiceCard/catalog";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";

export function ServicesSection({
  ids = ["residential", "deep-cleaning", "move-out", "apartment-cleaning"] as ServiceCatalogId[],
}: {
  ids?: ServiceCatalogId[];
}) {
  return (
    <section id="services" className="py-section bg-white scroll-mt-24" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="text-center mb-xl animate-slide-up">
          <h2 id="services-title" className="text-4xl lg:text-5xl font-bold text-text mb-4">
            Comprehensive Residential Cleaning Services
          </h2>
          <p className="text-xl text-text">Professional, reliable, and tailored to your home</p>
        </div>
        <ServiceGrid ids={ids} />
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="py-section bg-surface scroll-mt-24" aria-labelledby="process-title">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 animate-slide-up">
        <h2 id="process-title" className="text-3xl lg:text-4xl font-bold text-text mb-8 text-center">
          Our Simple House Cleaning Process
        </h2>
        <div className="grid md:grid-cols-4 gap-xl text-center">
          <ContentCard>
            <span className="step-number">1</span>
            <h3 className="mt-2 font-semibold">Request Your Quote</h3>
            <p className="text-sm text-text">Call or request online for a fast, customized estimate.</p>
          </ContentCard>
          <ContentCard>
            <span className="step-number">2</span>
            <h3 className="mt-2 font-semibold">Customize Your Plan</h3>
            <p className="text-sm text-text">We tailor services to your home, schedule, and preferences.</p>
          </ContentCard>
          <ContentCard>
            <span className="step-number">3</span>
            <h3 className="mt-2 font-semibold">Pro Clean Day</h3>
            <p className="text-sm text-text">Our punctual, equipped team delivers a detailed clean.</p>
          </ContentCard>
          <ContentCard>
            <span className="step-number">4</span>
            <h3 className="mt-2 font-semibold">Follow-up & Satisfaction</h3>
            <p className="text-sm text-text">We check in to ensure everything’s perfect guaranteed.</p>
          </ContentCard>
        </div>
        <p className="mt-8 text-lg text-text max-w-3xl mx-auto text-center">
          Getting your Spokane home professionally cleaned is straightforward with our seamless process. Request a free quote,
          choose your plan and schedule, and enjoy a refreshed home every time.
        </p>
      </div>
    </section>
  );
}

/**
 * FirstStepProcess
 * A compact, reusable component that surfaces the first step (Request Your Quote)
 * with a short blurb and primary CTA. Designed to be imported and used across pages.
 *
 * Props:
 *  - className?: string  (optional wrapper classes)
 */
export function FirstStepProcess({ className = "" }: { className?: string }) {
  const { open } = useModal();

  return (
    <section className={`py-8 ${className}`} aria-label="Request Your Quote">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-12">
        <ContentCard className="p-6 sm:p-8 flex flex-col items-center text-center">
          <span className="step-number">1</span>
          <h3 className="mt-2 text-xl font-semibold">Request Your Quote</h3>
          <p className="text-sm text-text max-w-lg mt-2">
            Call or request online for a fast, customized estimate — we’ll propose a plan and timing that fits your week.
          </p>
          <div className="mt-4">
            <Button onClick={() => open("quote")} variant="primary">
              Get Your Free Quote
            </Button>
          </div>
        </ContentCard>
      </div>
    </section>
  );
}
