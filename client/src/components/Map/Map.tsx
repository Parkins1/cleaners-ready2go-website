import React, { Suspense } from 'react';

export interface MapProps {
  locationName: string; // e.g., "Spokane, WA"
  zoom?: number;
  className?: string;
  highlightLocalities?: string[]; // names to highlight boundaries for (e.g., ["Spokane, WA", "Spokane Valley, WA"]) 
  highlightPlaceIds?: string[]; // prefer explicit Google place_ids for precise boundary styling
  highlightOptions?: {
    strokeColor?: string;
    strokeWeight?: number;
    strokeOpacity?: number;
    fillColor?: string;
    fillOpacity?: number;
  };
  minZoomAfterFit?: number; // clamp zoom after fitBounds so boundaries are visible
}

// Lazy‑load the heavy Google Maps code to keep initial bundle lean
const MapInner = React.lazy(() => import('./MapInner'));

export default function Map(props: MapProps) {
  const { className } = props;
  return (
    <div className={className ?? 'w-full h-96'}>
      <Suspense
        fallback={
          <div className="w-full h-full rounded-xl bg-gradient-to-b from-gray-100 to-gray-50 animate-pulse" />
        }
      >
        <MapInner {...props} />
      </Suspense>
    </div>
  );
}
