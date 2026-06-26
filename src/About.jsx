import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";

import about from "../src/assets/about.jpg";
import service from "../src/assets/service.jpg";
import team from "../src/assets/team.jpg";

const fontFamily = "'Outfit', 'Figtree', sans-serif";

const floatY = keyframes`
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const floatX = keyframes`
  0%,100% { transform: translateX(0); }
  50% { transform: translateX(12px); }
`;

const marquee = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const pieFloat = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
};

const Reveal = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(35px)",
        transition: `0.75s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};

const ScaleIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.9)",
        transition: `0.65s ease ${delay}s`,
      }}
    >
      {children}
    </Box>
  );
};

const AnimCounter = ({ target, suffix = "" }) => {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView(0.5);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(20, Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setVal(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <Box component="span" ref={ref}>
      {val}
      {suffix}
    </Box>
  );
};

const services = [
  {
    icon: "🛡",
    title: "Reliable & Secure Solutions",
    desc: "We build secure and stable systems with proper validation, protected APIs, and scalable architecture.",
    accent: "#2563EB",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    desc: "We believe in honest updates, clear timelines, and complete project visibility.",
    accent: "#0EA5E9",
  },
  {
    icon: "⚡",
    title: "Fast & Quality Delivery",
    desc: "We deliver high-quality work on time without compromising performance, usability, or clean code.",
    accent: "#6366F1",
  },
  {
    icon: "📈",
    title: "Growth-Focused Approach",
    desc: "Every solution is designed to support your future business growth and expansion.",
    accent: "#14B8A6",
  },
  {
    icon: "💡",
    title: "Smart Problem Solving",
    desc: "We provide practical and business-oriented technology solutions tailored to your needs.",
    accent: "#F97316",
  },
  {
    icon: "🎯",
    title: "Client Success Priority",
    desc: "Your success is our priority through trust, support, and consistent results.",
    accent: "#8B5CF6",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "Client Commitment" },
  { value: 24, suffix: "/7", label: "Support & Communication" },
  { value: 99, suffix: "%", label: "Quality-Focused Delivery" },
];

const pillars = [
  {
    sub: "Discovery",
    title: "Understand the Requirement",
    desc: "We study your business goals, user needs, and project scope before starting development.",
  },
  {
    sub: "Planning",
    title: "Create a Clear Roadmap",
    desc: "We define features, timelines, technology stack, and development flow.",
  },
  {
    sub: "Design",
    title: "Build User-Friendly UI",
    desc: "We create clean, modern, and responsive interfaces.",
  },
  {
    sub: "Development",
    title: "Develop Secure Solutions",
    desc: "We build stable, scalable, and performance-focused applications.",
  },
  {
    sub: "Testing",
    title: "Ensure Quality",
    desc: "We test functionality, performance, responsiveness, and security.",
  },
  {
    sub: "Support",
    title: "Continuous Improvement",
    desc: "We provide updates, improvements, and technical support.",
  },
];

const goalSteps = [
  { title: "Requirement Analysis", points: ["Understand business goals"] },
  { title: "Planning & Strategy", points: ["Create project roadmap", "Define workflow"] },
  { title: "Design & Development", points: ["Design modern UI", "Build frontend & backend"] },
  { title: "Testing & Optimization", points: ["Test all modules", "Improve speed and security"] },
  { title: "Deployment", points: ["Launch application", "Configure hosting and monitoring"] },
  { title: "Support & Growth", points: ["Provide maintenance", "Add future improvements"] },
];

const colors = ["#0b74de", "#3fa9ff", "#7c6cff", "#38c6a3", "#ffb84d", "#ff6b6b"];

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f8fafc", color: "#0f172a", overflowX: "hidden", fontFamily }}>
      {/* Hero */}
      <Box
        id="home"
        sx={{
          minHeight: { xs: "auto", md: "88vh" },
          py: { xs: 9, md: 5 },
          px: 2,
          background: "linear-gradient(160deg, #0B1629 0%, #0F2044 55%, #0B1629 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 260, md: 520 },
            height: { xs: 260, md: 520 },
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.22), transparent 65%)",
            top: "12%",
            right: "10%",
            animation: `${floatY} 5s infinite ease-in-out`,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: { xs: 180, md: 330 },
            height: { xs: 180, md: 330 },
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.18), transparent 65%)",
            bottom: "8%",
            left: "8%",
            animation: `${floatX} 5s infinite ease-in-out`,
          }}
        />

        <Box sx={{ position: "relative", zIndex: 2, maxWidth: 900 }}>
          <Typography
            sx={{
              display: "inline-flex",
              bgcolor: "rgba(37,99,235,0.15)",
              border: "1px solid rgba(96,165,250,0.4)",
              color: "#93c5fd",
              px: 2.3,
              py: 0.9,
              borderRadius: "999px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            ● The Next Evolution in Enterprise IT
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily:"-apple-system",
              fontSize: { xs: "2.4rem", sm: "3.4rem", md: "4.8rem" },
              lineHeight: 1,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-2px",
              mb: 2.5,
            }}
          >
            Engineering the <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #60A5FA, #818CF8, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Backbone
            </Box>
            <br />
            of Tomorrow
          </Typography>

          <Typography sx={{ color: "#94a3b8", fontSize: { xs: "1rem", md: "1.15rem" }, lineHeight: 1.75, maxWidth: 650, mx: "auto", mb: 4 }}>
            Titanobova builds powerful digital products, secure enterprise systems,
            automation workflows, and practical technology training for future-ready businesses.
          </Typography>

      <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    gap: { xs: 1.5, sm: 2 },
    flexWrap: "wrap",
    mt: { xs: 2, md: 3 },
  }}
