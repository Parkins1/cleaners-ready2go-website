import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type SourceDef = {
  type: string; // e.g., 'image/avif', 'image/webp'
  srcSet: string; // e.g., `${img480} 480w, ${img768} 768w, ...`
  sizes?: string;
};

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  /**
   * className applies to the wrapper (preserved for backward compatibility)
   */
  className?: string;
  /**
   * imgClassName applies to the underlying <img> element
   */
  imgClassName?: string;
  lazy?: boolean;
  /**
   * When true, the image will not lazy-load and will use loading="eager",
   * decoding="sync" (unless overridden), and fetchpriority="high" (unless overridden).
   */
  priority?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  /**
   * Standard HTML fetchpriority attribute for images.
   */
  fetchpriority?: 'high' | 'low' | 'auto';
  /**
   * Intrinsic dimensions to reserve layout space and prevent CLS.
   */
  width?: number;
  height?: number;
  /**
   * Optional srcset for the <img> element (e.g., webp-only pipeline).
   */
  imgSrcSet?: string;
  /**
   * Optional <picture> sources for AVIF/WebP.
   */
  sources?: SourceDef[];
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc,
  className,
  imgClassName,
  lazy = true,
  priority = false,
  sizes = '100vw',
  placeholder = 'empty',
  width,
  height,
  imgSrcSet,
  sources,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const currentSrc = hasError && fallbackSrc ? fallbackSrc : src;

  // Priority images should not lazy-load and should decode synchronously by default
  const loadingAttr: 'eager' | 'lazy' = priority || !lazy ? 'eager' : 'lazy';
  const decodingAttr: 'sync' | 'async' | 'auto' =
    (props.decoding as any) ?? (priority ? 'sync' : 'async');
  const fetchPriorityAttr: 'high' | 'low' | 'auto' | undefined =
    (props as any).fetchpriority ?? (priority ? 'high' : undefined);

  const ImgEl = (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      loading={loadingAttr}
      decoding={decodingAttr}
      {...(fetchPriorityAttr ? { fetchpriority: fetchPriorityAttr } : {})}
      sizes={sizes}
      width={width}
      height={height}
      srcSet={imgSrcSet}
      onLoad={handleLoad}
      onError={handleError}
      className={cn(
        'transition-opacity duration-300',
        isLoading ? 'opacity-0' : 'opacity-100',
        className,
        imgClassName
      )}
      {...props}
    />
  );

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
      {placeholder === 'blur' && isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {isInView && (
        sources && sources.length > 0 ? (
          <picture>
            {sources.map((s, i) => (
              <source key={i} type={s.type} srcSet={s.srcSet} sizes={s.sizes ?? sizes} />
            ))}
            {ImgEl}
          </picture>
        ) : (
          ImgEl
        )
      )}

      {isLoading && placeholder === 'empty' && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal"></div>
        </div>
      )}
    </div>
  );
}

export default OptimizedImage;
