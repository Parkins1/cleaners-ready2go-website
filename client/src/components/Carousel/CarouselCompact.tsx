import React, { useCallback, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export interface CarouselCompactProps {
  items: React.ReactNode[];
  className?: string;
  contentClassName?: string;
  ariaLabel?: string;
}

/**
 * CarouselCompact
 *
 * A compact, focus-centered carousel variant used across location pages.
 * - Desktop layout favors a larger active slide and smaller side slides.
 * - Typography and paddings align with brand defaults.
 */
export default function CarouselCompact({
  items,
  className,
  contentClassName,
  ariaLabel = 'Services carousel',
}: CarouselCompactProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const isActive = useCallback((index: number) => current === index, [current]);

  return (
    <div className={cn('w-full max-w-6xl mx-auto', className)}>
      {/* Scoped styles to achieve compact/focus effect */}
      <style>{`
        [data-compact-slide][data-active="true"] {
          transform: scale(1.12);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(197, 155, 75, 0.3);
          border: 2px solid rgba(197, 155, 75, 0.4);
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(197, 155, 75, 0.02));
          padding: 2rem 2.5rem;
        }
        [data-compact-slide][data-active="false"] {
          transform: scale(0.85);
          opacity: 0.5;
          z-index: 1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          padding: 1.5rem 2rem;
        }
        @media (min-width: 768px) {
          [data-compact-slide][data-active="true"] { padding: 2.5rem 3rem; }
          [data-compact-slide][data-active="false"] { padding: 2rem 2.5rem; }
        }
        @media (min-width: 1024px) {
          [data-compact-slide][data-active="true"] { flex: 0 0 48%; max-width: 48%; }
          [data-compact-slide][data-active="false"] { flex: 0 0 26%; max-width: 26%; }
        }
      `}</style>
      <Carousel
        opts={{ align: 'center', loop: true }}
        setApi={setApi}
        className="w-full"
        aria-label={ariaLabel}
      >
        <CarouselContent className={cn('-ml-2 md:-ml-4', contentClassName)}>
          {items.map((node, idx) => (
            <CarouselItem
              key={idx}
              className={cn(
                'pl-2 md:pl-4 md:basis-2/3 lg:basis-1/2 xl:basis-1/3 transition-all duration-300',
              )}
              data-compact-slide
              data-active={isActive(idx)}
            >
              {node}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

