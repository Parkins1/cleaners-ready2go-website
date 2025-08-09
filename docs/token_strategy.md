# Design Tokens Specification and Migration Guide

## 1. Goal

This document defines the consolidated design tokens for brand colors, spacing, radii, and button variables. It also outlines the mapping of these tokens into the Tailwind CSS configuration and provides guidance on when to use Tailwind utilities versus direct CSS modules/variables.

## 2. Design Token Consolidation

All design tokens will be defined in a single source of truth: `styles/tokens.css`. This file will contain CSS variables for all global design decisions, allowing for dynamic theming and easy access across the codebase.

### Color Palette

The following brand colors, currently partially defined in `client/src/index.css` and `styles/globals.css`, will be consolidated and exclusively managed in `styles/tokens.css`.

- `--brand-gold: hsl(40, 45%, 53%);` (#C29B4B)
- `--brand-gold-light: hsl(40, 45%, 63%);`
- `--brand-gold-dark: hsl(40, 45%, 43%);`
- `--brand-black: hsl(0, 0%, 9%);` (#181818)
- `--brand-gray: hsl(0, 0%, 38%);` (#616161)
- `--brand-gray-light: hsl(0, 0%, 96%);` (#F5F5F5)
- `--brand-white: hsl(0, 0%, 100%);` (#FFFFFF)
- `--brand-teal: hsl(180, 25%, 25%);`

Additionally, any color variables related to Shadcn/ui or general UI elements (background, foreground, muted, primary, etc.) will also reside in `styles/tokens.css` and will be clearly identified.

### Spacing and Utility Scale

A consistent spacing scale will be defined using CSS variables for responsive design and consistent element relationships.

Example (further refinement needed during Code phase):
- `--spacing-xs: 0.25rem;`
- `--spacing-sm: 0.5rem;`
- `--spacing-md: 1rem;`
- `--spacing-lg: 1.5rem;`
- `--spacing-xl: 2rem;`
- `--spacing-section: 5rem;` (for `.section-spacing`)

### Border Radii

Standardized border radii values will be defined to ensure consistent visual language.
- `--radius-sm: 0.25rem;`
- `--radius-md: 0.5rem;`
- `--radius-lg: 0.75rem;` (replaces `--radius` in `index.css`)
- `--radius-pill: 9999px;`

### Button Variables (Initial)

While shadcn/ui buttons handle much of their styling internally, specific CSS variables may be introduced for general button styling (e.g., hover effects, active states) if needed for custom variants that extend beyond Shadcn/ui's direct capabilities, ensuring alignment with brand.

## 3. Tailwind CSS Configuration Mapping

The `tailwind.config.ts` will be updated to map these CSS variables into Tailwind's theme. This allows the use of convenient Tailwind utility classes (e.g., `text-brand-gold`, `px-lg`) while drawing values from the centralized `styles/tokens.css`.

### Colors Mapping

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      ... (existing shadcn/ui colors mapping),
      'brand-gold': 'hsl(var(--brand-gold) / <alpha-value>)',
      'brand-gold-light': 'hsl(var(--brand-gold-light) / <alpha-value>)',
      'brand-gold-dark': 'hsl(var(--brand-gold-dark) / <alpha-value>)',
      'brand-black': 'hsl(var(--brand-black) / <alpha-value>)',
      'brand-gray': 'hsl(var(--brand-gray) / <alpha-value>)',
      'brand-gray-light': 'hsl(var(--brand-gray-light) / <alpha-value>)',
      'brand-white': 'hsl(var(--brand-white) / <alpha-value>)',
      'brand-teal': 'hsl(var(--brand-teal) / <alpha-value>)',
    },
    // ...other theme extensions
  },
},
```

### Spacing Mapping

Mapping the defined spacing CSS variables to Tailwind's `spacing` scale will allow for direct use of `p-{size}`, `m-{size}`, `gap-{size}` utilities.

```typescript
// tailwind.config.ts
theme: {
  extend: {
    spacing: {
      'xs': 'var(--spacing-xs)',
      'sm': 'var(--spacing-sm)',
      'md': 'var(--spacing-md)',
      'lg': 'var(--spacing-lg)',
      'xl': 'var(--spacing-xl)',
      'section': 'var(--spacing-section)', // for .section-spacing
    },
    // ...other theme extensions
  },
},
```

### Border Radius Mapping

The `borderRadius` values will be updated to reference `styles/tokens.css`.

```typescript
// tailwind.config.ts
theme: {
  extend: {
    borderRadius: {
      lg: "var(--radius-lg)", // Replaces existing lg
      md: "var(--radius-md)",
      sm: "var(--radius-sm)",
      pill: "var(--radius-pill)",
    },
    // ...other theme extensions
  },
},
```

## 4. Tailwind Utilities vs. CSS Modules/Variables Usage Guidance

### When to Use Tailwind Utilities

- **Atomic Styling:** For applying direct, single-purpose styles (e.g., `text-lg`, `font-bold`, `bg-blue-500`, `py-4`).
- **Responsive Design:** Leveraging Tailwind's responsive prefixes (e.g., `md:text-xl`, `lg:flex`).
- **Component Prop-Based Styling:** When styles need to be dynamically applied based on component props.
- **Rapid Prototyping:** For quickly building and iterating on UIs.
- **General Layout and Spacing:** `flex`, `grid`, `padding`, `margin`, `gap`.

The current custom color utilities (e.g., `.text-brand-gold`, `.bg-brand-gold`) in `client/src/index.css` will be deprecated and removed in favor of direct Tailwind use (e.g., `text-brand-gold`, `bg-brand-gold`) after the `tailwind.config.ts` mapping is complete. This ensures that Tailwind is the primary interface for consuming design tokens.

### When to Use CSS Variables / CSS Modules

- **Global Styles & Base Layers:** Styles defined in `@layer base` or directly on `:root` or `body`.
- **Theming & Dynamic Variables:** When values need to be dynamically changed at runtime (e.g., light/dark mode, user-defined themes). CSS variables defined in `:root` (from `styles/tokens.css`) enable this.
- **Complex Component-Specific Styles:** For styles that are highly encapsulated and specific to a single component, especially with complex pseudo-states or nested elements where Tailwind might become verbose (e.g., very specific button animations, intricate modal layouts not easily expressed with utilities alone). These would typically live in `.module.css` files.
- **Custom Fonts:** Using `font-family` declarations that pull from imported fonts.
- **Keyframe Animations:** Defining reusable animations (`@keyframes`) that can be applied to elements.

The `components/Button.module.css` is already marked as deprecated and will be removed as part of the button standardization. New components with highly specific visual logic may use CSS modules, but the preference is to leverage Tailwind utilities with the new token system.

## 5. Migration Guide

The migration will involve the following steps during the "Code: implement tokens and configure Tailwind" subtask:

1.  **Create `styles/tokens.css`:** Define all consolidated CSS variables for colors, spacing, radii, typography (font families/weights), and potentially basic button variables.
2.  **Import `tokens.css`:** Ensure `client/src/index.css` imports the new `tokens.css`: `@import '../../styles/tokens.css';`.
3.  **Update `tailwind.config.ts`:**
    *   Map the new `-brand-` color variables and other UI-related variables (like `--background`, `--foreground`) into the `theme.extend.colors` section using `hsl(var(--token-name) / <alpha-value>)`.
    *   Map spacing variables to `theme.extend.spacing`.
    *   Update `borderRadius` to use `var(--radius-lg)`, etc.
4.  **Remove Duplicated Variables:** Eliminate duplicate CSS variable definitions from `client/src/index.css` and `styles/globals.css` once they are centralized in `styles/tokens.css`.
5.  **Adjust Globals:** Update `@layer base` in `client/src/index.css` to consume the new `tokens.css` variables and Tailwind mappings where applicable (e.g., `body` background/text colors, `h1` font families).
6.  **Refactor Existing CSS:** Convert existing custom CSS classes (e.g., `.text-brand-gold`, `.card-modern`, `.text-heading`, `.section-spacing`) into direct Tailwind utility classes, leveraging the new token mappings. The `@layer components` and `@layer utilities` sections in `client/src/index.css` should be reviewed and simplified, with preference given to custom Tailwind plugins if complex component-level abstraction is still required.

By following this specification, we aim to establish a robust, maintainable, and highly flexible styling system.