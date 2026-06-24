import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import WebIcon from "@mui/icons-material/Web";
import HubIcon from "@mui/icons-material/Hub";
import { keyframes } from "@mui/system";

const orbitRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(60deg);
  }
`;

const counterRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const items = [
  { title: "Artificial Intelligence", icon: <MemoryIcon /> },
  { title: "Cloud Computing", icon: <CloudIcon /> },
  { title: "Cyber Security", icon: <SecurityIcon /> },
  { title: "Automation", icon: <SettingsSuggestIcon /> },
  { title: "Data Analytics", icon: <AnalyticsIcon /> },
  { title: "Digital Transformation", icon: <AutoAwesomeIcon /> },
  { title: "Web Development", icon: <WebIcon /> },
  { title: "DevOps", icon: <HubIcon /> },
];

const TechnologyCircleSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 5, sm: 7, md: 10 },
        background: "linear-gradient(180deg,#f8fbff,#eef5ff)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, sm: 6, md: 8 }}>
          <Typography
            sx={{
              color: "#1565d8",
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: { xs: 11, sm: 13, md: 16 },
            }}
          >
            OUR TECHNOLOGIES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#102a43",
              mt: 1,
               fontFamily: "-apple-system",
              fontSize: { xs: "1.55rem", sm: "2.2rem", md: "3rem" },
              lineHeight: 1.15,
            }}
          >
            Powering Innovation Through Technology
          </Typography>
        </Box>
<br/>
<br/>
        <Box
          sx={{
            position: "relative",
            width: { xs: 300, sm: 560, md: 760 },
            height: { xs: 300, sm: 560, md: 760 },
            mx: "auto",
            
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: { xs: "6%", sm: "7%", md: "8%" },
              border: "2px solid #b7d4ff",
              borderRadius: "50%",
              animation: `${orbitRotate} 8s ease-in-out infinite alternate`,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: { xs: "23%", sm: "22%", md: "21%" },
              border: "1px dashed rgba(21,101,216,0.25)",
              borderRadius: "50%",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: 105, sm: 240, md: 330 },
              height: { xs: 105, sm: 240, md: 330 },
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 25px 70px rgba(21,101,216,0.18)",
              display: "flex",
              
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              zIndex: 5,
              p: { xs: 0.93, sm: 3, md: 4 },
            }}
          >
            <MemoryIcon
              sx={{
                fontSize: { xs: 23, sm: 38, md: 50 },
                color: "#1565d8",
                mb: { xs: 0.4, md: 1 },
              }}
            />

            <Typography
              sx={{
                fontWeight: 800,
                color: "#102a43",
                fontSize: { xs: "0.76rem", sm: "1.45rem", md: "2rem" },
                lineHeight: 1.15,
              }}
            >
              Technology Excellence
            </Typography>

            <Typography
              sx={{
                mt: { xs: 0.4, md: 1 },
                color: "#52606d",
                fontSize: { xs: 8.5, sm: 13, md: 16 },
              }}
            >
              Innovative. Scalable. Secure.
            </Typography>
          </Box>
<Box
  sx={{
    position: "absolute",
    inset: 0,
    animation: `${orbitRotate} 40s linear infinite`,
  }}
>
          {items.map((item, index) => {
            const angle = (index * 360) / items.length - 90;
            const radius = { xs: 45, sm: 43, md: 42 };

            return (
              <Box
                key={index}
                sx={{
                  position: "absolute",
                  
                  top: {
                    xs: `${50 + radius.xs * Math.sin((angle * Math.PI) / 180)}%`,
                    sm: `${50 + radius.sm * Math.sin((angle * Math.PI) / 180)}%`,
                    md: `${50 + radius.md * Math.sin((angle * Math.PI) / 180)}%`,
                  },
                  left: {
                    xs: `${50 + radius.xs * Math.cos((angle * Math.PI) / 180)}%`,
                    sm: `${50 + radius.sm * Math.cos((angle * Math.PI) / 180)}%`,
                    md: `${50 + radius.md * Math.cos((angle * Math.PI) / 180)}%`,
                  },
                  transform: "translate(-50%, -50%)",
                  width: { xs: 58, sm: 120, md: 155 },
                  height: { xs: 58, sm: 120, md: 155 },
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: {
                    xs: "0 8px 18px rgba(16,42,67,0.12)",
                    md: "0 18px 45px rgba(16,42,67,0.12)",
                  },
                  border: "1px solid #dbeafe",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  p: { xs: 0.6, sm: 1.4, md: 2 },
                  zIndex: 3,

                  "&:hover": {
                    transform: "translate(-50%, -50%) scale(1.05)",
                    boxShadow: "0 25px 60px rgba(21,101,216,0.22)",
                  },

                  "& svg": {
                    fontSize: { xs: 16, sm: 31, md: 40 },
                    color: "#1565d8",
                    mb: { xs: 0.2, sm: 0.8, md: 1 },
                  },
                }}
              >
                {item.icon}

                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "#102a43",
                    fontSize: {
                      xs: "0.34rem",
                      sm: "0.76rem",
                      md: "0.95rem",
                    },
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TechnologyCircleSection;