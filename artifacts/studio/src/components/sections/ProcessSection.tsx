import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const steps = [
  { num: '01', title: 'Discover', desc: 'Research & Strategy' },
  { num: '02', title: 'Define', desc: 'Concept & Direction' },
  { num: '03', title: 'Design', desc: 'Craft & Build' },
  { num: '04', title: 'Deploy', desc: 'Launch & Scale' }
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw horizontal line
      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );

      // Reveal steps
      stepRefs.current.forEach((step, i) => {
        if (step) {
          gsap.fromTo(step,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.2,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-20">03 / Process</h2>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[3rem] left-0 w-full h-[1px] bg-white/10">
            <div ref={lineRef} className="w-full h-full bg-primary/50 origin-left" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.num} 
                ref={el => { stepRefs.current[index] = el; }}
                className="group flex flex-col cursor-hover"
              >
                {/* Node circle */}
                <div className="hidden md:flex mb-6 w-3 h-3 rounded-full bg-[#0B0B0B] border-2 border-primary group-hover:scale-150 group-hover:bg-primary transition-all duration-300 relative top-[-6px]" />
                
                <div className="font-serif text-6xl text-white/20 group-hover:text-primary transition-colors duration-500 mb-4">
                  {step.num}
                </div>
                <h3 className="font-sans font-bold text-2xl text-white mb-2">{step.title}</h3>
                <p className="font-mono text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
