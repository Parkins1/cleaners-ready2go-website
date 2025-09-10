import React from "react";
import { Helmet } from "react-helmet-async";

type JsonLdProps = {
  data: unknown | unknown[];
};

/**
 * Renders one or multiple JSON-LD script tags.
 * Keeps usage consistent and avoids duplicating Helmet wiring.
 */
export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {items.map((item, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Helmet>
  );
}

export default JsonLd;
