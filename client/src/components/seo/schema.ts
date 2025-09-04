import { brand } from "@/config/brand";

export type BreadcrumbItem = { name: string; url: string };

type FounderValue =
  | string
  | {
      "@type": "Person" | "Organization";
      name: string;
      url?: string;
    };

type GeoValue = { lat: number; lng: number };

type MakeWebSiteOptions = {
  bookingPath?: string;
  contactPath?: string;
  searchPathTemplate?: string;
};

type MakeLocalBusinessOptions = {
  logoUrl?: string;
  sameAs?: string[];
  founder?: FounderValue;
  description?: string;
  geo?: GeoValue;
  openOnSunday?: boolean;
  adminAreas?: string[];
  priceRange?: string;
};

type MakeWebPageOptions = {
  images?: string[];
  headline?: string;
};

type MakeServiceOptions = {
  areaServed?: string | string[];
};

function ensureAbsoluteUrl(siteUrl: string, maybePathOrUrl?: string) {
  if (!maybePathOrUrl) return undefined;
  if (/^https?:\/\//i.test(maybePathOrUrl)) return maybePathOrUrl;
  return `${siteUrl}${maybePathOrUrl.startsWith("/") ? maybePathOrUrl : `/${maybePathOrUrl}`}`;
}

function ensureAbsoluteList(siteUrl: string, urls?: string[]) {
  if (!urls?.length) return undefined;
  return urls.map((u) => ensureAbsoluteUrl(siteUrl, u)!) as string[];
}

export function makeWebSite(siteUrl: string, opts: MakeWebSiteOptions = {}) {
  const potentialAction: any[] = [];

  if (opts.bookingPath) {
    potentialAction.push({
      "@type": "ScheduleAction",
      target: ensureAbsoluteUrl(siteUrl, opts.bookingPath),
    });
  }
  if (opts.contactPath) {
    potentialAction.push({
      "@type": "ContactAction",
      target: ensureAbsoluteUrl(siteUrl, opts.contactPath),
    });
  }
  if (opts.searchPathTemplate && /\{search_term_string\}/.test(opts.searchPathTemplate)) {
    potentialAction.push({
      "@type": "SearchAction",
      target: `${siteUrl}${opts.searchPathTemplate.startsWith("/") ? "" : "/"}${opts.searchPathTemplate}`,
      "query-input": "required name=search_term_string",
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Cleaners Ready 2 GO",
    inLanguage: "en-US",
    ...(potentialAction.length ? { potentialAction } : {}),
  } as const;
}

export function makeWebPage({
  siteUrl,
  path,
  title,
  description,
  images,
  headline,
}: {
  siteUrl: string;
  path: string;
  title: string;
  description: string;
} & MakeWebPageOptions) {
  const url = `${siteUrl}${path}`;
  const absImages = ensureAbsoluteList(siteUrl, images);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    headline: headline ?? title,
    description,
    inLanguage: "en-US",
    ...(absImages?.length
      ? { image: absImages, primaryImageOfPage: { "@type": "ImageObject", url: absImages[0] } }
      : {}),
    isPartOf: {
      "@type": "WebSite",
      url: siteUrl,
      name: "Cleaners Ready 2 GO",
    },
  } as const;
}

export function makeLocalBusiness(siteUrl: string, opts: MakeLocalBusinessOptions = {}) {
  const logoAbs = ensureAbsoluteUrl(siteUrl, opts.logoUrl ?? (brand as any).logo);
  const sameAs = opts.sameAs ?? (brand as any).sameAs ?? undefined;

  const areas =
    opts.adminAreas ?? (Array.isArray(brand?.serviceAreas?.cities) ? brand.serviceAreas.cities : undefined);

  const openingDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ...(opts.openOnSunday ? ["Sunday"] : []),
  ];

  const geo =
    opts.geo ??
    ((brand as any).geo &&
    typeof (brand as any).geo.lat === "number" &&
    typeof (brand as any).geo.lng === "number"
      ? ((brand as any).geo as GeoValue)
      : undefined);

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": `${siteUrl}#business`,
    name: "Cleaners Ready 2 GO",
    url: siteUrl,
    ...(opts.description ? { description: opts.description } : {}),
    telephone: brand.phone,
    email: brand.email,
    ...(logoAbs ? { logo: logoAbs, image: [logoAbs] } : {}),
    ...(sameAs?.length ? { sameAs } : {}),
    ...(opts.founder ? { founder: opts.founder } : {}),
    ...(opts.priceRange ? { priceRange: opts.priceRange } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address.street,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      postalCode: brand.address.zip,
      addressCountry: "US",
    },
    ...(areas?.length
      ? {
          areaServed: areas.map((name) => ({
            "@type": "AdministrativeArea",
            name,
            address: {
              "@type": "PostalAddress",
              addressRegion: brand.address.state,
              addressCountry: "US",
            },
          })),
        }
      : {}),
    ...(geo
      ? {
          geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
          hasMap: `https://www.google.com/maps/?q=${geo.lat},${geo.lng}`,
        }
      : {}),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingDays,
        opens: "08:00",
        closes: "18:00",
      },
    ],
  } as const;
}

export function makeBreadcrumb(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function makeFAQPage(faqs: { q: string; a: string }[], pageUrl?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const;
}

export function makeService({
  siteUrl,
  path,
  name,
  description,
  areaServed,
}: {
  siteUrl: string;
  path: string;
  name: string;
  description: string;
} & MakeServiceOptions) {
  const url = `${siteUrl}${path}`;
  const areas = Array.isArray(areaServed)
    ? areaServed
    : areaServed
    ? [areaServed]
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    provider: { "@id": `${siteUrl}#business` },
    ...(areas
      ? {
          areaServed: areas.map((n) => ({
            "@type": "AdministrativeArea",
            name: n,
          })),
        }
      : {}),
    url,
  } as const;
}
