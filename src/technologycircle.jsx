import React from "react";
import { Box, Container, Typography } from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const items = [
  { title: "Artificial Intelligence", icon: <MemoryIcon />, top: "5%", left: "18%" },
  { title: "Cloud Computing", icon: <CloudIcon />, top: "5%", right: "18%" },
  { title: "Cyber Security", icon: <SecurityIcon />, top: "42%", right: "5%" },
  { title: "Automation", icon: <SettingsSuggestIcon />, bottom: "5%", right: "18%" },
  { title: "Data Analytics", icon: <AnalyticsIcon />, bottom: "5%", left: "18%" },
  { title: "Digital Transformation", icon: <AutoAwesomeIcon />, top: "42%", left: "5%" },
];

const TechnologyCircleSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, background: "linear-gradient(180deg,#f8fbff,#eef5ff)" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography sx={{ color: "#1565d8", fontWeight: 700, letterSpacing: 2, fontSize: { xs: 13, md: 16 } }}>
            OUR TECHNOLOGIES
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#102a43",
              mt: 1,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Powering Innovation Through Technology
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              mx: "auto",
              mt: 2,
              color: "#52606d",
              lineHeight: 1.8,
              fontSize: { xs: 14, md: 16 },
            }}
          >
            We use advanced technologies to build secure, scalable, and intelligent
            digital solutions that help businesses automate workflows, improve
            performance, and grow with confidence.
          </Typography>
        </Box>

        {/* Desktop Circle View */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "relative",
            width: 720,
            height: 720,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: "10%",
              border: "2px solid #b7d4ff",
              borderRadius: "50%",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 340,
              height: 340,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: "0 25px 70px rgba(21,101,216,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              p: 4,
              zIndex: 2,
            }}
          >
            <MemoryIcon sx={{ fontSize: 50, color: "#1565d8", mb: 2 }} />

            <Typography variant="h4" sx={{ fontWeight: 800, color: "#102a43" }}>
              Technology Excellence
            </Typography>

            <Typography sx={{ mt: 2, color: "#52606d", lineHeight: 1.6 }}>
              Innovative. Scalable. Secure.
            </Typography>
          </Box>

          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: item.top,
                left: item.left,
                right: item.right,
                bottom: item.bottom,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: "#fff",
                boxShadow: "0 18px 45px rgba(16,42,67,0.12)",
                border: "1px solid #dbeafe",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.05)",
                  boxShadow: "0 25px 60px rgba(21,101,216,0.22)",
                },
                "& svg": {
                  fontSize: 42,
                  color: "#1565d8",
                  mb: 1,
                },
              }}
            >
              {item.icon}

              <Typography sx={{ fontWeight: 700, color: "#102a43", fontSize: "1rem" }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Mobile Responsive Card View */}
        <Box
          sx={{
            display: { xs: "grid", md: "none" },
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#fff",
                borderRadius: "20px",
                p: 3,
                textAlign: "center",
                border: "1px solid #dbeafe",
                boxShadow: "0 14px 35px rgba(16,42,67,0.1)",
              }}
            >
              <Box
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: "18px",
                  bgcolor: "#eaf3ff",
                  color: "#1565d8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 1.5,
                  "& svg": {
                    fontSize: 32,
                  },
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#102a43",
                  fontSize: "1rem",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TechnologyCircleSection;