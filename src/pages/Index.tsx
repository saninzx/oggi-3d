import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandOverview } from "@/components/BrandOverview";
import { BentoGrid } from "@/components/BentoGrid";
import { Storytelling } from "@/components/Storytelling";
import { Vision } from "@/components/Vision";
import { Lookbook } from "@/components/Lookbook";
import { Branches } from "@/components/Branches";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import GradualBlur from '@/components/GradualBlur';
import HeroSlider2 from "@/components/HeroSlider2";
import StackOGGI from "@/components/StackOGGI";
import DomeGallery from '@/components/DomeGallery';

const Index = () => {
  return (
<section style={{position: 'relative',height: '100vh',overflow: 'hidden'}}>
  <div style={{ height: '100%',overflowY: 'auto',padding: '1rem 0' }}>
    <div className="min-h-screen w-full overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="hero-slider-2">
        <HeroSlider2 />
      </section> 
      <section id="story">
        <BrandOverview />
        <div style={{ width: '100vw', height: '100vh' }}>
              <DomeGallery grayscale={false}/>
            </div>
      </section>
      <BentoGrid />
      <Storytelling />
      <StackOGGI />
      <section id="vision">
        <Vision />
      </section>
      <section id="philosophy">
        <BentoGrid />
      </section>
      <Lookbook />
      <Branches />
      <section id="contact">
        <Contact />
        </section>
      <Footer />
    </div>

    </div>

  <GradualBlur
    target="page"
    position="bottom"
    height="6rem"
    strength={2}
    divCount={5}
    curve="bezier"
    exponential={true}
    opacity={1}
  />
</section>

  );
};

export default Index;
