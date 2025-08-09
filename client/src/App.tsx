import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "@/components/modal/ModalProvider";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Residential from "@/pages/Residential";
import MoveOut from "@/pages/MoveOut";
import Locations from "@/pages/Locations";
import Blog from "@/pages/Blog";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import DeepCleaning from "@/pages/DeepCleaning"; // Import the new DeepCleaning page
import Spokane from "@/pages/Spokane";
import SpokaneValley from "@/pages/SpokaneValley";
import LibertyLake from "@/pages/LibertyLake";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navigation />
      <main className="pt-24 flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/residential" component={Residential} />
          <Route path="/move-out" component={MoveOut} />
          <Route path="/deep-cleaning" component={DeepCleaning} /> {/* Add the new route */}
          <Route path="/locations" component={Locations} />
          <Route path="/locations/spokane" component={Spokane} />
          <Route path="/locations/spokane-valley" component={SpokaneValley} />
          <Route path="/locations/liberty-lake" component={LibertyLake} />
          <Route path="/blog" component={Blog} />
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
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