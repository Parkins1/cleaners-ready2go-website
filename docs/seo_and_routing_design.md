# SEO Component API and Centralized Routing Configuration

## 1. Goal

This document outlines the design for a reusable `SEO` component and a centralized routing configuration to improve maintainability, SEO management, and enable features like lazy loading.

## 2. SEO Component API Design

The existing `client/src/components/seo/SEO.tsx` component directly manipulates the DOM to set meta tags. While functional, it's not ideal for SSR and can be improved by using a more declarative approach. We will transition to `react-helmet-async` for this purpose.

### Prop Interface (`SEOProps.ts`)

The `SEOProps` interface in `client/src/components/seo/types.ts` is well-defined and will be expanded to include Open Graph (OG) properties.

```typescript
// client/src/components/seo/types.ts (updated)
export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}
```

### `SEO` Component Specification (Refactored)

The `SEO.tsx` component will be refactored to use `react-helmet-async`.

```typescript
// client/src/components/seo/SEO.tsx (refactored)
import { Helmet } from 'react-helmet-async';
import { SEOProps } from './types';

export function SEO({ title, description, canonical, keywords, ogTitle, ogDescription, ogImage, ogUrl }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph Tags */}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
```

## 3. Centralized Routing Configuration

Currently, routes are defined directly within `client/src/App.tsx`. A centralized routing configuration will improve organization and enable lazy loading.

### `routes.ts`

A new file, `client/src/routes.ts`, will define all application routes. This file will use `lazy` from React to enable code-splitting for pages.

```typescript
// client/src/routes.ts
import { lazy, ComponentType } from 'react';

// Using React.lazy for code-splitting
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Residential = lazy(() => import('@/pages/Residential'));
const MoveOut = lazy(() => import('@/pages/MoveOut'));
const DeepCleaning = lazy(() => import('@/pages/DeepCleaning'));
const Locations = lazy(() => import('@/pages/Locations'));
const Blog = lazy(() => import('@/pages/Blog'));
const Team = lazy(() => import('@/pages/Team'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/not-found'));

interface RouteConfig {
  path: string;
  component: ComponentType;
  exact?: boolean;
}

export const routes: RouteConfig[] = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/residential', component: Residential },
  { path: '/move-out', component: MoveOut },
  { path: '/deep-cleaning', component: DeepCleaning },
  { path: '/locations', component: Locations },
  { path: '/blog', component: Blog },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact },
  // A catch-all for 404 must be the last item
  { path: '/:rest*', component: NotFound },
];
```
*   **Note**: `wouter` does not natively support a route config array with lazy loading out-of-the-box in the same way `react-router-dom` v6 does. The `Switch` component in `App.tsx` will need to map over this array.

### `App.tsx` Refactor

The `App.tsx` component will be refactored to consume the centralized `routes.ts` file. It will also need to incorporate `React.Suspense` to handle lazy loaded components.

```typescript
// client/src/App.tsx (refactored)
import { Switch, Route } from "wouter";
import { Suspense } from 'react'; // For lazy loading
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { routes } from './routes'; // Import centralized routes

function Router() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <main className="pt-24 flex-1">
        <Suspense fallback={<div>Loading...</div>}> {/* Fallback for lazy loaded components */}
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} component={Component} />
            ))}
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
```

## 4. Implementation Plan (for Code Mode)

1.  **Install `react-helmet-async`**: Add the dependency for declarative SEO management.
2.  **Update `SEO.tsx` and `types.ts`**: Implement the new `SEO` component using `Helmet` and expand the `SEOProps` type.
3.  **Create `routes.ts`**: Define the centralized route configuration with lazy loaded components.
4.  **Refactor `App.tsx`**: Update the `Router` component to use the `routes` array and `Suspense`. The `HelmetProvider` (from `react-helmet-async`) must also be wrapped around the app, likely in `main.tsx`.
5.  **Update Pages to Use `SEO`**: Remove manual `<title>` and `<meta>` tags from pages (`Home.tsx`, `DeepCleaning.tsx`, etc.) and replace them with the `<SEO>` component, passing the appropriate props.

This refactoring will result in a more organized, performant, and SEO-friendly application structure.