
import React from 'react';

interface MapProps {
  locationName: string;
}

const Map: React.FC<MapProps> = ({ locationName }) => {
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY'; // TODO: Replace with your API key
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodeURIComponent(locationName)}`;

  return (
    <div className="w-full h-96">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={embedUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
