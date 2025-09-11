import React, { useEffect, useMemo, useState } from 'react';
import type { MapProps } from './Map';

// Importing inside this chunk to allow code‑splitting via React.lazy in Map.tsx
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const DEFAULT_CENTER = { lat: 47.6062, lng: -122.3321 }; // Seattle fallback
const SPOKANE_CENTER = { lat: 47.6588, lng: -117.4260 };

// Simple heuristic to pick a reasonable default if geocoding fails
function guessCenter(name: string) {
  const n = name.toLowerCase();
  if (n.includes('spokane')) return SPOKANE_CENTER;
  if (n.includes('liberty lake')) return { lat: 47.6750, lng: -117.1182 };
  if (n.includes('greenacres')) return { lat: 47.6604, lng: -117.1968 };
  return DEFAULT_CENTER;
}

export default function MapInner({ locationName, zoom = 12 }: MapProps) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;

  const [center, setCenter] = useState(() => guessCenter(locationName));

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  });

  // Gold pin as inline SVG (brand gold #CFAE51)
  const goldIconUrl = useMemo(() => {
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path d="M24 2C14.611 2 7 9.611 7 19c0 11.25 15.387 26.049 16.039 26.675a1.5 1.5 0 0 0 2.09 0C25.784 45.05 41 30.25 41 19 41 9.611 33.389 2 24 2z" fill="#CFAE51"/>
        <circle cx="24" cy="19" r="7" fill="#fff"/>
      </g>
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }, []);

  // Geocode the location name once the JS API is loaded
  useEffect(() => {
    if (!isLoaded || !locationName) return;
    try {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: locationName }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const loc = results[0].geometry.location;
          setCenter({ lat: loc.lat(), lng: loc.lng() });
        }
        // else keep guessed center
      });
    } catch {
      // ignore and keep guessed center
    }
  }, [isLoaded, locationName]);

  if (!apiKey) {
    return (
      <div className="w-full h-full rounded-xl bg-yellow-50 text-yellow-800 flex items-center justify-center text-sm">
        Missing VITE_GOOGLE_MAPS_API_KEY
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoom}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerF
            position={center}
            icon={{ url: goldIconUrl }}
          />
        </GoogleMap>
      ) : (
        <div className="w-full h-full rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />
      )}
    </div>
  );
}

