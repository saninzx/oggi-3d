import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle } from "lucide-react";
import { TextRevealButton } from "@/components/ui/shadcn-io/TextRevealButton"
import { PinContainer } from "@/components/ui/shadcn-io/3d-pin/index";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-8 bg-transparent overflow-hidden">
      <div className="w-full max-w-lg md:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 md:text-center">
            <h2 className="text-3xl font-extrabold leading-tight mb-3">
              Get in Touch
            </h2>
            <p className="text-[15px] text-white/80 md:max-w-none">
              Have questions? Reach out to us
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Store Location</h3>
                  <p className="text-[15px] text-white/80 max-w-prose">
                    OGGI Brand Factory<br />
                    Kotakkal, Malappuram<br />
                    Kerala, India
                  </p>
                </div>
              </div>
            </div>
{/* Wrap the button in an anchor tag */}
<div> 
    <a 
      href="https://wa.link/wbpujo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-full"
    >
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(65,105,225,0.6)] inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Button>
    </a>
    </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
