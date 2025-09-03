import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  // content is no longer required by v4, but keeping it is harmless and can help some editors/tools
  content: [
    "./client/src/pages/**/*.{ts,tsx}",
    "./client/src/components/**/*.{ts,tsx}",
    "./client/src/**/*.{ts,tsx}",
    "./client/src/index.css",
    "./components/**/*.{js,jsx}",
    "./client/index.html",
  ],

  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        // Legacy tokens
        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        text: "var(--color-text)",
        surface: "var(--color-surface)",
        white: "var(--color-white)",
        teal: "var(--color-teal)",

        // Brand tokens (OKLCH triples stored in CSS variables)
        "brand-gold": "oklch(var(--brand-gold) / <alpha-value>)",
        "brand-gold-light": "oklch(var(--brand-gold-light) / <alpha-value>)",
        "brand-gold-dark": "oklch(var(--brand-gold-dark) / <alpha-value>)",
        "brand-black": "oklch(var(--brand-black) / <alpha-value>)",
        "brand-gray": "oklch(var(--brand-gray) / <alpha-value>)",
        "brand-gray-light": "oklch(var(--brand-gray-light) / <alpha-value>)",
        "brand-white": "oklch(var(--brand-white) / <alpha-value>)",
        "brand-teal": "hsl(var(--brand-teal) / <alpha-value>)",

        // ShadCN-style palette mapped to tokens
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: "oklch(var(--card) / <alpha-value>)",
        "card-foreground": "oklch(var(--card-foreground) / <alpha-value>)",
        popover: "oklch(var(--popover) / <alpha-value>)",
        "popover-foreground": "oklch(var(--popover-foreground) / <alpha-value>)",
        primary: "oklch(var(--primary) / <alpha-value>)",
        "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)",
        secondary: "oklch(var(--secondary) / <alpha-value>)",
        "secondary-foreground": "oklch(var(--secondary-foreground) / <alpha-value>)",
        muted: "oklch(var(--muted) / <alpha-value>)",
        "muted-foreground": "oklch(var(--muted-foreground) / <alpha-value>)",
        "accent-foreground": "oklch(var(--accent-foreground) / <alpha-value>)",
        destructive: "oklch(var(--destructive) / <alpha-value>)",
        "destructive-foreground": "oklch(var(--destructive-foreground) / <alpha-value>)",
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",

        brand: {
          primary: "oklch(var(--brand-black) / <alpha-value>)",
          secondary: "oklch(var(--brand-gold) / <alpha-value>)",
          neutral: "oklch(var(--brand-gray-light) / <alpha-value>)",
          accent: "oklch(var(--brand-gray) / <alpha-value>)",
          white: "oklch(var(--brand-white) / <alpha-value>)",
          gold: "oklch(var(--brand-gold) / <alpha-value>)",
          black: "oklch(var(--brand-black) / <alpha-value>)",
          gray: "oklch(var(--brand-gray) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
        pill: "var(--radius-pill)",
      },
      fontFamily: {
        // Note: "serif" here points to a sans face ("Outfit") by design—OK if intentional
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Outfit', 'ui-sans-serif', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        ui: ['IBM Plex Sans', 'Inter', 'sans-serif'],
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        section: "var(--spacing-section)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // JS plugins removed for v4; use CSS imports instead
  plugins: [],
} satisfies Config;
