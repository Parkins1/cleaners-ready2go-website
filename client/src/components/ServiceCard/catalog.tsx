import { Home as HomeIcon, CheckCircle, Send } from "lucide-react";
import residentialCardImg from "@assets/residential-cleaning-card.jpeg";
import moveOutCardImg from "@assets/move-out-cleaning-card.jpeg";
import moveOutIconImg from "@assets/drive-download-20250815T192550Z-1-001/icon_move_out_cleaning_primary.png";
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
    icon: <HomeIcon className="w-10 h-10 text-white" />,
  },
  "deep-cleaning": {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    blurb:
      "Meticulous care beyond maintenance: baseboards, blinds, behind appliances, grout, and more. Perfect before hosting or seasonally.",
    href: "/deep-cleaning",
    img: residentialCardImg,
    icon: <CheckCircle className="w-10 h-10 text-white" />,
  },
  "move-out": {
    id: "move-out",
    title: "Move-in/Move-out Cleaning",
    blurb:
      "Comprehensive cabinets, appliances, fixtures, floors, and surfaces ideal for renters, property managers, and homeowners in transition.",
    href: "/move-out",
    img: moveOutCardImg,
    icon: (
      <img
        src={moveOutIconImg}
        alt="Move-out cleaning icon"
        aria-hidden
        className="w-10 h-10 object-contain"
      />
    ),
  },
  "apartment-cleaning": {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    blurb:
      "Flexible, efficient cleaning tailored to apartment living. Keep your space consistently tidy with packages that fit your lifestyle.",
    href: "/apartment-cleaning",
    img: residentialCardImg,
    icon: <CheckCircle className="w-10 h-10 text-white" />,
  },
};
 
export const moveOutIconSrc = moveOutIconImg;
 
export type ServiceCatalogId = keyof typeof serviceCatalog;
