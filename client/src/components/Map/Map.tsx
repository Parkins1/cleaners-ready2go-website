import React, { Suspense } from 'react';

export interface MapProps {
  locationName: string; // e.g., "Spokane, WA"
  zoom?: number;
  className?: string;
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
