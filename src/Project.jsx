import React, { useState, useEffect, useRef, useCallback } from "react";
import Services from "./Services";
import { keyframes } from "@mui/system";
import projectbanner from "../src/assets/project.png";
import { Box} from "@mui/material";
const BLUE = "#1565d8";
const DARK_BLUE = "#003b88";
const TEXT_DARK = "#102a43";
const TEXT_LIGHT = "#52606d";
const LIGHT_BLUE = "#eaf3ff";

const projects = [
  {
    id: 1,
    title: "AI Smart Helpdesk",
    category: "Artificial Intelligence",
    accent: BLUE,
    accentBg: LIGHT_BLUE,
    accentText: DARK_BLUE,
    tags: ["Python", "AI", "React", "FastAPI"],
    description:
      "AI-powered IT support system that handles tickets, assists users, and improves service response with intelligent automation.",
    demos: [
      {
        icon: "🎫",
        label: "Ticket Dashboard",
        bg: "#0d1b2a",
        accent: "#64b5f6",
        desc: "Auto-categorizes and prioritizes incoming IT tickets.",
      },
      {
        icon: "🤖",
        label: "AI Chat",
        bg: "#0b1736",
        accent: "#90caf9",
        desc: "Smart assistant for faster support and query handling.",
      },
      {
        icon: "📊",
        label: "Analytics",
        bg: "#082032",
        accent: "#4fc3f7",
        desc: "Tracks resolution time, agent load, and service quality.",
      },
    ],
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Pocket Productivity Pods",
    category: "Productivity Platform",
    accent: BLUE,
    accentBg: LIGHT_BLUE,
    accentText: DARK_BLUE,
    tags: ["PWA", "AI Templates", "UPI", "PDF"],
    description:
      "A mobile-first productivity platform that delivers small outcome-based digital services for daily business and user needs.",
    demos: [
      {
        icon: "📱",
        label: "Mobile First",
        bg: "#0d1b2a",
        accent: "#64b5f6",
        desc: "Fast, lightweight, and simple digital help through a PWA.",
      },
      {
        icon: "⚙️",
        label: "Pod Engine",
        bg: "#0b1736",
        accent: "#90caf9",
        desc: "AI templates generate instant useful outputs.",
      },
      {
        icon: "📄",
        label: "Instant Output",
        bg: "#082032",
        accent: "#4fc3f7",
        desc: "Results can be shared as PDF or WhatsApp-ready content.",
      },
    ],
    liveUrl: "#",
  },
  {
    id: 3,
    title: "AI Prototype & Demo Systems",
    category: "Consulting",
    accent: BLUE,
    accentBg: LIGHT_BLUE,
    accentText: DARK_BLUE,
    tags: ["AI Demo", "Frontend", "Strategy", "SEO"],
    description:
      "Interactive AI-integrated demo platforms that help startups and enterprises showcase their product ideas professionally.",
    demos: [
      {
        icon: "🧠",
        label: "AI Demo",
        bg: "#0d1b2a",
        accent: "#64b5f6",
        desc: "Functional AI-based frontend prototypes for business demos.",
      },
      {
        icon: "🚀",
        label: "Product Strategy",
        bg: "#0b1736",
        accent: "#90caf9",
        desc: "Feature planning, architecture roadmap, and launch direction.",
      },
      {
        icon: "🔎",
        label: "SEO Structure",
        bg: "#082032",
        accent: "#4fc3f7",
        desc: "Technical SEO and product marketing architecture.",
      },
    ],
    liveUrl: "#",
  },
  {
    id: 4,
    title: "CloudOps Monitor",
    category: "Cloud Infrastructure",
    accent: BLUE,
    accentBg: LIGHT_BLUE,
    accentText: DARK_BLUE,
    tags: ["AWS", "Kubernetes", "Node.js", "Grafana"],
    description:
      "Cloud monitoring platform designed for infrastructure visibility, anomaly alerts, and multi-cloud cost optimization.",
    demos: [
      {
        icon: "☁️",
        label: "Cloud Map",
        bg: "#0d1b2a",
        accent: "#64b5f6",
        desc: "Visual topology across cloud infrastructure.",
      },
      {
        icon: "⚠️",
        label: "Smart Alerts",
        bg: "#0b1736",
        accent: "#90caf9",
        desc: "Detects spikes and unusual activity in real time.",
      },
      {
        icon: "💰",
        label: "Cost Control",
        bg: "#082032",
        accent: "#4fc3f7",
        desc: "Identifies unused resources and improves cloud spending.",
      },
    ],
    liveUrl: "#",
  },
  {
    id: 5,
    title: "SecureNet Scanner",
    category: "Cybersecurity",
    accent: BLUE,
    accentBg: LIGHT_BLUE,
    accentText: DARK_BLUE,
    tags: ["Python", "Docker", "PostgreSQL", "React"],
    description:
      "Security scanning system that monitors vulnerabilities, detects threats, and supports compliance-ready reporting.",
    demos: [
      {
        icon: "🛡️",
        label: "Threat Radar",
        bg: "#0d1b2a",
        accent: "#64b5f6",
        desc: "Real-time scan with severity-based visibility.",
      },
      {
        icon: "🔍",
        label: "Vulnerability Report",
        bg: "#0b1736",
        accent: "#90caf9",
        desc: "Shows risk levels and remediation actions.",
      },
      {
        icon: "✅",
        label: "Compliance",
        bg: "#082032",
        accent: "#4fc3f7",
        desc: "Supports structured security and audit workflows.",
      },
    ],
    liveUrl: "#",
  },
];

