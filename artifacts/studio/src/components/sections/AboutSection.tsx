import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider animation
      gsap.fromTo(dividerRef.current,
        { scaleX: 0 },
        { 
          scaleX: 1, 
          duration: 1.5, 
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Text reveal
      const textElements = textRef.current?.querySelectorAll('.reveal-up');
      if (textElements) {
        gsap.fromTo(textElements,
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
            }
          }
        );
      }

      // Numbers animation
      const stats = numbersRef.current?.querySelectorAll('.stat-num');
      if (stats) {
        gsap.from(stats, {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.2,
          scrollTrigger: {
            trigger: numbersRef.current,
            start: "top 85%",
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 md:py-48 bg-background overflow-hidden">
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          <div className="md:col-span-4 flex flex-col justify-between">
            <h2 className="font-serif text-8xl md:text-[12rem] leading-none text-primary/20 font-light -ml-4">
              01
            </h2>
            <div className="mt-8 md:mt-0">
              <h3 className="font-serif italic text-4xl text-white mb-2">The Studio</h3>
              <p className="font-mono text-sm text-primary uppercase tracking-widest">Philosophy & Approach</p>
            </div>
          </div>

          <div ref={textRef} className="md:col-span-8 flex flex-col justify-center">
            <div className="space-y-8 font-sans font-light text-xl md:text-2xl text-muted-foreground leading-relaxed">
              <p className="reveal-up text-white">
                We believe the digital realm should be felt, not just seen. Our studio crafts immersive spatial interfaces that blend high-performance engineering with unapologetic visual design.
              </p>
              <p className="reveal-up">
                Every micro-interaction is considered. Every animation is choreographed. We don't build websites; we build tactile digital environments that command attention and reward exploration.
              </p>
            </div>

            <div ref={dividerRef} className="w-full h-px bg-white/10 my-16 origin-left"></div>

            <div ref={numbersRef} className="grid grid-cols-3 gap-8">
              <div>
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">
                  <span className="stat-num">150</span>+
                </div>
                <div className="font-mono text-xs text-white/50 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">
                  <span className="stat-num">8</span>
                </div>
                <div className="font-mono text-xs text-white/50 uppercase tracking-wider">Years Active</div>
              </div>
              <div>
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">
                  <span className="stat-num">40</span>+
                </div>
                <div className="font-mono text-xs text-white/50 uppercase tracking-wider">Industry Awards</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
