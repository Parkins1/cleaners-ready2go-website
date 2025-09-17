import { MarkerData } from '@/types/map';

export const ServiceInfoTemplate = (marker: MarkerData) => (
  <div style={{ maxWidth: 280, padding: '10px', lineHeight: 1.5, fontFamily: 'sans-serif' }}>
    <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: '#101820' }}>
      {marker.title}
    </h3>
    <p style={{ fontSize: 13, color: '#747879', margin: '0 0 8px' }}>
      {marker.addressLocality}, {marker.addressRegion}
    </p>
    {marker.services?.length ? (
      <ul style={{ margin: '0 0 8px', padding: '0 0 0 16px', fontSize: 13 }}>
        {marker.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    ) : null}
    {marker.bookNowUrl && (
      <a href={marker.bookNowUrl} style={{ display: 'inline-block', color: '#CFAE51', textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>
        Book Now →
      </a>
    )}
    {marker.phone && (
      <p style={{ marginTop: 8, fontSize: 13, margin: 0 }}>
        Call: <a href={`tel:${marker.phone}`} style={{ color: '#101820', textDecoration: 'none' }}>{marker.phone}</a>
      </p>
    )}
  </div>
);
