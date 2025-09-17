// client/src/config/serviceAreas.ts

export const PHONE_NUMBER = "+15095551234";

export const serviceAreas = {
  SPOKANE: {
    id: 'spokane',
    title: 'Spokane',
    lat: 47.6588,
    lng: -117.4260,
    placeId: 'ChIJ7S8-3j4CVFMR3sK2gOR2I-8',
    addressLocality: 'Spokane',
    addressRegion: 'WA',
    url: '/spokane'
  },
  SPOKANE_VALLEY: {
    id: 'spokane-valley',
    title: 'Spokane Valley',
    lat: 47.6732,
    lng: -117.2394,
    placeId: 'ChIJZ7zdw3gEVFMRp_p0z4jGRyM',
    addressLocality: 'Spokane Valley',
    addressRegion: 'WA',
    url: '/spokane-valley'
  },
  LIBERTY_LAKE: {
    id: 'liberty-lake',
    title: 'Liberty Lake',
    lat: 47.6626,
    lng: -117.0860,
    placeId: 'ChIJVajdFPcEVFMRs_jS1Y2p3p4',
    addressLocality: 'Liberty Lake',
    addressRegion: 'WA',
    url: '/liberty-lake'
  }
};

export const services = [
  { name: 'Deep Cleaning', url: '/deep-cleaning' },
  { name: 'Move Out Cleaning', url: '/move-out-cleaning' },
  { name: 'Apartment Cleaning', url: '/apartment-cleaning' },
  { name: 'Residential Cleaning', url: '/residential-cleaning' }
];
