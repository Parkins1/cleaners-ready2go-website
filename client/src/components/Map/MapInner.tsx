import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { MapProps } from './Map';

// Importing inside this chunk to allow code‑splitting via React.lazy in Map.tsx
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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
  // Try multiple ways to obtain an API key; if all fail, we gracefully fall back to a no‑key iframe embed
  const envKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  const metaKey = typeof document !== 'undefined'
    ? (document.querySelector('meta[name="maps-api-key"]') as HTMLMetaElement | null)?.content || undefined
    : undefined;
  const winKey = typeof window !== 'undefined' ? (window as any).__MAPS_API_KEY__ : undefined;
  const apiKey = envKey || metaKey || winKey;

  const [center, setCenter] = useState(() => guessCenter(locationName));

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
  });

  // Gold pin SVG markup for AdvancedMarkerElement content (brand gold #CFAE51)
  const pinSvg = useMemo(() => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path d="M24 2C14.611 2 7 9.611 7 19c0 11.25 15.387 26.049 16.039 26.675a1.5 1.5 0 0 0 2.09 0C25.784 45.05 41 30.25 41 19 41 9.611 33.389 2 24 2z" fill="#CFAE51"/>
        <circle cx="24" cy="19" r="7" fill="#fff"/>
      </g>
    </svg>`;
  }, []);

  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<any>(null);

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

  // Create or update AdvancedMarkerElement when map and center are ready
  useEffect(() => {
    let cancelled = false;
    async function ensureMarker() {
      if (!isLoaded || !mapRef.current) return;
      const lib = await (window.google.maps as any).importLibrary?.('marker');
      const AdvancedMarkerElement = lib?.AdvancedMarkerElement || (window.google?.maps as any)?.marker?.AdvancedMarkerElement;
      if (!AdvancedMarkerElement || cancelled) return;

      if (!markerRef.current) {
        const el = document.createElement('div');
        el.innerHTML = pinSvg;
        el.style.transform = 'translate(-50%, -100%)';
        markerRef.current = new AdvancedMarkerElement({
          map: mapRef.current,
          position: center,
          content: el,
        });
      } else {
        markerRef.current.position = center;
        markerRef.current.map = mapRef.current;
      }
    }
    ensureMarker();
    return () => {
      cancelled = true;
    };
  }, [isLoaded, center]);

  // If no API key is available OR loading the script failed (e.g., invalid/blocked key),
  // fall back to a generic Google Maps embed that does not require a key.
  if (!apiKey || loadError) {
    const q = encodeURIComponent(locationName);
    const z = Math.max(1, Math.min(20, zoom));
    const embedUrl = `https://www.google.com/maps?q=${q}&z=${z}&output=embed`;
    return (
      <div className="w-full h-full rounded-xl overflow-hidden">
        <iframe
          title={`Map of ${locationName}`}
          width="100%"
          height="100%"
          frameBorder={0}
          style={{ border: 0 }}
          src={embedUrl}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
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
          onLoad={(map) => {
            mapRef.current = map;
          }}
          onUnmount={() => {
            mapRef.current = null;
            if (markerRef.current) {
              markerRef.current.map = null;
              markerRef.current = null;
            }
          }}
        >
          {/* AdvancedMarkerElement managed imperatively */}
        </GoogleMap>
      ) : (
        <div className="w-full h-full rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />
      )}
    </div>
  );
}
