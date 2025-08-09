import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './client/src/pages/**/*.{ts,tsx}',
    './client/src/components/**/*.{ts,tsx}',
    './client/src/**/*.{ts,tsx}',
    './client/src/index.css',
    './components/**/*.{js,jsx}',
    './client/index.html',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
        text: 'var(--color-text)',
        surface: 'var(--color-surface)',
        white: 'var(--color-white)',
        teal: 'var(--color-teal)',
      },
      borderRadius: {
        lg: '0.75rem',
      },
      fontFamily: {
        sans: '"Inter", system-ui, sans-serif',
        serif: '"Outfit", sans-serif',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;