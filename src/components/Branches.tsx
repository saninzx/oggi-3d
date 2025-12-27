import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const branches = [
  {
    name: "Kotakkal",
    title: "Flagship Store",
    description: "Premium menswear experience in the heart of the city.",
    address: "Kotakkal, Malappuram",
  },
  {
    name: "Tirur",
    title: "City Studio",
    description: "Curated modern fits for everyday and occasion wear.",
    address: "Tirur - Kadalundi Rd, Tirur",
  },
  {
    name: "Vengara",
    title: "Style Lounge",
    description: "Clean, minimal, and designed for relaxed exploration.",
    address: "Vengara, Malappuram",
  },
];

export const Branches = () => {
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
            Our
            <span className="block text-primary">Branches</span>
          </h2>
          <p className="text-[15px] text-white/80 md:max-w-none">
            Visit us at our premium locations across Kerala
          </p>
        </motion.div>

        {/* Branch Stack */}
        <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                {branch.name}
              </h3>
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed mb-3">
                {branch.description}
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                {branch.address}
              </p>
              <div className="inline-flex items-center text-primary font-medium text-sm gap-2">
                <MapPin className="w-4 h-4" />
                <span>View on Map</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
