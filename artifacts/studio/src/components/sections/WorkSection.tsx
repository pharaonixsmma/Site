import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ServicePreview, { ServicePreviewStyles } from '@/components/ui/ServicePreview';

/* ─── Service data ────────────────────────────────────────────── */
const services = [
  {
    id: '01',
    title: 'Website Design',
    category: 'Custom Web Presence',
    description:
      'Premium websites built to convert. Crafted entirely around your brand — every pixel positioned to turn first-time visitors into loyal customers.',
    outcomes: [
      'Conversion-optimised design',
      'Mobile-first performance',
      'SEO-ready architecture',
    ],
    cta: 'Build My Website',
  },
  {
    id: '02',
    title: 'Brand Identity',
    category: 'Strategy & Branding',
    description:
      'A complete brand system — logo, typography, colour, and guidelines — that makes your business unforgettable from the very first impression.',
    outcomes: [
      'Logo & visual identity system',
      'Brand guidelines & assets',
      'Print & digital collateral',
    ],
    cta: 'Build My Brand',
  },
  {
    id: '03',
    title: 'AI & Automation',
    category: 'Growth Systems',
    description:
      'Intelligent workflows that capture leads, qualify prospects, and keep your business running 24/7 — without adding headcount or complexity.',
    outcomes: [
      'Lead capture automation',
      '24/7 AI customer support',
      'Custom workflow systems',
    ],
    cta: 'Automate My Business',
  },
  {
    id: '04',
    title: 'Digital Marketing',
    category: 'Performance & Growth',
    description:
      'Data-driven campaigns across every channel — Google, Meta, email, and beyond — engineered for measurable revenue growth.',
    outcomes: [
      'Multi-channel campaign strategy',
      'Revenue-focused ad management',
      'Analytics & monthly reporting',
    ],
    cta: 'Grow My Revenue',
  },
];

const additionalServices = [
  'Graphic Design',
  'Digital Advertising',
  'Local SEO',
  'Customer Support Automation',
  'Booking Automation',
  'AI Consultation',
];

/* ─── Easing helpers ──────────────────────────────────────────── */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_IN_QUART = [0.7, 0, 0.84, 0] as [number, number, number, number];

