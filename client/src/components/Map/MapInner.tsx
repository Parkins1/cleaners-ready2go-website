// src/components/map/MapInner.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { MapProps as BaseMapProps, MarkerData } from './Map';
import mapStyle from '@/config/map-style.json';
import { GoogleMap, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

// ───────────────────────────────────────────────────────────────────────────────
// Extend MapProps with optional marker rendering helpers.
export interface MapProps extends BaseMapProps {
  markers?: MarkerData[];
  infoWindowTemplate?: (m: MarkerData) => React.ReactNode;
}
// ───────────────────────────────────────────────────────────────────────────────

const DEFAULT_CENTER = { lat: 47.6588, lng: -117.4260 }; // Spokane fallback
const SPOKANE_CENTER = { lat: 47.6588, lng: -117.4260 };

function guessCenter(name: string) {
  const n = name.toLowerCase();
  if (n.includes('spokane valley')) return { lat: 47.6732, lng: -117.2394 };
  if (n.includes('spokane')) return SPOKANE_CENTER;
  if (n.includes('liberty lake')) return { lat: 47.6750, lng: -117.1182 };
  if (n.includes('greenacres')) return { lat: 47.6604, lng: -117.1968 };
  return DEFAULT_CENTER;
}

export default function MapInner({
  locationName = 'Spokane, WA',
  zoom = 12,
  highlightLocalities,
  highlightPlaceIds: propHighlightPlaceIds,
  highlightOptions,
  minZoomAfterFit = 11,
  markers = [],
  infoWindowTemplate,
}: MapProps) {
  // API key resolution (env -> <meta> -> window)
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

  // Advanced markers & active info window state
  const mapRef = useRef<google.maps.Map | null>(null);
  const singleMarkerRef = useRef<any>(null); // your original center pin
  const advMarkerInstancesRef = useRef<Map<string, any>>(new Map());
  const clickListenersRef = useRef<Map<string, google.maps.MapsEventListener>>(new Map());
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);
  const [activeMarkerPos, setActiveMarkerPos] = useState<google.maps.LatLngLiteral | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey || '',
    libraries: ['marker'], // ensure AdvancedMarkerElement library is available
  });

  // Brand gold pin (default)
  const pinSvg = useMemo(() => {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" fill-rule="evenodd">
        <path d="M24 2C14.611 2 7 9.611 7 19c0 11.25 15.387 26.049 16.039 26.675a1.5 1.5 0 0 0 2.09 0C25.784 45.05 41 30.25 41 19 41 9.611 33.389 2 24 2z" fill="#CFAE51"/>
        <circle cx="24" cy="19" r="7" fill="#fff"/>
      </g>
    </svg>`;
  }, []);

  // Geocode the location name
  useEffect(() => {
    if (!isLoaded || !locationName) return;
    try {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: locationName }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const best = results.find(r => r.types.includes('locality')) || results[0];
          const loc = best.geometry.location;
          setCenter({ lat: loc.lat(), lng: loc.lng() });
          if (best.place_id) setPlaceId(best.place_id);
          if (best.geometry?.viewport) setPrimaryBounds(best.geometry.viewport);
        }
      });
    } catch {
      // fall back to guessCenter
    }
  }, [isLoaded, locationName]);

  // Resolve highlight inputs and union bounds
  useEffect(() => {
    if (!isLoaded) return;

    // Prefer explicit placeIds
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
        if (typeof bounds.isEmpty === 'function' ? !bounds.isEmpty() : true) {
          const ne = bounds.getNorthEast();
          const sw = bounds.getSouthWest();
          if (ne && sw && (ne.lat() !== sw.lat() || ne.lng() !== sw.lng())) {
            setHighlightBounds(bounds);
            return;
          }
        }
        setHighlightBounds(null);
      });
      return () => { cancelled = true; };
    }

    // Else geocode names
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
      if (typeof bounds.isEmpty === 'function' ? !bounds.isEmpty() : true) {
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        if (ne && sw && (ne.lat() !== sw.lat() || ne.lng() !== sw.lng())) {
          setHighlightBounds(bounds);
          return;
        }
      }
      setHighlightBounds(null);
    });
    return () => { cancelled = true; };
  }, [isLoaded, highlightLocalities, propHighlightPlaceIds, placeId, primaryBounds]);

  // Style city/locality boundaries
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
      // ignore
    }
  }, [isLoaded, highlightPlaceIds, highlightOptions]);

  // Fit to highlighted localities
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !highlightBounds) return;
    try {
      const map = mapRef.current;
      map.fitBounds(highlightBounds, { top: 48, right: 48, bottom: 48, left: 48 });
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

  // Single center AdvancedMarker (your original)
  useEffect(() => {
    let cancelled = false;
    async function ensureSingleMarker() {
      if (!isLoaded || !mapRef.current) return;
      const lib = await (window.google.maps as any).importLibrary?.('marker');
      const AdvancedMarkerElement = lib?.AdvancedMarkerElement || (window.google?.maps as any)?.marker?.AdvancedMarkerElement;
      if (!AdvancedMarkerElement || cancelled) return;

      if (!singleMarkerRef.current) {
        const el = document.createElement('div');
        el.innerHTML = pinSvg;
        el.style.transform = 'translate(-50%, -100%)';
        singleMarkerRef.current = new AdvancedMarkerElement({
          map: mapRef.current,
          position: center,
          content: el,
        });
      } else {
        singleMarkerRef.current.position = center;
        singleMarkerRef.current.map = mapRef.current;
      }
    }
    ensureSingleMarker();
    return () => { cancelled = true; };
  }, [isLoaded, center, pinSvg]);

  // MULTI-MARKERS (Spokane, Spokane Valley, Liberty Lake, etc.)
  useEffect(() => {
    let cancelled = false;
    async function syncAdvancedMarkers() {
      if (!isLoaded || !mapRef.current) return;
      const lib = await (window.google.maps as any).importLibrary?.('marker');
      const AdvancedMarkerElement = lib?.AdvancedMarkerElement || (window.google?.maps as any)?.marker?.AdvancedMarkerElement;
      if (!AdvancedMarkerElement || cancelled) return;

      const current = advMarkerInstancesRef.current;
      const listeners = clickListenersRef.current;

      // Add / update markers
      for (const m of markers) {
        const id = m.id;
        const exists = current.get(id);
        const contentDiv = document.createElement('div');
        contentDiv.innerHTML = (m.iconSvg || pinSvg);
        contentDiv.style.transform = 'translate(-50%, -100%)';

        if (!exists) {
          const inst = new AdvancedMarkerElement({
            map: mapRef.current,
            position: { lat: m.lat, lng: m.lng },
            content: contentDiv,
            title: m.title,
          });
          current.set(id, inst);

          // click listener
          const click = inst.addListener('click', () => {
            setActiveMarkerId(id);
            setActiveMarkerPos({ lat: m.lat, lng: m.lng });
          });
          listeners.set(id, click);
        } else {
          exists.position = { lat: m.lat, lng: m.lng };
          exists.content = contentDiv;
          exists.map = mapRef.current;
        }
      }

      // Cleanup removed markers
      for (const [id, inst] of current.entries()) {
        if (!markers.find(m => m.id === id)) {
          inst.map = null;
          current.delete(id);
          const l = listeners.get(id);
          if (l) { l.remove(); listeners.delete(id); }
        }
      }
    }

    syncAdvancedMarkers();
    return () => { cancelled = true; };
  }, [isLoaded, markers, pinSvg]);

  // Fallback: no key or load error → iframe embed
  if (!apiKey || loadError) {
    const z = Math.max(1, Math.min(20, zoom));
    const coords = guessCenter(locationName);
    const embedUrl = `https://www.google.com/maps/@${coords.lat},${coords.lng},${z}z?output=embed`;
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

  // Default InfoWindow content renderer (keeps it clean and crawl-safe — we’ll add JSON-LD separately)
  const renderInfo = (m: MarkerData) => {
    if (infoWindowTemplate) return infoWindowTemplate(m);
    const city = m.city || m.title;
    const locality = [m.addressLocality, m.addressRegion].filter(Boolean).join(', ');
    return (
      <div style={{ maxWidth: 240, lineHeight: 1.35 }}>
        <h3 style={{ margin: '0 0 6px', fontSize: 16, fontWeight: 700, color: '#101820' }}>
          House Cleaning in {city}
        </h3>
        {locality && <div style={{ fontSize: 12, color: '#747879', marginBottom: 8 }}>{locality}</div>}
        {m.services?.length ? (
          <ul style={{ margin: 0, padding: '0 0 0 16px', fontSize: 13 }}>
            {m.services.slice(0, 4).map(s => <li key={s}>{s}</li>)}
          </ul>
        ) : null}
        <div style={{ marginTop: 8 }}>
          {m.url && (
            <a href={m.url} style={{ color: '#CFAE51', textDecoration: 'none', fontWeight: 600 }}>
              View City Page →
            </a>
          )}
        </div>
        {m.phone && (
          <div style={{ marginTop: 6, fontSize: 13 }}>
            Call: <a href={`tel:${m.phone}`} style={{ color: '#101820', textDecoration: 'none' }}>{m.phone}</a>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={center}
          zoom={zoom}
          options={{
            ...(mapId ? { mapId } : {}),
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
            const hasLayer =
              (map as any).getFeatureLayer && (map as any).getFeatureLayer('LOCALITY');
            if (!hasLayer) {
              console.warn(
                '[Map] LOCALITY FeatureLayer not available. Ensure Map ID is a vector style and Locality boundaries are enabled in your Cloud Map Style.'
              );
            }
          }}
          onUnmount={() => {
            // cleanup all markers
            for (const [, inst] of advMarkerInstancesRef.current.entries()) inst.map = null;
            advMarkerInstancesRef.current.clear();
            for (const [, l] of clickListenersRef.current.entries()) l.remove();
            clickListenersRef.current.clear();

            mapRef.current = null;
            if (singleMarkerRef.current) {
              singleMarkerRef.current.map = null;
              singleMarkerRef.current = null;
            }
          }}
          onClick={() => setActiveMarkerId(null)}
        >
          {activeMarkerId && activeMarkerPos && (
            <InfoWindow
              position={activeMarkerPos}
              onCloseClick={() => setActiveMarkerId(null)}
              options={{ disableAutoPan: false }}
            >
              <div>
                {renderInfo(markers.find(m => m.id === activeMarkerId)!)}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <div className="w-full h-full rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />
      )}
    </div>
 );
}
