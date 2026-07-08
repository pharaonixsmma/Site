/* ═══════════════════════════════════════════════════════════════
   ServicePreview — rich live-style mockups for each service card
════════════════════════════════════════════════════════════════ */

const GOLD = '#D4AF37';
const GOLD_DIM = 'rgba(212,175,55,0.18)';
const GOLD_MID = 'rgba(212,175,55,0.45)';
const WHITE_HI  = 'rgba(255,255,255,0.75)';
const WHITE_MID = 'rgba(255,255,255,0.35)';
const WHITE_LO  = 'rgba(255,255,255,0.14)';

/* ─── Shared tiny bar helper ─────────────────────────── */
function Bar({ w, h = 3, color = WHITE_MID, mb = 0, br = 2 }: {
  w: number; h?: number; color?: string; mb?: number; br?: number;
}) {
  return (
    <div style={{ width: w, height: h, borderRadius: br, background: color, marginBottom: mb, flexShrink: 0 }} />
  );
}

/* ══════════════════════════════════════════════════════════════
   1. WEBSITE DEVELOPMENT
   Browser chrome with seamlessly auto-scrolling site mockup
══════════════════════════════════════════════════════════════ */

function SitePageContent() {
  return (
    <div>
      {/* Site Nav */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', background: GOLD }} />
          <Bar w={34} h={4} color={WHITE_HI} />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[22, 28, 20].map((w, i) => <Bar key={i} w={w} h={3} color={WHITE_LO} />)}
        </div>
        <div style={{ background: GOLD, borderRadius: 10, padding: '3px 9px' }}>
          <Bar w={28} h={4} color="rgba(0,0,0,0.55)" />
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: '14px 10px 12px', background: 'linear-gradient(135deg,#111 0%,#1b1400 100%)' }}>
        <Bar w={52} h={3} color={GOLD_MID} mb={6} />
        <Bar w={108} h={7} color={WHITE_HI} mb={4} br={3} />
        <Bar w={88} h={7} color="rgba(255,255,255,0.55)" mb={8} br={3} />
        <Bar w={126} h={3} color={WHITE_LO} mb={3} />
        <Bar w={106} h={3} color="rgba(255,255,255,0.1)" mb={10} />
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ background: GOLD, borderRadius: 20, padding: '4px 12px' }}><Bar w={38} h={4} color="rgba(0,0,0,0.5)" /></div>
          <div style={{ border: '1px solid rgba(255,255,255,0.28)', borderRadius: 20, padding: '4px 12px' }}><Bar w={30} h={4} color={WHITE_MID} /></div>
        </div>
      </div>

      {/* Service cards grid */}
      <div style={{ padding: '10px', background: '#0c0c0c' }}>
        <Bar w={60} h={3} color={GOLD_MID} mb={7} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 5 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ background: '#181818', borderRadius: 8, padding: 7, border: `1px solid ${GOLD_DIM}` }}>
              <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(212,175,55,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD_MID }} />
              </div>
              <Bar w={36} h={4} color="rgba(255,255,255,0.55)" mb={3} />
              <Bar w={28} h={3} color={WHITE_LO} />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div style={{ margin: '0 10px 10px', padding: 9, borderRadius: 8, background: '#161616', border: `1px solid ${GOLD_DIM}` }}>
        <div style={{ display: 'flex', gap: 3, marginBottom: 5 }}>
          {[1,2,3,4,5].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: 1, background: 'rgba(212,175,55,0.7)' }} />)}
        </div>
        <Bar w={180} h={3} color={WHITE_LO} mb={3} />
        <Bar w={140} h={3} color="rgba(255,255,255,0.1)" mb={6} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
          <Bar w={44} h={3} color={WHITE_MID} />
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ padding: '12px 10px', textAlign: 'center', background: 'linear-gradient(to top, rgba(212,175,55,0.07),transparent)' }}>
        <Bar w={80} h={7} color="rgba(255,255,255,0.6)" mb={5} br={3} />
        <Bar w={60} h={3} color={WHITE_LO} mb={9} />
        <div style={{ display: 'inline-block', background: GOLD, borderRadius: 20, padding: '5px 16px' }}>
          <Bar w={44} h={4} color="rgba(0,0,0,0.5)" />
        </div>
      </div>
    </div>
  );
}

