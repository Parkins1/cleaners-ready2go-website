// client/src/types/map.ts

export interface ServiceLink {
  serviceName: string;
  url: string;
}

export interface MarkerData {
  id: string;
  title: string;
  lat: number;
  lng: number;
  city?: string;
  placeId?: string;
  addressLocality?: string;
  addressRegion?: string;
  phone?: string;
  services?: string[];
  serviceLinks?: ServiceLink[];
  bookNowUrl?: string;
  url?: string;
  iconSvg?: string;
}
