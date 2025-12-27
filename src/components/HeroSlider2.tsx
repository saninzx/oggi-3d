import React, { useEffect, useState, useCallback, useRef } from 'react';
import './HeroSlider.css';
import img1Desktop from '@/assets/gallery-1.png';
import img1Mobile from '@/assets/gallery-1-mobile.png';
import img2Desktop from '@/assets/gallery-2.png';
import img2Mobile from '@/assets/gallery-2-mobile.png';
import img3Desktop from '@/assets/gallery-3.png';
import img3Mobile from '@/assets/gallery-3-mobile.png';
import img4Desktop from '@/assets/gallery-4.png';
import img4Mobile from '@/assets/gallery-4-mobile.png';

interface SliderItem {
  id: number;
  imgDesktop: string;
  imgMobile: string;
  author: string;
  title: string;
  topic: string;
  desc: string;
}

const INITIAL_ITEMS: SliderItem[] = [
  {
    id: 1,
    imgDesktop: img1Desktop,
    imgMobile: img1Mobile,
    author: 'OGGI',
    title: 'DESIGNER Clothes',
    topic: 'Summer 2024',
    desc: 'Clothing that speaks before you do.',
  },
  {
    id: 2,
    imgDesktop: img2Desktop,
    imgMobile: img2Mobile,
    author: 'OGGI',
    title: 'Unleash Comfort',
    topic: 'New Arrivals',
    desc: 'Designed for everyday confidence.',
  },
  {
    id: 3,
    imgDesktop: img3Desktop,
    imgMobile: img3Mobile,
    author: 'OGGI',
    title: 'Crafted for Confidence.',
    topic: 'Gentle wear',
    desc: 'Premium style without the nonsense.',
  },
  {
    id: 4,
    imgDesktop: img4Desktop,
    imgMobile: img4Mobile,
    author: 'OGGI',
    title: 'Elevate Your Fit.',
    topic: 'Modern Styles',
    desc: 'Crafted for those who lead.',
  },
];

const HeroSlider2: React.FC = () => {
  const [items, setItems] = useState<SliderItem[]>(INITIAL_ITEMS);
  const [animationType, setAnimationType] = useState<'' | 'next' | 'prev'>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const timeOutRef = useRef<NodeJS.Timeout | null>(null);
  const autoNextRef = useRef<NodeJS.Timeout | null>(null);

  const TIME_RUNNING = 3000;
  const TIME_AUTO_NEXT = 7000;

  // Detect mobile viewport
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setAnimationType('next');
    setIsAnimating(true);

    setItems((prev) => {
      const newItems = [...prev];
      const first = newItems.shift();
      if (first) newItems.push(first);
      return newItems;
    });
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setAnimationType('prev');
    setIsAnimating(true);

    setItems((prev) => {
      const newItems = [...prev];
      const last = newItems.pop();
      if (last) newItems.unshift(last);
      return newItems;
    });
  }, [isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
      
      timeOutRef.current = setTimeout(() => {
        setAnimationType('');
        setIsAnimating(false);
      }, TIME_RUNNING);
    }
    
    return () => {
      if (timeOutRef.current) clearTimeout(timeOutRef.current);
    };
  }, [isAnimating]);

  useEffect(() => {
    if (autoNextRef.current) clearTimeout(autoNextRef.current);

    autoNextRef.current = setTimeout(() => {
      nextSlide();
    }, TIME_AUTO_NEXT);

    return () => {
      if (autoNextRef.current) clearTimeout(autoNextRef.current);
    };
  }, [nextSlide, isAnimating]);

  return (
    <div className={`carousel ${animationType} relative w-screen h-screen bg-transparent text-white`}>
      {/* --- Thumbnail List --- */}
      <div className="thumbnail absolute -bottom-[1000px] left-1/2 -translate-x-1/2 w-max z-[100] flex gap-5">
        {items.map((item) => (
          <div key={item.id} className="item w-[150px] h-[220px] shrink-0 left-1/2 relative">
            <img 
              src={isMobile ? item.imgMobile : item.imgDesktop} 
              alt={item.title} 
              className="w-full h-full object-cover rounded-[20px]" 
            />
            <div className="content absolute bottom-[10px] left-[10px] right-[10px] text-white">
              <div className="title font-medium">{item.title}</div>
              <div className="desc font-light">Description</div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Main List --- */}
      <div className="list absolute inset-0 z-0">
        {items.map((item) => (
          <div key={item.id} className="item absolute inset-0">
            <img 
              src={isMobile ? item.imgMobile : item.imgDesktop} 
              alt={item.title} 
              className="w-full h-full object-cover" 
            />
            <div className="content absolute top-[20%] left-1/2 -translate-x-1/2 w-[1140px] max-w-[80%] pr-[30%] box-border text-white drop-shadow-lg">
              <div className="author font-bold tracking-[10px]">{item.author}</div>
              <div className="title text-[5em] font-bold leading-[1.3em]">{item.title}</div>
              <div className="topic text-[5em] font-bold leading-[1.3em] text-[#4169E1]">{item.topic}</div>
              <div className="des mt-4">{item.desc}</div>
              <div className="buttons grid grid-cols-[repeat(2,130px)] grid-rows-[40px] gap-2 mt-5">
                <button className="border-none bg-[#eee] tracking-[3px] font-[Poppins] font-medium text-black cursor-pointer">
                  SEE MORE
                </button>
                <button className="bg-transparent border border-white text-[#eee] tracking-[3px] font-[Poppins] font-medium cursor-pointer">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Arrows --- */}
      <div className="arrows absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%] flex gap-[10px] items-center">
        <button
          onClick={prevSlide}
          className="w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-white font-mono font-bold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="w-[40px] h-[40px] rounded-full bg-[#eee4] border-none text-white font-mono font-bold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
        >
          &gt;
        </button>
      </div>

      {/* --- Time Bar --- */}
      <div className="time absolute z-[1000] w-0 h-[3px] bg-[#4169e1] left-0 top-0"></div>
    </div>
  );
};

export default HeroSlider2;