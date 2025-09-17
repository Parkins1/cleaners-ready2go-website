import { MarkerData } from '@/types/map';

export const LocationInfoTemplate = (marker: MarkerData) => (
  <div style={{ maxWidth: 280, padding: '10px', lineHeight: 1.5, fontFamily: 'sans-serif' }}>
    <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 700, color: '#101820' }}>
      {marker.title}
    </h3>
    <p style={{ fontSize: 13, color: '#747879', margin: '0 0 8px' }}>
      {marker.addressLocality}, {marker.addressRegion}
    </p>
    {marker.serviceLinks?.length ? (
      <ul style={{ margin: '0 0 8px', padding: '0 0 0 16px', fontSize: 13 }}>
        {marker.serviceLinks.map((service) => (
          <li key={service.url}><a href={service.url}>{service.serviceName}</a></li>
        ))}
      </ul>
    ) : null}
    {marker.phone && (
      <p style={{ marginTop: 8, fontSize: 13, margin: 0 }}>
        Call: <a href={`tel:${marker.phone}`} style={{ color: '#101820', textDecoration: 'none' }}>{marker.phone}</a>
      </p>
    )}
  </div>
);
