# UI Update Plan (Pseudocode)

## 1. Enlarge Logo in Header
- Open `client/src/components/Header.tsx`
- Locate `<img src={logo} ... />`
- Update Tailwind classes, e.g.:
  ```tsx
  // Before
  <img src={logo} alt="Logo" className="w-16 h-auto" />
  // After
  <img src={logo} alt="Logo" className="w-32 h-auto" />
  ```

## 2. Update “Get a Quote” Button Styles
- Open `client/src/components/Header.tsx`
- Find button/link with text "Get a Quote"
- Modify classes, e.g.:
  ```tsx
  // Before
  <Link className="btn-outline" ...>Get a Quote</Link>
  // After
  <Link className="bg-brand-gold text-white hover:bg-brand-gold-dark px-4 py-2 rounded" ...>
    Get a Quote
  </Link>
  ```

## 3. Add 50% Black Overlay on Service Cards
- Open `client/src/components/ServiceCard.tsx`
- Wrap image element in relative container:
  ```tsx
  <div className="relative">
    <Image ... />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <!-- Card content on top -->
  </div>
  ```

## 4. Reorder Service Cards on Homepage
- Open `client/src/pages/Home.tsx`
- Locate array of card data/export sequence
- Move the "Apartment Cleaning" object to the center index

## 5. Verify Responsiveness
- Run development server (`npm run dev`)
- Inspect at mobile and desktop widths
- Adjust responsive Tailwind classes (e.g., `sm:`, `md:` prefixes) if needed