/* ─── 3D Tilt card ────────────────────────────────────────────── */
function TiltPreviewCard({ active }: { active: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Raw mouse position normalised to [-0.5, 0.5]
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring-smoothed values — provide natural inertia
  const springX = useSpring(rawX, { damping: 38, stiffness: 280, mass: 0.7 });
  const springY = useSpring(rawY, { damping: 38, stiffness: 280, mass: 0.7 });

  // Map springs → rotation angles
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);

  // Floating shadow deepens as card tilts away
  const boxShadow = useTransform(
    springY,
    [-0.5, 0, 0.5],
    [
      '0 0 0 1px rgba(212,175,55,0.08), 0 36px 70px rgba(0,0,0,0.9)',
      '0 0 0 1px rgba(212,175,55,0.06), 0 20px 50px rgba(0,0,0,0.7)',
      '0 0 0 1px rgba(212,175,55,0.08), 0 36px 70px rgba(0,0,0,0.9)',
    ]
  );

  // Moving surface highlight tracks cursor
  const [hl, setHl] = useState({ x: 50, y: 30 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
    setHl({ x: (nx + 0.5) * 100, y: (ny + 0.5) * 100 });
  }, [rawX, rawY]);

  const onLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <div
      ref={cardRef}
      style={{ perspective: '900px' }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', boxShadow }}
        className="relative rounded-[20px] overflow-hidden border border-primary/[0.08] aspect-[4/3] bg-[#080808]"
      >
        {/* Static inner-edge vignette */}
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none z-10" />

        {/* Moving surface highlight — follows cursor */}
        <div
          className="absolute inset-0 pointer-events-none z-20 rounded-[20px]"
          style={{
            background: `radial-gradient(circle at ${hl.x}% ${hl.y}%, rgba(255,255,255,0.055) 0%, transparent 52%)`,
            transition: 'background 0.08s linear',
          }}
        />

        {/* Preview content with crossfade on service change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.35 } }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.22 } }}
            className="absolute inset-0"
          >
            <ServicePreview id={services[active].id} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────── */
export default function WorkSection() {
  const [active, setActive] = useState(0);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <ServicePreviewStyles />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section header ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-4">01 / Services</p>
            <h3 className="font-serif text-5xl md:text-7xl text-white italic leading-none">Built to Grow</h3>
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            data-testid="services-cta"
            className="self-start md:self-auto flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-white/50 hover:text-primary transition-colors duration-300 cursor-hover"
          >
            Start a Project <ArrowUpRight size={14} />
          </button>
        </motion.div>

        {/* ── Main editorial layout ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-0 md:gap-20 lg:gap-28"
        >
          {/* Left: accordion list */}
          <div className="flex-1 min-w-0 border-t border-white/8">
            {services.map((service, index) => {
              const isActive = active === index;

              return (
                <div key={service.id} className="border-b border-white/8">
                  {/* ── Row trigger ─────────────────────────── */}
                  <button
                    className="w-full flex items-start gap-5 md:gap-7 py-7 md:py-9 text-left group cursor-hover"
                    onClick={() => setActive(index)}
                    aria-expanded={isActive}
                    data-testid={`service-row-${service.id}`}
                  >
                    {/* Gold active bar */}
                    <div className="flex-shrink-0 flex flex-col items-center pt-2 gap-1.5">
                      <motion.div
                        animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="w-px bg-primary origin-top"
                        style={{ height: '2.5rem' }}
                      />
                      <span
                        className={`font-mono text-[10px] tracking-widest transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-white/30 group-hover:text-white/50'
                        }`}
                      >
                        {service.id}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`font-serif leading-[1.05] transition-all duration-500 ${
                          isActive
                            ? 'text-5xl md:text-6xl lg:text-7xl text-white italic'
                            : 'text-4xl md:text-5xl lg:text-6xl text-white/45 group-hover:text-white/75'
                        }`}
                      >
                        {service.title}
                      </h4>
                      {!isActive && (
                        <p className="mt-1.5 font-mono text-[10px] tracking-widest uppercase text-white/25 group-hover:text-white/40 transition-colors duration-300">
                          {service.category}
                        </p>
                      )}
                    </div>

                    {/* Toggle icon */}
                    <div className="flex-shrink-0 pt-3 md:pt-4">
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                          isActive ? 'border-primary text-primary' : 'border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white/70'
                        }`}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.25" />
                          <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.25" />
                        </svg>
                      </motion.div>
                    </div>
                  </button>

                  {/* ── Expanded content ─────────────────────── */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={`expand-${service.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0.35, ease: EASE_IN_QUART } }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.12 } }}
                          exit={{ opacity: 0, y: 4, transition: { duration: 0.15 } }}
                          className="pl-12 md:pl-14 pb-9 md:pb-11 pr-2"
                        >
                          {/* Mobile-only preview */}
                          <div className="md:hidden mb-7 rounded-[16px] overflow-hidden border border-primary/15 aspect-[4/3]">
                            <ServicePreview id={service.id} />
                          </div>

                          <p className="font-sans text-base md:text-lg text-white/65 leading-relaxed mb-7 max-w-lg">
                            {service.description}
                          </p>

                          {/* Key outcomes */}
                          <ul className="mb-8 space-y-3">
                            {service.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <span className="w-1.5 h-px bg-primary flex-shrink-0" />
                                <span className="font-mono text-xs tracking-widest uppercase text-white/55">
                                  {outcome}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* CTA */}
                          <button
                            onClick={() => scrollTo('#contact')}
                            className="group inline-flex items-center gap-2.5 font-mono text-xs tracking-widest uppercase text-primary border border-primary/40 rounded-full px-6 py-3 hover:bg-primary hover:text-black hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-hover"
                          >
                            {service.cta}
                            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: sticky 3D tilt preview panel — desktop only */}
          <div className="hidden md:block flex-shrink-0 w-[360px] lg:w-[420px]">
            <div className="sticky top-28">
              {/* Label */}
              <p className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-4">
                Live Preview — {services[active].category}
              </p>

              {/* 3D tilt card */}
              <TiltPreviewCard active={active} />

              {/* Service indicator pills */}
              <div className="flex items-center gap-2 mt-5">
                {services.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="cursor-hover"
                    aria-label={`View ${services[i].title}`}
                  >
                    <motion.div
                      animate={{
                        width: active === i ? 20 : 6,
                        backgroundColor: active === i ? '#D4AF37' : 'rgba(255,255,255,0.18)',
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="h-[3px] rounded-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Additional services grid ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-20 md:mt-24 pt-12 border-t border-white/5"
        >
          <p className="font-mono text-primary text-[10px] tracking-widest uppercase mb-8">Also available</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            {additionalServices.map((s) => (
              <div
                key={s}
                className="group flex items-center gap-3 py-4 border-b border-white/5 hover:border-primary/25 transition-colors duration-300 cursor-hover pr-4"
              >
                <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary flex-shrink-0 transition-colors duration-300" />
                <span className="font-sans text-sm text-white/50 group-hover:text-white/85 transition-colors duration-300">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
