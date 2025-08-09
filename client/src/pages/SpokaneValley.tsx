import LocationPageTemplate from './LocationPageTemplate';

export default function SpokaneValley() {
  const pageDetails = {
    locationName: 'Spokane Valley',
    heroImage: 'https://via.placeholder.com/1920x1080',
    introText:
      'Serving the entire Spokane Valley area, we provide top-notch cleaning services for homes and businesses. We are committed to delivering exceptional results and customer satisfaction.',
    services: [
      {
        title: 'Residential Cleaning',
        description: 'Keep your home fresh and clean with our reliable and thorough residential cleaning services.',
      },
      {
        title: 'Deep Cleaning',
        description: 'A comprehensive cleaning service that will leave your home sparkling from top to bottom.',
      },
      {
        title: 'Apartment Cleaning',
        description: 'Specialized cleaning services for apartments and other multi-family housing units.',
      },
    ],
    testimonial: {
      quote: 'I was so impressed with the move-out cleaning I received. The apartment was spotless! Highly recommend.',
      name: 'Jane S.',
    },
  };

  return <LocationPageTemplate {...pageDetails} />;
}
