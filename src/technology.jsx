import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { keyframes } from "@mui/system";

import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import technologybanner from "./assets/technology.png";
import TechnologyCircleSection from "./technologycircle.jsx";

const technologies = [
  {
    icon: <MemoryIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
    title: "Artificial Intelligence",
    description:
      "Leverage AI-powered solutions to automate processes, analyze data, and unlock smarter business decisions.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
    title: "Cloud Computing",
    description:
      "Build scalable and secure cloud-based applications that support growth, flexibility, and performance.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
    title: "Cyber Security",
    description:
      "Protect your business with advanced security practices, secure architectures, and reliable data protection.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
    title: "Digital Transformation",
    description:
      "Transform traditional business operations with modern technologies, automation, and innovative digital experiences.",
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

const TechnologySection = () => {
  return (
    <Box
      sx={{
        py: { xs: 5, sm: 7, md: 10 },
        px: { xs: 1.5, sm: 2, md: 0 },
        background: "linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#1565d8",
              fontWeight: 800,
              display: "block",
              letterSpacing: { xs: 1.4, sm: 2 },
              fontSize: { xs: "0.7rem", sm: "0.78rem" },
              mb: 1,
            }}
          >
            OUR TECHNOLOGIES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: "#102a43",
              mx: "auto",
              maxWidth: 850,
              mb: 2,
              lineHeight: 1.15,
              fontSize: {
                xs: "1.9rem",
                sm: "2.4rem",
                md: "3rem",
              },
            }}
          >
            Powering Innovation Through Technology
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              mx: "auto",
              color: "#52606d",
              lineHeight: { xs: 1.7, md: 1.8 },
              fontSize: { xs: "0.92rem", sm: "1rem" },
            }}
          >
            We combine modern technologies, intelligent automation, and scalable
            digital solutions to help businesses stay competitive, efficient,
            and future-ready. From AI-powered applications and cloud
            infrastructure to secure enterprise systems and custom software
            development, we deliver innovative solutions that streamline
            operations, enhance productivity, and accelerate business growth.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            mb: { xs: 5, sm: 6, md: 8 },
            animation: `${fadeUp} 1s ease forwards`,
          }}
        >
          <Box
            component="img"
            src={technologybanner}
            alt="Technology Banner"
            sx={{
              width: "100%",
              display: "block",
              height: {
                xs: 190,
                sm: 300,
                md: 470,
                lg: 560,
              },
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: { xs: "16px", sm: "22px", md: "28px" },
              boxShadow: "0 24px 70px rgba(16,42,67,0.16)",
            }}
          />
        </Box>

        <Grid
          container
          spacing={{
            xs: 2.5,
            sm: 3,
            md: 4,
          }}
          sx={{ mb: { xs: 5, md: 7 } }}
        >
          {technologies.map((tech, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  borderRadius: { xs: "18px", md: "22px" },
                  height: "100%",
                  border: "1px solid #dbeafe",
                  background: "#ffffff",
                  boxShadow: "0 14px 40px rgba(16,42,67,0.08)",
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 45px rgba(21,101,216,0.14)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: 54, sm: 60, md: 66 },
                    height: { xs: 54, sm: 60, md: 66 },
                    borderRadius: "18px",
                    bgcolor: "#eaf3ff",
                    color: "#1565d8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  {tech.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    color: "#102a43",
                    mb: 1.5,
                    fontSize: { xs: "1.08rem", sm: "1.15rem", md: "1.25rem" },
                  }}
                >
                  {tech.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#52606d",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.9rem", sm: "0.95rem" },
                  }}
                >
                  {tech.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <TechnologyCircleSection />
      </Container>
    </Box>
  );
};

export default TechnologySection;