import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoaderOverlayProps {
  onComplete: () => void;
}

export default function LoaderOverlay({ onComplete }: LoaderOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    const chars = textRef.current?.children;
    
    if (chars && progressRef.current) {
      tl.fromTo(
        chars,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
      )
      .to(progressRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.4")
      .to(chars, { y: -40, opacity: 0, stagger: 0.05, duration: 0.5, ease: "power3.in" })
      .to(progressRef.current, { opacity: 0, duration: 0.3 }, "-=0.3")
      .to(containerRef.current, { yPercent: -100, duration: 0.8, ease: "expo.inOut" });
    }
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden flex">
        <div ref={textRef} className="font-mono text-4xl tracking-[0.3em] font-bold text-white flex">
          {'STUDIO'.split('').map((char, i) => (
            <span key={i} className="inline-block">{char}</span>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-1/4 w-48 h-[1px] bg-white/10 overflow-hidden">
        <div 
          ref={progressRef} 
          className="w-full h-full bg-primary origin-left scale-x-0"
        />
      </div>
    </div>
  );
}
