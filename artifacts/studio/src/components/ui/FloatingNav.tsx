import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(23, 23, 23, 0.2)', 'rgba(23, 23, 23, 0.85)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(8px)', 'blur(16px)']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(212, 175, 55, 0.1)', 'rgba(212, 175, 55, 0.3)']
  );

  const links = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'process', 'contact'];
      let current = '';
      
      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= 0) {
            current = section;
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 flex items-center gap-8"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        border: '1px solid',
        borderColor,
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="font-mono font-bold text-lg tracking-widest cursor-pointer" onClick={() => scrollTo('#home')}>
        STUDIO
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollTo(link.href)}
            className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
              activeSection === link.name.toLowerCase() ? 'text-primary' : 'text-white hover:text-primary/70'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
