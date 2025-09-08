import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  lazy?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  width?: number;
  height?: number;
  decoding?: 'sync' | 'async' | 'auto';
  fetchpriority?: 'high' | 'low' | 'auto';
  imgSrcSet?: string;
  sources?: { type: string; srcSet: string; sizes?: string }[];
}

export function OptimizedImage({
  src,
  alt,
  className,
  imgClassName,
  style,
  priority = false,
  lazy = true,
  sizes = '100vw',
  placeholder = 'blur',
  width,
  height,
  decoding = 'async',
  fetchpriority = 'auto',
  imgSrcSet,
  sources,
}: OptimizedImageProps) {
  const [isVisible, setIsVisible] = useState(!lazy);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [lazy, isVisible]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  if (!isVisible && lazy) {
    return (
      <div 
        ref={containerRef}
        className={cn('relative overflow-hidden', className)}
        style={{ ...style, minHeight: height || '200px' }}
      >
        {placeholder === 'blur' && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)} style={style}>
      {placeholder === 'blur' && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse" />
      )}
      
      <picture>
        {sources?.map((source, index) => (
          <source
            key={index}
            type={source.type}
            srcSet={source.srcSet}
            sizes={source.sizes}
          />
        ))}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            {
              'opacity-0': !isLoaded && placeholder === 'blur',
              'opacity-100': isLoaded || placeholder === 'empty',
            },
            imgClassName
          )}
          loading={priority ? 'eager' : 'lazy'}
          decoding={decoding}
          fetchPriority={fetchpriority}
          onLoad={handleImageLoad}
          srcSet={imgSrcSet}
          sizes={sizes}
          width={width}
          height={height}
        />
      </picture>
    </div>
  );
}
