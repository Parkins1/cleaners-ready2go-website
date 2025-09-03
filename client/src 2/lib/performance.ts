// Performance monitoring utilities
export function measurePerformance() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            if (process.env.NODE_ENV === 'development') {
              console.log('LCP:', entry.startTime);
            }
            break;
          case 'first-input':
            if (process.env.NODE_ENV === 'development') {
              console.log('FID:', (entry as any).processingStart - entry.startTime);
            }
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              if (process.env.NODE_ENV === 'development') {
                console.log('CLS:', (entry as any).value);
              }
            }
            break;
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Page load metrics
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation && process.env.NODE_ENV === 'development') {
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart);
        console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.fetchStart);
        console.log('First Contentful Paint:', performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A');
      }
    });

    return () => observer.disconnect();
  }
  return () => {};
}

// Bundle size monitoring
export function logBundleSize() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // This will be filled by the build process
    if (process.env.NODE_ENV === 'development') {
      console.log('Bundle sizes will be logged in development mode');
    }
  }
}

// Resource timing
export function monitorResources() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) { // Log slow resources
          console.warn('Slow resource:', entry.name, entry.duration + 'ms');
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    return () => observer.disconnect();
  }
  return () => {};
}