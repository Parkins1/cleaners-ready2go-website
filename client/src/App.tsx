import { Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@/components/modal/ModalProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { routes } from "./routes";

function Router() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900">Skip to main content</a>
      <Navigation />
      <main id="main" className="pt-24 flex-1">
        <Suspense fallback={
          /**
           * HOM-001: Reserve space with same aspect ratio as hero to avoid CLS pre-hydration.
           * Uses the same .hero-media CSS (mobile 4/5, md+ 16/9).
           */
          <div className="hero-media relative w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal"></div>
            </div>
          </div>
        }>
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path}>
                <Component />
              </Route>
            ))}
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ModalProvider>
          <Router />
        </ModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
