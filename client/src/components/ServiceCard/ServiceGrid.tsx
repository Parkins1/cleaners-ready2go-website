import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceCatalog, ServiceCatalogId } from "./catalog";

interface ServiceGridProps {
  ids: ServiceCatalogId[];
  className?: string;
}

export default function ServiceGrid({ ids, className }: ServiceGridProps) {
  const items = ids
    .map((id) => serviceCatalog[id])
    .filter(Boolean);

  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-2 gap-8 ${className || ""}`}>
      {items.map((item) => (
        <ServiceCard key={item.id} {...item} />
      ))}
    </div>
  );
}