export function WebDevPreview() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Browser chrome */}
      <div style={{ flexShrink: 0, background: '#1c1c1c', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 7 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div style={{ flex: 1, background: '#111', borderRadius: 6, padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: GOLD_MID, flexShrink: 0 }} />
          <span style={{ fontSize: 6.5, fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)', letterSpacing: 0.3 }}>yourclient.in</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <Bar w={10} h={3} color={WHITE_LO} />
          <Bar w={10} h={3} color={WHITE_LO} />
        </div>
      </div>
      {/* Scrolling site */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <div className="svc-scroll-site">
          <SitePageContent />
          <SitePageContent />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   2. SOCIAL MEDIA MANAGEMENT
   Instagram-style profile + vertically scrolling post feed
══════════════════════════════════════════════════════════════ */

const POST_DATA = [
  { bg: 'linear-gradient(135deg,#1a1200 0%,#3d2c00 100%)', tag: 'DIGITAL GROWTH', accent: GOLD },
  { bg: 'linear-gradient(135deg,#0d0d0d 0%,#1a1a1a 100%)', tag: 'BRAND STRATEGY', accent: 'rgba(255,255,255,0.7)' },
  { bg: 'linear-gradient(135deg,#101008 0%,#2a2000 100%)', tag: 'SOCIAL REACH', accent: GOLD },
  { bg: 'linear-gradient(135deg,#0a0a14 0%,#141422 100%)', tag: 'CONTENT PLAN', accent: 'rgba(180,180,255,0.7)' },
];

function PostFeed() {
  return (
    <div>
      {[...POST_DATA, ...POST_DATA].map((p, i) => (
        <div key={i} style={{ margin: '0 8px 8px', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Post image area */}
          <div style={{ height: 70, background: p.bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(212,175,55,0.15)', border: `1px solid ${p.accent}`, margin: '0 auto 5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 14, height: 14, borderRadius: '50%', background: p.accent, opacity: 0.7 }} />
              </div>
              <span style={{ fontSize: 6, fontFamily: 'monospace', color: p.accent, letterSpacing: 1.2, textTransform: 'uppercase' }}>{p.tag}</span>
            </div>
            {/* Engagement badge */}
            <div style={{ position: 'absolute', top: 5, right: 5, background: 'rgba(0,0,0,0.6)', borderRadius: 6, padding: '2px 5px', backdropFilter: 'blur(4px)' }}>
              <span style={{ fontSize: 5.5, color: GOLD, fontFamily: 'monospace' }}>↑ {(1.2 + i * 0.3).toFixed(1)}K</span>
            </div>
          </div>
          {/* Post footer */}
          <div style={{ background: '#111', padding: '6px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 6, color: WHITE_MID, fontFamily: 'monospace' }}>♥ {(0.8 + i * 0.2).toFixed(1)}K</span>
              <span style={{ fontSize: 6, color: WHITE_LO, fontFamily: 'monospace' }}>💬 {24 + i * 7}</span>
            </div>
            <Bar w={28} h={3} color={WHITE_LO} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function SocialPreview() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0a0a0a', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Profile header */}
      <div style={{ flexShrink: 0, padding: '10px 10px 8px', background: '#111', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg,${GOLD},#8a6e1a)`, border: '2px solid rgba(212,175,55,0.4)', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
              <Bar w={60} h={5} color={WHITE_HI} br={2} />
              <div style={{ background: GOLD, borderRadius: 8, padding: '1px 6px' }}><Bar w={20} h={3} color="rgba(0,0,0,0.6)" /></div>
            </div>
            <Bar w={44} h={3} color={WHITE_MID} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 8, paddingTop: 7, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {[['248', 'Posts'], ['12.4K', 'Followers'], ['892', 'Following']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: GOLD, fontFamily: 'monospace' }}>{val}</div>
              <div style={{ fontSize: 6, color: WHITE_LO, fontFamily: 'sans-serif' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Scrolling feed */}
      <div style={{ flex: 1, overflow: 'hidden', paddingTop: 8 }}>
        <div className="svc-scroll-social">
          <PostFeed />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   3. AI & AUTOMATION
   Dark analytics dashboard with animated SVG node network
══════════════════════════════════════════════════════════════ */

function AINetworkSVG() {
  const nodes = [
    { cx: 55,  cy: 55,  r: 6 },
    { cx: 130, cy: 35,  r: 5 },
    { cx: 200, cy: 60,  r: 7 },
    { cx: 270, cy: 38,  r: 5 },
    { cx: 150, cy: 95,  r: 5 },
    { cx: 240, cy: 105, r: 6 },
    { cx: 42,  cy: 110, r: 4 },
    { cx: 310, cy: 85,  r: 5 },
  ];
  const edges = [[0,1],[1,2],[2,3],[3,7],[1,4],[4,5],[2,5],[0,6],[6,4],[5,7]];
  const durations = [2.8, 2.2, 3.1, 2.6, 3.4, 2.0, 2.9, 3.2, 2.5, 3.0];

  return (
    <svg width="100%" height="100%" viewBox="0 0 340 145" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={GOLD} stopOpacity="0.4" />
          <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke={GOLD} strokeWidth="0.7" strokeOpacity="0.2">
          <animate attributeName="stroke-opacity" values="0.12;0.35;0.12" dur={`${durations[i]}s`} repeatCount="indefinite" />
        </line>
      ))}

      {/* Flowing dots along edges */}
      {edges.slice(0, 6).map(([a, b], i) => (
        <circle key={`fd-${i}`} r="1.8" fill={GOLD} opacity="0.8">
          <animateMotion
            dur={`${2.5 + i * 0.4}s`}
            repeatCount="indefinite"
            path={`M ${nodes[a].cx} ${nodes[a].cy} L ${nodes[b].cx} ${nodes[b].cy}`}
          />
          <animate attributeName="opacity" values="0;0.9;0" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Node glows */}
      {nodes.map((n, i) => (
        <circle key={`halo-${i}`} cx={n.cx} cy={n.cy} r={n.r + 6} fill={GOLD} fillOpacity="0.07">
          <animate attributeName="r" values={`${n.r + 4};${n.r + 11};${n.r + 4}`} dur={`${2 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.05;0.16;0.05" dur={`${2 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Node cores */}
      {nodes.map((n, i) => (
        <circle key={`n-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={GOLD} filter="url(#glow)">
          <animate attributeName="opacity" values="0.65;1;0.65" dur={`${2 + (i % 4) * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

export function AIPreview() {
  const bars = [65, 45, 80, 35, 90, 55, 70, 42, 85, 60];
  return (
    <div style={{ width: '100%', height: '100%', background: '#070710', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '10px' }}>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div>
          <Bar w={90} h={5} color={WHITE_HI} mb={3} br={2} />
          <Bar w={60} h={3} color={WHITE_MID} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(212,175,55,0.08)', borderRadius: 8, padding: '3px 7px', border: `1px solid ${GOLD_DIM}` }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', opacity: 0.5 }} />
          </div>
          <span style={{ fontSize: 6, color: GOLD, fontFamily: 'monospace', letterSpacing: 0.5 }}>LIVE</span>
        </div>
      </div>

      {/* KPI cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 4, marginBottom: 8 }}>
        {[['24.8K','Leads'],['₹2.4L','Revenue'],['98%','Uptime'],['3.2x','ROAS']].map(([val, label]) => (
          <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${GOLD_DIM}`, borderRadius: 6, padding: '5px 4px', textAlign: 'center' }}>
            <div style={{ fontSize: 7.5, fontWeight: 700, color: GOLD, fontFamily: 'monospace', marginBottom: 2 }}>{val}</div>
            <div style={{ fontSize: 5.5, color: WHITE_LO, fontFamily: 'sans-serif', letterSpacing: 0.3 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* SVG Network */}
      <div style={{ flex: 1, position: 'relative', background: 'rgba(212,175,55,0.02)', borderRadius: 8, border: `1px solid ${GOLD_DIM}`, overflow: 'hidden', minHeight: 0 }}>
        <span style={{ position: 'absolute', top: 4, left: 6, fontSize: 6, color: WHITE_LO, fontFamily: 'monospace', letterSpacing: 0.8, textTransform: 'uppercase', zIndex: 1 }}>Automation Network</span>
        <AINetworkSVG />
      </div>

      {/* Bar chart */}
      <div style={{ marginTop: 7, background: 'rgba(255,255,255,0.02)', border: `1px solid ${GOLD_DIM}`, borderRadius: 6, padding: '5px 7px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <Bar w={44} h={3} color={WHITE_MID} />
          <Bar w={22} h={3} color={GOLD_MID} />
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 18 }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 8 ? GOLD : 'rgba(212,175,55,0.3)', borderRadius: '2px 2px 0 0', transition: 'height 0.3s' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Default export: pick by id ── */
export default function ServicePreview({ id }: { id: string }) {
  if (id === '01') return <WebDevPreview />;
  if (id === '02') return <SocialPreview />;
  if (id === '03') return <AIPreview />;
  return null;
}

/* ── CSS keyframes injected once ── */
export function ServicePreviewStyles() {
  return (
    <style>{`
      @keyframes svcScrollSite {
        0%   { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      @keyframes svcScrollSocial {
        0%   { transform: translateY(0); }
        100% { transform: translateY(-50%); }
      }
      .svc-scroll-site {
        animation: svcScrollSite 14s linear infinite;
        will-change: transform;
      }
      .svc-scroll-social {
        animation: svcScrollSocial 10s linear infinite;
        will-change: transform;
      }
      .svc-scroll-site:hover,
      .svc-scroll-social:hover {
        animation-play-state: paused;
      }
    `}</style>
  );
}
