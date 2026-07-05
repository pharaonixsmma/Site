import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logoUrl from '@assets/file_0000000028dc720ba9729351fb27a291_1783271991817.png';

interface LoaderOverlayProps {
  onComplete: () => void;
}

export default function LoaderOverlay({ onComplete }: LoaderOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    const chars = textRef.current?.children;

    if (chars && progressRef.current && logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "power3.out" }
      )
      .fromTo(
        chars,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .to(progressRef.current, { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, "-=0.2")
      .to([logoRef.current, chars], { y: -40, opacity: 0, stagger: 0.04, duration: 0.5, ease: "power3.in" })
      .to(progressRef.current, { opacity: 0, duration: 0.3 }, "-=0.3")
      .to(containerRef.current, { yPercent: -100, duration: 0.8, ease: "expo.inOut" });
    }
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-6"
    >
      <img
        ref={logoRef}
        src={logoUrl}
        alt="PHARAONIX"
        className="w-24 h-24 object-contain rounded-full"
      />
      <div className="overflow-hidden flex">
        <div ref={textRef} className="font-mono text-2xl tracking-[0.4em] font-bold text-primary flex">
          {'PHARAONIX'.split('').map((char, i) => (
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
