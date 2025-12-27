import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Ruler, MapPin, TrendingUp } from "lucide-react";
import storyBg from "@/assets/story-bg.jpg"; // add this import

const visionCards = [
  {
    icon: Leaf,
    title: "Sustainable Growth",
    description:
      "Building a brand that respects both craft and environment, with responsible sourcing and ethical practices.",
  },
  {
    icon: Ruler,
    title: "Modern Silhouettes",
    description:
      "Contemporary cuts that honor tradition while pushing boundaries of modern menswear design.",
  },
  {
    icon: MapPin,
    title: "Kerala-Rooted Identity",
    description:
      "Proudly rooted in Kerala's rich heritage while embracing global fashion sensibilities.",
  },
  {
    icon: TrendingUp,
    title: "Future Expansion",
    description:
      "Expanding into lifestyle collections, premium essentials, and innovative fashion experiences.",
  },
];

export const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-8 bg-transparent overflow-hidden">
      {/* Background image + optional dark overlay */}
      <div className="relative z-10 w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:text-center"
        >
          <h2 className="text-3xl font-extrabold leading-tight mb-3">
            Our Vision for
            <span className="block text-primary">Modern Menswear</span>
          </h2>
          <p className="text-[15px] text-white/80 md:max-w-none">
            Where we're heading and what drives us forward
          </p>
        </motion.div>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {visionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-xl inline-block">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
