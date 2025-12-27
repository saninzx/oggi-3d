import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import storyBg from "@/assets/story-bg.jpg";

export const Storytelling = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-6 rounded-2xl"
        >
          <h2 className="text-3xl font-extrabold leading-tight mb-6 md:text-center">
            The OGGI
            <span className="block text-primary">Difference</span>
          </h2>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-2">Material Quality</h3>
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                We source only the finest fabrics and materials, ensuring each
                piece feels as premium as it looks. Quality you can feel.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-2">Design Philosophy</h3>
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                OGGI is more than clothing. It is a philosophy: Style should
                feel natural. Confidence should feel effortless.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-bold mb-2">Precision Tailoring</h3>
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                Every stitch, every seam is crafted with meticulous attention
                to detail. This is not mass fashion—this is personal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-lg font-bold mb-2">Why Not Mass Fashion</h3>
              <p className="text-[15px] text-white/80 max-w-prose leading-relaxed">
                We reject trends that fade. We create pieces that endure,
                designed for men who value substance over spectacle.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
