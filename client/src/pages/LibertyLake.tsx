import LocationPageTemplate from './LocationPageTemplate';

export default function LibertyLake() {
  const pageDetails = {
    locationName: 'Liberty Lake',
    heroImage: 'https://via.placeholder.com/1920x1080',
    introText:
      'From the beautiful homes to the thriving businesses, we are proud to serve the Liberty Lake community. Our team is dedicated to providing the highest quality cleaning services.',
    services: [
      {
        title: 'Residential Cleaning',
        description: 'Our residential cleaning services are designed to give you a clean and comfortable home.',
      },
      {
        title: 'Office Cleaning',
        description: 'We provide professional and reliable office cleaning services to keep your workspace looking its best.',
      },
      {
        title: 'Custom Cleaning',
        description: 'Have specific cleaning needs? We can create a custom cleaning plan just for you.',
      },
    ],
    testimonial: {
      quote: 'The team at Cleaners Ready 2Go is fantastic. They are professional, friendly, and always do a great job.',
      name: 'Mike P.',
    },
  };

  return <LocationPageTemplate {...pageDetails} />;
}
