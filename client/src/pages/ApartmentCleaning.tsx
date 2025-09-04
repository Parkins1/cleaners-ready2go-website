// llm:cta-migrated
import Icon from "@/components/ui/icon";
import { useModal } from "@/components/modal/ModalProvider";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard/ContentCard";
import { SEO } from "@/components/seo/SEO";
import HeroSection from "@/components/HeroSection/HeroSection";
import TrustSignalsSection from "@/components/TrustSignals/TrustSignalsSection";
import IconCard from "@/components/IconCard/IconCard";
import { ProcessSection } from "@/components/Sections";
import { OptimizedImage } from "@/components/ui/optimized-image";
import JsonLd from "@/components/seo/JsonLd";
import { makeLocalBusiness, makeWebPage, makeService, makeBreadcrumb } from "@/components/seo/schema";
import { site } from "@/config/site";

// Apartment-specific visuals (optimized by scripts/optimize-images.mjs)
// Hero
import heroApartmentWebp from "@/assets/hero_apartment_cleaning_spokane.webp";
import heroApartment480Webp from "@/assets/hero_apartment_cleaning_spokane-480.webp";
import heroApartment768Webp from "@/assets/hero_apartment_cleaning_spokane-768.webp";
import heroApartment1024Webp from "@/assets/hero_apartment_cleaning_spokane-1024.webp";
import heroApartment480Avif from "@/assets/hero_apartment_cleaning_spokane-480.avif";
import heroApartment768Avif from "@/assets/hero_apartment_cleaning_spokane-768.avif";
import heroApartment1024Avif from "@/assets/hero_apartment_cleaning_spokane-1024.avif";
// Lifestyle
import lifestylePhotoWebp from "@/assets/photo_spokane_apartment_lifestyle.webp";
import lifestylePhoto480Webp from "@/assets/photo_spokane_apartment_lifestyle-480.webp";
import lifestylePhoto768Webp from "@/assets/photo_spokane_apartment_lifestyle-768.webp";
import lifestylePhoto1024Webp from "@/assets/photo_spokane_apartment_lifestyle-1024.webp";
import lifestylePhoto480Avif from "@/assets/photo_spokane_apartment_lifestyle-480.avif";
import lifestylePhoto768Avif from "@/assets/photo_spokane_apartment_lifestyle-768.avif";
import lifestylePhoto1024Avif from "@/assets/photo_spokane_apartment_lifestyle-1024.avif";
// Services grid icons
import iconMoveOut from "@/assets/icon_apartment_move_out.webp";
import iconMoveIn from "@/assets/icon_apartment_move_in.webp";
import iconRecurring from "@/assets/icon_apartment_recurring.webp";
import iconDeepClean from "@/assets/icon_apartment_deep_clean.webp";
import iconEco from "@/assets/icon_apartment_eco.webp";
// Service detail photos
import photoKitchenWebp from "@/assets/photo_spokane_apartment_kitchen.webp";
import photoKitchen480Webp from "@/assets/photo_spokane_apartment_kitchen-480.webp";
import photoKitchen768Webp from "@/assets/photo_spokane_apartment_kitchen-768.webp";
import photoKitchen1024Webp from "@/assets/photo_spokane_apartment_kitchen-1024.webp";
import photoKitchen480Avif from "@/assets/photo_spokane_apartment_kitchen-480.avif";
import photoKitchen768Avif from "@/assets/photo_spokane_apartment_kitchen-768.avif";
import photoKitchen1024Avif from "@/assets/photo_spokane_apartment_kitchen-1024.avif";

import photoBathroomWebp from "@/assets/photo_spokane_apartment_bathroom.webp";
import photoBathroom480Webp from "@/assets/photo_spokane_apartment_bathroom-480.webp";
import photoBathroom768Webp from "@/assets/photo_spokane_apartment_bathroom-768.webp";
import photoBathroom1024Webp from "@/assets/photo_spokane_apartment_bathroom-1024.webp";
import photoBathroom480Avif from "@/assets/photo_spokane_apartment_bathroom-480.avif";
import photoBathroom768Avif from "@/assets/photo_spokane_apartment_bathroom-768.avif";
import photoBathroom1024Avif from "@/assets/photo_spokane_apartment_bathroom-1024.avif";

