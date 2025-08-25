// llm:hero-section-migrated
import React from 'react';
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface HeroSectionProps {
  image: string;
  darkOverlay?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  brightness?: number;
  focal?: string;
  className?: string;
  minHeight?: string;
}

export default function HeroSection({
  image,
  darkOverlay = false,
  title,
  subtitle,
  actions,
  brightness = 0.85,
  focal = 'center',
  className,
  minHeight = '70vh',
}: HeroSectionProps) {
  const overlayClass = darkOverlay
    ? 'bg-gradient-to-t from-black/55 via-black/35 to-transparent'
    : 'bg-white/95 backdrop-blur-sm';

  return (
    <section
      className={cn('hero relative flex items-center justify-center overflow-hidden', className)}
      style={{ minHeight }}
      aria-label="Hero Section"
    >
      <OptimizedImage
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: focal,
          filter: `brightness(${brightness})`,
        }}
        priority={true}
        lazy={false}
        sizes="100vw"
        placeholder="blur"
      />
      <div className={cn('absolute inset-0', overlayClass)} />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-20">
        {typeof title === 'string' ? (
          <h1 className="text-4xl lg:text-6xl font-bold text-text mb-4">{title}</h1>
        ) : (
          title
        )}
        {subtitle && (
          <div className="text-lg lg:text-xl text-text mb-8">
            {subtitle}
          </div>
        )}
        {actions && <div className="flex flex-col sm:flex-row gap-4 justify-center">{actions}</div>}
      </div>
    </section>
  );
}
