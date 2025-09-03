/**
 * HOM-001 CLS remediation:
 * - Reserve hero space pre-image using CSS aspect-ratio (mobile ~4/5, md+ 16/9) to prevent layout shifts.
 * - Render OptimizedImage with intrinsic width/height and priority loading to avoid reflow.
 * - Fallback (non-aspect) path retained to avoid regressions for other pages.
 */
import React from 'react';
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface HeroSectionProps {
  image: string;
  imageAlt?: string;
  darkOverlay?: boolean;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  brightness?: number;
  focal?: string;
  className?: string;

  /**
   * Legacy minHeight support (used by some pages). Not used when useAspect = true.
   */
  minHeight?: string;

  /**
   * When true, uses CSS aspect-ratio to reserve space and reduce CLS.
   */
  useAspect?: boolean;

  /**
   * Intrinsic hero image dimensions (required to fully stabilize layout).
   */
  imageWidth?: number;
  imageHeight?: number;
  /**
   * Optional responsive image sources forwarded to OptimizedImage
   */
  imgSrcSet?: string;
  sources?: { type: string; srcSet: string; sizes?: string }[];
}

export default function HeroSection({
  image,
  imageAlt,
  darkOverlay = true,
  title,
  subtitle,
  actions,
  brightness = 0.85,
  focal = 'center',
  className,
  minHeight = '70vh',
  useAspect = false,
  imageWidth,
  imageHeight,
  imgSrcSet,
  sources,
}: HeroSectionProps) {
  const overlayClass = darkOverlay
    ? 'bg-gradient-to-t from-black/55 via-black/35 to-transparent'
    : 'bg-white/95 backdrop-blur-sm';

  const Content = (
    <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-12 sm:py-16">
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
  );

  if (useAspect) {
    // CSS aspect-ratio variant: reserves vertical space before image loads (mobile 4/5, md+ 16/9)
    return (
      <section className={cn('hero relative overflow-hidden', className)} aria-label="Hero Section">
        <div className="hero-media relative overflow-hidden w-full aspect-[4/5] md:aspect-video">
          <OptimizedImage
            src={image}
            alt={imageAlt || ""}
            // Wrapper fills the box; image absolutely covers it
            className="h-full w-full"
            imgClassName="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: focal as any,
              filter: `brightness(${brightness})`,
            }}
            priority={true}
            lazy={false}
            sizes="100vw"
            placeholder="blur"
            width={imageWidth}
            height={imageHeight}
            decoding="sync"
            fetchpriority="high"
            imgSrcSet={imgSrcSet}
            sources={sources}
          />
          <div className={cn('absolute inset-0', overlayClass)} />
          <div className="absolute inset-0 flex items-center justify-center">
            {Content}
          </div>
        </div>
      </section>
    );
  }

  // Fallback: legacy minHeight implementation (kept for other pages)
  return (
    <section
      className={cn('hero relative flex items-center justify-center overflow-hidden', className)}
      style={{ minHeight }}
      aria-label="Hero Section"
    >
      <OptimizedImage
        src={image}
        alt={imageAlt || ""}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: focal as any,
          filter: `brightness(${brightness})`,
        }}
        priority={true}
        lazy={false}
        sizes="100vw"
        placeholder="blur"
        width={imageWidth}
        height={imageHeight}
        decoding="sync"
        fetchpriority="high"
        imgSrcSet={imgSrcSet}
        sources={sources}
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
