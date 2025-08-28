import Icon from "@/components/ui/icon";
import residentialCardImg from "@assets/spokane-wa-residential-cleaning-card.webp";
import res480 from "@assets/spokane-wa-residential-cleaning-card-480.webp";
import res768 from "@assets/spokane-wa-residential-cleaning-card-768.webp";
import res1024 from "@assets/spokane-wa-residential-cleaning-card-1024.webp";
import res480Avif from "@assets/spokane-wa-residential-cleaning-card-480.avif";
import res768Avif from "@assets/spokane-wa-residential-cleaning-card-768.avif";
import res1024Avif from "@assets/spokane-wa-residential-cleaning-card-1024.avif";

import moveOutCardImg from "@assets/spokane-wa-move-out-cleaning-card.webp";
import mv480 from "@assets/spokane-wa-move-out-cleaning-card-480.webp";
import mv768 from "@assets/spokane-wa-move-out-cleaning-card-768.webp";
import mv1024 from "@assets/spokane-wa-move-out-cleaning-card-1024.webp";
import mv480Avif from "@assets/spokane-wa-move-out-cleaning-card-480.avif";
import mv768Avif from "@assets/spokane-wa-move-out-cleaning-card-768.avif";
import mv1024Avif from "@assets/spokane-wa-move-out-cleaning-card-1024.avif";
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
    imgAlt: "Residential house cleaning services in Spokane, Spokane Valley, and Liberty Lake",
    imgSrcSet: `${res480} 480w, ${res768} 768w, ${res1024} 1024w`,
    sources: [
      { type: 'image/avif', srcSet: `${res480Avif} 480w, ${res768Avif} 768w, ${res1024Avif} 1024w` },
    ],
    icon: <Icon name="Home" className="w-2/3 h-2/3 text-white" />,
  },
  "deep-cleaning": {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    blurb:
      "Meticulous care beyond maintenance: baseboards, blinds, behind appliances, grout, and more. Perfect before hosting or seasonally.",
    href: "/deep-cleaning",
    img: residentialCardImg,
    imgAlt: "Deep house cleaning services in Spokane and Spokane Valley",
    imgSrcSet: `${res480} 480w, ${res768} 768w, ${res1024} 1024w`,
    sources: [
      { type: 'image/avif', srcSet: `${res480Avif} 480w, ${res768Avif} 768w, ${res1024Avif} 1024w` },
    ],
    icon: <Icon name="CheckCircle" className="w-2/3 h-2/3 text-white" />,
  },
  "move-out": {
    id: "move-out",
    title: "Move-in/Move-out Cleaning",
    blurb:
      "Comprehensive cabinets, appliances, fixtures, floors, and surfaces ideal for renters, property managers, and homeowners in transition.",
    href: "/move-out",
    img: moveOutCardImg,
    imgAlt: "Move-in and move-out cleaning in Spokane, Liberty Lake, and Spokane Valley",
    imgSrcSet: `${mv480} 480w, ${mv768} 768w, ${mv1024} 1024w`,
    sources: [
      { type: 'image/avif', srcSet: `${mv480Avif} 480w, ${mv768Avif} 768w, ${mv1024Avif} 1024w` },
    ],
    icon: <Icon name="CheckCircle" className="w-2/3 h-2/3 text-white" />,
  },
  "apartment-cleaning": {
    id: "apartment-cleaning",
    title: "Apartment Cleaning",
    blurb:
      "Flexible, efficient cleaning tailored to apartment living. Keep your space consistently tidy with packages that fit your lifestyle.",
    href: "/apartment-cleaning",
    img: residentialCardImg,
    imgAlt: "Apartment cleaning services in Spokane area",
    imgSrcSet: `${res480} 480w, ${res768} 768w, ${res1024} 1024w`,
    sources: [
      { type: 'image/avif', srcSet: `${res480Avif} 480w, ${res768Avif} 768w, ${res1024Avif} 1024w` },
    ],
    icon: <Icon name="CheckCircle" className="w-2/3 h-2/3 text-white" />,
  },
};
 
 
export type ServiceCatalogId = keyof typeof serviceCatalog;
