import { ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative pt-32 pb-12 bg-card overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-[100%] translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="font-serif italic font-light text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-white mb-8">
          Let's create<br/>
          something<br/>
          extraordinary
        </h2>
        
        <p className="font-sans text-muted-foreground text-lg mb-12 max-w-md">
          Ready to push boundaries? We partner with ambitious brands to build digital experiences that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-24">
          <button className="group relative px-8 py-4 rounded-full bg-primary text-black font-sans text-sm tracking-widest uppercase overflow-hidden cursor-hover flex items-center justify-center gap-3">
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10 font-bold">Start a Project</span>
            <ArrowRight className="relative z-10" size={16} />
          </button>
          
          <button className="group px-8 py-4 rounded-full border border-white/20 text-white font-sans text-sm tracking-widest uppercase hover:border-white transition-colors cursor-hover">
            See Our Work
          </button>
        </div>
        
        <div className="w-full h-px bg-white/10 mb-8" />
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="mailto:hello@studio.com" className="font-mono text-xl md:text-2xl text-white hover:text-primary transition-colors cursor-hover">
            hello@studio.com
          </a>
          
          <div className="font-sans text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
