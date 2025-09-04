import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";   // ✅ Tailwind v4 Vite plugin
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

const isDev = process.env.NODE_ENV !== "production";
const usePwa = process.env.PWA === "true";

// Custom plugin to handle asynchronous CSS loading (build-time)
const asyncCssPlugin = () => ({
  name: "async-css",
  transformIndexHtml(html: string) {
    const cssRegex = /<link rel="stylesheet"[^>]*href="(\/assets\/index-[^"]+\.css)"[^>]*>/;
    const match = html.match(cssRegex);
    if (match) {
      const cssUrl = match[1];
      const preloadLink = `
        <link rel="preload" href="${cssUrl}" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="${cssUrl}"></noscript>
      `;
      return html.replace(match[0], preloadLink);
    }
    return html;
  },
});

export default defineConfig(async () => {
  return {
  cacheDir: path.resolve(import.meta.dirname, ".vite-cache"),
  plugins: [
    tailwind(),           // ✅ put before react for best DX
    react(),
    asyncCssPlugin(),
    // Visualizer removed to avoid config resolution failures in some envs
    ...(usePwa
      ? [
          VitePWA({
            registerType: "autoUpdate",
            workbox: {
              globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}"],
              runtimeCaching: [
                {
                  urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                  handler: "CacheFirst",
                  options: {
                    cacheName: "google-fonts-cache",
                    expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
                  },
                },
                {
                  urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                  handler: "CacheFirst",
                  options: {
                    cacheName: "google-fonts-cache",
                    expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
                  },
                },
              ],
            },
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
            manifest: {
              name: "Cleaners Ready 2Go",
              short_name: "Cleaners Ready 2Go",
              description: "Professional cleaning services in Spokane area",
              theme_color: "#CFAE51",
              background_color: "#ffffff",
              display: "standalone",
              orientation: "portrait",
              scope: "/",
              start_url: "/",
              icons: [
                { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
                { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
              ],
            },
          }),
        ]
      : []),
  ],
  optimizeDeps: {
    include: ["react-hook-form"],
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "client", "src", "assets"),
      "@components": path.resolve(import.meta.dirname, "client", "src", "components"),
      "react-hook-form": path.resolve(import.meta.dirname, "node_modules", "react-hook-form", "dist", "index.esm.mjs"),
      "embla-carousel-react": path.resolve(import.meta.dirname, "node_modules", "embla-carousel-react", "esm", "embla-carousel-react.esm.js"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 5001,
    fs: { strict: false },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  };
});