>
  <Button
    href="#services"
    variant="contained"
    sx={{
      borderRadius: 3,
      px: { xs: 2.5, sm: 3.5, md: 4 },
      py: { xs: 1.1, sm: 1.3, md: 1.5 },
      width: { xs: "90%", sm: "auto" },
      maxWidth: { xs: 280, sm: "none" },
      fontSize: {
        xs: "0.85rem",
        sm: "0.9rem",
        md: "1rem",
      },
      fontWeight: 700,
    }}
  >
    Explore Services →
  </Button>

  <Button
    href="#contact"
    variant="outlined"
    sx={{
      borderRadius: 3,
      px: { xs: 2.5, sm: 3.5, md: 4 },
      py: { xs: 1.1, sm: 1.3, md: 1.5 },
      width: { xs: "90%", sm: "auto" },
      maxWidth: { xs: 280, sm: "none" },
      color: "#fff",
      borderColor: "rgba(255,255,255,0.35)",
      fontSize: {
        xs: "0.85rem",
        sm: "0.9rem",
        md: "1rem",
      },
      fontWeight: 700,
      "&:hover": {
        borderColor: "#fff",
        backgroundColor: "rgba(255,255,255,0.08)",
      },
    }}
  >
    Talk to Us
  </Button>
</Box>
        </Box>
      </Box>

      {/* Marquee */}
      <Box sx={{ bgcolor: "#132040", py: 1.5, overflow: "hidden" }}>
        <Box sx={{ display: "flex", whiteSpace: "nowrap", animation: `${marquee} 22s linear infinite` }}>
          {[...Array(8)].map((_, i) => (
            <Typography key={i} sx={{ color: "#94a3b8", fontWeight: 700, letterSpacing: 2, mr: 8, fontSize: 13 }}>
              ◈ Web Development ◈ Cloud Deployment ◈ Cybersecurity ◈ Automation ◈ Training Academy
            </Typography>
          ))}
        </Box>
      </Box>

      {/* About */}
      <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 4, md: 8 }, alignItems: "center" }}>
            <Reveal>
              <Box>
                <Typography sx={{ display: "inline-block", bgcolor: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", px: 2, py: 0.8, borderRadius: 2, mb: 2 }}>
                  Who We Are
                </Typography>

                <Typography sx={{ fontSize: { xs: "2rem", md: "3.2rem" }, fontWeight: 800, lineHeight: 1.1, mb: 2 , fontFamily:"-apple-system",color:"#291f62"}}>
                  Building Smart, Secure and Scalable{" "}
                  <Box component="span" sx={{ background: "linear-gradient(90deg, #1a2e46, #1d256d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Digital Solutions
                  </Box>
                </Typography>

                <Typography sx={{ color: "#475569", lineHeight: 1.85, mb: 2,fontWeight:"500" }}>
                  Titanobova helps businesses convert ideas into real digital products.
                  We focus on clean UI, strong backend logic, secure APIs, and smooth deployment.
                </Typography>

                <Typography sx={{ color: "#475569", lineHeight: 1.85, mb: 3 }}>
                  From websites and admin panels to automation systems and developer training,
                  our goal is to deliver reliable solutions that are simple to use and easy to scale.
                </Typography>

                <Button href="#services" variant="contained" sx={{ borderRadius: 3, px: 3, py: 1.4, fontWeight: 700 }}>
                  View Our Work →
                </Button>
              </Box>
            </Reveal>

            <Reveal delay={0.15}>
              <Box sx={{ position: "relative" }}>
                <Box component="img" src={team} alt="IT Team" sx={{ width: "100%", height: { xs: 260, md: 360 }, objectFit: "cover", borderRadius: "22px", boxShadow: "0 22px 55px rgba(15,23,42,0.16)" }} />

                <Box sx={{ position: { xs: "static", md: "absolute" }, bottom: 20, left: 20, mt: { xs: 2, md: 0 }, bgcolor: "#0c1e46", color: "#fff", p: 2.5, borderRadius: 4, animation: `${floatY} 3s infinite ease-in-out` }}>
                  <Typography variant="h5" fontWeight={800}>99%</Typography>
                  <Typography sx={{ color: "#fff" }}>Quality Focused Delivery</Typography>
                </Box>
              </Box>
            </Reveal>
          </Box>
        </Container>
      </Box>

      {/* Banner Image */}
      <Box sx={{ maxWidth: 1200, mx: "auto", mb: 8, px: { xs: 2, md: 3 } }}>
        <Box component="img" src={about} alt="Course Banner" sx={{ width: "100%", display: "block", height: { xs: 220, sm: 320, md: 560, lg: 660 }, objectFit: "cover", borderRadius: "28px", boxShadow: "0 24px 70px rgba(16,42,67,0.16)" }} />
      </Box>

      {/* Services */}
    <Box id="services" sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 6 } }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Typography sx={{ display: "inline-block", bgcolor: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", px: 2, py: 0.8, borderRadius: 2, mb: 2 }}>
                What We Deliver
              </Typography>

              <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 800, mb: 1 ,fontFamily:"-apple-system"}}>
                Our Core Services
              </Typography>

              <Typography sx={{ color: "#64748b", maxWidth: 560, mx: "auto", lineHeight: 1.7,fontWeight:"500" }}>
                Complete digital services from design and development to deployment,
                automation, security, and training.
              </Typography>
            </Box>
          </Reveal>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3,1fr)" }, gap: 3 }}>
            {services.map((s, i) => (
              <ScaleIn key={i} delay={i * 0.08}>
                <Box sx={{ bgcolor: "#fff", border: "1px solid #e2e8f0", borderRadius: 5, p: 3.5, transition: ".3s", overflow: "hidden", "&:hover": { transform: "translateY(-8px) scale(1.02)", boxShadow: "0 22px 55px rgba(15,23,42,0.13)" } }}>
                  <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: `${s.accent}15`, color: s.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, mb: 2 }}>
                    {s.icon}
                  </Box>

                  <Typography sx={{ fontSize: 20, fontWeight: 800, mb: 1 }}>
                    {s.title}
                  </Typography>

                  <Typography sx={{ color: "#64748b", lineHeight: 1.75, fontSize: 14.5 }}>
                    {s.desc}
                  </Typography>
                </Box>
              </ScaleIn>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Box component="img" src={service} alt="IT Team" sx={{ width: { xs: "100%", md: "90%" }, borderRadius: 4 }} />
          </Box>
        </Container>
      </Box>

      {/* Stats */}
      <Box sx={{ py: { xs: 7, md: 11 }, px: 2, background: "linear-gradient(135deg, #6384ae 0%, #396ba4 45%, #151367 100%)" }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 6 }}>
              <Typography sx={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", mb: 1.5 }}>
                By The Numbers
              </Typography>

              <Typography sx={{ fontSize: { xs: "2rem", md: "40px" }, fontWeight: 800, color: "#fff", mb: 2 }}>
                Growing With Strong Results
              </Typography>

              <Typography sx={{ fontSize: 16, color: "#fff", lineHeight: 1.8 }}>
                Our progress reflects consistent delivery, trusted solutions, and long-term value for businesses.
              </Typography>
            </Box>
          </Reveal>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3,1fr)" }, gap: 3 }}>
            {stats.map((s, i) => (
              <ScaleIn key={i} delay={i * 0.08}>
                <Box sx={{ bgcolor: "rgba(255,255,255,0.9)", borderRadius: 6, p: 4, textAlign: "center", boxShadow: "0 14px 40px rgba(16,42,67,0.08)", transition: ".35s", "&:hover": { transform: "translateY(-10px)", boxShadow: "0 28px 70px rgba(11,116,222,0.18)" } }}>
                  <Typography sx={{ fontSize: 44, fontWeight: 800, color: "#0b74de", mb: 1 }}>
                    <AnimCounter target={s.value} suffix={s.suffix} />
                  </Typography>

                  <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#102a43" }}>
                    {s.label}
                  </Typography>
                </Box>
              </ScaleIn>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Strategic Pillars */}
      <Box sx={{ py: { xs: 7, md: 12 }, px: 2, background: "linear-gradient(135deg, #f8fbff 0%, #eef6ff 45%, #f8f4ff 100%)" }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography sx={{ display: "inline-block", bgcolor: "#eff6ff", color: "#2563eb", fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase", px: 2, py: 0.8, borderRadius: 2, mb: 2 }}>
                Strategic Pillars
              </Typography>

              <Typography sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 800, mb: 1 }}>
                How We Build Better Digital Products
              </Typography>

              <Typography sx={{ color: "#64748b", maxWidth: 650, mx: "auto", lineHeight: 1.7 }}>
                Our delivery approach is divided into key focus areas that help us build secure,
                scalable, and user-friendly digital products.
              </Typography>
            </Box>
          </Reveal>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1.2fr" }, gap: { xs: 5, md: 6 }, alignItems: "center" }}>
            <Reveal>
              <Box
                sx={{
                  width: { xs: 280, sm: 330, md: 360 },
                  height: { xs: 280, sm: 330, md: 360 },
                  borderRadius: "50%",
                  mx: "auto",
                  position: "relative",
                  background:
                    "conic-gradient(#0b74de 0deg 60deg, #3fa9ff 60deg 120deg, #7c6cff 120deg 180deg, #38c6a3 180deg 240deg, #ffb84d 240deg 300deg, #ff6b6b 300deg 360deg)",
                  boxShadow: "0 30px 80px rgba(16,42,67,0.18)",
                  animation: `${pieFloat} 5s ease-in-out infinite`,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: { xs: 55, sm: 65, md: 75 },
                    bgcolor: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Box>
                    <Typography sx={{ fontSize: { xs: 20, md: 24 }, fontWeight: 800, color: "#102a43", mb: 1 }}>
                      Product Success
                    </Typography>

                    <Typography sx={{ fontSize: 13, color: "#52616b", lineHeight: 1.6 }}>
                      Quality, security, design, and delivery working together.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Reveal>

        <Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: 5,
    alignItems: "stretch",
  }}
>
  {pillars.map((p, i) => (
    <Reveal key={i} delay={i * 0.08}>
      <Box
        sx={{
      
          minHeight: 210,
          bgcolor: "#fff",
          borderRadius: 4,
          p: 2.5,
          display: "flex",
          gap: 2,
          border: "1px solid rgba(11,116,222,0.08)",
          boxShadow: "0 10px 30px rgba(16,42,67,0.08)",
          transition: ".35s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 20px 50px rgba(16,42,67,0.14)",
          },
        }}
      >
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            bgcolor: colors[i],
            flexShrink: 0,
            mt: 0.7,
            boxShadow: `0 0 0 6px ${colors[i]}22`,
          }}
        />

        <Box>
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700,
              color: colors[i],
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 0.8,
            }}
          >
            {p.sub}
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 800,
              color: "#102a43",
              mb: 1,
            }}
          >
            {p.title}
          </Typography>

          <Typography sx={{ fontSize: 14, color: "#52616b", lineHeight: 1.7 }}>
            {p.desc}
          </Typography>
        </Box>
      </Box>
    </Reveal>
  ))}
