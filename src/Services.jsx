import React, { useState, useEffect, useRef } from "react";

const FontImport = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700;800;900&display=swap');

    @keyframes floatUp {
      from { opacity: 0; transform: translateY(35px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.35; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.08); }
    }

    @keyframes marqueeScroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .marquee-track {
      animation: marqueeScroll 22s linear infinite;
    }

    .service-card {
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }

    .service-card:hover {
      transform: translateY(-10px) !important;
      box-shadow: 0 24px 60px rgba(21, 101, 216, 0.18) !important;
    }

    .service-card:hover .card-img {
      transform: scale(1.08);
    }

    .service-card:hover .card-overlay {
      opacity: 0.38 !important;
    }

    .service-card:hover .card-cta {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `}</style>
);

const BLUE = "#1565d8";
const DARK_BLUE = "#003b88";
const TEXT_DARK = "#102a43";
const TEXT_LIGHT = "#52606d";
const LIGHT_BLUE = "#eaf3ff";

const services = [
  {
    id: "01",
    title: "Advanced Software Development",
    tagline: "Scalable systems built for real-world growth.",
    catchline:
      "We architect full-scale web apps, mobile apps and enterprise platforms focused on performance, security and usability.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80&fit=crop",
    accent: BLUE,
    points: [
      "Custom web & mobile applications",
      "Enterprise-grade platform architecture",
      "Performance-focused engineering",
    ],
  },
  {
    id: "02",
    title: "AI & Machine Learning Integration",
    tagline: "Smart automation for modern businesses.",
    catchline:
      "We integrate AI, predictive analytics and natural language interfaces into business ecosystems.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80&fit=crop",
    accent: BLUE,
    points: [
      "AI automation workflows",
      "Predictive analytics systems",
      "NLP and intelligent assistants",
    ],
  },
  {
    id: "03",
    title: "Cloud Solutions & DevOps",
    tagline: "Reliable infrastructure, faster delivery.",
    catchline:
      "We design SaaS platforms, cloud migrations and modern DevOps pipelines for scalable deployment.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80&fit=crop",
    accent: BLUE,
    points: [
      "AWS & cloud architecture",
      "CI/CD deployment pipelines",
      "Cloud automation and monitoring",
    ],
  },
  {
    id: "04",
    title: "Cybersecurity Compliance",
    tagline: "Secure systems from the first build.",
    catchline:
      "We implement data protection, threat detection and secure engineering practices for digital platforms.",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&q=80&fit=crop",
    accent: BLUE,
    points: [
      "Data protection protocols",
      "Threat detection practices",
      "Security-first development",
    ],
  },
  {
    id: "05",
    title: "Productivity & Automation",
    tagline: "Digital tools that reduce operational friction.",
    catchline:
      "We build CRM systems, workflow automation engines, dashboards and workspace productivity tools.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&fit=crop",
    accent: BLUE,
    points: [
      "Workflow automation engines",
      "CRM and scheduling systems",
      "Real-time data dashboards",
    ],
  },
  {
    id: "06",
    title: "Creative Media & Digital Experience",
    tagline: "Where storytelling meets technology.",
    catchline:
      "We create UI/UX systems, animated content, brand storytelling and immersive digital experiences.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&q=80&fit=crop",
    accent: BLUE,
    points: [
      "UI/UX and product design",
      "Brand storytelling assets",
      "AR/VR and interactive media",
    ],
  },
];

const stats = [
  { value: "4", label: "Core Service Tiers" },
  { value: "AI", label: "Driven Innovation" },
  { value: "Cloud", label: "Ready Deployment" },
  { value: "Secure", label: "Scalable Systems" },
];

const marqueeItems = [
  "Software Development",
  "•",
  "AI Integration",
  "•",
  "Cloud Solutions",
  "•",
  "Cybersecurity",
  "•",
  "Productivity Automation",
  "•",
  "Creative Media",
  "•",
  "Tech Consulting",
  "•",
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function ServiceCard({ service, idx }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="service-card"
      style={{
        width: "100%",
        maxWidth: 350,
        borderRadius: 24,
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid rgba(21,101,216,0.13)",
        boxShadow: "0 14px 40px rgba(16,42,67,0.08)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(35px)",
        transition: `all 0.6s ease ${idx * 0.1}s`,
      }}
    >
      <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
        <img
          className="card-img"
          src={service.image}
          alt={service.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
            display: "block",
          }}
        />

        <div
          className="card-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,59,136,0.05), rgba(0,59,136,0.75))",
            opacity: 0.55,
            transition: "opacity 0.4s ease",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.92)",
            color: BLUE,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 900,
            fontSize: "0.9rem",
          }}
        >
          {service.id}
        </div>

        <div
          className="card-cta"
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            background: `linear-gradient(135deg, ${BLUE}, ${DARK_BLUE})`,
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: 99,
            opacity: 0,
            transform: "translateY(8px)",
            transition: "all 0.3s ease",
          }}
        >
          Explore →
        </div>
      </div>

      <div style={{ padding: "24px 24px 28px" }}>
        <div
          style={{
            width: 42,
            height: 4,
            background: `linear-gradient(135deg, ${BLUE}, ${DARK_BLUE})`,
            borderRadius: 99,
            marginBottom: 16,
          }}
        />

        <h3
          style={{
            fontSize: "1.28rem",
            fontWeight: 900,
            color: TEXT_DARK,
            lineHeight: 1.25,
            margin: "0 0 8px",
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: "0.85rem",
            color: BLUE,
            fontWeight: 700,
            margin: "0 0 12px",
          }}
        >
          {service.tagline}
        </p>

        <p
          style={{
            fontSize: "0.86rem",
            color: TEXT_LIGHT,
            lineHeight: 1.75,
            margin: "0 0 18px",
          }}
        >
          {service.catchline}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {service.points.map((pt, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                fontSize: "0.82rem",
                color: TEXT_LIGHT,
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: BLUE,
                  fontSize: "0.65rem",
                  marginTop: 4,
                }}
              >
                ◆
              </span>
              {pt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Services = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [statsRef, statsInView] = useInView(0.2);

  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <FontImport />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(rgba(21,101,216,0.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {[
        { top: "5%", left: "-10%", color: BLUE, size: 420 },
        { top: "42%", right: "-12%", color: DARK_BLUE, size: 520 },
        { bottom: "4%", left: "35%", color: BLUE, size: 360 },
      ].map((g, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: g.size,
            height: g.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${g.color}14 0%, transparent 72%)`,
            pointerEvents: "none",
            animation: `pulse ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
            ...g,
          }}
        />
      ))}

      <div
        style={{
          overflow: "hidden",
          borderBottom: "1px solid rgba(21,101,216,0.1)",
          borderTop: "1px solid rgba(21,101,216,0.1)",
          padding: "13px 0",
          background: LIGHT_BLUE,
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: 32,
            width: "max-content",
            
            whiteSpace: "nowrap",
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.85rem",
                fontWeight: item === "•" ? 500 : 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: item === "•" ? BLUE : TEXT_LIGHT,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={headerRef}
        style={{
          padding: "80px 24px 55px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 50,
          alignItems: "end",
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: BLUE,
              marginBottom: 20,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 34,
                height: 2,
                background: BLUE,
                borderRadius: 10,
              }}
            />
            What We Do
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 900,
              color: TEXT_DARK,
              lineHeight: 1.08,
              margin: 0,
               fontFamily:"-moz-initial",
              letterSpacing: "-0.04em",
            }}
          >
            Technology,
            <br />
            Productivity &
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${BLUE}, ${DARK_BLUE})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Creative Innovation.
            </span>
          </h2>
        </div>

        <div>
          <p
            style={{
              fontSize: "1rem",
              color: TEXT_LIGHT,
              lineHeight: 1.85,
              margin: "0 0 26px",
            }}
          >
            We deliver scalable software platforms, AI-powered automation,
            cloud-ready infrastructure, secure digital systems and creative
            media solutions that help businesses transform ideas into
            production-ready products.
          </p>

          {[
            "Advanced technology and software development",
            "Productivity tools, automation and dashboards",
            "Creative media, UI/UX and digital experience",
          ].map((line, i) => (
            <div
              key={i}
              style={{
                fontSize: "0.86rem",
                color: TEXT_DARK,
                marginBottom: 12,
                paddingLeft: 14,
                borderLeft: `3px solid ${i === 0 ? BLUE : "#dbeafe"}`,
                fontWeight: 700,
              }}
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      <div
        ref={statsRef}
        style={{
          maxWidth: 1100,
          margin: "0 auto 70px",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 16,
          position: "relative",
          zIndex: 2,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "28px 20px",
              textAlign: "center",
              borderRadius: 20,
              background: "#ffffff",
              border: "1px solid rgba(21,101,216,0.13)",
              boxShadow: "0 14px 35px rgba(16,42,67,0.08)",
              opacity: statsInView ? 1 : 0,
              transform: statsInView ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.6s ease ${i * 0.12}s`,
            }}
          >
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: 900,
                color: BLUE,
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {s.value}
            </div>

            <div
              style={{
                fontSize: "0.75rem",
                color: TEXT_LIGHT,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: 50,
          padding: "0 20px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            border: "1px solid rgba(21,101,216,0.16)",
            borderRadius: 99,
            padding: "8px 20px",
            marginBottom: 22,
            background: LIGHT_BLUE,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: BLUE,
              display: "inline-block",
            }}
          />

          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: BLUE,
              fontWeight: 900,
            }}
          >
            Core Service Matrix
          </span>
        </div>

        <h3
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: TEXT_DARK,
            fontWeight: 900,
            margin: 0,
             fontFamily:"-moz-initial",
            letterSpacing: "-0.03em",
          }}
        >
          Solutions Designed for Scale, Security and Impact
        </h3>

        <p
          style={{
            maxWidth: 720,
            margin: "14px auto 0",
            color: TEXT_LIGHT,
            fontSize: "0.98rem",
            lineHeight: 1.8,
          }}
        >
          Our service ecosystem combines engineering, AI, automation, consulting
          and creative media under one professional technology framework.
        </p>
      </div>

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px 40px",
          display: "grid",
           fontFamily:"-moz-initial",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 28,
          position: "relative",
          zIndex: 2,
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.id} service={s} idx={i} />
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "70px 20px 90px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            color: TEXT_DARK,
            fontWeight: 900,
            lineHeight: 1.2,
            margin: "0 0 16px",
             fontFamily:"-moz-initial",
          }}
        >
          Ready to build a production-ready
          <br />
          <span style={{ color: BLUE }}>digital ecosystem?</span>
        </h2>

        <p
          style={{
            color: TEXT_LIGHT,
            fontSize: "0.98rem",
            marginBottom: 34,
            lineHeight: 1.8,
          }}
        >
          Let us turn your idea into a secure, scalable and professionally
          engineered digital product.
        </p>

        <button
          style={{
            background: `linear-gradient(135deg, ${BLUE}, ${DARK_BLUE})`,
            color: "#fff",
            border: "none",
            padding: "15px 42px",
            borderRadius: 99,
            fontSize: "0.82rem",
            fontWeight: 900,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 14px 35px rgba(21,101,216,0.25)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 18px 45px rgba(21,101,216,0.35)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 14px 35px rgba(21,101,216,0.25)";
          }}
        >
          Start a Conversation
        </button>
      </div>
    </div>
  );
};

export default Services;