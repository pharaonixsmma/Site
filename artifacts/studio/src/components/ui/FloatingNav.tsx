import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logoUrl from '@assets/file_0000000028dc720ba9729351fb27a291_1783271991817.png';

export default function FloatingNav() {
  const { scrollY } = useScroll();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(23, 23, 23, 0.2)', 'rgba(23, 23, 23, 0.88)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(8px)', 'blur(20px)']
  );

  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(212, 175, 55, 0.1)', 'rgba(212, 175, 55, 0.3)']
  );

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'about', 'process', 'contact'];
    const handleScroll = () => {
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
    <>
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-4 md:gap-8"
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
        <button
          onClick={() => scrollTo('#home')}
          className="flex items-center gap-2 cursor-hover"
          data-testid="nav-logo"
        >
          <img
            src={logoUrl}
            alt="PHARAONIX"
            className="w-8 h-8 object-contain rounded-full"
          />
          <span className="font-mono font-bold text-sm tracking-widest text-primary hidden sm:block">PHARAONIX</span>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
              className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                activeSection === link.name.toLowerCase() ? 'text-primary' : 'text-white/70 hover:text-primary'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo('#contact')}
          data-testid="nav-cta"
          className="hidden md:flex items-center gap-2 bg-primary text-black font-mono text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full hover:bg-white transition-colors duration-300 cursor-hover"
        >
          Book Free Call
        </button>

        <button
          className="md:hidden text-white/70 hover:text-primary transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="nav-mobile-toggle"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </motion.nav>

      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="font-serif italic text-4xl text-white hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="mt-4 bg-primary text-black font-mono text-sm font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white transition-colors duration-300"
          >
            Book Free Consultation
          </button>
        </motion.div>
      )}
    </>
  );
}
