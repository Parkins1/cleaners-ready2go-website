import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { measurePerformance, monitorResources } from "./lib/performance";
import { HelmetProvider } from "react-helmet-async";

// Initialize performance monitoring in development
if (import.meta.env.DEV) {
  measurePerformance();
  monitorResources();
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
