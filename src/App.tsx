import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Host Pages
import Index from "./pages/Index";
import Franchise from "./pages/Franchise";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import storyBg from "@/assets/story-bg.jpg";

// 3D Project Components
// Make sure you have moved these files to the correct path in your host project!
import { CylinderCarousel } from "./pages/cylinder-carousel";

const queryClient = new QueryClient();

// Helper: Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Helper: Managing Global Backgrounds
// This component decides if the host background image should show or not
function GlobalLayout() {
  const location = useLocation();
  
  // Define paths where we want to HIDE the host background (e.g. 3D pages)
  const is3DPage = location.pathname.startsWith("/3d");

  return (
    <>
      {!is3DPage && (
        <>
          <img
            src={storyBg}
            alt="Background"
            className="fixed inset-0 -z-10 w-full h-full object-cover pointer-events-none blur-lg scale-110"
          />
          {/* Optional dark overlay */}
          {/* <div className="fixed inset-0 -z-10 bg-black/20" /> */}
        </>
      )}
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <GlobalLayout />
        
        <Routes>
          {/* --- Host Project Routes --- */}
          <Route path="/home" element={<Index />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/test/*" element={<Test />} />

          {/* --- 3D Project Routes --- */}
          {/* I grouped them under "/3d" to keep them organized */}
          <Route path="/" element={<CylinderCarousel />} />
          

          {/* --- 404 Catch-All --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;