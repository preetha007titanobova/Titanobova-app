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
    <Box sx={{ py: 10, background: "linear-gradient(180deg,#f8fbff,#eef5ff)" }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography sx={{ color: "#1565d8", fontWeight: 700, letterSpacing: 2 }}>
            OUR TECHNOLOGIES
          </Typography>

          <Typography variant="h3" sx={{ fontWeight: 800, color: "#102a43", mt: 1 }}>
            Powering Innovation Through Technology
          </Typography>

          <Typography sx={{ maxWidth: 850, mx: "auto", mt: 2, color: "#52606d", lineHeight: 1.8 }}>
            We use advanced technologies to build secure, scalable, and intelligent
            digital solutions that help businesses automate workflows, improve
            performance, and grow with confidence.
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: { xs: 320, sm: 520, md: 720 },
            height: { xs: 320, sm: 520, md: 720 },
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
              width: { xs: 180, sm: 260, md: 340 },
              height: { xs: 180, sm: 260, md: 340 },
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
                width: { xs: 90, sm: 130, md: 160 },
                height: { xs: 90, sm: 130, md: 160 },
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
                  fontSize: { xs: 28, md: 42 },
                  color: "#1565d8",
                  mb: 1,
                },
              }}
            >
              {item.icon}
              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#102a43",
                  fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
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