const highlights = [
  {
    title: "AI & Software Development",
    desc: "Custom web apps, mobile apps, AI integration, SaaS platforms, and secure enterprise systems.",
  },
  {
    title: "Productivity & Automation",
    desc: "Workflow automation, CRM tools, smart dashboards, and digital workspace enablement.",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud architecture, deployment pipelines, scalable infrastructure, and monitoring solutions.",
  },
  {
    title: "Cybersecurity & Strategy",
    desc: "Threat detection, data protection, technical consulting, and product architecture planning.",
  },
];
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(35px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const SLOTS = {
  left2: { x: -420, scale: 0.62, z: -200, opacity: 0.35, height: 410 },
  left1: { x: -235, scale: 0.78, z: -100, opacity: 0.7, height: 480 },
  center: { x: 0, scale: 1, z: 0, opacity: 1, height: 565 },
  right1: { x: 235, scale: 0.78, z: -100, opacity: 0.7, height: 480 },
  right2: { x: 420, scale: 0.62, z: -200, opacity: 0.35, height: 410 },
};

function getSlot(idx, current, total) {
  let diff = ((idx - current) % total + total) % total;
  if (diff > total / 2) diff -= total;
  const map = {
    0: "center",
    1: "right1",
    2: "right2",
    "-1": "left1",
    "-2": "left2",
  };
  return map[diff] ?? null;
}

function DemoSlider({ demos, accent }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % demos.length);
    }, 2800);

    return () => clearInterval(t);
  }, [demos.length]);

  const d = demos[active];

  return (
    <div style={{ margin: "0 16px" }}>
      <div
        style={{
          background: d.bg,
          borderRadius: 14,
          height: 138,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          padding: "0 14px",
        }}
      >
        <span style={{ fontSize: "1.8rem" }}>{d.icon}</span>

        <span
          style={{
            color: d.accent,
            fontSize: "0.62rem",
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {d.label}
        </span>

        <span
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "0.68rem",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {d.desc}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          padding: "8px 0 2px",
        }}
      >
        {demos.map((_, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              height: 5,
              width: i === active ? 18 : 5,
              borderRadius: 99,
              background: i === active ? accent : "#dbeafe",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, height }) {
  return (
    <div
      style={{
        width: 290,
        minHeight: height,
        borderRadius: 22,
        background: "#ffffff",
        border: "1px solid rgba(21,101,216,0.14)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: "min-height 0.65s cubic-bezier(0.34,1.2,0.64,1)",
      }}
    >
      <div
        style={{
          padding: "22px 22px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: 99,
            fontSize: "0.62rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: project.accentBg,
            color: project.accentText,
            width: "fit-content",
          }}
        >
          {project.category}
        </span>

        <div
          style={{
            fontSize: "1.1rem",
            fontWeight: 800,
            color: TEXT_DARK,
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </div>

        <div
          style={{
            color: TEXT_LIGHT,
            fontSize: "0.76rem",
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </div>
      </div>

      <DemoSlider demos={project.demos} accent={project.accent} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          padding: "12px 22px 8px",
        }}
      >
        {project.tags.map((t) => (
          <span
            key={t}
            style={{
              background: LIGHT_BLUE,
              color: BLUE,
              borderRadius: 6,
              padding: "3px 8px",
              fontSize: "0.62rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "10px 22px 22px",
          marginTop: "auto",
        }}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            flex: 1,
            padding: "9px 0",
            borderRadius: 10,
            fontSize: "0.72rem",
            fontWeight: 800,
            background: `linear-gradient(135deg, ${BLUE}, ${DARK_BLUE})`,
            color: "#fff",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          ↗ View Demo
        </a>
      </div>
    </div>
  );
}

const Project = () => {
  const [current, setCurrent] = useState(0);
  const [rotating, setRotating] = useState(false);
  const autoRef = useRef(null);
  const total = projects.length;

  const navigate = useCallback(
    (dir) => {
      if (rotating) return;

      setRotating(true);
      setCurrent((p) => ((p + dir) % total + total) % total);

      setTimeout(() => setRotating(false), 700);
    },
    [rotating, total]
  );

  const goTo = useCallback(
    (idx) => {
      if (rotating || idx === current) return;

      let diff = ((idx - current) % total + total) % total;
      if (diff > total / 2) diff -= total;

      navigate(diff > 0 ? 1 : -1);
    },
    [rotating, current, total, navigate]
  );

  useEffect(() => {
    autoRef.current = setInterval(() => navigate(1), 4000);
    return () => clearInterval(autoRef.current);
  }, [navigate]);

  const resetAuto = () => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => navigate(1), 4000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "70px 20px 80px",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Intro Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto 55px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: BLUE,
            marginBottom: 12,
          }}
        >
          Technology Portfolio
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.3rem)",
            fontWeight: 900,
            color: TEXT_DARK,
            letterSpacing: "-0.03em",
            lineHeight: 1.12,
             fontFamily:"-moz-initial",
            margin: 0,
          }}
        >
          Intelligent Digital Products Built for Real Business Growth
        </h1>

        <p
          style={{
            color: TEXT_LIGHT,
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: 820,
            margin: "16px auto 0",
          }}
        >
          We create scalable software platforms, AI-powered systems,
          productivity tools, cloud solutions, and secure digital products that
          help startups and enterprises move from concept to execution.
        </p>
      </div>

      {/* Highlight Cards */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto 65px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 18,
          position: "relative",
          zIndex: 2,
        }}
      >
        {highlights.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
          
              border: "1px solid rgba(21,101,216,0.13)",
              borderRadius: 20,
              padding: 22,
             
              boxShadow: "0 14px 35px rgba(16,42,67,0.08)",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                background: `linear-gradient(135deg, ${BLUE}, ${DARK_BLUE})`,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                marginBottom: 14,
              }}
            >
              {index + 1}
            </div>

            <h3
              style={{
                color: TEXT_DARK,
                fontSize: "1rem",
                margin: "0 0 8px",
                fontWeight: 800,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: TEXT_LIGHT,
                fontSize: "0.85rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Project Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: BLUE,
            marginBottom: 12,
          }}
        >
          Featured Work
        </div>

        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
            fontWeight: 900,
            color: TEXT_DARK,
             fontFamily:"-moz-initial",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Our Projects
        </h2>

        <p
          style={{
            color: TEXT_LIGHT,
            fontSize: "0.95rem",
            marginTop: 10,
          }}
        >
          Practical systems crafted with AI, cloud, automation, and modern web
          technologies.
        </p>
      </div>

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          maxWidth: 1000,
          margin: "0 auto",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 600,
            perspective: "1200px",
            position: "relative",
          }}
        >
          {projects.map((project, idx) => {
            const slot = getSlot(idx, current, total);
            if (!slot) return null;

            const pos = SLOTS[slot];

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (slot !== "center") {
                    resetAuto();
                    navigate(slot.includes("right") ? 1 : -1);
                  }
                }}
                style={{
                  position: "absolute",
                  transform: `translateX(${pos.x}px) translateZ(${pos.z}px) scale(${pos.scale})`,
                  opacity: pos.opacity,
                  zIndex: slot === "center" ? 5 : slot.includes("1") ? 3 : 1,
                  transition: "all 0.65s cubic-bezier(0.34,1.2,0.64,1)",
                  cursor: slot !== "center" ? "pointer" : "default",
                  boxShadow:
                    slot === "center"
                      ? `0 24px 70px rgba(21,101,216,0.2), 0 0 0 2px ${project.accent}25`
                      : "0 8px 25px rgba(16,42,67,0.08)",
                  borderRadius: 22,
                }}
              >
                <ProjectCard project={project} height={pos.height} />
              </div>
            );
          })}
        </div>

        {[
          { dir: -1, side: "left", label: "‹" },
          { dir: 1, side: "right", label: "›" },
        ].map(({ dir, side, label }) => (
          <button
            key={side}
            onClick={() => {
              resetAuto();
              navigate(dir);
            }}
            style={{
              position: "absolute",
              top: "50%",
              [side]: -4,
              transform: "translateY(-50%)",
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#fff",
              border: "1.5px solid #dbeafe",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              boxShadow: "0 8px 22px rgba(21,101,216,0.16)",
              fontSize: 22,
              color: BLUE,
              lineHeight: 1,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 48,
          position: "relative",
          zIndex: 2,
        }}
      >
     
      </div>
 <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            mb: 5,
            px: { xs: 2, md: 3 },
            animation: `${fadeUp} 1s ease forwards`,
          }}
        >
          <Box
            component="img"
            src={projectbanner}
            alt="Course Banner"
            sx={{
              width: "100%",
              display: "block",
              height: {
                xs: 220,
                sm: 320,
                md: 560,
                lg: 760,
              },
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "28px",
              boxShadow: "0 24px 70px rgba(16,42,67,0.16)",
            }}
          />
          </Box>
      <Services />
    </div>
  );
};

export default Project;