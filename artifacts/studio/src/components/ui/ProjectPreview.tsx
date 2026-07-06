/* ═══════════════════════════════════════════════════════════════
   ProjectPreview — realistic industry website mockups for portfolio
════════════════════════════════════════════════════════════════ */

const GOLD      = '#D4AF37';
const GOLD_DIM  = 'rgba(212,175,55,0.2)';
const GOLD_MID  = 'rgba(212,175,55,0.55)';
const WHITE_HI  = 'rgba(255,255,255,0.82)';
const WHITE_MID = 'rgba(255,255,255,0.4)';
const WHITE_LO  = 'rgba(255,255,255,0.14)';

function Bar({ w, h = 3, color, mb = 0, br = 2 }: {
  w: number; h?: number; color: string; mb?: number; br?: number;
}) {
  return <div style={{ width: w, height: h, borderRadius: br, background: color, marginBottom: mb, flexShrink: 0 }} />;
}

/* ══════════════════════════════════════════════════════════════
   1. HEALTHCARE CLINIC — clean medical website
══════════════════════════════════════════════════════════════ */
export function HealthcarePreview() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#08080f', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: '#0d0d1a', borderBottom: '1px solid rgba(100,149,237,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(100,149,237,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(100,149,237,0.3)' }}>
            <span style={{ fontSize: 10, color: '#6495ED' }}>✚</span>
          </div>
          <Bar w={52} h={5} color={WHITE_HI} br={2} />
        </div>
        <div style={{ display: 'flex', gap: 9 }}>
          {[20, 26, 22, 18].map((w, i) => <Bar key={i} w={w} h={3} color={WHITE_LO} />)}
        </div>
        <div style={{ background: 'rgba(100,149,237,0.8)', borderRadius: 10, padding: '4px 10px' }}>
          <Bar w={32} h={4} color="rgba(255,255,255,0.9)" />
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '14px 12px', background: 'linear-gradient(135deg,#0d0d1a 0%,#0a0a16 100%)', flex: '0 0 auto' }}>
        <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
          <div style={{ background: 'rgba(100,149,237,0.15)', borderRadius: 8, padding: '2px 6px' }}>
            <Bar w={52} h={3} color="rgba(100,149,237,0.8)" />
          </div>
        </div>
        <Bar w={110} h={7} color={WHITE_HI} mb={3} br={3} />
        <Bar w={90} h={7} color="rgba(255,255,255,0.55)" mb={8} br={3} />
        <Bar w={130} h={3} color={WHITE_LO} mb={3} />
        <Bar w={110} h={3} color="rgba(255,255,255,0.09)" mb={10} />
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ background: 'rgba(100,149,237,0.85)', borderRadius: 20, padding: '4px 12px' }}>
            <Bar w={50} h={4} color="rgba(255,255,255,0.9)" />
          </div>
          <div style={{ border: '1px solid rgba(100,149,237,0.3)', borderRadius: 20, padding: '4px 12px' }}>
            <Bar w={38} h={4} color={WHITE_MID} />
          </div>
        </div>
      </div>

      {/* Doctors row */}
      <div style={{ padding: '10px 12px', background: '#0a0a12' }}>
        <Bar w={60} h={3} color="rgba(100,149,237,0.5)" mb={7} />
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ flex: 1, background: '#0f0f1e', borderRadius: 8, padding: 7, border: '1px solid rgba(100,149,237,0.1)', textAlign: 'center' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,rgba(100,149,237,0.3),rgba(100,149,237,0.1))', margin: '0 auto 5px', border: '1px solid rgba(100,149,237,0.25)' }} />
              <Bar w={36} h={4} color={WHITE_HI} mb={2} />
              <Bar w={28} h={3} color={WHITE_LO} />
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{ padding: '10px 12px', flex: 1, background: '#080814' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
          {['Cardiology', 'Orthopedics', 'Pediatrics', 'Diagnostics'].map((s) => (
            <div key={s} style={{ background: '#0d0d1a', borderRadius: 7, padding: '6px 8px', border: '1px solid rgba(100,149,237,0.08)', display: 'flex', alignItems: 'center', gap: 5 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(100,149,237,0.6)', flexShrink: 0 }} />
              <Bar w={40} h={3} color={WHITE_MID} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   2. MODERN GYM — dramatic dark fitness brand
══════════════════════════════════════════════════════════════ */
export function GymPreview() {
  const stats = [['2500+', 'Members'], ['50+', 'Classes'], ['15+', 'Trainers']];
  return (
    <div style={{ width: '100%', height: '100%', background: '#080808', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: '#0f0f0f', borderBottom: '1px solid rgba(255,60,0,0.12)' }}>
        <Bar w={60} h={6} color={WHITE_HI} br={2} />
        <div style={{ display: 'flex', gap: 8 }}>
          {[20, 26, 22].map((w, i) => <Bar key={i} w={w} h={3} color={WHITE_LO} />)}
        </div>
        <div style={{ background: '#E03A0C', borderRadius: 10, padding: '3px 9px' }}>
          <Bar w={28} h={4} color="rgba(255,255,255,0.9)" />
        </div>
      </div>

      {/* Hero — diagonal accent */}
      <div style={{ padding: '14px 12px 12px', background: '#0a0a0a', position: 'relative', overflow: 'hidden', flex: '0 0 auto' }}>
        {/* Diagonal red slash */}
        <div style={{ position: 'absolute', top: 0, right: -20, width: 80, height: '100%', background: 'rgba(224,58,12,0.07)', transform: 'skewX(-12deg)', pointerEvents: 'none' }} />
        <div style={{ background: '#E03A0C', display: 'inline-block', borderRadius: 4, padding: '2px 6px', marginBottom: 6 }}>
          <Bar w={44} h={3} color="rgba(255,255,255,0.9)" />
        </div>
        <Bar w={120} h={9} color={WHITE_HI} mb={3} br={3} />
        <Bar w={96} h={9} color="rgba(255,255,255,0.5)" mb={8} br={3} />
        <Bar w={130} h={3} color={WHITE_LO} mb={3} />
        <Bar w={110} h={3} color="rgba(255,255,255,0.08)" mb={10} />
        <div style={{ display: 'inline-block', background: GOLD, borderRadius: 20, padding: '5px 14px', marginRight: 7 }}>
          <Bar w={42} h={5} color="rgba(0,0,0,0.6)" />
        </div>
        <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: '5px 12px' }}>
          <Bar w={34} h={5} color={WHITE_MID} />
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {stats.map(([val, label]) => (
          <div key={label} style={{ flex: 1, padding: '8px 6px', textAlign: 'center', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: GOLD, fontFamily: 'monospace', marginBottom: 2 }}>{val}</div>
            <div style={{ fontSize: 5.5, color: WHITE_LO, fontFamily: 'sans-serif', letterSpacing: 0.5 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Program cards */}
      <div style={{ padding: '10px 12px', flex: 1, background: '#080808' }}>
        <Bar w={58} h={3} color="rgba(255,60,0,0.5)" mb={7} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
          {['HIIT Training', 'Strength', 'Yoga Flow', 'CrossFit'].map((p) => (
            <div key={p} style={{ background: '#111', borderRadius: 7, padding: '6px 8px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Bar w={44} h={3} color={WHITE_MID} />
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#E03A0C', opacity: 0.7 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. PREMIUM RESTAURANT — elegant dark dining experience
══════════════════════════════════════════════════════════════ */
const AMBER = 'rgba(255,180,60,0.75)';
const AMBER_DIM = 'rgba(255,180,60,0.15)';

export function RestaurantPreview() {
  const dishes = [
    ['Saffron Lamb Rack', '₹ 2,400'],
    ['Truffle Risotto', '₹ 1,800'],
    ['Pan-Seared Sea Bass', '₹ 2,100'],
    ['Dark Chocolate Fondant', '₹ 650'],
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: '#06050a', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', background: '#09080f', borderBottom: '1px solid rgba(255,180,60,0.1)' }}>
        <Bar w={60} h={6} color="rgba(255,200,100,0.8)" br={2} />
        <div style={{ display: 'flex', gap: 9 }}>
          {[22, 26, 24].map((w, i) => <Bar key={i} w={w} h={3} color={WHITE_LO} />)}
        </div>
        <div style={{ border: '1px solid rgba(255,180,60,0.5)', borderRadius: 10, padding: '3px 9px' }}>
          <Bar w={36} h={4} color={AMBER} />
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '14px 12px 12px', position: 'relative', overflow: 'hidden', flex: '0 0 auto', background: 'linear-gradient(160deg,#0d0910 0%,#070510 100%)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 60% 40%, rgba(255,150,30,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <span style={{ fontSize: 7, fontFamily: 'serif', color: AMBER, letterSpacing: 2.5, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Fine Dining Experience</span>
        <Bar w={100} h={8} color="rgba(255,200,120,0.8)" mb={3} br={3} />
        <Bar w={80} h={8} color="rgba(255,200,120,0.5)" mb={9} br={3} />
        <Bar w={130} h={3} color={WHITE_LO} mb={3} />
        <Bar w={110} h={3} color="rgba(255,255,255,0.07)" mb={10} />
        <div style={{ display: 'flex', gap: 7 }}>
          <div style={{ background: GOLD, borderRadius: 20, padding: '4px 12px' }}>
            <Bar w={44} h={4} color="rgba(0,0,0,0.55)" />
          </div>
          <div style={{ border: '1px solid rgba(255,180,60,0.3)', borderRadius: 20, padding: '4px 11px' }}>
            <Bar w={36} h={4} color={AMBER} />
          </div>
        </div>
      </div>

      {/* Divider with ornament */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: '#08060e' }}>
        <div style={{ flex: 1, height: 1, background: AMBER_DIM }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD_MID }} />
        <div style={{ flex: 1, height: 1, background: AMBER_DIM }} />
      </div>

      {/* Menu */}
      <div style={{ padding: '8px 12px', flex: 1, background: '#07060c' }}>
        <Bar w={30} h={3} color={AMBER} mb={7} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {dishes.map(([name, price]) => (
            <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 5, borderBottom: '1px solid rgba(255,180,60,0.07)' }}>
              <div>
                <Bar w={78} h={4} color={WHITE_HI} mb={2} br={2} />
                <Bar w={52} h={3} color={WHITE_LO} />
              </div>
              <span style={{ fontSize: 7.5, color: GOLD, fontFamily: 'monospace', fontWeight: 600, flexShrink: 0 }}>{price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Default export: pick by id ── */
export default function ProjectPreview({ id }: { id: string }) {
  if (id === '01') return <HealthcarePreview />;
  if (id === '02') return <GymPreview />;
  if (id === '03') return <RestaurantPreview />;
  return null;
}
