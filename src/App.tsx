import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FemdomServices from "./pages/FemdomServices";
import FinancialDomination from "./pages/FinancialDomination";
import FetishQueen from "./pages/FetishQueen";
import FLRCounselling from "./pages/FLRCounselling";
import DominatrixServices from "./pages/DominatrixServices";
import FantasyMistress from "./pages/FantasyMistress";
import Contact from "./pages/Contact";
import Toys from "./pages/Toys";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/femdom-services" element={<FemdomServices />} />
          <Route path="/financial-domination" element={<FinancialDomination />} />
          <Route path="/fetish-queen" element={<FetishQueen />} />
          <Route path="/flr-counselling" element={<FLRCounselling />} />
          <Route path="/dominatrix-services" element={<DominatrixServices />} />
          <Route path="/fantasy-mistress" element={<FantasyMistress />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/toys" element={<Toys />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
