import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Aetherial',
    category: 'Spatial Web App',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #3d2c00 100%)'
  },
  {
    id: '02',
    title: 'Nexus',
    category: 'E-Commerce Experience',
    gradient: 'linear-gradient(135deg, #0d0d0d 0%, #4a3b0c 100%)'
  },
  {
    id: '03',
    title: 'Obelisk',
    category: 'Brand Identity',
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
  return (
    <section id="work" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24 flex items-end justify-between"
        >
          <div>
            <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-4">02 / Selected Work</h2>
            <h3 className="font-serif text-5xl md:text-7xl text-white italic">Featured Cases</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-white/70 hover:text-primary transition-colors cursor-hover">
            View Archive <ArrowUpRight size={16} />
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              className={`group relative flex flex-col gap-6 cursor-hover ${index === 1 ? 'md:mt-32' : ''} ${index === 2 ? 'md:col-span-2' : ''}`}
            >
              <div 
                className={`relative overflow-hidden bg-card rounded-sm aspect-[4/3] ${index === 2 ? 'md:aspect-[21/9]' : ''}`}
                style={{ background: project.gradient }}
              >
                <div className="absolute inset-0 border border-white/5 group-hover:border-primary/50 transition-colors duration-500 rounded-sm z-10" />
                
                {/* Simulated image element */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay" />
                <div className="absolute inset-0 scale-[1.01] group-hover:scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
                
                <div className="absolute top-6 left-6 font-mono text-primary font-bold z-20">
                  {project.id}
                </div>
                
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-serif text-3xl md:text-4xl text-white group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="font-mono text-sm text-muted-foreground uppercase tracking-widest">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 flex justify-center md:hidden">
          <button className="flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-white/70 hover:text-primary transition-colors cursor-hover">
            View Archive <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
