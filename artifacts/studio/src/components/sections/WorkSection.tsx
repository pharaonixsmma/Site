import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Website Development',
    category: 'Custom Web Presence',
    description: 'Custom websites that load fast, look sharp, and turn visitors into customers.',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #3d2c00 100%)'
  },
  {
    id: '02',
    title: 'Social Media Management',
    category: 'Brand & Content',
    description: 'Consistent, engaging content that builds your brand on every platform.',
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #4a3b0c 100%)'
  },
  {
    id: '03',
    title: 'AI & Automation',
    category: 'Growth Systems',
    description: 'Intelligent workflows that save time, capture leads, and keep your business running 24/7.',
    gradient: 'linear-gradient(135deg, #111111 0%, #2a2000 100%)'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100
    }
  }
};

export default function WorkSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              data-testid={`service-card-${service.id}`}
              className={`group relative flex flex-col gap-6 cursor-hover ${index === 1 ? 'md:mt-32' : ''} ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <div
                className={`relative overflow-hidden bg-card rounded-sm aspect-[4/3] ${index === 2 ? 'md:aspect-[21/9]' : ''}`}
                style={{ background: service.gradient }}
              >
                <div className="absolute inset-0 border border-white/5 group-hover:border-primary/50 transition-colors duration-500 rounded-sm z-10" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
                <div className="absolute inset-0 scale-[1.01] group-hover:scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

                <div className="absolute top-6 left-6 font-mono text-primary font-bold z-20">
                  {service.id}
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-sans text-white/90 text-sm text-center max-w-xs px-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif text-3xl md:text-4xl text-white group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">{service.category}</p>
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
              'AI Consultation'
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
