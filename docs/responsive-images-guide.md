# Responsive Images and Icon Optimization Guide

This guide explains how to add new images using the site’s responsive pipeline (WebP/AVIF, srcset, sizes) to minimize bandwidth and avoid layout shift.

## 1) Place Source Assets
- Photos: add high-quality `.jpg`/`.jpeg`/`.png` to one of:
  - `client/src/assets/` (preferred for app-bundled images)
  - `attached_assets/` (shared or raw assets)
- Icons (raster): place under `client/src/assets/` or `attached_assets/icons/`.

## 2) Generate Variants (WebP + AVIF)
- The script converts and generates responsive widths:
  - Photos: 480, 768, 1024
  - Icons: 64, 128, 256
- Run locally:
  - `node scripts/optimize-images.mjs`
- Output files are written alongside the source (e.g., `photo-480.webp`, `photo-768.avif`, etc.).

## 3) Use in Components

### A) HeroSection (recommended for page heroes)
- Import base image + variants:
```ts
import hero from "@assets/your-hero.webp";
import hero480 from "@assets/your-hero-480.webp";
import hero768 from "@assets/your-hero-768.webp";
import hero1024 from "@assets/your-hero-1024.webp";
import hero480Avif from "@assets/your-hero-480.avif";
import hero768Avif from "@assets/your-hero-768.avif";
import hero1024Avif from "@assets/your-hero-1024.avif";

<HeroSection
  image={hero}
  useAspect
  imageWidth={1392}  // set to your intrinsic hero size (px)
  imageHeight={752}
  imgSrcSet={`${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`}
  sources={[{ type: 'image/avif', srcSet: `${hero480Avif} 480w, ${hero768Avif} 768w, ${hero1024Avif} 1024w` }]}
  // ...title/subtitle/actions
/>
```
- Sizes: `HeroSection` sets `sizes="100vw"` internally.
- Preload the LCP hero in the page:
```tsx
<Helmet>
  <link rel="preload" as="image" href={hero} imageSizes="100vw" fetchPriority="high" />
</Helmet>
```

### B) ServiceCard (grid cards)
- Add srcset in the catalog entry:
```ts
import card from "@assets/card.webp";
import c480 from "@assets/card-480.webp";
import c768 from "@assets/card-768.webp";
import c1024 from "@assets/card-1024.webp";
import c480Avif from "@assets/card-480.avif";
import c768Avif from "@assets/card-768.avif";
import c1024Avif from "@assets/card-1024.avif";

img: card,
imgSrcSet: `${c480} 480w, ${c768} 768w, ${c1024} 1024w`,
sources: [{ type: 'image/avif', srcSet: `${c480Avif} 480w, ${c768Avif} 768w, ${c1024Avif} 1024w` }],
```
- The `ServiceCard` component passes `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"` to match the grid.

### C) Generic use with OptimizedImage
```tsx
<OptimizedImage
  src={img}
  imgSrcSet={`${img480} 480w, ${img768} 768w, ${img1024} 1024w`}
  sources={[{ type: 'image/avif', srcSet: `${img480Avif} 480w, ${img768Avif} 768w, ${img1024Avif} 1024w` }]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
  alt=""
  placeholder="blur"
  // Optional: width/height to reserve space
  width={1024}
  height={576}
/>
```

## 4) Choosing sizes
- Heroes: `sizes="100vw"` (full-bleed across breakpoints).
- Service cards: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw`.
- Content images: match your layout; pick breakpoints matching your grid.

## 5) Icons
- Prefer vector icons (Lucide) where possible.
- For raster icons, import the nearest size (64/128/256) that meets the rendered CSS size and pass a tight `sizes` (e.g., `sizes="64px"`).

## 6) External images
- For Unsplash/remote URLs, download and host locally to benefit from this pipeline. Otherwise, you can still set a `sizes` attribute on `<img>` but won’t get AVIF/WebP benefits.

## 7) Quality & Build
- Variant quality: WebP q80, AVIF q50 (configurable in `scripts/optimize-images.mjs` / `vite.config.ts`).
- Build analysis: `ANALYZE=true npm run build` writes `dist/stats.html`.
- Preload only true LCP images and keep `fetchpriority="high"` for them.