</Box>
          </Box>
        </Container>
      </Box>

      {/* Process */}
      <Box sx={{ py: { xs: 7, md: 12 }, px: 2, background: "linear-gradient(180deg,#f8fbff 0%,#ffffff 100%)" }}>
        <Container maxWidth="lg">
          <Reveal>
            <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: 8 }}>
              <Typography sx={{ color: "#0b74de", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: 2, mb: 1.5 }}>
                Our Process
              </Typography>

              <Typography sx={{ fontSize: { xs: "2rem", md: "42px" }, fontWeight: 800, color: "#102a43", mb: 2 }}>
                Steps to Reach Your Goal
              </Typography>

              <Typography sx={{ color: "#52616b", fontSize: 16, lineHeight: 1.8 }}>
                Each step moves your idea closer to a complete, stable, and successful digital product.
              </Typography>
            </Box>
          </Reveal>

       <Box
  sx={{
    display: "flex",
    alignItems: "flex-end",
    justifyContent: { xs: "flex-start", md: "center" },
    gap: { xs: 2, sm: 2.3 },
    flexWrap: "nowrap",
    overflowX: { xs: "auto", md: "visible" },
    overflowY: "hidden",
    pb: { xs: 2, md: 0 },
    px: { xs: 1, md: 0 },

    "&::-webkit-scrollbar": {
      height: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#cbd5e1",
      borderRadius: 10,
    },
  }}
