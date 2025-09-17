// client/src/utils/mapDataGenerator.ts
import { serviceAreas, services, PHONE_NUMBER } from '../config/serviceAreas';
import { MarkerData } from '../types/map';
import { LocationInfoTemplate } from '@/components/Map/templates/LocationInfoTemplate';
import { ServiceInfoTemplate } from '@/components/Map/templates/ServiceInfoTemplate';

export const generateLocationPageData = (cityId: keyof typeof serviceAreas) => {
  const location = serviceAreas[cityId];
  const marker: MarkerData = {
    ...location,
    city: location.title,
    phone: PHONE_NUMBER,
    serviceLinks: services.map(s => ({ serviceName: s.name, url: s.url }))
  };

  return {
    locationName: `${location.title}, ${location.addressRegion}`,
    markers: [marker],
    highlightPlaceIds: [location.placeId],
    infoWindowTemplate: LocationInfoTemplate
  };
};

export const generateServicePageData = (currentService: { name: string, url: string }) => {
  const mainCities = [serviceAreas.SPOKANE, serviceAreas.SPOKANE_VALLEY, serviceAreas.LIBERTY_LAKE];

  const markers: MarkerData[] = mainCities.map(city => ({
    ...city,
    city: city.title,
    title: `${city.title} ${currentService.name}`,
    services: [currentService.name],
    bookNowUrl: city.url, // Link to the main location page
    phone: PHONE_NUMBER
  }));

  return {
    locationName: 'Spokane County, WA',
    markers: markers,
    highlightPlaceIds: mainCities.map(city => city.placeId),
    infoWindowTemplate: ServiceInfoTemplate
  };
};
