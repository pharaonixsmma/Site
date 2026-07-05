import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Healthcare Clinic',
    category: 'Website & Local SEO',
    description: 'Full website redesign with online appointment booking and local SEO optimization.',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #2d2200 100%)'
  },
  {
    id: '02',
    title: 'Modern Gym',
    category: 'Brand Identity & Lead Capture',
    description: 'Brand identity, website, and lead capture system for a modern fitness brand.',
    gradient: 'linear-gradient(135deg, #0f0f0f 0%, #3a2800 100%)'
  },
  {
    id: '03',
    title: 'Premium Restaurant',
    category: 'Digital Presence',
    description: 'Menu showcase website with Google Maps integration and social media setup.',
    gradient: 'linear-gradient(135deg, #111 0%, #2f2000 100%)'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 }
  }
};

const cardVariants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 22,
      stiffness: 90
    }
  }
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              data-testid={`portfolio-card-${project.id}`}
              className="group relative flex flex-col gap-4 cursor-hover"
            >
              <div
                className="relative overflow-hidden bg-background rounded-sm aspect-[4/3]"
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 border border-white/5 group-hover:border-primary/40 transition-colors duration-500 rounded-sm z-10" />
                <div className="absolute inset-0 scale-[1.01] group-hover:scale-[1.06] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent" />

                <div className="absolute top-5 left-5 font-mono text-primary font-bold text-sm z-20">
                  {project.id}
                </div>

                <div className="absolute inset-x-5 bottom-5 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <p className="font-sans text-white/80 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <ArrowUpRight className="text-white" size={16} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="font-serif text-2xl text-white group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{project.category}</p>
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
