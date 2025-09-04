# SEO Schema (JSON‑LD)

This guide explains how we add and validate structured data. Keep snippets minimal and page‑appropriate; prefer composition via helpers over ad‑hoc JSON.

## Where Things Live

- Builders: `client/src/components/seo/schema.ts`
- Injector: `client/src/components/seo/JsonLd.tsx`
- Site config: `client/src/config/site.ts` (absolute base URL)
- Page meta: `client/src/components/seo/SEO.tsx`

## When To Use Which Snippets

- Always include on pages we want indexed: `LocalBusiness`, `WebPage`, and a `BreadcrumbList`.
- Add `Service` on service‑specific pages (e.g., deep cleaning, move‑out, residential, apartment).
- Add `FAQPage` when the page shows FAQs.
- Use `WebSite` on the home page; add `searchPathTemplate`, `bookingPath`, `contactPath` if available.

## Quick Recipes

Home

```
<JsonLd
  data={[
    makeWebSite(site.url, {
      bookingPath: '/booking',
      contactPath: '/contact',
      // searchPathTemplate: '/search?q={search_term_string}',
    }),
    makeLocalBusiness(site.url),
    makeWebPage({ siteUrl: site.url, path: '/', title, description }),
    makeBreadcrumb([{ name: 'Home', url: `${site.url}/` }]),
    // makeFAQPage(faqs, `${site.url}/`),
  ]}
/>
```

Service page

```
<JsonLd
  data={[
    makeLocalBusiness(site.url),
    makeWebPage({ siteUrl: site.url, path: '/deep-cleaning', title, description }),
    makeService({
      siteUrl: site.url,
      path: '/deep-cleaning',
      name: 'Deep Cleaning',
      description: 'Whole‑home deep cleaning for Spokane and Spokane Valley.',
      areaServed: ['Spokane', 'Spokane Valley', 'Liberty Lake'],
    }),
    makeBreadcrumb([
      { name: 'Home', url: `${site.url}/` },
      { name: 'Deep Cleaning', url: `${site.url}/deep-cleaning` },
    ]),
    // makeFAQPage(faqs, `${site.url}/deep-cleaning`),
  ]}
/>
```

Location page (use the template)

- Prefer `LocationPageTemplate` which already outputs LocalBusiness + WebPage + Service + Breadcrumbs.
- Pass `currentPath` if the inferred path is not correct (e.g., spaces or custom slug).

## Helper Notes

- URLs: Builders ensure absolute URLs; pass paths like `/my-page` and they will be normalized.
- Stable IDs: WebPage uses `#webpage`, Service uses `#service`, and LocalBusiness uses `#business` to allow cross‑referencing.
- Images: `makeWebPage` accepts `images` and sets `primaryImageOfPage` as an `ImageObject`.
- Actions: `makeWebSite` supports `ScheduleAction`, `ContactAction`, `SearchAction`.
- Area served: For `makeService`, pass `areaServed` as a string or string array; we map to `AdministrativeArea`.

## Validation

- Local validation: run the app and copy the rendered script(s) into Google’s Rich Results Test.
- Prod validation: verify in Search Console once deployed.
- We do not add test runners for schema; validation is manual as part of PR.

## Gotchas

- Avoid embedding HTML in FAQ answers; use plain text.
- Keep titles/descriptions aligned with `<SEO>` meta; JSON‑LD should describe the same page.
- Use `site.url` for absolute links; do not hard‑code domain strings in pages.

## Change Policy

- Extend helpers in `schema.ts` rather than adding ad‑hoc JSON in pages.
- If you introduce a new snippet type (e.g., Article/BlogPosting), add a small builder and document a recipe here.
