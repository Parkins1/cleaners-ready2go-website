# Performance Guidelines

## Purpose
This file provides optimization tips for the Cleaners Ready2Go website to ensure fast load times, efficient resource usage, and scalability, especially for image-heavy assets and dynamic booking features.

## Overview
Performance is critical for user experience in a web app handling cleaning service bookings. Focus on frontend (React/Vite) and backend (Node.js) optimizations. Use tools like Lighthouse for audits and aim for scores >90 in performance metrics.

## Frontend Optimizations (React/Vite)
- **Lazy Loading**: Use `React.lazy` and `Suspense` for code splitting on heavy components (e.g., Carousel, ContactForm).
  - Example: `const LazyCarousel = lazy(() => import('./components/Carousel'));`
  - Apply to routes/pages for initial load reduction.
- **Memoization**: Wrap expensive computations with `useMemo` and prevent re-renders with `useCallback` and `React.memo`.
  - Example: `const filteredServices = useMemo(() => services.filter(s => s.active), [services]);`
- **Image Optimization**: Compress assets in `/client/src/assets/` using AVIF/WebP formats (already in use). Implement lazy loading with `loading="lazy"` on img tags and use `IntersectionObserver` for background images.
  - Bundle with Vite's image optimization plugins; serve responsive images via `sizes` attribute.
- **Bundle Analysis**: Run `vite build --report` to identify large bundles; tree-shake unused code.
- **Preloading**: Preload critical resources (e.g., hero images) with `<link rel="preload">` in index.html.

## Backend Optimizations (Node.js)
- **Caching Strategies**: Use Redis for session caching and API responses (e.g., service listings). Implement with `redis` package.
  - Example: Cache booking availability: `redis.setex('availability:roomType', 300, JSON.stringify(data));`
  - For static assets, use Express static middleware with `maxAge`.
- **Database Query Optimization**: Index frequently queried fields (e.g., user bookings by date). Use Prisma's `select` to fetch only needed fields; avoid N+1 queries with `include`.
  - Paginate results with `skip` and `take` for lists (e.g., service history).
- **Middleware for Efficiency**: Enable compression with `compression` middleware; use `helmet` for secure headers without performance hit.
  - Rate limiting with `express-rate-limit` to prevent overload.
- **Async/Await Handling**: Ensure all I/O operations (DB, API calls) are non-blocking; use `Promise.all` for parallel fetches.
- **Serverless Considerations**: If deploying to Vercel, optimize cold starts by keeping functions lightweight; use edge caching.

## General Best Practices
- **CDN Usage**: Serve assets via Vercel/CDN for global distribution; configure in `.vercel` settings.
- **Monitoring**: Integrate tools like New Relic or Sentry for performance tracing; set alerts for slow endpoints.
- **Build-Time Optimizations**: Minify JS/CSS in production builds; use environment-specific configs in Vite.
- **Mobile-First**: Ensure responsive design doesn't compromise speed; test with Chrome DevTools throttling.
- **Error Handling Impact**: Graceful degradation for slow networks; show loading states to improve perceived performance.

## Project-Specific Tips
- **Asset-Heavy Pages**: For pages with many icons (e.g., ServiceCard), batch load with virtual scrolling or pagination.
- **API Endpoints**: Optimize `/api/services` and `/api/bookings` with caching layers; use GraphQL if expanding beyond REST for reduced over-fetching.
- **Testing Performance**: Include performance tests in CI/CD; benchmark load times for hero sections with heavy images.

## References
- React Performance Docs: [react.dev](https://react.dev/learn/optimizing-performance)
- Node.js Clustering: [nodejs.org](https://nodejs.org/api/cluster.html)
- Always include change summaries, e.g., "Optimizes image loading - Addresses #789".