import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ProjectPreview from '@/components/ui/ProjectPreview';

const projects = [
  {
    id: '01',
    title: 'Healthcare Clinic',
    category: 'Website & Local SEO',
    description: 'Full website redesign with online appointment booking and local SEO optimization.',
  },
  {
    id: '02',
    title: 'Modern Gym',
    category: 'Brand Identity & Lead Capture',
    description: 'Brand identity, website, and lead capture system for a modern fitness brand.',
  },
  {
    id: '03',
    title: 'Premium Restaurant',
    category: 'Digital Presence',
    description: 'Menu showcase website with Google Maps integration and social media setup.',
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

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <style>{`
        @keyframes portFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-2.5px); }
        }
        .port-float { animation: portFloat 5s ease-in-out infinite; }
        .port-float:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">02 / Portfolio</h2>
          <div className="flex items-end justify-between">
            <h3 className="font-serif text-5xl md:text-7xl text-white italic">The Standard</h3>
            <p className="hidden md:block font-mono text-xs text-white/30 max-w-xs text-right leading-relaxed">
              Demonstration projects — real client work added as engagements are completed.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              data-testid={`portfolio-card-${project.id}`}
              className="group flex flex-col gap-4 cursor-hover"
            >
              {/* Preview card */}
              <div
                className="
                  port-float relative overflow-hidden
                  rounded-[24px]
                  border border-[#D4AF37]/18
                  shadow-[0_0_0_1px_rgba(212,175,55,0.05),0_8px_32px_rgba(0,0,0,0.55),0_0_50px_rgba(212,175,55,0.03)]
                  group-hover:border-[#D4AF37]/40
                  group-hover:shadow-[0_0_0_1px_rgba(212,175,55,0.09),0_12px_50px_rgba(0,0,0,0.65),0_0_70px_rgba(212,175,55,0.1)]
                  group-hover:-translate-y-2
                  transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]
                  aspect-[4/3]
                "
                style={{ animationDelay: `${index * 0.55}s` }}
              >
                {/* Glass inner highlight */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none z-10" />

                {/* Live mockup */}
                <div className="absolute inset-0">
                  <ProjectPreview id={project.id} />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/72 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-20 flex items-end rounded-[24px]">
                  <div className="p-5 pb-6">
                    <p className="font-sans text-white/85 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Corner CTA */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30">
                  <ArrowUpRight className="text-white" size={14} />
                </div>

                {/* Index badge */}
                <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/70 z-30 bg-black/40 rounded-md px-1.5 py-0.5 backdrop-blur-sm border border-primary/10">
                  {project.id}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="font-serif text-2xl text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="md:hidden mt-8 font-mono text-xs text-white/30 text-center leading-relaxed">
          Demonstration projects — real client work added as engagements are completed.
        </p>
      </div>
    </section>
  );
}
