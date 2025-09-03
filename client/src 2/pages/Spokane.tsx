import React from 'react';
import LocationPageTemplate from './LocationPageTemplate';
import heroImage from "@assets/spokane-wa-house-cleaning-hero.webp";
import hero480 from "@assets/spokane-wa-house-cleaning-hero-480.webp";
import hero768 from "@assets/spokane-wa-house-cleaning-hero-768.webp";
import hero1024 from "@assets/spokane-wa-house-cleaning-hero-1024.webp";
import hero480Avif from "@assets/spokane-wa-house-cleaning-hero-480.avif";
import hero768Avif from "@assets/spokane-wa-house-cleaning-hero-768.avif";
import hero1024Avif from "@assets/spokane-wa-house-cleaning-hero-1024.avif";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import ContentCard from '@/components/ContentCard/ContentCard';
import Icon from "@/components/ui/icon";
import CarouselCompact from '@/components/Carousel/CarouselCompact';

export default function Spokane() {

  const pageDetails: {
    locationName: string;
    heroImage: string;
    heroAlt: string;
    heroImgSrcSet: string;
    heroSources: { type: string; srcSet: string }[];
    heroWidth: number;
    heroHeight: number;
    introText: string;
    services: { title: string; description: string }[];
    serviceCardIds: string[];
    testimonial: { quote: string; name: string };
    extraSections: { title: string; content: React.ReactNode }[];
    ctaVariant: 'default' | 'gold';
  } = {
    locationName: 'Spokane',
    heroImage: heroImage,
    heroAlt: 'House cleaning services in Spokane, WA — Cleaners Ready 2Go',
    heroImgSrcSet: `${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`,
    heroSources: [{ type: 'image/avif', srcSet: `${hero480Avif} 480w, ${hero768Avif} 768w, ${hero1024Avif} 1024w` }],
    heroWidth: 1392,
    heroHeight: 752,
    introText:
      "We are proud to offer our full range of cleaning services to the vibrant city of Spokane. From the historic Browne's Addition to the bustling downtown core, our team is ready to make your home or business shine.",
    services: [
      {
        title: 'Residential Cleaning',
        description: 'Weekly, bi-weekly, or monthly cleaning services to keep your home looking its best.',
      },
      {
        title: 'Commercial Cleaning',
        description: 'Customized cleaning plans for offices, retail spaces, and other commercial properties.',
      },
      {
        title: 'Move‑Out Cleaning',
        description: 'A thorough cleaning to ensure you get your deposit back and leave your old space spotless.',
      },
    ],
    serviceCardIds: ['residential','deep-cleaning','move-out','apartment-cleaning'],
    testimonial: {
      quote: 'Cleaners Ready 2Go is the best cleaning service in Spokane! They are always professional and do an amazing job.',
      name: 'John D.',
    },
    extraSections: [
      {
        title: 'Spokane Services',
        content: (
          <div className="py-8">
            <CarouselCompact
              items={[
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-3 text-brand-gold">Cleaning Plans Built For Spokane Homes</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Professional cleaning services designed for Spokane's unique climate and lifestyle. From pollen season to wildfire dust, we keep your home fresh year-round.
                    </p>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Ongoing Upkeep</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Choose weekly, bi-weekly, or monthly service to stay ahead of pollen spikes, wildfire dust, and surprise drop-ins.
                      </p>
                      <ul className="space-y-1 text-xs">
                        <li><strong>Weekly:</strong> Great for busy households, pets, and allergy season</li>
                        <li><strong>Bi-weekly:</strong> Spokane's sweet spot for value and consistency</li>
                        <li><strong>Monthly:</strong> A reliable reset that keeps things feeling new</li>
                      </ul>
                    </div>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">The Spokane Reset Clean</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Ideal for seasonal transitions or post-holiday clutter. We hand-wipe cabinet fronts, clear door tracks, wash interior glass, degrease the range hood, and spot-treat fixtures.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Kitchen/bath degrease and mineral buildup removal</li>
                      <li>• Baseboards, switches, and frames detailed</li>
                      <li>• Interior glass and mirrors polished clear</li>
                    </ul>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Move-Out & Listing Turnovers</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Built around checklists used by Spokane landlords and Realtors. We zero in on "show well" details inside cabinets/drawers, oven/fridge by request, and dust-catching edges.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Book 48–72 hours before your final walkthrough</li>
                      <li>• Keep power and water on for light and hot water</li>
                    </ul>
                  </ContentCard>
                ),
                (
                  <ContentCard className="p-5 md:p-6">
                    <h3 className="text-lg font-bold mb-2 text-brand-gold">Short-Term Rental Ready</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Synced with Airbnb/VRBO calendars for smooth turnovers. We replace linens, restock essentials, and send timestamped photos so you have stay-by-stay documentation.
                    </p>
                    <ul className="text-xs space-y-1">
                      <li>• Inventory checks for toiletries/supplies</li>
                      <li>• Notes and photos of damage or left items</li>
                    </ul>
                  </ContentCard>
                ),
              ]}
            />
          </div>
        ),
      },
      {
        title: 'Proudly Serving Spokane & Nearby Communities',
        content: (
          <>
            <p>
              Cleaners Ready 2Go is  a trusted presence in Spokane, serving families and homeowners with dependable, top‑quality cleaning services. We are deeply familiar with the unique needs of homes in the Inland Northwest from the dust and pollen brought on by our dry summers to the mud and slush that come with snowy winters.
            </p>
            <p>
              Our service area covers the greater Spokane region, including Spokane Valley, Liberty Lake, Airway Heights, Cheney, and North Idaho communities such as Post Falls and Coeur d’Alene.
            </p>
          </>
        ),
      },
      {
        title: 'Local Cleaning Challenges',
        content: (
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="flex items-start">
              <Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Wildfire Smoke & Ash</strong> — Extra HEPA vacuuming and microfiber wipe‑downs to capture fine particulates during late‑summer smoke events.</span>
            </li>
            <li className="flex items-start">
              <Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Pine Pollen Season</strong> — Targeted damp dusting of sills, vents, and high ledges to reduce yellow pollen film in spring.</span>
            </li>
            <li className="flex items-start">
              <Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Winter Slush & Grit</strong> — Entryway focus with mat care and hard‑floor detailing to contain sand and de‑icer residue.</span>
            </li>
            <li className="flex items-start">
              <Icon name="CheckCircle" className="w-5 h-5 mr-2 mt-0.5 text-brand-gold" />
              <span><strong>Hard‑Water Spots</strong> — Gentle descaling on glass and fixtures common in older Spokane plumbing.</span>
            </li>
          </ul>
        ),
      },
      {
        title: 'Neighborhoods We Serve',
        content: (
          <ul className="grid md:grid-cols-2 gap-2 list-none text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />South Hill & Perry District</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Browne’s Addition & Kendall Yards</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />North Spokane & Shadle Park</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 mr-2 mt-1 text-brand-gold" />Five Mile Prairie & Indian Trail</li>
          </ul>
        ),
      },
      {
        title: 'Highlights',
        content: (
          <ul className="list-none space-y-2 text-sm md:text-base">
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Instant online pricing</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Color‑coded microfiber system</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Photo‑verified results</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Background‑checked team</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />EPA‑registered options available</li>
            <li className="flex items-start"><Icon name="CheckCircle" className="mt-0.5 mr-2 h-4 w-4 text-brand-gold" />Flexible arrival windows</li>
          </ul>
        ),
      },
      {
        title: 'A Fresh, Healthy Home Without Lifting a Finger',
        content: (
          <>
            <p className="mb-3">Weeknights and weekends are better spent around Riverfront Park, neighborhood eateries, and Gonzaga games — not chasing dust. Our uniformed technicians follow a proven checklist so your Spokane home feels fresh without the hassle.</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>67‑point checklist for consistent results</li>
              <li>Low‑odor, low‑VOC options; SDS available on request</li>
            </ul>
          </>
        ),
      },
      {
        title: 'Packages',
        content: (
          <div className="grid md:grid-cols-2 gap-4">
            <ContentCard>
              <h4 className="font-semibold">Set‑It‑and‑Forget‑It Maintenance</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Weekly</li>
                <li>Bi‑weekly</li>
                <li>Monthly</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h4 className="font-semibold">The Spokane Deep Reset</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Degrease/descale focus</li>
                <li>Baseboards and trim detailing</li>
                <li>Interior glass and mirrors</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h4 className="font-semibold">Checklist‑Driven Turnovers</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Book 48–72 hours ahead</li>
                <li>Utilities on for full walkthrough</li>
              </ul>
            </ContentCard>
            <ContentCard>
              <h4 className="font-semibold">Guest‑Ready in Record Time</h4>
              <ul className="list-inside mt-2 text-sm space-y-1">
                <li>Inventory checks</li>
                <li>Damage/photo notes</li>
              </ul>
            </ContentCard>
          </div>
        ),
      },
      {
        title: 'Our Simple Cleaning Process',
        content: (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ContentCard>
                <h3 className="text-xl font-semibold mb-2">1) Request Your Free Quote</h3>
                <p className="text-text">Contact us for a free quote – we’ll ask about your home’s size, cleaning frequency, and any special requests.</p>
              </ContentCard>
              <ContentCard>
                <h3 className="text-xl font-semibold mb-2">2) Choose Your Schedule</h3>
                <p className="text-text">Select a convenient day and time – we offer flexible scheduling including weekdays, weekends, mornings or afternoons.</p>
              </ContentCard>
              <ContentCard>
                <h3 className="text-xl font-semibold mb-2">3) Sit Back and Relax</h3>
                <p className="text-text">Relax while our team arrives on time, cleans with precision, and leaves your home sparkling.</p>
              </ContentCard>
            </div>
          </>
        ),
      },
      {
        title: 'Why your neighbors choose us for spokane house cleaning',
        content: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="local-expertise">
              <AccordionTrigger>Local insight tailored to Spokane</AccordionTrigger>
              <AccordionContent>
                Many Spokane homeowners prefer working with teams who understand the Inland Northwest’s climate, neighborhoods, and lifestyle.
                That local context lets us tailor schedules, methods, and customer care for more relevant results and faster response times.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="bonded-insured">
              <AccordionTrigger>Fully bonded and insured in Washington</AccordionTrigger>
              <AccordionContent>
                We maintain a Washington State general-liability policy and a janitorial surety bond. Certificate copies are available upon request
                so you can feel confident coverage is in place for unexpected mishaps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="satisfaction-policy">
              <AccordionTrigger>Satisfaction policy with complimentary re-visit</AccordionTrigger>
              <AccordionContent>
                If something doesn’t meet your expectations, tell us within 24 hours. After a brief on‑site review, we’ll schedule a complimentary
                re‑visit to address the concern. Full details appear in our Customer Care Terms.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="training-screening">
              <AccordionTrigger>Trained, screened technicians</AccordionTrigger>
              <AccordionContent>
                Every technician completes a structured skills program covering surfaces, products, safety, and customer courtesy. A third‑party
                criminal background screen current as of the employee’s hire date adds another layer of peace of mind.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="eco-products">
              <AccordionTrigger>Eco‑conscious products with SDS available</AccordionTrigger>
              <AccordionContent>
                We select low‑VOC, biodegradable formulas marketed by their manufacturers as greener choices. Safety Data Sheets (SDS) are always
                available. While no product is “risk‑free,” these options aim to reduce residues and odors inside your Spokane home.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="equipment-supplies">
              <AccordionTrigger>All equipment and supplies provided</AccordionTrigger>
              <AccordionContent>
                From HEPA vacuums to microfiber cloths, we arrive with the tools needed for most residential jobs no last‑minute store runs or
                storage hassles for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: 'What Spokane Residents Say',
        content: (
          <>
            <ContentCard as="blockquote">
              “After trying three other companies, Cleaners Ready 2Go is the best. They’re detail‑oriented, friendly, and always on time.” – Amanda
              P., Spokane Valley
            </ContentCard>
            <ContentCard as="blockquote">
              “We hired them for a deep clean before putting our South Hill home on the market. The buyers commented on how fresh it felt, and we sold within a week.” –
              Daniel M.
            </ContentCard>
            <ContentCard as="blockquote">
              “I love their green cleaning option. My allergies have improved and the house smells amazing without harsh chemicals.” – Lisa K., Liberty Lake
            </ContentCard>
          </>
        ),
      },
      {
        title: 'FAQ',
        content: (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="included">
              <AccordionTrigger>What’s included in your cleaning service?</AccordionTrigger>
              <AccordionContent>Dusting, vacuuming, mopping, bathroom and kitchen cleaning, and optional add‑ons.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="insured">
              <AccordionTrigger>Are you insured?</AccordionTrigger>
              <AccordionContent>Yes, we are fully insured and bonded.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="supplies">
              <AccordionTrigger>Do I need to provide cleaning supplies?</AccordionTrigger>
              <AccordionContent>No, we bring everything needed.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="pets">
              <AccordionTrigger>What about pets?</AccordionTrigger>
              <AccordionContent>We’re pet‑friendly – just let us know any special instructions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        ),
      },
      {
        title: 'Business Hours',
        content: (
          <>
            <p>Monday–Friday 8 am–6 pm | Saturday 9 am–2 pm</p>
          </>
        ),
      },
    ],
    // Use neutral CTA without gold background
    ctaVariant: 'default',
  };

  return <LocationPageTemplate {...pageDetails} />;
}
