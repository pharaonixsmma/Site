import { useEffect, useRef, useState } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingNav from "@/components/ui/FloatingNav";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StudioHome() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // True while any touch pointer is actively moving -- drives the subtle
  // finger-proximity reaction in the particle field. Stays false for mouse
  // input, so desktop behavior is completely unaffected. Tracked per pointer
  // id (not a single global flag) so multiple simultaneous fingers don't
  // cause one lifting/pausing to prematurely cancel another's interaction.
  const [touchInteracting, setTouchInteracting] = useState(false);
  const activeTouches = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    const touches = activeTouches.current;
    const syncTouchState = () => setTouchInteracting(touches.size > 0);

    const clearTouch = (pointerId: number) => {
      const timeoutId = touches.get(pointerId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      touches.delete(pointerId);
    };

    // Pointer Events unify mouse and touch input: the particle field follows
    // both, while never calling preventDefault so page scrolling is untouched.
    const handlePointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });

      if (e.pointerType === "touch") {
        const existing = touches.get(e.pointerId);
        if (existing !== undefined) window.clearTimeout(existing);
        // A finger held still without new move events reads as "stopped" --
        // drop it from the active set shortly after motion pauses so
        // particles start easing back to rest almost immediately.
        const timeoutId = window.setTimeout(() => {
          touches.delete(e.pointerId);
          syncTouchState();
        }, 60);
        touches.set(e.pointerId, timeoutId);
        syncTouchState();
      }
    };

    const handleTouchEnd = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      clearTouch(e.pointerId);
      syncTouchState();
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handleTouchEnd, { passive: true });
    window.addEventListener("pointercancel", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handleTouchEnd);
      window.removeEventListener("pointercancel", handleTouchEnd);
      touches.forEach((timeoutId) => window.clearTimeout(timeoutId));
      touches.clear();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <FloatingNav />

      <main>
        <HeroSection mousePosition={mousePosition} touchInteracting={touchInteracting} />
        <WorkSection />
        <PortfolioSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
