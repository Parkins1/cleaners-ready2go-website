# Button Standardization Decision and Migration Plan

## 1. Goal

This document evaluates the existing button implementations and proposes standardizing on a single button component, outlining its properties and a deprecation path for the legacy components.

## 2. Evaluation of Button Implementations

Based on the initial assessment, there are two primary button implementations:

1.  **`components/Button.jsx` (Legacy Custom Button)**:
    *   **Status:** Explicitly marked as deprecated.
    *   **Accessibility:** Likely rudimentary or unverified.
    *   **Variants/Sizes:** Limited and custom-defined, not following a standardized system.
    *   **Theming:** Relies on `Button.module.css`, which is also deprecated. Tight coupling to CSS modules, not easily integrated with Tailwind's utility-first approach or dynamic theming.
    *   **Typing:** JavaScript (JSX), lacking TypeScript interfaces for props.

2.  **`client/src/components/ui/button.tsx` (Shadcn/ui Button)**:
    *   **Status:** Actively used for UI components, part of the shadcn/ui library.
    *   **Accessibility:** Built on Radix UI primitives, ensuring high accessibility standards (keyboard navigation, ARIA attributes, focus management).
    *   **Variants/Sizes:** Leverages `class-variance-authority` (cva) for flexible, robust variant and size definitions (e.g., `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` variants; `default`, `sm`, `lg`, `icon` sizes). These are easily extendable.
    *   **Theming:** Fully integrated with Tailwind CSS and the color variables defined in `styles/tokens.css` (e.g., `bg-primary`, `text-primary-foreground`). This aligns perfectly with the new token strategy.
    *   **Typing:** Written in TypeScript, providing clear `ButtonProps` interface for component props, improving developer experience and reducing errors.

## 3. Decision

**Standardize on `client/src/components/ui/button.tsx` (Shadcn/ui Button) as the single source of truth for all button components across the codebase.**

This decision aligns with "Decision A" made in Phase 0, which prioritizes `shadcn/ui` button.

### Rationale

*   **Accessibility:** Inherits robust accessibility features from Radix UI, minimizing manual accessibility work.
*   **Consistency & Scalability:** Provides a standardized API for defining button variants and sizes, making it easy to create new button styles consistently.
*   **Maintainability:** Reduces custom CSS and JavaScript for buttons, leaning on a well-maintained external library.
*   **DX (Developer Experience):** TypeScript support ensures type safety and better auto-completion for props. Tailwind integration simplifies styling.
*   **Theming Alignment:** Seamlessly integrates with the new design token system, drawing colors and radii from `styles/tokens.css` via `tailwind.config.ts`.

## 4. Proposed Standard Button Properties

The standard button will expose the following key properties and behaviors from `client/src/components/ui/button.tsx`:

*   **`variant`**:
    *   `default`: Primary action, `bg-primary`, `text-primary-foreground`
    *   `destructive`: Destructive action, `bg-destructive`, `text-destructive-foreground`
    *   `outline`: Bordered, `border border-input`, `bg-background`
    *   `secondary`: Secondary action, `bg-secondary`, `text-secondary-foreground`
    *   `ghost`: Transparent, hover effects only
    *   `link`: Text-based link, `text-primary`, underline on hover
    *   *Custom variants (if needed) will be added directly to the `buttonVariants` cva definition.*

*   **`size`**:
    *   `default`: Standard size (`h-10 px-4 py-2`)
    *   `sm`: Small size (`h-9 rounded-md px-3`)
    *   `lg`: Large size (`h-11 rounded-md px-8`)
    *   `icon`: Square icon button (`h-10 w-10`)

*   **`asChild`**: Renders the button as a child of another component, typically a Slot from Radix UI, allowing the button's styling and behavior to be applied to a custom DOM element without rendering an actual `<button>` tag. Useful for integrating with routing libraries (e.g., `<Link asChild><Button>...</Button></Link>`).

*   **Standard HTML Button Attributes**: All standard HTML button attributes (e.g., `onClick`, `type`, `disabled`) will be supported as per `React.ButtonHTMLAttributes<HTMLButtonElement>`.

## 5. Deprecation Path and Migration Strategy

### Deprecation of `components/Button.jsx` and `components/Button.module.css`

*   **`components/Button.jsx`**: Will be deleted immediately after all usages are migrated. The current empty `export {};` helps prevent import errors during the transition, but the file should not remain.
*   **`components/Button.module.css`**: This file is already marked as deprecated and will be deleted during the migration.

### Migration Map

The following table outlines the general mapping from legacy button styles (if any were inferred from the original codebase before deprecation) to shadcn/ui button variants. This will guide the "Code: migrate usages to standard button" subtask.

| Purpose / Legacy Style (Conceptual) | Recommended Shadcn/ui Button Variants/Props                                                                                                              | Notes                                                                                                                                                                                                                                                        |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary Call to Action              | `<Button variant="default">` or `<Button className="bg-brand-gold text-brand-white">` for specific brand primary                                      | If the "default" variant isn't sufficiently "brand gold", a custom variant can be added to `buttonVariants` or specific Tailwind classes applied for brand-specific primary (e.g., `bg-brand-gold`).                                                       |
| Secondary / Complementary Action    | `<Button variant="secondary">` or `<Button variant="outline">`                                                                                           | `secondary` for lighter background, `outline` for bordered.                                                                                                                                                                                              |
| Destructive Action                  | `<Button variant="destructive">`                                                                                                                         | For delete, remove, cancel actions.                                                                                                                                                                                                                      |
| Text Links / Nav Items              | `<Button variant="link">` or `<Button variant="ghost">` (if no underline desired)                                                                        | Use `asChild` prop with routing components for proper HTML semantics.                                                                                                                                                                                    |
| Icon Buttons                        | `<Button size="icon">` combined with other variants (e.g., `variant="ghost"`)                                                                            | Ensure icons (generally SVG) are children of the button for accessibility and proper sizing (as per `[&_svg]:size-4`).                                                                                                                                   |
| Custom Sizing                       | Use `size="sm"`, `size="lg"`. If custom pixel sizes are absolutely necessary, apply `w-[]` or `h-[]` Tailwind classes directly or add a new `cva` size. | Prefer `sm`, `default`, `lg` sizes. Avoid arbitrary pixel values unless critical, as it makes maintaining consistent sizing more difficult.                                                                                                             |
| Custom Colors                       | Utilize Tailwind classes mapped to `styles/tokens.css` (e.g., `bg-brand-teal`, `text-brand-gray-dark`) directly on the Button component.                 | For unique button color combinations that don't fit existing variants.                                                                                                                                                                                   |

### Implementation Steps (for Code Mode)

1.  **Search & Replace:** Globally search for `components/Button.jsx` imports and usages.
2.  **Migrate Props:** For each usage, translate the original button's styling and functionality to the appropriate shadcn/ui `Button` variant, size, and other props. Leverage Tailwind classes where direct variant mapping is not suitable (e.g., for `brand-gold` background).
3.  **Add Type Safety:** Ensure all props passed to the new `Button` component are type-safe (TypeScript will enforce this).
4.  **Remove Deprecated Files:** Delete `components/Button.jsx` and `components/Button.module.css` once the migration is complete and verified.

By following this plan, we will achieve a standardized, accessible, and maintainable button component across the entire codebase.