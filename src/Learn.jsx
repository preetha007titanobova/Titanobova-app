import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import aitech from "./assets/ai-tech.jpg";

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

export default function LearnMoreSection() {
  const [showMore, setShowMore] = useState(false);

  const services = [
    {
      title: "AI & Automation",
      desc: "Smart AI integrations, chatbots, automation workflows, and predictive systems.",
    },
    {
      title: "Web Development",
      desc: "Modern, responsive, and scalable websites using React, Next.js, and MERN.",
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud hosting, CI/CD pipelines, scalable deployments, and infrastructure management.",
    },
    {
      title: "UI/UX Design",
      desc: "Professional interfaces with smooth user experiences and premium visuals.",
    },
    {
      title: "Business Automation",
      desc: "CRM systems, workflow automation, and smart process optimization.",
    },
    {
      title: "Custom Software",
      desc: "Enterprise-level software solutions tailored for your business growth.",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", py: 5, px: 2 }}>
      <Typography
        variant="h3"

        sx={{
          mb: 3,
          fontWeight:"600",
          fontFamily:"-apple-system",
          background: "linear-gradient(135deg, #1565d8, #003b88)",
          boxShadow: " rgba(21,101,216,0.25)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        AI-Powered Solutions
      </Typography>

      <Box
        component="img"
        src={aitech}
        alt="AI Technology"
        sx={{
          width: "100%",
          height: { xs: 220, sm: 280, md: 500 },
          objectFit: "cover",
          borderRadius: "32px",
          boxShadow: "0 25px 70px rgba(16,42,67,0.18)",
        }}
      />

      <Typography
        sx={{
          maxWidth: 750,
          mx: "auto",
          mt: 3,
          color: "#555",
          fontSize: "1.1rem",
          lineHeight: 1.8,
        }}
      >
        We deliver innovative AI and technology solutions to transform
        businesses and improve digital experiences.
      </Typography>

   


        <Box
          sx={{
            mt: 5,
            p: { xs: 3, md: 5 },
            borderRadius: "30px",
            background: "linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
            maxWidth: 1100,
            mx: "auto",
            textAlign: "left",
            animation: `${fadeUp} 0.8s ease`,
          }}
        >
          <Typography
            variant="h4"
            fontWeight={900}
            textAlign="center"
            mb={2}
            sx={{
              background: "linear-gradient(135deg, #003b88, #1565d8, #00bcd4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
                textAlign: "center",
              maxWidth: 900,
                        fontWeight:"600",
          fontFamily:"-apple-system",
              mx: "auto",
            }}
          >
            More About Our Services
          </Typography>

          <Typography
            sx={{
              color: "#555",
              lineHeight: 1.9,
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
              mb: 5,
              fontSize: "1rem",
            }}
          >
            We build intelligent, scalable, and future-ready technology
            solutions that empower startups, enterprises, and growing
            businesses. From AI automation to modern web applications, we
            transform ideas into impactful digital experiences.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
              },
              gap: 3,
              mb: 5,
            }}
          >
            {services.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                  border: "1px solid rgba(21,101,216,0.12)",
                  boxShadow: "0 12px 30px rgba(21,101,216,0.08)",
                  transition: "all 0.4s ease",
                  animation: `${fadeUp} 0.7s ease both`,
                  animationDelay: `${index * 0.12}s`,

                  "&:hover": {
                    transform: "translateY(-10px) scale(1.02)",
                    boxShadow: "0 25px 50px rgba(21,101,216,0.18)",
                    borderColor: "#1565d8",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={800}
                  mb={1}
                  sx={{ color: "#003b88" ,                        fontWeight:"600",
          fontFamily:"-apple-system",}}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography
            variant="h5"
            fontWeight={900}
            mb={2}
            sx={{ color: "#003b88",                        fontWeight:"600",
          fontFamily:"-apple-system", }}
          >
            Why Choose Us?
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2,1fr)",
              },
              gap: 2,
              mb: 5,
            }}
          >
            {[
              "Innovative AI-powered solutions",
              "Scalable and secure architecture",
              "Fast performance and premium UI",
              "Experienced development team",
              "Business-focused strategies",
              "Reliable long-term support",
            ].map((point, index) => (
              <Typography
                key={index}
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  background: "#fff",
                  color: "#555",
                  fontWeight: 600,
                  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
                  animation: `${fadeUp} 0.7s ease both`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                ✅ {point}
              </Typography>
            ))}
          </Box>
        </Box>
  
    </Box>
  );
}