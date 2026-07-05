import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logoUrl from '@assets/file_00000000a29071fabf2b5caf9469536a_1783276703702.png';

interface LoaderOverlayProps {
  onComplete: () => void;
}

export default function LoaderOverlay({ onComplete }: LoaderOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Pre-hide elements
    gsap.set([logoWrapRef.current, taglineRef.current], { opacity: 0 });
    gsap.set(glowRef.current, { opacity: 0, scale: 0.7 });

    const tl = gsap.timeline();

    // 1. Central glow blooms
    tl.to(glowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.22,
      ease: 'power2.out',
    })

    // 2. Logo fades in, rises gently
    .fromTo(
      logoWrapRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.32, ease: 'power3.out' },
      '-=0.06'
    )

    // 2b. Subtle 3D rock — logo gently pivots to centre after entering
    .fromTo(
      logoRef.current,
      { rotateY: -4, rotateX: 2 },
      { rotateY: 0, rotateX: 0, duration: 0.45, ease: 'power2.out' },
      '<'
    )

    // 3. Tagline fades in beneath
    .fromTo(
      taglineRef.current,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' },
      '-=0.04'
    )

    // 4. Gold sweep passes across the logo
    .fromTo(
      sweepRef.current,
      { x: '-110%', opacity: 1 },
      { x: '210%', opacity: 1, duration: 0.28, ease: 'power2.inOut' },
      '+=0.04'
    )

    // 5. Dissolve: canvas particles burst, logo fades
    .call(() => {
      launchParticles(canvasRef.current, logoRef.current);
    })
    .to(
      [logoWrapRef.current, taglineRef.current, glowRef.current],
      { opacity: 0, duration: 0.22, ease: 'power2.in', stagger: 0.04 },
      '+=0.04'
    )

    // 6. Container lifts off — reveals homepage beneath
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.34,
      ease: 'expo.inOut',
      onComplete,
    }, '-=0.1');
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#090909' }}
    >
      {/* Radial golden glow */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: 'radial-gradient(ellipse 55% 38% at 50% 50%, rgba(212,175,55,0.13) 0%, rgba(212,175,55,0.04) 45%, transparent 72%)',
        }}
      />

      {/* Canvas for particle burst (sits behind logo visually, drawn on top during dissolve) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Logo + sweep overlay */}
      <div ref={logoWrapRef} className="relative z-10 flex flex-col items-center gap-5">

        {/* Logo image with sweep clipped inside */}
        <div className="relative overflow-hidden rounded-sm" style={{ perspective: '700px' }}>
          <img
            ref={logoRef}
            src={logoUrl}
            alt="PHARAONIX"
            className="w-48 sm:w-56 md:w-64 h-auto object-contain block"
            draggable={false}
            style={{
              WebkitMaskImage:
                'radial-gradient(ellipse 78% 82% at 50% 44%, black 28%, rgba(0,0,0,0.6) 55%, transparent 78%)',
              maskImage:
                'radial-gradient(ellipse 78% 82% at 50% 44%, black 28%, rgba(0,0,0,0.6) 55%, transparent 78%)',
              filter:
                'drop-shadow(0 0 28px rgba(212,175,55,0.6)) drop-shadow(0 6px 20px rgba(180,130,10,0.4))',
              transform: 'perspective(700px) rotateY(-4deg) rotateX(2deg)',
            }}
          />
          {/* Gold light sweep */}
          <div
            ref={sweepRef}
            className="absolute inset-y-0 pointer-events-none"
            style={{
              width: '30%',
              left: 0,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.22) 40%, rgba(255,248,200,0.38) 50%, rgba(212,175,55,0.22) 60%, transparent 100%)',
              transform: 'translateX(-110%)',
            }}
          />
        </div>

        {/* Metallic shimmer tagline */}
        <div
          ref={taglineRef}
          className="font-mono text-xs sm:text-sm tracking-[0.45em] uppercase"
          style={{
            background:
              'linear-gradient(90deg, #7a5c10 0%, #D4AF37 35%, #fff5c0 50%, #D4AF37 65%, #7a5c10 100%)',
            backgroundSize: '250% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'loaderShimmer 1.6s linear infinite',
          }}
        >
          PHARAONIX
        </div>
      </div>

      <style>{`
        @keyframes loaderShimmer {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </div>
  );
}

/* ─── Canvas particle burst ─────────────────────────────────────────────── */
function launchParticles(
  canvas: HTMLCanvasElement | null,
  logoEl: HTMLImageElement | null,
) {
  if (!canvas || !logoEl) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = canvas.offsetHeight * dpr;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.scale(dpr, dpr);

  const W = canvas.offsetWidth;
  const H = canvas.offsetHeight;

  // Seed particles from the logo bounding rect
  const rect = logoEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const hw = rect.width * 0.45;
  const hh = rect.height * 0.45;

  type Particle = {
    x: number; y: number;
    vx: number; vy: number;
    r: number; alpha: number;
    gold: number; // 0=dark gold, 1=bright gold
  };

  const count = 52;
  const particles: Particle[] = Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1.4 + Math.random() * 3.2;
    return {
      x: cx + (Math.random() - 0.5) * hw * 2,
      y: cy + (Math.random() - 0.5) * hh * 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 0.6,
      r: 0.6 + Math.random() * 1.6,
      alpha: 0.7 + Math.random() * 0.3,
      gold: Math.random(),
    };
  });

  const colors = ['#D4AF37', '#c9a227', '#e8cb6a', '#fff0a0', '#a07820'];
  let frame = 0;
  const totalFrames = 28;

  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    const progress = frame / totalFrames;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // subtle gravity
      p.alpha -= 0.026 + progress * 0.01;
      p.r *= 0.982;

      if (p.alpha <= 0) return;

      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = colors[Math.floor(p.gold * colors.length)];
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.2, p.r), 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    frame++;
    if (frame < totalFrames) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, W, H);
  };

  requestAnimationFrame(tick);
}
