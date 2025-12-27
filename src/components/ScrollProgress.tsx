import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "vision", label: "Vision" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(section.id);
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
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Progress Bar */}
      <div className="h-1">
        <div className="h-full bg-background/20 backdrop-blur-sm" />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Section Indicators */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel px-4 py-2 rounded-full border border-white/10"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex items-center gap-3">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-3">
                <motion.a
                  href={`#${section.id}`}
                  className="group relative"
                  animate={{
                    scale: activeSection === section.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dot indicator */}
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-primary"
                        : "bg-foreground/30 group-hover:bg-foreground/50"
                    }`}
                    animate={{
                      boxShadow:
                        activeSection === section.id
                          ? "0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary))"
                          : "none",
                    }}
                  />
                  
                  {/* Tooltip */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs rounded whitespace-nowrap pointer-events-none"
                  >
                    {section.label}
                  </motion.span>
                </motion.a>
                
                {/* Separator */}
                {index < sections.length - 1 && (
                  <div className="w-px h-3 bg-foreground/20" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
