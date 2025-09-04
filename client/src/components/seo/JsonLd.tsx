import React from "react";

type JsonLdProps = {
  data: unknown | unknown[];
};

/**
 * Renders one or multiple JSON-LD script tags.
 * Keeps usage consistent and avoids duplicating Helmet wiring.
 */
export function JsonLd({ data }: JsonLdProps) {
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </>
    );
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;

