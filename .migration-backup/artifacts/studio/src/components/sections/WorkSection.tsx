import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ServicePreview, { ServicePreviewStyles } from '@/components/ui/ServicePreview';

const services = [
  {
    id: '01',
    title: 'Website Development',
    category: 'Custom Web Presence',
    description: 'Custom websites that load fast, look sharp, and turn visitors into customers.',
  },
  {
    id: '02',
    title: 'Social Media Management',
    category: 'Brand & Content',
    description: 'Consistent, engaging content that builds your brand on every platform.',
  },
  {
    id: '03',
    title: 'AI & Automation',
    category: 'Growth Systems',
    description: 'Intelligent workflows that save time, capture leads, and keep your business running 24/7.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { type: 'spring' as const, damping: 22, stiffness: 90 },
  },
};

export default function WorkSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <ServicePreviewStyles />

      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-3px); }
        }
        .card-float { animation: cardFloat 4s ease-in-out infinite; }
        .card-float:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24 flex items-end justify-between"
        >
          <div>
            <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">01 / Services</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white italic">Built to Grow</h3>
          </div>
          <button
            onClick={() => scrollTo('#contact')}
            data-testid="services-cta"
            className="hidden md:flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-white/70 hover:text-primary transition-colors cursor-hover"
          >
            All Services <ArrowUpRight size={16} />
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              data-testid={`service-card-${service.id}`}
              className={`group flex flex-col gap-6 cursor-hover ${index === 1 ? 'md:mt-32' : ''} ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              {/* Preview card */}
              <div
                className={`
                  card-float relative overflow-hidden
                  rounded-[24px]
                  border border-[#D4AF37]/20
                  shadow-[0_0_0_1px_rgba(212,175,55,0.06),0_8px_40px_rgba(0,0,0,0.6),0_0_60px_rgba(212,175,55,0.04)]
                  group-hover:border-[#D4AF37]/45
                  group-hover:shadow-[0_0_0_1px_rgba(212,175,55,0.1),0_16px_60px_rgba(0,0,0,0.7),0_0_80px_rgba(212,175,55,0.12)]
                  group-hover:-translate-y-2
                  transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                  aspect-[4/3] ${index === 2 ? 'md:aspect-[21/9]' : ''}
                `}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {/* Glassmorphism inner edge highlight */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none z-10" />

                {/* The live preview */}
                <div className="absolute inset-0">
                  <ServicePreview id={service.id} />
                </div>

                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20 flex items-center justify-center rounded-[24px]">
                  <p className="font-sans text-white/90 text-sm text-center max-w-[75%] leading-relaxed px-4">
                    {service.description}
                  </p>
                </div>

                {/* Corner CTA */}
                <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                  <ArrowUpRight className="text-white" size={18} />
                </div>

                {/* Index badge */}
                <div className="absolute top-5 left-5 font-mono text-xs text-primary/70 z-30 bg-black/40 rounded-md px-2 py-1 backdrop-blur-sm border border-primary/10">
                  {service.id}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif text-3xl md:text-4xl text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">
                  {service.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-white/5"
        >
          <p className="font-mono text-primary text-xs tracking-widest uppercase mb-8">Also available</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Graphic Design',
              'Digital Advertising',
              'Local SEO',
              'Customer Support Automation',
              'Booking Automation',
              'AI Consultation',
            ].map((s) => (
              <div key={s} className="group flex items-center gap-3 py-4 border-b border-white/5 hover:border-primary/30 transition-colors cursor-hover">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors flex-shrink-0" />
                <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors">{s}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center md:hidden">
          <button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-white/70 hover:text-primary transition-colors cursor-hover"
          >
            All Services <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
