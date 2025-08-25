import { Home as HomeIcon, CheckCircle, Send } from "lucide-react";
import residentialCardImg from "@assets/residential-cleaning-card.webp";
import moveOutCardImg from "@assets/move-out-cleaning-card.webp";
import type { ServiceCardProps } from "./types";

// Canonical set of service cards used across pages
// Consumers can reference by id to keep visuals/content consistent.
export const serviceCatalog: Record<string, Omit<ServiceCardProps, "className">> = {
  residential: {
    id: "residential",
    title: "Standard/Recurring House Cleaning",
    blurb:
      "Routine dusting, vacuuming, mopping, bathroom sanitization, and kitchen cleaning. Ideal for weekly, bi-weekly, or monthly upkeep.",
    href: "/residential",
    img: residentialCardImg,
    icon: <HomeIcon className="w-2/3 h-2/3 text-white" />,
  },
  "deep-cleaning": {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    blurb:
      "Meticulous care beyond maintenance: baseboards, blinds, behind appliances, grout, and more. Perfect before hosting or seasonally.",
    href: "/deep-cleaning",
    img: residentialCardImg,
    icon: <CheckCircle className="w-2/3 h-2/3 text-white" />,
  },
  "move-out": {
    id: "move-out",
    title: "Move-in/Move-out Cleaning",
    blurb:
      "Comprehensive cabinets, appliances, fixtures, floors, and surfaces ideal for renters, property managers, and homeowners in transition.",
    href: "/move-out",
    img: moveOutCardImg,
    icon: <CheckCircle className="w-2/3 h-2/3 text-white" />,
  },
  "apartment-cleaning": {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    blurb:
      "Flexible, efficient cleaning tailored to apartment living. Keep your space consistently tidy with packages that fit your lifestyle.",
    href: "/apartment-cleaning",
    img: residentialCardImg,
    icon: <CheckCircle className="w-2/3 h-2/3 text-white" />,
  },
};
 
 
export type ServiceCatalogId = keyof typeof serviceCatalog;
