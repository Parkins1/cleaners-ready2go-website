import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  plugins: [
    react(),
    ...(isDev ? [runtimeErrorOverlay()] : []),
  ],
  optimizeDeps: {
    include: ["react-hook-form"],
  },
  // Removed SSR external setting for react-hook-form
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      "@components": path.resolve(import.meta.dirname, "components"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 5001,
    fs: {
      strict: false,
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
});
