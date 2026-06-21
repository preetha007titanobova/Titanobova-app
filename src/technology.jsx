import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { keyframes } from "@mui/system";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import technologybanner from "./assets/technology.png"
import TechnologyCircleSection from "./technologycircle.jsx";
const technologies = [
  {
    icon: <MemoryIcon sx={{ fontSize: 40 }} />,
    title: "Artificial Intelligence",
    description:
      "Leverage AI-powered solutions to automate processes, analyze data, and unlock smarter business decisions.",
  },
  {
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    title: "Cloud Computing",
    description:
      "Build scalable and secure cloud-based applications that support growth, flexibility, and performance.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Cyber Security",
    description:
      "Protect your business with advanced security practices, secure architectures, and reliable data protection.",
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
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
        py: 10,
        background:
          "linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            sx={{
              color: "#1565d8",
              fontWeight: 700,
                display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
              letterSpacing: 2,
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
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
              mb: 2,
            }}
          >
            Powering Innovation Through Technology
          </Typography>

      <Typography
  sx={{
    maxWidth: 900,
    mx: "auto",
    color: "#52606d",
    lineHeight: 1.8,
   
            margin: "16px auto 0",
  }}
>
  We combine modern technologies, intelligent automation, and scalable
  digital solutions to help businesses stay competitive, efficient, and
  future-ready. From AI-powered applications and cloud infrastructure to
  secure enterprise systems and custom software development, we deliver
  innovative solutions that streamline operations, enhance productivity,
  and accelerate business growth. Our technology-driven approach ensures
  reliability, scalability, and long-term value, enabling organizations
  to adapt quickly to evolving market demands and digital transformation
  opportunities.
</Typography>
        </Box>
           <br/>
    <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            mx: "auto",
            mb: 8,
            px: { xs: 2, md: 3 },
            animation: `${fadeUp} 1s ease forwards`,
          }}
        >
          <Box
            component="img"
            src={technologybanner}
            alt="Course Banner"
            sx={{
              width: "100%",
              display: "block",
              height: {
                xs: 220,
                sm: 320,
                md: 560,
                lg: 720,
              },
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "28px",
              boxShadow: "0 24px 70px rgba(16,42,67,0.16)",
            }}
          />
        </Box>

<Grid
  container
  columnSpacing={5}
  rowSpacing={10}
>
  {technologies.map((tech, index) => (
    <Grid
      size={{ xs: 12, md: 6 }}
      key={index}
    >
      <Paper
        elevation={2}
        sx={{
          p: 4,
          borderRadius: "20px",
          height: "100%",
          border: "1px solid #dbeafe",
          transition: "0.3s",
        
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(21,101,216,0.12)",
          },
        }}
      >
        <Box sx={{ color: "#1565d8", mb: 2 }}>
          {tech.icon}
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            color: "#102a43",
            mb: 1.5,
          }}
        >
          {tech.title}
        </Typography>

        <Typography
          sx={{
            color: "#52606d",
            lineHeight: 1.8,
          }}
        >
          {tech.description}
        </Typography>
      </Paper>
    </Grid>
  ))}
</Grid>
<TechnologyCircleSection/>
      </Container>
    </Box>
  );
};

export default TechnologySection;