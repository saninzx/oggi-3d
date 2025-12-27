import React, { useEffect, useRef, useState } from 'react'
import image1 from '@/assets/gallery-1.png'
import image2 from '@/assets/gallery-2.png'
import image3 from '@/assets/gallery-3.png' 
import './HeroSlider.css';
export type Slide = {
  id: number
  title: string
  subtitle?: string
  cta?: string
  image: string
}

const SLIDES: Slide[] = [
  { id: 1, title: 'Launch faster', subtitle: 'Ship polished UI with less headache', cta: 'Get started', image: image1 },
  { id: 2, title: 'Design that sells', subtitle: 'Conversion-focused layouts & motion', cta: 'See demos', image: image2 },
  { id: 3, title: 'Scale with confidence', subtitle: 'Reusable components and tokens', cta: 'Learn more', image: image3 },
]

export default function HeroSlider(): React.ReactElement {
  const [index, setIndex] = useState<number>(0)
  const timerRef = useRef<number | null>(null)
  const slideCount = SLIDES.length

  useEffect(() => {
    startAuto()
    return stopAuto
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // reset timer on index change
    startAuto()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  function startAuto() {
    stopAuto()
    timerRef.current = window.setTimeout(() => setIndex((i) => (i + 1) % slideCount), 5000)
  }

  function stopAuto() {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  function go(n: number) {
    setIndex((i) => ( (i + n + slideCount) % slideCount ))
  }

  // keyboard support
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') { stopAuto(); go(-1) }
      if (e.key === 'ArrowRight') { stopAuto(); go(1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="relative w-full">
      <div className="relative overflow-hidden h-[62vh] md:h-[72vh] lg:h-[78vh] bg-black">
        <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {SLIDES.map((s) => (
            <section key={s.id} className="w-full flex-shrink-0 relative">
              <img src={s.image} alt={s.title} className="object-cover w-full h-full brightness-90" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">{s.title}</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200">{s.subtitle}</p>
                    {s.cta && (
                      <a href="#" className="inline-block mt-6 bg-white text-black font-semibold px-5 py-3 rounded-md shadow-md hover:opacity-90">{s.cta}</a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <button aria-label="Previous" onClick={() => { stopAuto(); go(-1) }} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60">
          <svg className="w-6 h-6 text-white arrow-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" /></svg>
        </button>

        <button aria-label="Next" onClick={() => { stopAuto(); go(1) }} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60">
          <svg className="w-6 h-6 text-white arrow-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" /></svg>
        </button>

        <nav className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex gap-3" aria-label="Slides pagination">
          {SLIDES.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => { stopAuto(); setIndex(i) }} className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} shadow-md`} />
          ))}
        </nav>
      </div>

      <div aria-live="polite" className="sr-only">Slide {index + 1} of {slideCount}</div>
    </header>
  )
}