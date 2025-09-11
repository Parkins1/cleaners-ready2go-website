import React from "react";
import ServiceGrid from "@/components/ServiceCard/ServiceGrid";
import ContentCard from "@/components/ContentCard/ContentCard";
import type { ServiceCatalogId } from "@/components/ServiceCard/catalog";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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
    <FourStepSection
      id="process"
      sectionClassName="py-section bg-process-radial scroll-mt-24"
      title="Our Four‑Step System (Built for Consistency)"
      steps={[
        {
          title: "1) Request Your Quote",
          body: "Call or request online for a fast, customized estimate.",
          iconName: "CircleDashed",
        },
        {
          title: "2) Customize Your Plan",
          body: "We tailor services to your home, schedule, and preferences.",
          iconName: "CircleDotDashed",
        },
        {
          title: "3) Pro Clean Day",
          body: "Our punctual, equipped team delivers a detailed clean.",
          iconName: "CircleDot",
        },
        {
          title: "4) Follow‑Up & Satisfaction",
          body: "We check in to ensure everything’s perfect—guaranteed.",
          iconName: "CircleCheck",
        },
      ]}
      footerText="Getting your Spokane home professionally cleaned is straightforward with our seamless process. Request a free quote, choose your plan and schedule, and enjoy a refreshed home every time."
    />
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

// Standardized Four‑Step components (based on Residential page style)
export type FourStepItem = { title: string; body: string; iconName?: string };

export function FourStepGrid({ steps, cardClassName = "h-full" }: { steps: FourStepItem[]; cardClassName?: string }) {
  return (
    <div className="grid gap-xl md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => {
        const m = s.title.match(/^\s*(\d+)([)\.]?)\s*(.*)$/);
        const numberPart = m ? `${m[1]}${m[2] || ''}` : null;
        const restTitle = m ? m[3] : s.title;

        return (
          <Card key={i} className={cardClassName}>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {s.iconName ? (
                  <Icon name={s.iconName as any} className="w-8 h-8 mr-4 text-brand-gold" />
                ) : null}
                <h3 className="text-lg font-semibold text-text font-outfit">
                  {numberPart ? (
                    <>
                      <span className="text-brand-gold mr-1">{numberPart}</span>
                      <span>{restTitle}</span>
                    </>
                  ) : (
                    s.title
                  )}
                </h3>
              </div>
              <p className="text-sm text-text/90">{s.body}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function FourStepSection({
  id = "process",
  title = "Our Four‑Step System (Built for Consistency)",
  steps,
  sectionClassName = "py-section bg-process-radial",
  footerText,
}: {
  id?: string;
  title?: string;
  steps: FourStepItem[];
  sectionClassName?: string;
  footerText?: string;
}) {
  return (
    <section id={id} className={sectionClassName} aria-labelledby={`${id}-title`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <h2 id={`${id}-title`} className="text-3xl lg:text-4xl font-bold text-text mb-xl">
          {title}
        </h2>
        <FourStepGrid steps={steps} />
        {footerText ? (
          <p className="mt-8 text-lg text-text max-w-3xl mx-auto text-center">{footerText}</p>
        ) : null}
      </div>
    </section>
  );
}
