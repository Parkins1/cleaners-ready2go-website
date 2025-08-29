import React, { useId } from "react";
import { cn } from "@/lib/utils";

export interface TrustSignalItem {
  highlight?: string;
  text: string;
}

interface TrustSignalsSectionProps {
  title: React.ReactNode;
  items: TrustSignalItem[];
  columns?: 1 | 2;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export default function TrustSignalsSection({
  title,
  items,
  columns = 2,
  className,
  containerClassName,
  id,
}: TrustSignalsSectionProps) {
  const autoId = useId();
  const headingId = id ?? `trust-signals-${autoId}`;

  return (
    <section aria-labelledby={headingId} className={cn("py-16 bg-white", className)}>
      <div className={cn("max-w-6xl mx-auto px-6", containerClassName)}>
        <h2 id={headingId} className="text-3xl lg:text-4xl font-bold text-text mb-6 text-center">
          {title}
        </h2>
        <ul
          role="list"
          className={cn("grid gap-4 text-text", columns === 2 ? "md:grid-cols-2" : undefined)}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="border-l-4 border-brand-gold bg-brand-gold/5 rounded-sm pl-4 py-2"
            >
              {item.highlight ? (
                <>
                  <strong className="text-brand-gold">{item.highlight}</strong>
                  {" "}– {item.text}
                </>
              ) : (
                item.text
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

