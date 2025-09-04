import { useState } from "react";
import { SEO } from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import Icon from "@/components/ui/icon";
import QuoteModal from "@/components/QuoteModal";
import ContentCard from "@/components/ContentCard/ContentCard";
import JsonLd from "@/components/seo/JsonLd";
import { makeLocalBusiness, makeWebPage, makeBreadcrumb } from "@/components/seo/schema";
import { site } from "@/config/site";

export default function Locations() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Service Areas - Cleaners Ready 2Go | Spokane Valley, Liberty Lake, Greenacres"
        description="Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Same-day service available. No travel fees within our service areas."
      />
      <JsonLd
        data={[
          makeLocalBusiness(site.url),
          makeWebPage({
            siteUrl: site.url,
            path: "/locations",
            title: "Service Areas - Cleaners Ready 2Go | Spokane Valley, Liberty Lake, Greenacres",
            description:
              "Professional cleaning services in Spokane Valley, Liberty Lake, and Greenacres. Same-day service available. No travel fees within our service areas.",
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "Locations", url: `${site.url}/locations` },
          ]),
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-text mb-6">Service Areas</h1>
            <p className="text-xl text-text">Proudly serving the greater Spokane area</p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 rounded-2xl"></div>
            <div className="relative grid lg:grid-cols-3 gap-8 mb-12 p-8 rounded-2xl">
              <Link href="/locations/spokane" className="block">
                <ContentCard interactive className="flex items-center justify-center h-40 sm:h-48 p-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold">Spokane</h3>
                </ContentCard>
              </Link>

              <Link href="/locations/spokane-valley" className="block">
                <ContentCard interactive className="flex items-center justify-center h-40 sm:h-48 p-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold">Spokane Valley</h3>
                </ContentCard>
              </Link>

              <Link href="/locations/liberty-lake" className="block">
                <ContentCard interactive className="flex items-center justify-center h-40 sm:h-48 p-8 text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-gold">Liberty Lake</h3>
                </ContentCard>
              </Link>
            </div>
          </div>

          {/* Service Radius Map Placeholder */}
          <div className="bg-surface rounded-xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-bold text-text mb-4">Service Area Map</h3>
              <div className="bg-white rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-text">
                  <Icon name="MapPin" className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg font-medium">Interactive Service Area Map</p>
                  <p className="text-sm">Map integration available for embedded Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coverage Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-text mb-4">Service Coverage</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                    <Icon name="CheckCircle" className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-text">Same-Day Service</div>
                    <div className="text-sm text-text">Available in all three service areas for urgent cleaning needs</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                    <Icon name="CheckCircle" className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-text">No Travel Fees</div>
                    <div className="text-sm text-text">Free travel within our service areas</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-1 rounded mr-3 mt-1">
                    <Icon name="CheckCircle" className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <div className="font-medium text-text">Flexible Scheduling</div>
                    <div className="text-sm text-text">7 days a week availability</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text mb-4">Outside Service Area?</h3>
              <p className="text-text mb-4 leading-relaxed">
                We may be able to accommodate locations outside our primary service areas on a case-by-case basis. Additional travel fees may apply for areas beyond our standard service radius.
              </p>
              <p className="text-text mb-6 leading-relaxed">
                Contact us to discuss your specific location and cleaning needs. We're always looking to expand our service to help more families in the greater Spokane area.
              </p>
              <Button onClick={() => setIsQuoteModalOpen(true)} variant="primary">
                Request Service Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
}
