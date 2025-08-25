// llm:cta-migrated
import { CheckCircle, Home as HomeIcon, Building2, ArrowRight } from "lucide-react";
import { useModal } from "@/components/modal/ModalProvider";
import { Button } from "@/components/ui/button";
import ContentCard from "@/components/ContentCard/ContentCard";
import residentialCardImg from "@assets/residential-cleaning-card.webp";

export default function ApartmentCleaning() {
  const { open } = useModal();

  return (
    <>
      <title>Apartment Cleaning Services - Cleaners Ready 2 GO | Efficient, Flexible Plans</title>
      <meta
        name="description"
        content="Efficient, flexible apartment cleaning in Spokane, Spokane Valley, and Liberty Lake. Recurring, deep clean, and move-out options available. Get your free quote."
      />

      {/* Hero with image layer + overlay for contrast */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden" aria-label="Apartment Cleaning Hero">
        {/* Media */}
        <img
          src={residentialCardImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover brightness-[.85] object-center sm:object-[center_30%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent" />
        {/* Copy */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-16">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight drop-shadow-sm mb-3">Apartment Cleaning</h1>
          <p className="text-slate-100/95 text-lg lg:text-xl leading-snug sm:leading-normal max-w-[36ch] mx-auto">
            Flexible, efficient cleaning tailored to apartment living keep your place consistently tidy with plans that fit your lifestyle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              onClick={() => open("quote")}
              aria-label="Get Free Estimate"
              variant="primary"
            >
              Get Free Estimate
            </Button>
            <Button
              onClick={() => open("booking")}
              aria-label="Schedule Cleaning"
              variant="primary"
            >
              Schedule Cleaning
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text mb-4">Simple Apartment Cleaning Plans</h2>
            <p className="text-lg text-text">Pick a schedule that works for your space and routine</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContentCard className="text-center">
              <h3 className="text-xl font-bold text-text mb-4">Weekly</h3>
              <div className="text-3xl font-bold text-accent mb-2">$99</div>
              <div className="text-text font-medium mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /><span className="text-sm text-text font-medium">Kitchen & bath refresh</span></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /><span className="text-sm text-text font-medium">Dusting, vacuum, mop</span></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /><span className="text-sm text-text font-medium">Trash & tidy</span></li>
              </ul>
              <Button onClick={() => open("booking")} variant="primary" className="w-full">Choose Plan</Button>
            </ContentCard>
            <ContentCard className="bg-accent text-white relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-text text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
              <h3 className="text-xl font-bold mb-4">Bi-Weekly</h3>
              <div className="text-3xl font-bold mb-2">$119</div>
              <div className="text-yellow-100 mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-white mr-2" /><span className="text-sm">Kitchen & bath detail</span></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-white mr-2" /><span className="text-sm">Dusting, floors, surfaces</span></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-white mr-2" /><span className="text-sm">High-touch sanitizing</span></li>
              </ul>
              <Button onClick={() => open("booking")} variant="primary" className="w-full">Choose Plan</Button>
            </ContentCard>
            <ContentCard className="text-center">
              <h3 className="text-xl font-bold text-text mb-4">Monthly</h3>
              <div className="text-3xl font-bold text-accent mb-2">$149</div>
              <div className="text-text font-medium mb-6">per cleaning</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /><span className="text-sm text-text font-medium">Detail dusting</span></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /><span className="text-sm text-text font-medium">Appliance exteriors</span></li>
                <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" /><span className="text-sm text-text font-medium">Bathroom shine</span></li>
              </ul>
              <Button onClick={() => open("booking")} variant="primary" className="w-full">Choose Plan</Button>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* What’s Included */}
      <section className="py-16 bg-white bg-process-radial" aria-labelledby="apartment-includes-title">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="apartment-includes-title" className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">What’s Included</h2>

          {/* Four rooms in a 2x2 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Kitchen</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Counters and backsplash wiped and sanitized</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Sink and faucet cleaned; fixtures polished</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Exterior of appliances (fridge, oven/stove, microwave, dishwasher)</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Microwave cleaned inside and out</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Stovetop and hood degreased; burner grates cleaned (as applicable)</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Cabinet fronts and handles wiped</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Small appliance exteriors wiped (toaster, coffee maker)</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Floors vacuumed and mopped; baseboards wiped</span></li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Bathroom</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Toilet cleaned inside/outside, base and hinges sanitized</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Tub/shower scrubbed; tile and grout soap scum removal</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Shower glass and mirrors polished, streak-free</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Sink, faucet, and counters disinfected; fixtures polished</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Cabinet fronts wiped; door/switch touchpoints cleaned</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Floors vacuumed and mopped; baseboards wiped</span></li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Bedrooms</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Dust furniture, decor, ledges, and reachable vents</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Wipe touchpoints: door handles, switches, rails</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Mirrors and interior glass spot-cleaned</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Floors vacuumed (including edges); hard floors mopped</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Baseboards and window sills wiped where reachable</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Tidy surfaces and empty trash (if present)</span></li>
              </ul>
            </ContentCard>

            <ContentCard>
              <h3 className="text-lg font-semibold text-text mb-3">Other Rooms (Living, Dining, Entry, Hallways)</h3>
              <ul className="space-y-2 text-text">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>General dusting of furniture, shelves, and decor</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Wipe railings, switch plates, and door handles</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Spot clean walls/doors where washable</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Interior glass and patio door glass spot-cleaned</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Floors vacuumed and mopped; baseboards wiped</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1" /><span>Entryway reset: mats shaken, high-traffic edges detailed</span></li>
              </ul>
            </ContentCard>
          </div>

          {/* Optional add-ons as a full-width box under the 2x2 grid */}
          <div className="mt-6">
            <ContentCard className="w-full">
              <h3 className="text-lg font-semibold text-text mb-3">Optional Add-Ons (by request)</h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-text">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Inside fridge and oven</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Inside kitchen/bath cabinets and drawers</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Interior windows and tracks; blinds dusted</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Ceiling fans and high-reach dusting beyond standard reach</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Carpet shampoo/extraction; pet odor treatment</span></li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Balcony/patio sweep and glass rails</span></li>
                <li className="flex items-start sm:col-span-2"><CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-[2px]" /><span>Move-in/move-out upgrade for empty units and extra detailing</span></li>
              </ul>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="footer py-20 relative overflow-hidden" aria-label="CTA Banner">
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-text mb-6">Ready for a Consistently Clean Apartment?</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              onClick={() => open("quote")}
              variant="primary"
            >
              Get My Free Quote
            </Button>
            <Button
              onClick={() => open("booking")}
              variant="primary"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
