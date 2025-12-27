import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Our Story", href: "/#story" },
  { label: "Vision", href: "/#vision" },
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Franchise", href: "/franchise", isRoute: true },
  { label: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = navItems.map(item => item.href.replace("#", ""));
    
    const observers = sections.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(sectionId);
            }
          });
        },
        {
          threshold: [0.3, 0.5, 0.7],
          rootMargin: "-20% 0px -20% 0px",
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // FIX 1: Changed positioning to inset-x-0 mx-auto for robust centering
        className={cn(
          "fixed inset-x-0 mx-auto z-50 transition-all duration-500",
          scrolled ? "top-4" : "top-6"
        )}
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.95 : 1,
            backdropFilter: scrolled ? "blur(24px)" : "blur(20px)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "glass-panel px-8 py-4 rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
            "border border-white/10",
            // Width settings
            "w-[90vw] max-w-5xl mx-auto", // Ensures the inner container is centered
            scrolled && "bg-black/30"
          )}
          style={{
            background: scrolled
              ? "rgba(0, 0, 0, 0.3)"
              : "rgba(255, 255, 255, 0.03)",
            boxShadow: scrolled
              ? "0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(65, 105, 225, 0.1)"
              : "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 0 20px rgba(65, 105, 225, 0.05)",
          }}
        >
          {/* FIX 2: Changed to justify-between to push Logo Left and Links Right */}
          <div className="flex items-center justify-between w-full">
            
            {/* Logo Section */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <img
                src={logo}
                alt="OGGI Logo"
                className="h-8 w-auto brightness-0 invert"
              />
            </motion.a>

            {/* Desktop Navigation Items (Right Aligned) */}
            <ul className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive = item.isRoute 
                  ? location.pathname === item.href 
                  : activeSection === sectionId;

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {item.isRoute ? (
                      <button
                        onClick={() => navigate(item.href)}
                        className="relative block group"
                      >
                        <span className="text-foreground font-medium text-sm tracking-wide transition-colors duration-300 group-hover:text-primary">
                          {item.label}
                        </span>

                        {/* Hover underline */}
                        <motion.span
                          className="absolute left-0 bottom-[-8px] h-[2px] bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />

                        {/* Active indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-1.5 h-1.5 rounded-full bg-primary"
                            style={{
                              boxShadow:
                                "0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary))",
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setActiveSection(sectionId)}
                        className="relative block group"
                      >
                        <span className="text-foreground font-medium text-sm tracking-wide transition-colors duration-300 group-hover:text-primary">
                          {item.label}
                        </span>

                        {/* Hover underline */}
                        <motion.span
                          className="absolute left-0 bottom-[-8px] h-[2px] bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />

                        {/* Active indicator */}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-1.5 h-1.5 rounded-full bg-primary"
                            style={{
                              boxShadow:
                                "0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary))",
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </a>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile Hamburger Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors ml-auto" // ml-auto ensures it pushes right on mobile
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay (Kept exactly the same as before) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm glass-panel border-l border-white/10 z-50 p-8"
              style={{
                background: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(24px)",
                boxShadow: "-8px 0 32px 0 rgba(0, 0, 0, 0.5)",
              }}
            >
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="mb-12"
              >
                <img
                  src={logo}
                  alt="OGGI Logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </motion.div>
              <nav>
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                    >
                      {item.isRoute ? (
                        <button
                          onClick={() => {
                            navigate(item.href);
                            setMobileMenuOpen(false);
                          }}
                          className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => {
                            setActiveSection(item.href.replace("#", ""));
                            setMobileMenuOpen(false);
                          }}
                          className="block text-2xl font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
