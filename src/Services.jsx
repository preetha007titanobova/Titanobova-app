import React from "react";
import { Box, Container, Typography } from "@mui/material";
import stair from "../src/assets/stairs.jpg";

const BLUE = "#1565d8";
const DARK_BLUE = "#003b88";
const TEXT_DARK = "#102a43";
const TEXT_LIGHT = "#52606d";

const services = [
  {
    id: "01",
    title: "Advanced Software Development",
    catchline:
      "We architect full-scale web apps, mobile apps and enterprise platforms focused on performance, security and usability.",
    points: [
      "Custom web & mobile applications",
      "Enterprise-grade platform architecture",
      "Performance-focused engineering",
    ],
  },
  {
    id: "02",
    title: "AI & Machine Learning Integration",
    catchline:
      "We integrate AI, predictive analytics and natural language interfaces into business ecosystems.",
    points: [
      "AI automation workflows",
      "Predictive analytics systems",
      "NLP and intelligent assistants",
    ],
  },
  {
    id: "03",
    title: "Cloud Solutions & DevOps",
    catchline:
      "We design SaaS platforms, cloud migrations and modern DevOps pipelines for scalable deployment.",
    points: [
      "AWS & cloud architecture",
      "CI/CD deployment pipelines",
      "Cloud automation and monitoring",
    ],
  },
  {
    id: "04",
    title: "Cybersecurity Compliance",
    catchline:
      "We implement data protection, threat detection and secure engineering practices for digital platforms.",
    points: [
      "Data protection protocols",
      "Threat detection practices",
      "Security-first development",
    ],
  },
  {
    id: "05",
    title: "Productivity & Automation",
    catchline:
      "We build CRM systems, workflow automation engines, dashboards and workspace productivity tools.",
    points: [
      "Workflow automation engines",
      "CRM and scheduling systems",
      "Real-time data dashboards",
    ],
  },
  {
    id: "06",
    title: "Creative Media & Digital Experience",
    catchline:
      "We create UI/UX systems, animated content, brand storytelling and immersive digital experiences.",
    points: [
      "UI/UX and product design",
      "Brand storytelling assets",
      "AR/VR and interactive media",
    ],
  },
];

const developmentCards = [
  {
    title: "🚀 Web Development",
    desc: "Modern websites, business portals, landing pages, and enterprise web applications.",
  },
  {
    title: "📱 Mobile App Development",
    desc: "Android, iOS, React Native, Flutter, and custom mobile solutions for businesses.",
  },
  {
    title: "☁️ SaaS Platforms",
    desc: "Custom SaaS products, dashboards, CRM systems, automation tools, and cloud solutions.",
  },
  {
    title: "🤖 AI & Automation",
    desc: "AI chatbots, workflow automation, analytics, integrations, and intelligent business tools.",
  },
];

const Services = () => {
  return (
    <Box sx={{ background: "#f8fbff", py: { xs: 5, md: 8 } }}>
      <Container maxWidth="xl">
        {/* Services Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 2.5, md: 3.5 },
            mb: { xs: 5, md: 8 },
          }}
        >
          {services.map((s) => (
            <Box
              key={s.id}
              sx={{
                minHeight: { xs: 300, md: 360 },
                borderRadius: "30px",
                p: { xs: 3, md: 4 },
                background:
                  "linear-gradient(145deg, #ffffff 0%, #f2f7ff 100%)",
                border: "1px solid rgba(21,101,216,0.12)",
                boxShadow: "0 16px 45px rgba(16,42,67,0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.45s ease",
                cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-12px)",
                  boxShadow: "0 35px 90px rgba(21,101,216,0.18)",
                },

                "&:hover .cardGlow": {
                  opacity: 1,
                },
              }}
            >
              <Box
                className="cardGlow"
                sx={{
                  position: "absolute",
                  top: "-80px",
                  right: "-80px",
                  width: 220,
                  height: 200,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(11,46,96,0.24), transparent 70%)",
                  opacity: 0,
                  transition: "opacity 0.45s ease",
                  pointerEvents: "none",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "-60px",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(21,101,216,0.08), transparent 70%)",
                }}
              />

              <Typography
                sx={{
                  color: BLUE,
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  mb: 2,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {s.id}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.35rem" },
                  fontWeight: 800,
                  color: "#17084e",
                  mb: 2,
                  lineHeight: 1.35,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {s.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "0.88rem", md: "0.9rem" },
                  color: TEXT_LIGHT,
                  lineHeight: 1.8,
                  mb: 3,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {s.catchline}
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gap: 1.5,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {s.points.map((pt, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      alignItems: "flex-start",
                      fontSize: { xs: "0.8rem", md: "0.84rem" },
                      color: TEXT_DARK,
                      fontWeight: 700,
                      lineHeight: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: BLUE,
                        mt: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <Box component="span">{pt}</Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Image + Right Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr",
              lg: "1.2fr 1fr",
            },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Left Image */}
          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              height: {
                xs: 300,
                sm: 420,
                md: 560,
                lg: 850,
              },
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
     <Box
  component="img"
  src={stair}
  alt="Project Development"
  sx={{
    width: "100%",
    height: {
      xs: "100%",     // 0 - 599px
      sm: "140%",     // 600 - 899px
      md: "120%",     // 900 - 1199px
      lg: "100%",     // 1200px+
    },
    display: "block",
    transition: "transform 0.6s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }}
/>
          </Box>

          {/* Right Cards */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "1fr",
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {developmentCards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  background: "#fff",
                  p: { xs: 2.5, md: 3 },
                  borderRadius: "20px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(21,101,216,0.08)",
                  transition: "all 0.35s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 55px rgba(21,101,216,0.15)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.25rem" },
                    fontWeight: 800,
                    color: TEXT_DARK,
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.88rem", md: "0.95rem" },
                    color: TEXT_LIGHT,
                    lineHeight: 1.75,
                  }}
                >
                  {card.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;