import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/logo.png";
import storyBg from "@/assets/story-bg.jpg";



export const BrandOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-8 bg-transparent overflow-hidden">
      
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={storyBg}
          alt="The OGGI Difference"
          className="w-full h-full object-cover blur-lg scale-105"
        />
      </div> */}

      <div className="w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="z-10 p-6 md:p-10 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]"
        >
          <div className="md:text-center">
            <motion.img
              src={logo}
              alt="OGGI"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-16 w-auto mb-6 brightness-0 invert md:mx-auto"
            />
            
            <h2 className="text-3xl font-extrabold leading-tight mb-4">
              About
              <span className="block text-primary">OGGI</span>
            </h2>
            <div className="h-1 w-24 bg-primary mb-6 rounded-full md:mx-auto" />
          </div>

          <div className="space-y-4 md:text-center">
            <p className="text-[15px] text-white/80 leading-relaxed md:max-w-2xl md:mx-auto">
              OGGI was born in Kerala with a simple belief: men deserve fashion
              that feels confident without trying too hard.
            </p>
            <p className="text-[15px] text-white/80 leading-relaxed md:max-w-2xl md:mx-auto">
              Every OGGI piece is crafted with precision, premium fabrics, and a
              modern minimalist identity.
            </p>
            <p className="text-[15px] text-white/80 leading-relaxed md:max-w-2xl md:mx-auto">
              We design for men who lead — quietly, confidently, and without
              noise. Our purpose is to create menswear that stands out not
              through loud patterns, but through clean silhouettes, quality
              materials, and timeless style.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
