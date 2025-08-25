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
      <Navigation />
      <main className="pt-24 flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal"></div>
          </div>
        }>
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} component={Component} />
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
