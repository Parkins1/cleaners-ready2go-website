import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { MapProps } from './Map';
import mapStyle from '@/config/map-style.json';

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

export default function MapInner({ locationName, zoom = 12, highlightLocalities, highlightPlaceIds: propHighlightPlaceIds, highlightOptions, minZoomAfterFit = 11 }: MapProps) {
  // Try multiple ways to obtain an API key; if all fail, we gracefully fall back to a no‑key iframe embed
  const envKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined;
  const metaKey = typeof document !== 'undefined'
    ? (document.querySelector('meta[name="maps-api-key"]') as HTMLMetaElement | null)?.content || undefined
    : undefined;
  const winKey = typeof window !== 'undefined' ? (window as any).__MAPS_API_KEY__ : undefined;
  const apiKey = envKey || metaKey || winKey;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_ID as string | undefined;

  const [center, setCenter] = useState(() => guessCenter(locationName));
  const [placeId, setPlaceId] = useState<string | null>(null);
  const [highlightPlaceIds, setHighlightPlaceIds] = useState<Set<string>>(new Set());
  const [primaryBounds, setPrimaryBounds] = useState<google.maps.LatLngBounds | null>(null);
  const [highlightBounds, setHighlightBounds] = useState<google.maps.LatLngBounds | null>(null);

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
          // Prefer a "locality" level result if present (city-level boundary), otherwise use the first result
          const best = results.find(r => r.types.includes('locality')) || results[0];
          const loc = best.geometry.location;
          setCenter({ lat: loc.lat(), lng: loc.lng() });
          if (best.place_id) setPlaceId(best.place_id);
          if (best.geometry?.viewport) setPrimaryBounds(best.geometry.viewport);
        }
        // else keep guessed center
      });
    } catch {
      // ignore and keep guessed center
    }
  }, [isLoaded, locationName]);

  // Resolve highlight inputs (prefer explicit placeIds) and compute union bounds
  useEffect(() => {
    if (!isLoaded) return;
    // If explicit placeIds provided, use them directly
    if (propHighlightPlaceIds && propHighlightPlaceIds.length > 0) {
      const geocoder = new window.google.maps.Geocoder();
      const next = new Set<string>(propHighlightPlaceIds);
      const bounds = new window.google.maps.LatLngBounds();
      let cancelled = false;
      const tasks = propHighlightPlaceIds.map((pid) => new Promise<void>((resolve) => {
        geocoder.geocode({ placeId: pid }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const r = results[0];
            if (r.geometry?.viewport) {
              bounds.extend(r.geometry.viewport.getNorthEast());
              bounds.extend(r.geometry.viewport.getSouthWest());
            } else if (r.geometry?.location) {
              bounds.extend(r.geometry.location);
            }
          }
          resolve();
        });
      }));
      Promise.all(tasks).then(() => {
        if (cancelled) return;
        setHighlightPlaceIds(next);
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        if (ne && sw && (ne.lat() !== sw.lat() || ne.lng() !== sw.lng())) {
          setHighlightBounds(bounds);
        }
      });
      return () => { cancelled = true; };
    }
    // Else: fallback to names if provided; otherwise just main place/bounds
    if (!highlightLocalities || highlightLocalities.length === 0) {
      setHighlightPlaceIds(new Set(placeId ? [placeId] : []));
      setHighlightBounds(primaryBounds ?? null);
      return;
    }
    let cancelled = false;
    const geocoder = new window.google.maps.Geocoder();
    const next = new Set<string>();
    const bounds = new window.google.maps.LatLngBounds();
    const tasks = highlightLocalities.map((name) => new Promise<void>((resolve) => {
      geocoder.geocode({ address: name }, (results, status) => {
        if (status === 'OK' && results && results.length) {
          const best = results.find(r => r.types.includes('locality')) || results[0];
          if (best.place_id) next.add(best.place_id);
          if (best.geometry?.viewport) {
            bounds.extend(best.geometry.viewport.getNorthEast());
            bounds.extend(best.geometry.viewport.getSouthWest());
          } else if (best.geometry?.location) {
            bounds.extend(best.geometry.location);
          }
        }
        resolve();
      });
    }));
    Promise.all(tasks).then(() => {
      if (cancelled) return;
      setHighlightPlaceIds(next);
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();
      if (ne && sw && (ne.lat() !== sw.lat() || ne.lng() !== sw.lng())) {
        setHighlightBounds(bounds);
      }
    });
    return () => { cancelled = true; };
  }, [isLoaded, highlightLocalities, propHighlightPlaceIds, placeId, primaryBounds]);

  // Highlight the city boundaries using FeatureLayer for the computed placeIds
  useEffect(() => {
    if (!isLoaded || !mapRef.current || highlightPlaceIds.size === 0) return;
    try {
      const mapAny = mapRef.current as any;
      const layer = mapAny.getFeatureLayer ? mapAny.getFeatureLayer('LOCALITY') : null;
      if (!layer) return;

      const brandGold = '#CFAE51';
      const strokeColor = highlightOptions?.strokeColor ?? brandGold;
      const strokeWeight = highlightOptions?.strokeWeight ?? 2;
      const strokeOpacity = highlightOptions?.strokeOpacity ?? 1;
      const fillColor = highlightOptions?.fillColor ?? brandGold;
      const fillOpacity = highlightOptions?.fillOpacity ?? 0.08;

      layer.style = (options: any) => {
        if (options?.feature && highlightPlaceIds.has(options.feature.placeId)) {
          return {
            strokeColor,
            strokeOpacity,
            strokeWeight,
            fillColor,
            fillOpacity,
            visible: true,
            zIndex: 1000,
          };
        }
        return { visible: true };
      };
    } catch {
      // ignore if FeatureLayer API unavailable
    }
  }, [isLoaded, highlightPlaceIds, highlightOptions]);

  // Fit the map to include all highlighted localities, then clamp to a min zoom so outlines are visible
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !highlightBounds) return;
    try {
      const map = mapRef.current;
      map.fitBounds(highlightBounds, { top: 48, right: 48, bottom: 48, left: 48 });
      // After camera settles, ensure we don't zoom out too far
      (window.google.maps.event as any).addListenerOnce(map, 'idle', () => {
        const z = map.getZoom?.();
        if (typeof z === 'number' && z < minZoomAfterFit) {
          map.setZoom(minZoomAfterFit);
        }
      });
    } catch {
      // ignore
    }
  }, [isLoaded, highlightBounds, minZoomAfterFit]);

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
            ...(mapId ? { mapId } : {}),
            // Only pass programmatic styles if the config is an array (legacy Styled Maps)
            ...(Array.isArray(mapStyle) ? { styles: mapStyle as any } : {}),
            gestureHandling: 'greedy',
            disableDefaultUI: true,
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => {
            mapRef.current = map;
            // Basic runtime check to help diagnose missing outlines
            const hasLayer = (map as any).getFeatureLayer && (map as any).getFeatureLayer('LOCALITY');
            if (!hasLayer) {
              console.warn('[Map] LOCALITY FeatureLayer not available. Ensure Map ID is a vector style and Locality boundaries are enabled in Cloud Map Style.');
            }
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
