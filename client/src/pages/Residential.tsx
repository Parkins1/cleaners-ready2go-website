// llm:cta-migrated
import Icon from "@/components/ui/icon";
import residentialCardImg from "@assets/spokane-wa-residential-cleaning-card.webp";
import res480 from "@assets/spokane-wa-residential-cleaning-card-480.webp";
import res768 from "@assets/spokane-wa-residential-cleaning-card-768.webp";
import res1024 from "@assets/spokane-wa-residential-cleaning-card-1024.webp";
import res480Avif from "@assets/spokane-wa-residential-cleaning-card-480.avif";
import res768Avif from "@assets/spokane-wa-residential-cleaning-card-768.avif";
import res1024Avif from "@assets/spokane-wa-residential-cleaning-card-1024.avif";
import HeroSection from "@/components/HeroSection/HeroSection";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard/ContentCard";
import { useModal } from "@/components/modal/ModalProvider";

export default function Residential() {
  const { open } = useModal();

  return (
    <>
      <title>Residential Cleaning Services - Cleaners Ready 2Go | Recurring Home Cleaning</title>
      <meta
        name="description"
        content="Professional residential cleaning services in Spokane Valley. Weekly, bi-weekly, and monthly cleaning schedules available. Book your recurring service today!"
      />

      {/* Full-Window Hero Section */}
      <HeroSection
        image={residentialCardImg}
        title={<h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-sm mb-4">Residential Cleaning Services</h1>}
        subtitle={<p className="text-xl lg:text-2xl text-slate-100/95 leading-snug sm:leading-normal mb-8 max-w-[36ch] mx-auto">Regular cleaning services to keep your home spotless</p>}
        actions={
          <Button onClick={() => open("quote")} aria-label="Get a Quote" variant="primary">Get a Quote</Button>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${res480} 480w, ${res768} 768w, ${res1024} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${res480Avif} 480w, ${res768Avif} 768w, ${res1024Avif} 1024w` }]}
      />

      {/* Service Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContentCard className="text-center">
              <h3 className="text-xl font-bold text-text mb-4">Weekly</h3>
              <div className="text-3xl font-bold text-accent mb-2">$120</div>
              <div className="text-text font-medium mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    All rooms cleaned
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Kitchen & bathrooms
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Vacuum & mop
                  </span>
                </li>
              </ul>
              <Button
                onClick={() => open("booking")}
                variant="primary"
                className="w-full"
                aria-label="Choose Weekly Plan"
              >
                Choose Plan
              </Button>
            </ContentCard>
            <ContentCard className="bg-accent text-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-text text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold mb-4">Bi-Weekly</h3>
              <div className="text-3xl font-bold mb-2">$140</div>
              <div className="text-yellow-100 mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">All rooms cleaned</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">Kitchen & bathrooms</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">Vacuum & mop</span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-white mr-2" />
                  <span className="text-sm">Dusting & organizing</span>
                </li>
              </ul>
              <Button
                onClick={() => open("booking")}
                variant="primary"
                className="w-full"
                aria-label="Choose Bi-Weekly Plan"
              >
                Choose Plan
              </Button>
            </ContentCard>
            <ContentCard className="text-center">
              <h3 className="text-xl font-bold text-text mb-4">Monthly</h3>
              <div className="text-3xl font-bold text-accent mb-2">$180</div>
              <div className="text-text font-medium mb-6">
                per cleaning
              </div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Deep cleaning
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    All rooms + extras
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon name="CheckCircle" className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-text font-medium">
                    Appliances inside
                  </span>
                </li>
              </ul>
              <Button
                onClick={() => open("booking")}
                variant="primary"
                className="w-full"
                aria-label="Choose Monthly Plan"
              >
                Choose Plan
              </Button>
            </ContentCard>
          </div>
        </div>
      </section>

    </>
  );
}