import photoBedroomWebp from "@/assets/photo_spokane_apartment_bedroom.webp";
import photoBedroom480Webp from "@/assets/photo_spokane_apartment_bedroom-480.webp";
import photoBedroom768Webp from "@/assets/photo_spokane_apartment_bedroom-768.webp";
import photoBedroom1024Webp from "@/assets/photo_spokane_apartment_bedroom-1024.webp";
import photoBedroom480Avif from "@/assets/photo_spokane_apartment_bedroom-480.avif";
import photoBedroom768Avif from "@/assets/photo_spokane_apartment_bedroom-768.avif";
import photoBedroom1024Avif from "@/assets/photo_spokane_apartment_bedroom-1024.avif";

export default function ApartmentCleaning() {
  const { open } = useModal();

  return (
    <>
      <SEO
        title="Apartment Cleaning in Spokane, WA | Cleaners Ready 2 GO"
        description="Apartment cleaning in Spokane: move-out, move-in, recurring, and deep cleans. Local, licensed, deposit-friendly. Get a fast flat-rate quote."
      />
      <JsonLd
        data={[
          makeLocalBusiness(site.url),
          makeWebPage({
            siteUrl: site.url,
            path: "/apartment-cleaning",
            title: "Apartment Cleaning in Spokane, WA | Cleaners Ready 2 GO",
            description:
              "Apartment cleaning in Spokane: move-out, move-in, recurring, and deep cleans.",
          }),
          makeService({
            siteUrl: site.url,
            path: "/apartment-cleaning",
            name: "Apartment Cleaning",
            description: "Apartment-focused cleaning services for Spokane residents, including move-out and recurring.",
            areaServed: ["Spokane", "Spokane Valley", "Liberty Lake", "Greenacres"],
          }),
          makeBreadcrumb([
            { name: "Home", url: `${site.url}/` },
            { name: "Apartment Cleaning", url: `${site.url}/apartment-cleaning` },
          ]),
        ]}
      />

      {/* Hero */}
      <HeroSection
        image={heroApartmentWebp}
        imageAlt="Apartment cleaning in Spokane, WA"
        title={
          <h1 className="text-4xl lg:text-6xl font-bold text-text mb-4">
            <span className="text-brand-gold">Apartment Cleaning</span> in Spokane That Fits Your Life
          </h1>
        }
        subtitle={
          <p>Locally owned • Licensed & insured • Apartment-focused cleaning experts</p>
        }
        actions={
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button onClick={() => open("quote")} variant="primary">Request Your Free Quote</Button>
          </div>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${heroApartment480Webp} 480w, ${heroApartment768Webp} 768w, ${heroApartment1024Webp} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${heroApartment480Avif} 480w, ${heroApartment768Avif} 768w, ${heroApartment1024Avif} 1024w` }]}
      />

      {/* Short intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-center">
          <h2 className="text-3xl font-bold text-text">Your Spokane Apartment, Transformed Without the Stress</h2>
          <p>
            At Cleaners Ready 2 GO, we specialize in apartment cleaning in Spokane that keeps your home fresh, inspection-ready, and stress-free. Whether you’re moving out, moving in, or keeping up with everyday life, we make it easy.
          </p>
        </div>
      </section>

      {/* Services icons grid (5) */}
      <section className="py-16 bg-surface" aria-labelledby="apt-services-title">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="apt-services-title" className="text-3xl lg:text-4xl font-bold text-text text-center mb-10">
            Our Apartment Cleaning Services in Spokane
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IconCard
              iconSrc={iconMoveOut}
              title="Move-Out & End-of-Lease Cleaning"
              items={["Deposit-friendly cleaning based on landlord checklists"]}
            />
            <IconCard
              iconSrc={iconMoveIn}
              title="Move-In Cleaning"
              items={["Sanitized kitchens, bathrooms, and surfaces before you unpack"]}
            />
            <IconCard
              iconSrc={iconRecurring}
              title="Recurring Apartment Cleaning"
              items={["Weekly, bi-weekly, or monthly to keep things fresh"]}
            />
            <IconCard
              iconSrc={iconDeepClean}
              title="Deep Cleaning"
              items={["Beyond surface-level: grout, baseboards, and inside appliances"]}
            />
            <IconCard
              iconSrc={iconEco}
              title="Eco-Friendly Options"
              items={["Pet-safe, kid-safe products available on request"]}
            />
          </div>
        </div>
      </section>

      {/* Designed for Spokane living (trust signals) */}
      <TrustSignalsSection
        title={<span>Why Spokane Residents Choose <span className="text-brand-gold">Cleaners Ready 2 GO</span></span>}
        items={[
          { highlight: "Local & Licensed", text: "Spokane-owned, not a franchise.", icon: "CheckCircle" },
          { highlight: "Deposit-Friendly Cleaning", text: "We clean to landlord inspection standards.", icon: "CheckCircle" },
          { highlight: "On-Time & Reliable", text: "We show up when we say we will.", icon: "CheckCircle" },
          { highlight: "Seamless Scheduling", text: "Online booking, text updates, flexible timing.", icon: "CheckCircle" },
          { highlight: "Supplies Included", text: "We bring professional tools and products.", icon: "CheckCircle" },
          { highlight: "Friendly, Vetted Team", text: "Trained pros you can trust.", icon: "CheckCircle" },
        ]}
        className="bg-white"
      />

      {/* Plans removed per request */}

      {/* What’s Included */}
      <section className="py-16 bg-white bg-process-radial" aria-labelledby="apartment-includes-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="apartment-includes-title" className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">What’s Included</h2>

          {/* Four rooms in a 2x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Kitchen</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Counters and backsplash wiped and sanitized</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Sink and faucet cleaned; fixtures polished</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Exterior of appliances (fridge, oven/stove, microwave, dishwasher)</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Microwave cleaned inside and out</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Stovetop and hood degreased; burner grates cleaned (as applicable)</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Cabinet fronts and handles wiped</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Small appliance exteriors wiped (toaster, coffee maker)</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Floors vacuumed and mopped; baseboards wiped</span></li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Bathroom</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Toilet cleaned inside/outside, base and hinges sanitized</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Tub/shower scrubbed; tile and grout soap scum removal</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Shower glass and mirrors polished, streak-free</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Sink, faucet, and counters disinfected; fixtures polished</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Cabinet fronts wiped; door/switch touchpoints cleaned</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Floors vacuumed and mopped; baseboards wiped</span></li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Bedrooms</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Dust furniture, decor, ledges, and reachable vents</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Wipe touchpoints: door handles, switches, rails</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Mirrors and interior glass spot-cleaned</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Floors vacuumed (including edges); hard floors mopped</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Baseboards and window sills wiped where reachable</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Tidy surfaces and empty trash (if present)</span></li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Other Rooms (Living, Dining, Entry, Hallways)</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>General dusting of furniture, shelves, and decor</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Wipe railings, switch plates, and door handles</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Spot clean walls/doors where washable</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Interior glass and patio door glass spot-cleaned</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Floors vacuumed and mopped; baseboards wiped</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-1" /><span>Entryway reset: mats shaken, high-traffic edges detailed</span></li>
              </ul>
            </ContentCard>
          </div>

          {/* Optional add-ons as a full-width box under the 2x2 grid */}
          <div className="mt-6">
            <ContentCard className="w-full">
              <h3 className="text-lg font-semibold text-text mb-3">Optional Add-Ons (by request)</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-text">
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Inside fridge and oven</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Inside kitchen/bath cabinets and drawers</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Interior windows and tracks; blinds dusted</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Ceiling fans and high-reach dusting beyond standard reach</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Carpet shampoo/extraction; pet odor treatment</span></li>
                <li className="flex items-start"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Balcony/patio sweep and glass rails</span></li>
                <li className="flex items-start sm:col-span-2"><Icon name="CheckCircle" className="w-4 h-4 text-brand-gold mr-2 mt-[2px]" /><span>Move-in/move-out upgrade for empty units and extra detailing</span></li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* What's Included (room photos + brand-gold checkmarks) */}
      <section className="py-16 bg-surface" aria-labelledby="includes-title">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="includes-title" className="text-3xl lg:text-4xl font-bold text-text text-center">What’s Included</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <ContentCard>
              <OptimizedImage
                src={photoKitchenWebp}
                alt="Apartment kitchen cleaning"
                className="w-full h-40 md:h-48 rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                imgSrcSet={`${photoKitchen480Webp} 480w, ${photoKitchen768Webp} 768w, ${photoKitchen1024Webp} 1024w`}
                sources={[{ type: 'image/avif', srcSet: `${photoKitchen480Avif} 480w, ${photoKitchen768Avif} 768w, ${photoKitchen1024Avif} 1024w` }]}
              />
              <h3 className="text-lg font-semibold text-text mt-4 mb-2">Kitchen</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Counters, sink, and faucet cleaned</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Appliance exteriors; inside on request</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Cabinet fronts wiped; handles sanitized</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Floors vacuumed and mopped</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <OptimizedImage
                src={photoBathroomWebp}
                alt="Apartment bathroom cleaning"
                className="w-full h-40 md:h-48 rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                imgSrcSet={`${photoBathroom480Webp} 480w, ${photoBathroom768Webp} 768w, ${photoBathroom1024Webp} 1024w`}
                sources={[{ type: 'image/avif', srcSet: `${photoBathroom480Avif} 480w, ${photoBathroom768Avif} 768w, ${photoBathroom1024Avif} 1024w` }]}
              />
              <h3 className="text-lg font-semibold text-text mt-4 mb-2">Bathroom</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Toilet, shower, and tub sanitized</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Mirrors and glass polished</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Counters, sink, and fixtures detailed</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Floors scrubbed and sanitized</li>
              </ul>
            </ContentCard>

            <ContentCard>
              <OptimizedImage
                src={photoBedroomWebp}
                alt="Apartment bedroom cleaning"
                className="w-full h-40 md:h-48 rounded-lg object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                imgSrcSet={`${photoBedroom480Webp} 480w, ${photoBedroom768Webp} 768w, ${photoBedroom1024Webp} 1024w`}
                sources={[{ type: 'image/avif', srcSet: `${photoBedroom480Avif} 480w, ${photoBedroom768Avif} 768w, ${photoBedroom1024Avif} 1024w` }]}
              />
              <h3 className="text-lg font-semibold text-text mt-4 mb-2">Bedroom</h3>
              <ul className="list-none space-y-2 text-sm">
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Dust furniture, ledges, and decor</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Make beds; tidy surfaces</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Mirrors spot-cleaned</li>
                <li><Icon name="CheckCircle" className="w-5 h-5 mr-2 inline-block align-middle text-brand-gold" />Floors vacuumed; hard floors mopped</li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* How it works */}
      <ProcessSection />

      {/* Reviews with lifestyle image */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <OptimizedImage
              src={lifestylePhotoWebp}
              alt="Spokane apartment lifestyle — tidy living room and kitchen"
              className="w-full h-auto rounded-xl shadow"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 50vw"
              imgSrcSet={`${lifestylePhoto480Webp} 480w, ${lifestylePhoto768Webp} 768w, ${lifestylePhoto1024Webp} 1024w`}
              sources={[{ type: 'image/avif', srcSet: `${lifestylePhoto480Avif} 480w, ${lifestylePhoto768Avif} 768w, ${lifestylePhoto1024Avif} 1024w` }]}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-text">Real Feedback from Spokane Apartment Renters</h2>
            <ContentCard as="blockquote">
              <p>“I booked Cleaners Ready 2 GO before moving out of my South Hill apartment. My landlord said it was the cleanest move-out he’d ever seen. Full deposit returned.”</p>
              <footer className="mt-3 text-sm text-gray-600">— Alex R.</footer>
            </ContentCard>
            <ContentCard as="blockquote">
              <p>“Their recurring service has been a lifesaver—my apartment always feels welcoming.”</p>
              <footer className="mt-3 text-sm text-gray-600">— Brianna T.</footer>
            </ContentCard>
            <ContentCard as="blockquote">
              <p>“Booked them for a move-in cleaning in Kendall Yards. Walking into a spotless kitchen and bathroom made unpacking so much easier.”</p>
              <footer className="mt-3 text-sm text-gray-600">— Marcus L.</footer>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Final CTA using hero image */}
      <HeroSection
        image={heroApartmentWebp}
        imageAlt="Request a free apartment cleaning quote in Spokane"
        title={<h2 className="text-3xl lg:text-5xl font-bold text-text mb-4">Ready for a Consistently Clean Apartment?</h2>}
        subtitle={<p>Call, text, or request your free quote now.</p>}
        actions={
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button onClick={() => open("quote")} variant="primary">Request My Free Quote</Button>
          </div>
        }
        useAspect
        imageWidth={1392}
        imageHeight={752}
        imgSrcSet={`${heroApartment480Webp} 480w, ${heroApartment768Webp} 768w, ${heroApartment1024Webp} 1024w`}
        sources={[{ type: 'image/avif', srcSet: `${heroApartment480Avif} 480w, ${heroApartment768Avif} 768w, ${heroApartment1024Avif} 1024w` }]}
      />
    </>
  );
}
