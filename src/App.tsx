import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CarbonFootprint from "./pages/CarbonFootprint";
import SolarEnergy from "./pages/SolarEnergy";
import WindEnergy from "./pages/WindEnergy";
import TreeConservation from "./pages/TreeConservation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carbon-footprint" element={<CarbonFootprint />} />
          <Route path="/solar-energy" element={<SolarEnergy />} />
          <Route path="/wind-energy" element={<WindEnergy />} />
          <Route path="/tree-conservation" element={<TreeConservation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
