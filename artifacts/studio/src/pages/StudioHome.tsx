import { useEffect, useState } from "react";
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

  useEffect(() => {
    // Pointer Events unify mouse and touch input: the particle field follows
    // both, while never calling preventDefault so page scrolling is untouched.
    const handlePointerMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <CustomCursor />
      <FloatingNav />

      <main>
        <HeroSection mousePosition={mousePosition} />
        <WorkSection />
        <PortfolioSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  );
}
