import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import editorial1 from "/img/blog-2.png";
import editorial2 from "/img/blog-1.png";
import editorial3 from "/img/blog-3.png";
import editorial4 from "/img/blog-4.png";

const images = [
  { src: editorial1, alt: "OGGI Editorial 1", span: "md:row-span-2" },
  { src: editorial2, alt: "OGGI Editorial 2", span: "" },
  { src: editorial3, alt: "OGGI Editorial 3", span: "" },
  { src: editorial4, alt: "OGGI Editorial 4", span: "md:row-span-2" },
];

export const Lookbook = () => {
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
            Brand Mood
          </h2>
          <p className="text-[15px] text-white/80 md:max-w-none">
            Experience the essence of OGGI through imagery
          </p>
        </motion.div>

        {/* Stacked Cards */}
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full rounded-2xl overflow-hidden relative border border-white/10 backdrop-blur-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
            >
              <div className="relative w-full aspect-[16/9]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
                <div className="absolute left-4 bottom-4 right-4">
                  <h3 className="text-2xl font-extrabold leading-tight text-white">
                    {image.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
