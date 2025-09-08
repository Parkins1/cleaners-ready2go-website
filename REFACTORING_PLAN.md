# Refactoring Plan: Performance Optimizations for Cleaners Ready2Go Website

Based on the user's focus on performance optimizations (lazy loading components and optimizing image assets), and guided by `performance.md` and other agents docs.

## Goals
1. **Primary**: Improve frontend performance via lazy loading and image optimization
2. **Secondary**: Enhance code organization and maintainability
3. **Scope**: Client-side optimizations, backend readiness checks, no new features

## Current State Analysis
- **Frontend**: React app with Vite, component-based structure in `/client/src/`
- **Backend**: Node.js/Express in `/server/`, using in-memory storage (MemStorage in `storage.ts`)
- **Assets**: Extensive icon sets (e.g., hero, service, addon icons) with size variants
- **Performance Issues**: Potential for bundle size bloat, unoptimized component loading, and asset delivery

## Proposed Refactoring Steps

### 1. Component Lazy Loading (Frontend)
**Goal**: Reduce initial bundle size by code-splitting heavy components
**Guidelines**:
- Use `React.lazy` and `Suspense` for components like `Carousel`, `ContactForm`, and route-level pages
**Tasks**:
- Refactor `routes.ts` to wrap page components with `lazy()` and wrap routes in `Suspense`
- Extract `HeroSection`, `ServiceCard`, and `ContactForm` into separate lazy-loaded chunks
**Example** (in `client/src/routes.ts`):
```typescript
const ServiceCard = lazy(() => import('./components/ServiceCard/ServiceCard'));
const routes = [
  { path: '/', component: lazy(() => import('./pages/HomePage')) },
  // Wrap in Suspense with fallback
]

### 2. Image Asset Optimization
**Guidelines**: Already using AVIF/WebP, but need lazy loading for non-critical images
**Tasks**:
- Add `loading="lazy"` to non-hero images in components (e.g., ServiceCard icons)
- Implement `IntersectionObserver` for background images in `HeroSection`
- Preload critical hero images with `<link rel="preload">` in `index.html`
**File**: Update `HeroSection.tsx`, `ServiceCard.tsx`, `index.html`

### 3. Backend Storage Refactor (Prep for Data Layer)
**Goal**: Replace in-memory storage with Prisma-based repository pattern
**Guidelines**: From `data_layer.md`, use Prisma schemas and repositories
**Tasks**:
- Create Prisma schema for `User`, `Service`, `Booking`, `AddOn` models
- Refactor `storage.ts` `MemStorage` class to `PrismaStorage` (or remove if no longer needed)
- Implement repository pattern in `/server/repositories/`
**Example**:
```typescript
// server/repositories/BookingRepository.ts
export class BookingRepository {
  async createBooking(data) {...}
  async findByUserId(userId) {...}
}

### 4. Testing Integration
**Guidelines**: From `testing.md`, add unit and integration tests for optimized code
**Tasks**:
- Add tests for refactored components (e.g., `ServiceCard.test.tsx`)
- Test lazy loading behavior in routes
- Add integration tests for new repository pattern

### 5. Code Quality Improvements
**Guidelines**: From `code_quality.md`, ensure linting and error handling
**Tasks**:
- Run `eslint src/ --fix` to catch issues post-refactor
- Add try-catch blocks around async operations in components
- Ensure consistent prop interfaces for refactored components

## Execution Order
1. **Phase 1**: Component lazy loading (low-risk, high impact)
2. **Phase 2**: Image optimization (medium risk, immediate benefit)
3. **Phase 3**: Backend storage refactor (higher complexity, foundational for auth/data)
4. **Phase 4**: Testing and quality checks (ensure no regressions)

## Success Metrics
- **Bundle Size**: Reduction in initial JS bundle via Lighthouse
- **LCP**: Improved Largest Contentful Paint, especially on mobile
- **Test Coverage**: 100% coverage for new/refactored code per `testing.md`
- **Code Compliance**: Adherence to `file_conventions.md` (naming, structure)

## Risks and Mitigation
- **Breaking Changes**: Ensure comprehensive testing, especially for component props
- **Performance Regressions**: Monitor with Lighthouse before/after deployment
- **Data Loss**: In `storage.ts` refactor, ensure no data loss during transition

## References
- Performance Guidelines: `performance.md`
- Code Quality: `code_quality.md`
- Testing: `testing.md`
- File Conventions: `file_conventions.md`
- Data Layer: `data_layer.md`

This plan ensures the website performs optimally for users booking cleaning services, leveraging the established agents docs for a maintainable, scalable refactor.