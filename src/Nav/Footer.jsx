import React from "react";
import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const quickLinks = ["Home", "About", "Projects", "Courses", "Contact"];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "SaaS Platforms",
    "AI Solutions",
    "Cloud Services",
  ];

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #1c2947 0%, #243B6B 50%, #1a2c51 100%)",
        color: "#fff",
        pt: { xs: 5, sm: 6, md: 8 },
        pb: { xs: 2.5, md: 3 },
        mt: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {/* Company Info */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.3rem" },
              }}
            >
              Titanobova
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                lineHeight: 1.8,
                fontSize: { xs: 14, md: 15 },
                mb: 2.5,
                maxWidth: { xs: "100%", sm: 320 },
                mx: { xs: "auto", sm: 0 },
              }}
            >
              Titanobova delivers innovative software solutions, scalable SaaS
              platforms, AI-powered applications, and enterprise-grade digital
              products that help businesses grow faster and operate smarter.
            </Typography>

            <Typography
              sx={{
                color: "#60A5FA",
                fontWeight: 600,
                fontSize: { xs: 13, md: 14 },
              }}
            >
              Innovation • Quality • Reliability
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography sx={{ fontWeight: 700, mb: 2.5, fontSize: 19 }}>
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {quickLinks.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  underline="none"
                  sx={{
                    color: "#CBD5E1",
                    fontSize: { xs: 14, md: 15 },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#60A5FA",
                      pl: { xs: 0, sm: 1 },
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography sx={{ fontWeight: 700, mb: 2.5, fontSize: 19 }}>
              Services
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {services.map((service) => (
                <Typography
                  key={service}
                  sx={{
                    color: "#CBD5E1",
                    fontSize: { xs: 14, md: 15 },
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} lg={3}>
            <Typography sx={{ fontWeight: 700, mb: 2.5, fontSize: 19 }}>
              Contact Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.3 }}>
                <EmailIcon sx={{ color: "#60A5FA", fontSize: 22 }} />

                <Link
                  href="mailto:titanobovapvt@gmail.com"
                  underline="none"
                  sx={{
                    color: "#CBD5E1",
                    fontSize: 14,
                    cursor: "pointer",
                    "&:hover": {
                      color: "#60A5FA",
                    },
                  }}
                >
                  titanobovapvt@gmail.com
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.3 }}>
                <PhoneIcon sx={{ color: "#60A5FA", fontSize: 22 }} />

                <Link
                  href="tel:+918270917589"
                  underline="none"
                  sx={{
                    color: "#CBD5E1",
                    fontSize: 14,
                    cursor: "pointer",
                    "&:hover": {
                      color: "#60A5FA",
                    },
                  }}
                >
                  +91 8270917589
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.3,
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <LocationOnIcon
                  sx={{ color: "#60A5FA", mt: 0.2, fontSize: 22 }}
                />
                <Typography sx={{ color: "#CBD5E1", fontSize: 14 }}>
                  Attur,
                  <br />
                  Salem, Tamil Nadu,
                  <br />
                  India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.1)",
            mt: { xs: 4, md: 6 },
            mb: 3,
          }}
        />

        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography sx={{ color: "#94A3B8", fontSize: { xs: 13, md: 14 } }}>
            © {new Date().getFullYear()} Titanobova. All Rights Reserved.
          </Typography>

          <Typography
            sx={{ color: "#64748B", fontSize: { xs: 12, md: 13 }, mt: 1 }}
          >
            Building Modern Software Solutions for Businesses Worldwide.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
