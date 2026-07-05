import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import HeroScene from '../3d/HeroScene';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
}

export default function HeroSection({ mousePosition }: HeroSectionProps) {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Wait for loader to finish before animating in
    const timer = setTimeout(() => {
      const lines = textRef.current?.querySelectorAll('.reveal-text');
      if (lines) {
        gsap.fromTo(lines, 
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power4.out" }
        );
      }
    }, 2800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas gl={{ antialias: true, alpha: true }}>
          <HeroScene mousePosition={mousePosition} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pointer-events-none">
        <div ref={textRef} className="max-w-4xl pt-20">
          <div className="overflow-hidden mb-6">
            <p className="reveal-text font-mono text-primary text-sm tracking-[0.2em] uppercase">
              Creative Studio — Est. 2024
            </p>
          </div>
          
          <h1 className="font-serif font-light text-[clamp(4rem,10vw,9rem)] leading-[0.9] text-white tracking-tight">
            <div className="overflow-hidden">
              <span className="reveal-text block">WE BUILD</span>
            </div>
            <div className="overflow-hidden">
              <span className="reveal-text block italic text-primary/90">WORLDS</span>
            </div>
            <div className="overflow-hidden">
              <span className="reveal-text block">THAT MOVE</span>
            </div>
          </h1>
          
          <div className="overflow-hidden mt-8 mb-10 max-w-md">
            <p className="reveal-text font-sans font-light text-muted-foreground text-lg md:text-xl leading-relaxed">
              Interactive experiences that transcend the screen. We craft digital spaces where code meets art.
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="reveal-text pointer-events-auto">
              <button className="group relative px-8 py-4 rounded-full border border-primary text-primary font-sans text-sm tracking-widest uppercase overflow-hidden transition-colors hover:text-black">
                <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 font-medium">Explore Our Work</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[10px] text-white/50 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary origin-top animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
