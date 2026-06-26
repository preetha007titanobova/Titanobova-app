import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { keyframes } from "@mui/system";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import technologybanner from "./assets/technology.jpg";
import TechnologyCircleSection from "./technologycircle.jsx";

const technologies = [
  {
    icon: <MemoryIcon sx={{ fontSize: { xs: 30, sm: 34, md: 40 } }} />,
    title: "Artificial Intelligence",
    description:
      "Leverage AI-powered solutions to automate processes, analyze data, and unlock smarter business decisions.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: { xs: 30, sm: 34, md: 40 } }} />,
    title: "Cloud Computing",
    description:
      "Build scalable and secure cloud-based applications that support growth, flexibility, and performance.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: { xs: 30, sm: 34, md: 40 } }} />,
    title: "Cyber Security",
    description:
      "Protect your business with advanced security practices, secure architectures, and reliable data protection.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: { xs: 30, sm: 34, md: 40 } }} />,
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
        background: "linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, sm: 5, md: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#1565d8",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: { xs: 1.2, sm: 1.6, md: 2 },
              fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.85rem" },
            }}
          >
            OUR TECHNOLOGIES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#102a43",
              mx: "auto",
              display: "flex",
              alignItems: "center",
               fontFamily: "-apple-system",
              justifyContent: "center",
              mb: { xs: 1.5, md: 2 },
              fontSize: {
                xs: "1.55rem",
                sm: "2.2rem",
                md: "3rem",
              },
              lineHeight: { xs: 1.2, md: 1.15 },
              maxWidth: 900,
            }}
          >
            Powering Innovation Through Technology
          </Typography>

          <Typography
            sx={{
              maxWidth: 900,
              // mx: "auto",
              color: "#52606d",
              lineHeight: { xs: 1.7, md: 1.8 },
              fontSize: {
                xs: "0.88rem",
                sm: "0.95rem",
                md: "1rem",
              },
              px: { xs: 1, sm: 2, md: 0 },
              mt: { xs: 1.5, md: 2 },
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
<br/>
        <Box
          sx={{
            width: "100%",
            // maxWidth: "1400px",
            mx: "auto",
            mb: { xs: 5, sm: 6, md: 8 },
            // px: { xs: 0, sm: 2, md: 3 },
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
                xs: 210,
                sm: 320,
                md: 560,
                lg: 720,
              },
              // objectFit: "cover",
              objectPosition: "center",
              borderRadius: { xs: "16px", sm: "22px", md: "28px" },
              boxShadow: {
                xs: "0 14px 35px rgba(16,42,67,0.12)",
                md: "0 24px 70px rgba(16,42,67,0.16)",
              },
            }}
          />
        </Box>

        <Grid
          container
          columnSpacing={{ xs: 0, md: 5 }}
          rowSpacing={{ xs: 7, md: 10 }}
        >
          {technologies.map((tech, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2.5, sm: 3, md: 4 },
                  borderRadius: { xs: "16px", md: "20px" },
                  height: "100%",
                  border: "1px solid #dbeafe",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(21,101,216,0.12)",
                  },
                }}
              >
                <Box sx={{ color: "#1565d8", mb: { xs: 1.5, md: 2 } }}>
                  {tech.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#102a43",
                    mb: { xs: 1, md: 1.5 },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                      md: "1.25rem",
                    },
                  }}
                >
                  {tech.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#52606d",
                    lineHeight: { xs: 1.65, md: 1.8 },
                    fontSize: {
                      xs: "0.88rem",
                      sm: "0.94rem",
                      md: "1rem",
                    },
                  }}
                >
                  {tech.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <br />
        <Box mt={{ xs: 5, md: 8 }}>
          <TechnologyCircleSection />
        </Box>
      </Container>
    </Box>
  );
};

export default TechnologySection;
