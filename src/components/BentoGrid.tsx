import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Gem, Eye, Sparkles } from "lucide-react";

const tiles = [
  {
    icon: Compass,
    title: "Who We Are",
    description:
      "Born in Kerala with a vision to redefine men's fashion through minimalist design and premium quality.",
  },
  {
    icon: Gem,
    title: "Our Philosophy",
    description:
      "Minimalism, quality craftsmanship, and timeless style. Fashion that feels natural and effortless.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Building Kerala's most influential menswear brand, expanding into lifestyle and modern fashion experiences.",
  },
  {
    icon: Sparkles,
    title: "Future of OGGI",
    description:
      "Innovation in design, sustainable growth, and creating premium essentials for the modern man.",
  },
];

export const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-8 bg-transparent overflow-hidden">
      <div className="w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight mb-3">
            Brand Identity
          </h2>
          <p className="text-[15px] text-white/80 md:max-w-none">
            The pillars that define OGGI
          </p>
        </motion.div>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <tile.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    {tile.title}
                  </h3>
                  <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                    {tile.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
