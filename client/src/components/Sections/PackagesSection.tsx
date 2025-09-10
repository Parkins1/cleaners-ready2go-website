import IconCard from "@/components/IconCard/IconCard";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";

export default function PackagesSection() {
  const { open } = useModal();

  return (
    <section className="py-section bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-text mb-xl">Packages for <span className="text-brand-gold">Your Home</span></h2>
        <div className="grid gap-xl md:grid-cols-2 lg:grid-cols-4">
          {/* Weekly Refresh */}
          <IconCard
            iconName="Clock"
            title="Weekly Refresh"
            items={[
              "A full standard clean with high‑traffic areas prioritized.",
              "Built‑in rotations: baseboards, vents, door frames, reachable blinds.",
              "Optional quarterly add‑ons (inside oven/fridge, detailed blinds).",
            ]}
            className="h-full flex flex-col"
          >
            <div className="mt-auto pt-4">
              <Button onClick={() => open("quote")} aria-label="Get a Quote for Weekly Refresh" variant="primary" className="w-full">Get a Quote</Button>
            </div>
          </IconCard>

          {/* Bi‑Weekly Balance */}
          <IconCard
            iconName="Sparkles"
            title="Bi‑Weekly Balance"
            items={[
              "Predictable upkeep: bathrooms shine, kitchen reset, floors and dust.",
              "Rotational detailing prevents buildup on trim and fixtures.",
              "Easy to add seasonal extras when needed.",
            ]}
            className="h-full flex flex-col"
          >
            <div className="mt-auto pt-4">
              <Button onClick={() => open("quote")} aria-label="Get a Quote for Bi‑Weekly Balance" variant="primary" className="w-full">Get a Quote</Button>
            </div>
          </IconCard>

          {/* Monthly Reset */}
          <IconCard
            iconName="Sparkles"
            title="Monthly Reset"
            items={[
              "Thorough dust and surface pass to catch what accumulates.",
              "Bathrooms, kitchen, and floors refreshed; detail focus monthly.",
              "Often paired with 2–3 Deep Cleans per year.",
            ]}
            className="h-full flex flex-col"
          >
            <div className="mt-auto pt-4">
              <Button onClick={() => open("quote")} aria-label="Get a Quote for Monthly Reset" variant="primary" className="w-full">Get a Quote</Button>
            </div>
          </IconCard>

          {/* Seasonal Deep Clean */}
          <IconCard
            iconName="Sparkles"
            title="Seasonal Deep Clean"
            items={[
              "Hand‑wipe reachable baseboards/trim, detail blinds/vents/fixtures.",
              "Kitchen degrease; bath descale; grout focus where needed.",
              "Under/behind items; edge vacuuming; glass/polish attention.",
            ]}
            className="h-full flex flex-col"
          >
            <div className="mt-auto pt-4">
              <Button onClick={() => open("quote")} aria-label="Get a Quote for Seasonal Deep Clean" variant="primary" className="w-full">Get a Quote</Button>
            </div>
          </IconCard>
        </div>
        <p className="text-sm text-text mt-4">
          <strong>Note:</strong> Move‑In/Move‑Out is a separate service with cabinet/appliance interiors and turnover‑ready detailing. We’ll point you to that scope if it’s a better fit.
        </p>
      </div>
    </section>
  );
}