import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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

  const trustPoints = [
    "Transparent Communication",
    "Secure & Scalable Solutions",
    "On-Time Project Delivery",
    "Quality-Focused Development",
    "Dedicated Client Support",
  ];

  const linkStyle = {
    color: "#CBD5E1",
    fontSize: { xs: "0.9rem", md: "0.95rem" },
    transition: "0.3s",
    "&:hover": {
      color: "#60A5FA",
      pl: { xs: 0, sm: 0.8 },
    },
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg, #17243f 0%, #243B6B 50%, #16213d 100%)",
        color: "#fff",
        pt: { xs: 4, md: 6 },
        pb: 2,
        mt: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          alignItems="flex-start"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Grid item xs={12} sm={6} md={2.4}>
            <Typography
              sx={{
                fontWeight: 900,
                mb: 1.3,
                fontSize: { xs: "1.8rem", md: "1.9rem" },
              }}
            >
              TITANOBOVA
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                lineHeight: 1.7,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
                mb: 1.2,
                maxWidth: 340,
                mx: { xs: "auto", sm: 0 },
              }}
            >
              Titanobova builds reliable websites, applications, SaaS platforms,
              AI-powered tools, and cloud-ready digital products.
            </Typography>

            <Typography
              sx={{
                color: "#60A5FA",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", md: "0.95rem" },
              }}
            >
              Innovation • Quality • Reliability
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <Typography sx={{ fontWeight: 800, mb: 1.5, fontSize: 18 }}>
              Quick Links
            </Typography>

            <Stack spacing={1}>
              {quickLinks.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  underline="none"
                  sx={linkStyle}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <Typography sx={{ fontWeight: 800, mb: 1.5, fontSize: 18 }}>
              Our Services
            </Typography>

            <Stack spacing={1}>
              {services.map((service) => (
                <Typography key={service} sx={linkStyle}>
                  {service}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <Typography sx={{ fontWeight: 800, mb: 1.5, fontSize: 18 }}>
              Why Choose Us
            </Typography>

            <Stack
              spacing={1}
              sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
            >
              {trustPoints.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#60A5FA", fontSize: 17 }} />
                  <Typography sx={linkStyle}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2.4}>
            <Typography sx={{ fontWeight: 800, mb: 1.5, fontSize: 18 }}>
              Contact Us
            </Typography>

            <Stack
              spacing={1.4}
              sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon sx={{ color: "#60A5FA", fontSize: 20 }} />
                <Link
                  href="mailto:titanobovapvt@gmail.com"
                  underline="none"
                  sx={linkStyle}
                >
                  titanobovapvt@gmail.com
                </Link>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ color: "#60A5FA", fontSize: 20 }} />
                <Link href="tel:+918270917589" underline="none" sx={linkStyle}>
                  +91 8270917589
                </Link>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1,
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <LocationOnIcon
                  sx={{ color: "#60A5FA", mt: 0.2, fontSize: 20 }}
                />
                <Typography
                  sx={{
                    color: "#CBD5E1",
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    lineHeight: 1.6,
                  }}
                >
                  Attur, Salem
                  <br />
                  Tamil Nadu, India
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(255,255,255,0.12)",
            mt: { xs: 3, md: 4 },
            mb: 2,
          }}
        />

        <Box sx={{ textAlign: "center", px: 1 }}>
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.85rem", sm: "0.95rem" },
            }}
          >
            © {new Date().getFullYear()} Titanobova. All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              mt: 0.6,
            }}
          >
            Building modern software solutions for businesses worldwide.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;