>
  {goalSteps.map((step, i) => (
    <Reveal key={i} delay={i * 0.08}>
      <Box
        sx={{
          flex: "0 0 auto",
          width: { xs: 135, sm: 135, md: 135 },
          minHeight: {
            xs: `${230 + i * 28}px`,
            sm: `${230 + i * 28}px`,
            md: `${170 + i * 28}px`,
          },
          background:
            "linear-gradient(135deg, #f5faff 0%, #e8eaef 35%, #bfccd9 100%)",
          borderRadius: "24px 24px 8px 8px",
          p: { xs: 2.5, md: 2.5 },
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: ".4s",
          boxShadow: "0 18px 45px rgba(36,24,31,0.1)",

          "&:hover": {
            transform: {
              xs: "translateY(-6px)",
              md: "translateY(-15px) scale(1.05)",
            },
            boxShadow: "0 30px 80px rgba(11,116,222,0.35)",
          },

          "&:hover .bloomCircle": {
            transform: "scale(2)",
            opacity: 0.4,
          },
        }}
      >
        <Box
          className="bloomCircle"
          sx={{
            position: "absolute",
            width: { xs: 100, md: 120 },
            height: { xs: 100, md: 120 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(11,116,222,0.35) 0%, transparent 70%)",
            top: { xs: -35, md: -40 },
            right: { xs: -35, md: -40 },
            opacity: 0.08,
            transition: ".6s",
          }}
        />

        <Typography
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#102a43",
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "1.05rem", md: "0.95rem" },
            lineHeight: 1.3,
          }}
        >
          {step.title}
        </Typography>

        <Box
          component="ul"
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#52616b",
            lineHeight: { xs: 2, md: 1.8 },
            pl: 2,
            m: 0,
            fontSize: { xs: "0.95rem", md: "0.8rem" },
          }}
        >
          {step.points.map((point, index) => (
            <Box component="li" key={index} sx={{ mb: 1 }}>
              {point}
            </Box>
          ))}
        </Box>
      </Box>
    </Reveal>
  ))}
