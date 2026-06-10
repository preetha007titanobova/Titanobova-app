import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ── Intersection-based reveal hook ── */
const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(36px)',
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}s`,
      ...style,
    }}>{children}</div>
  );
};

const SlideIn = ({ children, delay = 0, from = 'left' }) => {
  const [ref, inView] = useInView();
  const tx = from === 'left' ? '-48px' : '48px';
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : `translateX(${tx})`,
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
    }}>{children}</div>
  );
};

const ScaleIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'scale(1)' : 'scale(0.9)',
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s cubic-bezier(.34,1.4,.64,1) ${delay}s`,
    }}>{children}</div>
  );
};

/* ── Counter animation ── */
const AnimCounter = ({ target, suffix = '', duration = 1800 }) => {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView(0.5);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]); 
  return <span ref={ref}>{val}{suffix}</span>;
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = [
    {
      icon: '◈',
      title: 'Enterprise IT Solutions',
      desc: 'Scalable, modular cloud infrastructure and high-performance pipeline architecture engineered for enterprise-grade reliability.',
      accent: '#2563EB',
    },
    {
      icon: '◉',
      title: 'Elite Academy',
      desc: 'Intensive engineering programmes that accelerate developers from mid-level practitioners to seasoned system architects.',
      accent: '#0EA5E9',
    },
    {
      icon: '◎',
      title: 'Cybersecurity',
      desc: 'Zero-trust frameworks, end-to-end encryption protocols, and proactive threat defence for high-volume enterprise environments.',
      accent: '#6366F1',
    },
  ];

  const stats = [
    { value: 99, suffix: '.9%', label: 'System Uptime SLA' },
    { value: 200, suffix: '+', label: 'Enterprise Clients' },
    { value: 12, suffix: '+', label: 'Years of Excellence' },
    { value: 40, suffix: '+', label: 'Countries Served' },
  ];

  const pillars = [
    {
      title: 'Decentralized Vision',
      sub: 'Infrastructure Strategy',
      desc: 'High-performance server grids engineered to host distributed automation databases, sustaining resilient data structures across global centres.',
    },
    {
      title: 'Dual-Impact Mission',
      sub: 'Value Cultivation',
      // desc: 'Eliminating architectural debt while upskilling tomorrow's builders — cultivating long-term value for modern software ecosystems.',
    },
  ];

  const execs = [
    {
      name: 'Ananya Alok',
      role: 'Director of Enterprise Advisory',
      desc: 'Orchestrates global corporate relationships, adapting robust infrastructure to the complex high-capacity workloads of Tier-1 businesses.',
      initial: 'AA',
    },
    {
      name: 'Dr. Dev Malhar',
      role: 'Global Educational Research',
      // desc: 'Leads development of scientific education pathways, keeping ,
     
    },
  ];

  return (
    <div style={{ fontFamily: "'Figtree', sans-serif", background: '#eae4c7', color: '#0f2a1b', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Figtree:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy: #0B1629;
          --navy-mid: #132040;
          --slate: #1E3A5F;
          --blue: #2563EB;
          --blue-light: #3B82F6;
          --sky: #0EA5E9;
          --indigo: #6366F1;
          --white: #FFFFFF;
          --offwhite: #F8FAFD;
          --muted: #64748B;
          --border: #E2E8F0;
          --card: #FFFFFF;
        }

        @keyframes heroFade  { from { opacity:0; transform: translateY(24px); } to { opacity:1; transform: translateY(0); } }
        @keyframes badgePop  { from { opacity:0; transform: scale(0.75); } to { opacity:1; transform: scale(1); } }
        @keyframes lineGrow  { from { width: 0; } to { width: 56px; } }
        @keyframes marquee   { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes spinSlow  { to { transform: rotate(360deg); } }
        @keyframes shimmer   { 0%,100% { opacity:.6; } 50% { opacity:1; } }
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(37,99,235,0.3); } 70% { box-shadow: 0 0 0 12px rgba(37,99,235,0); } 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); } }
        @keyframes floatY    { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

        .nav-link { color: #CBD5E1; text-decoration:none; font-family:'Figtree'; font-weight:500; font-size:14px; letter-spacing:.3px; padding:6px 0; border-bottom:2px solid transparent; transition: color .2s, border-color .2s; }
        .nav-link:hover, .nav-link.active { color: #fff; border-bottom-color: var(--blue-light); }

        .service-card { background: var(--card); border:1px solid var(--border); border-radius:16px; padding:36px 32px; transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease, border-color .3s; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(15,23,42,0.1); border-color: var(--blue-light); }

        .pillar-card { background: var(--card); border:1px solid var(--border); border-radius:16px; padding:40px 36px; transition: transform .3s ease, box-shadow .3s ease; }
        .pillar-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(15,23,42,0.08); }

        .exec-card { background: rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:16px; padding:36px 32px; transition: transform .3s ease, background .3s; }
        .exec-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.09); }

        .stat-card { text-align:center; padding:40px 24px; background: rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.09); border-radius:16px; transition: transform .3s ease; }
        .stat-card:hover { transform: translateY(-4px); }

        .cta-btn { display:inline-flex; align-items:center; gap:8px; font-family:'Outfit'; font-weight:700; font-size:15px; letter-spacing:.3px; border-radius:10px; padding:14px 30px; cursor:pointer; transition: transform .2s ease, box-shadow .2s ease; border:none; text-decoration:none; }
        .cta-btn:hover { transform: translateY(-2px); }
        .cta-btn-primary { background: var(--blue); color:#fff; box-shadow: 0 4px 16px rgba(37,99,235,0.35); }
        .cta-btn-primary:hover { box-shadow: 0 8px 24px rgba(37,99,235,0.45); }
        .cta-btn-ghost { background: transparent; color:#fff; border:1.5px solid rgba(255,255,255,0.25); }
        .cta-btn-ghost:hover { border-color:rgba(255,255,255,0.6); background: rgba(255,255,255,0.06); }

        .contact-link { display:inline-flex; align-items:center; gap:10px; font-family:'Outfit'; font-weight:600; font-size:15px; text-decoration:none; border-radius:10px; padding:14px 28px; border:1.5px solid var(--border); color:var(--navy); background:#fff; transition: border-color .2s, box-shadow .2s, transform .2s; }
        .contact-link:hover { border-color: var(--blue); box-shadow:0 4px 16px rgba(37,99,235,0.15); transform: translateY(-2px); }

        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:#F1F5F9; }
        ::-webkit-scrollbar-thumb { background: var(--blue); border-radius:3px; }
      `}</style>

      {/* ── NAV ── */}
      {/* <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? 'rgba(11,22,41,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        transition: 'background .4s, border-color .4s, backdrop-filter .4s',
        padding: '0 clamp(20px,5vw,80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68,
      }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:36, height:36, borderRadius:10, background:'linear-gradient(135deg,#2563EB,#6366F1)', display:'flex', alignItems:'center', justifyContent:'center', animation:'spinSlow 12s linear infinite', fontSize:18, fontWeight:900, color:'#fff', fontFamily:'Outfit' }}>T</div>
          <span style={{ fontFamily:'Outfit', fontWeight:800, fontSize:18, color:'#fff', letterSpacing:-0.3 }}>Titanobova <span style={{ color:'#60A5FA', fontWeight:400 }}>Corp</span></span>
        </div>
        {/* <div style={{ display:'flex', gap:32, alignItems:'center' }}>
          {['About','Services','Team','Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
          {/* <a href="#contact" className="cta-btn cta-btn-primary" style={{ padding:'9px 22px', fontSize:13, borderRadius:8, animation:'pulseRing 2.5s ease-in-out infinite' }}>Get in Touch</a> */}
        {/* </div> */}
      {/* </nav> */} 

      {/* ── HERO ── */}
      <section id="about" style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden', background:'linear-gradient(160deg, #0B1629 0%, #0F2044 50%, #0B1629 100%)', paddingTop:80 }}>
        {/* Geometric grid overlay */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />
        {/* Glow orb */}
        <div style={{ position:'absolute', top:'30%', left:'55%', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 65%)', transform:'translate(-50%,-50%)', pointerEvents:'none', animation:'shimmer 4s ease-in-out infinite' }} />
        <div style={{ position:'absolute', top:'70%', left:'20%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />

        <div style={{ textAlign:'center', position:'relative', zIndex:1, maxWidth:880, padding:'0 24px' }}>
          <div style={{ animation:'badgePop .6s cubic-bezier(.34,1.56,.64,1) .15s both', display:'inline-flex', alignItems:'center', gap:8, background:'rgba(37,99,235,0.15)', border:'1px solid rgba(37,99,235,0.4)', color:'#93C5FD', fontFamily:'Figtree', fontWeight:600, fontSize:12, textTransform:'uppercase', letterSpacing:2.5, padding:'6px 18px', borderRadius:999, marginBottom:36 }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#60A5FA', display:'inline-block', animation:'shimmer 1.5s ease-in-out infinite' }} />
            The Next Evolution in Enterprise IT
          </div>
          <h1 style={{ animation:'heroFade .9s ease .3s both', fontFamily:"-moz-initial", fontWeight:900, fontSize:'clamp(2.8rem,7vw,5.8rem)', lineHeight:1.06, letterSpacing:-2.5, color:'#fff', marginBottom:28 }}>
            Engineering the<br />
            <span style={{ background:'linear-gradient(90deg,#60A5FA,#818CF8,#38BDF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Digital Backbone</span>
            <br />of Tomorrow
          </h1>
          <p style={{ animation:'heroFade .9s ease .5s both', fontFamily:'Figtree', fontSize:'clamp(1rem,2vw,1.15rem)', color:'#94A3B8', maxWidth:620, margin:'0 auto 44px', lineHeight:1.8 }}>
            Titanobova is a global powerhouse of colossal digital architecture — building scalable enterprise systems and elite engineering education pathways.
          </p>
          <div style={{ animation:'heroFade .9s ease .7s both', display:'flex', gap:14,fontFamily:"-moz-initial", justifyContent:'center', flexWrap:'wrap' }}>
            <a href="#services" className="cta-btn cta-btn-primary" style={{fontFamily:"initial"}}>Explore Services <span style={{ fontSize:16 }}>→</span></a>
            <a href="#contact" className="cta-btn cta-btn-ghost" style={{fontFamily:"initial"}}>Talk to Us</a>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, opacity:.45, animation:'floatY 2.5s ease-in-out infinite' }}>
          <div style={{ width:1, height:48, background:'linear-gradient(to bottom, transparent, #60A5FA)' }} />
          <span style={{ fontFamily:'Figtree', fontSize:10, letterSpacing:3, textTransform:'uppercase', color:'#60A5FA' }}>Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background:'#132040', padding:'13px 0', overflow:'hidden', borderTop:'1px solid rgba(255,255,255,0.07)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display:'flex', animation:'marquee 24s linear infinite', whiteSpace:'nowrap' }}>
          {[...Array(10)].map((_, i) => (
            <span key={i} style={{ fontFamily:'Outfit', fontWeight:600, fontSize:13, color:'#64748B', letterSpacing:2, textTransform:'uppercase', marginRight:72 }}>
              ◈ Enterprise Architecture &nbsp; ◈ Cloud Infrastructure &nbsp; ◈ Cybersecurity &nbsp; ◈ Elite Academy &nbsp; ◈ Global Operations
            </span>
          ))}
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section style={{ padding:'clamp(72px,9vw,130px) clamp(20px,6vw,100px)', background:'#fff', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-120, right:-80, width:480, height:480, borderRadius:'50%', background:'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1160, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'clamp(48px,6vw,96px)', alignItems:'center' }}>
          <div>
            <SlideIn from="left">
              <div style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:3, padding:'5px 14px', borderRadius:6, marginBottom:20 }}>Who We Are</div>
            </SlideIn>
            <Reveal delay={0.1}>
              <h2 style={{ fontFamily:"-moz-initial", fontWeight:800, fontSize:'clamp(1.9rem,3.5vw,3rem)', lineHeight:1.12, color:'#0F172A', marginBottom:8, letterSpacing:-1 }}>Colossal Digital</h2>
              <h2 style={{ fontFamily:"-moz-initial", fontWeight:800, fontSize:'clamp(1.9rem,3.5vw,3rem)', lineHeight:1.12, color:'#2563EB', marginBottom:28, letterSpacing:-1 }}>Architecture</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily:'Figtree', color:'#475569', lineHeight:1.85, fontSize:15.5, marginBottom:16 }}>
                Titanobova is an elite engineering powerhouse designing scalable enterprise systems and dismantling technological restrictions to craft secure, high-performance software landscapes globally.
              </p>
              <p style={{ fontFamily:'Figtree', color:'#475569', lineHeight:1.85, fontSize:15.5, marginBottom:36 }}>
                Our structures optimise critical data flows at the pace demanded by the world's most demanding technology corporations.
              </p>
              <div style={{ display:'flex', gap:12 }}>
                <a href="#services" className="cta-btn cta-btn-primary" style={{ fontSize:14, padding:'11px 24px',fontFamily:"initial" }}>Our Services</a>
              </div>
            </Reveal>
          </div>

          <SlideIn from="right" delay={0.1}>
            <div style={{ position:'relative' }}>
              <div style={{ position:'absolute', inset:-2, borderRadius:20, background:'linear-gradient(135deg,#2563EB,#6366F1)', opacity:.18, zIndex:0 }} />
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"
                alt="Team"
                style={{ width:'100%', borderRadius:18, objectFit:'cover', height:380, position:'relative', zIndex:1, display:'block', border:'1px solid #E2E8F0' }}
              />
              {/* Floating badge */}
              <div style={{ position:'absolute', bottom:28, left:28, zIndex:2, background:'#0F172A', padding:'14px 22px', borderRadius:12, border:'1px solid rgba(255,255,255,0.1)', boxShadow:'0 8px 32px rgba(0,0,0,0.3)', animation:'floatY 3s ease-in-out infinite' }}>
                <div style={{ fontFamily:'Outfit', fontWeight:900, fontSize:26, color:'#60A5FA', lineHeight:1 }}>99.9<span style={{ fontSize:16 }}>%</span></div>
                <div style={{ fontFamily:'Figtree', fontSize:12, color:'#94A3B8', marginTop:4 }}>Uptime SLA Guaranteed</div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding:'clamp(72px,9vw,130px) clamp(20px,6vw,100px)', background:'#F8FAFD' }}>
        <div style={{ maxWidth:1160, margin:'0 auto' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <div style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:3, padding:'5px 14px', borderRadius:6, marginBottom:18 }}>What We Deliver</div>
              <h2 style={{ fontFamily:"-moz-initial", fontWeight:800, fontSize:'clamp(1.9rem,3.5vw,3rem)', color:'#0F172A', letterSpacing:-1 }}>Core Services</h2>
              <p style={{ fontFamily:'Figtree', color:'#64748B', fontSize:15, marginTop:14, maxWidth:480, margin:'14px auto 0' }}>End-to-end engineering services that power the world's most demanding digital operations.</p>
            </div>
          </Reveal>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
            {services.map((s, i) => (
              <ScaleIn key={i} delay={i * 0.1}>
                <div className="service-card">
                  <div style={{ width:52, height:52, borderRadius:12, background:`linear-gradient(135deg,${s.accent}18,${s.accent}08)`, border:`1px solid ${s.accent}30`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, color:s.accent, marginBottom:24, fontFamily:'monospace' }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"-moz-initial", fontWeight:700, fontSize:18, color:'#0F172A', marginBottom:12, letterSpacing:-0.3 }}>{s.title}</h3>
                  <p style={{ fontFamily:'Figtree', color:'#64748B', lineHeight:1.75, fontSize:14.5 }}>{s.desc}</p>
                  <div style={{ marginTop:24, display:'inline-flex', alignItems:'center', gap:6, color:s.accent, fontFamily:'Figtree', fontWeight:600, fontSize:13, cursor:'pointer' }}>Learn more <span>→</span></div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding:'clamp(72px,9vw,130px) clamp(20px,6vw,100px)', background:'linear-gradient(160deg,#0B1629 0%,#132040 100%)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(37,99,235,0.05) 1px, transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.05) 1px,transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />
        <div style={{ maxWidth:1160, margin:'0 auto', position:'relative', zIndex:1 }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <div style={{ display:'inline-block', background:'rgba(37,99,235,0.15)', color:'#93C5FD', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:3, padding:'5px 14px', borderRadius:6, marginBottom:18, border:'1px solid rgba(37,99,235,0.3)' }}>By the Numbers</div>
              <h2 style={{ fontFamily:"-moz-initial", fontWeight:800, fontSize:'clamp(1.9rem,3.5vw,3rem)', color:'#fff', letterSpacing:-1 }}>Built to Scale</h2>
            </div>
          </Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:20 }}>
            {stats.map((s, i) => (
              <ScaleIn key={i} delay={i * 0.1}>
                <div className="stat-card">
                  <div style={{ fontFamily:'Outfit', fontWeight:900, fontSize:'clamp(2.8rem,5vw,4rem)', color:'#60A5FA', lineHeight:1, letterSpacing:-2, marginBottom:10 }}>
                    <AnimCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <div style={{ fontFamily:'Figtree', fontWeight:500, fontSize:14, color:'#94A3B8', letterSpacing:.3 }}>{s.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ padding:'clamp(72px,9vw,130px) clamp(20px,6vw,100px)', background:'#fff' }}>
        <div style={{ maxWidth:1160, margin:'0 auto' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:72 }}>
              <div style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:3, padding:'5px 14px', borderRadius:6, marginBottom:18 }}>Leadership Matrix</div>
              <h2 style={{ fontFamily:"-moz-initial", fontWeight:800, fontSize:'clamp(1.9rem,3.5vw,3rem)', color:'#0F172A', letterSpacing:-1 }}>The Visionaries</h2>
            </div>
          </Reveal>

          {/* CEO */}
          <Reveal delay={0.1}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'clamp(36px,5vw,72px)', alignItems:'center', marginBottom:60, background:'#F8FAFD', border:'1px solid #E2E8F0', borderRadius:24, padding:'clamp(28px,4vw,56px)' }}>
              <div style={{ display:'flex', justifyContent:'center' }}>
                <div style={{ position:'relative' }}>
                  <div style={{ position:'absolute',fontFamily:"-moz-initial", inset:-3, borderRadius:'50%', background:'linear-gradient(135deg,#2563EB,#6366F1,#0EA5E9)', animation:'spinSlow 5s linear infinite', zIndex:0, opacity:.8 }} />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                    alt="R RajKumar"
                    style={{ width:196, height:196, borderRadius:'50%', objectFit:'cover', position:'relative', zIndex:1, border:'4px solid #fff', display:'block' }}
                  />
                </div>
              </div>
              <div>
                <div style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:2.5, padding:'4px 12px', borderRadius:5, marginBottom:14 }}>Founder & CEO</div>
                <h3 style={{ fontFamily:'Outfit', fontWeight:800, fontSize:'clamp(1.8rem,3vw,2.6rem)', color:'#0F172A', marginBottom:18, letterSpacing:-0.8 }}>R RajKumar</h3>
                <p style={{ fontFamily:'Figtree', color:'#475569', lineHeight:1.8, fontSize:15.5, marginBottom:12 }}>
                  R RajKumar founded Titanobova to rewrite classical developer pipelines and establish modern core software paradigms.
                </p>
                <p style={{ fontFamily:'Figtree', color:'#475569', lineHeight:1.8, fontSize:15.5 }}>
                  His dual architectural vision creates elite development channels for engineers while delivering zero-friction systems to multinational corporate networks.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Execs */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24 }}>
            {execs.map((e, i) => (
              <ScaleIn key={i} delay={i * 0.12}>
                <div style={{ background:'#F8FAFD', border:'1px solid #E2E8F0', borderRadius:18, padding:'36px 32px', transition:'transform .3s ease, box-shadow .3s', cursor:'default' }}
                  onMouseEnter={ev => { ev.currentTarget.style.transform='translateY(-4px)'; ev.currentTarget.style.boxShadow='0 16px 40px rgba(15,23,42,0.08)'; ev.currentTarget.style.borderColor='#BFDBFE'; }}
                  onMouseLeave={ev => { ev.currentTarget.style.transform=''; ev.currentTarget.style.boxShadow=''; ev.currentTarget.style.borderColor='#E2E8F0'; }}
                >
                  <div style={{ width:52, height:52, borderRadius:'50%', background:'linear-gradient(135deg,#2563EB,#6366F1)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Outfit', fontWeight:800, fontSize:16, color:'#fff', marginBottom:20 }}>{e.initial}</div>
                  <div style={{ fontFamily:'Figtree', fontWeight:600, fontSize:11, color:'#2563EB', textTransform:'uppercase', letterSpacing:2.5, marginBottom:8 }}>{e.role}</div>
                  <h4 style={{ fontFamily:"-moz-initial", fontWeight:700, fontSize:20, color:'#0F172A', marginBottom:14, letterSpacing:-0.3 }}>{e.name}</h4>
                  <p style={{ fontFamily:'Figtree', color:'#64748B', lineHeight:1.75, fontSize:14.5 }}>{e.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section style={{ padding:'clamp(72px,9vw,130px) clamp(20px,6vw,100px)', background:'#F8FAFD' }}>
        <div style={{ maxWidth:1160, margin:'0 auto' }}>
          <Reveal>
            <div style={{ textAlign:'center', marginBottom:64 }}>
              <div style={{ display:'inline-block', background:'#EFF6FF', color:'#2563EB', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:3, padding:'5px 14px', borderRadius:6, marginBottom:18 }}>Strategic Pillars</div>
              <h2 style={{ fontFamily:"-moz-initial", fontWeight:800, fontSize:'clamp(1.9rem,3.5vw,3rem)', color:'#0F172A', letterSpacing:-1 }}>How We Think</h2>
            </div>
          </Reveal>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:24 }}>
            {pillars.map((p, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="pillar-card">
                  <div style={{ width:40, height:4, background:'linear-gradient(90deg,#2563EB,#6366F1)', borderRadius:2, marginBottom:28 }} />
                  <h3 style={{ fontFamily:"-moz-initial", fontWeight:700, fontSize:20, color:'#0F172A', marginBottom:6, letterSpacing:-0.3 }}>{p.title}</h3>
                  <div style={{ fontFamily:'Figtree', fontWeight:600, fontSize:11, color:'#94A3B8', textTransform:'uppercase', letterSpacing:2.5, marginBottom:18, paddingBottom:18, borderBottom:'1px solid #E2E8F0' }}>{p.sub}</div>
                  <p style={{ fontFamily:'Figtree', color:'#64748B', lineHeight:1.8, fontSize:14.5 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding:'clamp(72px,9vw,130px) clamp(20px,6vw,100px)', background:'linear-gradient(160deg,#0B1629 0%,#0F2044 100%)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(37,99,235,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,0.06) 1px,transparent 1px)', backgroundSize:'60px 60px', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'50%', left:'50%', width:800, height:800, borderRadius:'50%', background:'radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 60%)', transform:'translate(-50%,-50%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:700, margin:'0 auto', textAlign:'center', position:'relative', zIndex:1 }}>
          <Reveal>
            <div style={{ display:'inline-block', background:'rgba(37,99,235,0.15)', color:'#93C5FD', fontFamily:'Figtree', fontWeight:700, fontSize:11, textTransform:'uppercase', letterSpacing:3, padding:'5px 14px', borderRadius:6, marginBottom:24, border:'1px solid rgba(37,99,235,0.3)' }}>Questions & Discussion</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily:"-moz-initial", fontWeight:900, fontSize:'clamp(2rem,5vw,3.8rem)', color:'#fff', marginBottom:20, lineHeight:1.1, letterSpacing:-1.5 }}>
              Let's Build the<br />
              <span style={{ background:'linear-gradient(90deg,#60A5FA,#818CF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Future Together</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily:'Figtree', color:'#94A3B8', fontSize:15.5, lineHeight:1.8, marginBottom:52 }}>Connect with our engineering architects to design, build, and operate next-generation digital infrastructure.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:16, justifyContent:'center' }}>
              <a href="mailto:contact@titanobova.com" className="contact-link">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                contact@titanobova.com
              </a>
              <a href="https://www.titanobova.com" target="_blank" rel="noreferrer" className="contact-link">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
                www.titanobova.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background:'#070E1C', color:'#fff', padding:'28px clamp(20px,5vw,80px)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12, borderTop:'1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div style={{ width:28, height:28, borderRadius:7, background:'linear-gradient(135deg,#2563EB,#6366F1)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Outfit', fontWeight:800, fontSize:14, color:'#fff' }}>T</div>
          <span style={{ fontFamily:'Outfit', fontWeight:700, fontSize:15, letterSpacing:-0.3 }}>Titanobova <span style={{ color:'#60A5FA', fontWeight:400 }}>Corp</span></span>
        </div>
        <span style={{ fontFamily:'Figtree', color:'rgba(255,255,255,0.3)', fontSize:13 }}>© 2024 Titanobova. All rights reserved.</span>
      </footer>
    </div>
  );
}