</Box>
        </Container>
      </Box>

      {/* Contact */}
      <Box
        id="contact"
        sx={{
          py: { xs: 7, md: 12 },
          px: 2,
          backgroundImage:
            "linear-gradient(135deg, rgba(5,20,45,0.88), rgba(11,116,222,0.75)), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Reveal>
          <Box sx={{ maxWidth: 850, mx: "auto", bgcolor: "rgba(255,255,255,0.08)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 7, p: { xs: 3, md: 7 }, boxShadow: "0 30px 90px rgba(0,0,0,0.25)" }}>
            <Typography sx={{ display: "inline-block", px: 2.2, py: 1, borderRadius: "999px", bgcolor: "rgba(255,255,255,0.14)", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", mb: 2 }}>
              Get In Touch
            </Typography>

            <Typography sx={{ fontSize: { xs: "2rem", md: "44px" }, fontWeight: 800, lineHeight: 1.2, mb: 2.5 }}>
              Let’s Build the Future Together
            </Typography>

            <Typography sx={{ maxWidth: 680, mx: "auto", mb: 2, fontSize: { xs: 15, md: 17 }, lineHeight: 1.9, color: "rgba(255,255,255,0.88)" }}>
              Partner with Titanobova to build modern websites, scalable web applications,
              secure backend systems, automation workflows, and cloud-ready digital solutions.
            </Typography>

          
          </Box>
        </Reveal>
      </Box>
    </Box>
  );
}