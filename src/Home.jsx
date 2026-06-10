import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Solutions from "./Solutions";
import Banner from "./assets/Banner.PNG";
import better from "./assets/better.png";
import Archi from "./assets/archi.png";
import Excellence from "./assets/Excellence.png";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer UI/UX design, website development, mobile app development, AI solutions, automation systems, and custom software development.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, small businesses, enterprises, educational brands, and service-based companies.",
  },
  {
    q: "Can you redesign my existing website or app?",
    a: "Yes, we can redesign your existing website or app with a modern UI, better user experience, speed optimization, and responsive layout.",
  },
  {
    q: "How long does it take to complete a project?",
    a: "A basic website may take 1–2 weeks, while larger web apps or custom software may take 1–3 months depending on features.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide maintenance, updates, bug fixing, performance improvements, and feature upgrades after launch.",
  },
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderImages = [better, Excellence];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <Box id="home" sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "220px", sm: "320px", md: "430px", lg: "560px" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={Banner}
          alt="IT Company Banner"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Who We Are */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)",
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", maxWidth: 850, mx: "auto" }}>
            <Typography
              sx={{
                color: "#1565d8",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Who We Are
            </Typography>

            <Typography
              variant="h3"
              sx={{
                  fontFamily:"-moz-initial",
                fontWeight: 900,
                color: "#102a43",
                fontSize: { xs: "1.9rem", md: "3rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Building Smart Digital Solutions for Growing Businesses
            </Typography>

            <Typography
              sx={{
                color: "#52606d",
                fontSize: { xs: "0.96rem", md: "1.08rem" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              We create professional websites, web applications, mobile
              applications, AI-powered solutions, automation systems, and
              digital learning experiences.
            </Typography>

            <Button
              variant="contained"
              onClick={() => (window.location.href = "/who-we-are")}
              sx={{
                px: 4,
                py: 1.3,
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 700,
                background: "linear-gradient(135deg, #1565d8, #003b88)",
                boxShadow: "0 10px 25px rgba(21,101,216,0.25)",
              }}
            >
              Who We Are
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Solutions />

      {/* Design Experience Section */}
      <Box sx={{ background: "#eeeeee", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "0.8fr 1.4fr 0.8fr",
              },
              gap: 3,
              alignItems: "stretch",
            }}
          >
            {/* LEFT AUTO SLIDER IMAGE */}
            <Box
              sx={{
                minHeight: { xs: 420, md: 650 },
                borderRadius: "18px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
              }}
            >
              <Box
                component="img"
                src={sliderImages[activeSlide]}
                alt="Better Design"
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: 420, md: 650 },
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  transition: "all 0.8s ease",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.32))",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 22,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 1,
                  zIndex: 2,
                }}
              >
                {sliderImages.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    sx={{
                      width: activeSlide === index ? 28 : 10,
                      height: 10,
                      borderRadius: "20px",
                      cursor: "pointer",
                      background:
                        activeSlide === index
                          ? "#ffffff"
                          : "rgba(255,255,255,0.5)",
                      transition: "0.3s",
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* CENTER CONTENT */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: "8px",
                p: { xs: 4, md: 8 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                    fontFamily:"-moz-initial",
                  color: "#07111f",
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.1,
                  mb: 3,
                }}
              >
                Better Designs, Better Experiences
              </Typography>

              <Typography sx={{ color: "#333", lineHeight: 1.9 }}>
                We believe great design is more than just appearance. It is
                about creating meaningful digital experiences that connect users
                with technology. Our approach blends creativity, usability,
                innovation, and business strategy to build websites,
                applications, and software products that are clean, modern, and
                easy to use.
              </Typography>

              <Typography sx={{ color: "#333", lineHeight: 1.9, mt: 2 }}>
                From wireframes to final interfaces, we focus on clarity,
                accessibility, responsive design, and smooth user interaction.
                Every screen is designed to support your business goals and
                improve customer engagement.
              </Typography>
            </Box>

            {/* RIGHT CARDS */}
            <Box sx={{ display: "grid", gap: 2 }}>
         <Box
  component="img"
  src={Archi}
  alt="Professional Team"
  sx={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5%",
    boxShadow: "0 30px 80px rgba(16,42,67,0.22)",
    display: "block",
  }}
/>

              <Box
                sx={{
                  borderRadius: "14px",
                     background: "linear-gradient(135deg, #091c37, #003b88)",
                boxShadow: "0 10px 25px rgba(21,101,216,0.25)",
                  p: 4,
                  minHeight: 260,
                  color: "#fff",
                }}
              >
                <Typography variant="h4" fontWeight={900}>
                  Let’s Talk Design!
                </Typography>

                <Button
                  sx={{
                    mt: 3,
                    minWidth: 58,
                    height: 58,
                    borderRadius: "50%",
                    background: "#c8ffd2",
                    color: "#111",
                    "&:hover": { background: "#a8f5b5" },
                  }}
                >
                  <ArrowOutwardIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ background: "#edf4ff", py: { xs: 5, md: 8 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
              gap: { xs: 4, md: 8 },
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                background: "#fff",
                borderRadius: "22px",
                p: { xs: 2.5, md: 4 },
                boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
              }}
            >
              {faqs.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    borderBottom:
                      index !== faqs.length - 1
                        ? "1px dashed #cbd5e1"
                        : "none",
                    py: 2,
                  }}
                >
                  <Box
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 800,
                        color: openFaq === index ? "#1565d8" : "#111827",
                      }}
                    >
                      {item.q}
                    </Typography>

                    {openFaq === index ? (
                      <KeyboardArrowUpIcon sx={{ color: "#1565d8" }} />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </Box>

                  {openFaq === index && (
                    <Typography
                      sx={{
                        mt: 2,
                        color: "#52606d",
                        lineHeight: 1.8,
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.a}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ pt: { xs: 0, md: 2 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                    fontFamily:"-moz-initial",
                  color: "#111",
                  fontSize: { xs: "2.2rem", md: "3.4rem" },
                  lineHeight: 0.95,
                  mb: 2,
                }}
              >
                Frequently asked Questions
              </Typography>

              <Typography
                sx={{
                  color: "#374151",
                  maxWidth: 420,
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Find quick answers to the most common questions about our
                services, features, support, and project process.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  background: "#111",
                  color: "#fff",
                  borderRadius: "6px",
                  px: 3,
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 800,
                  "&:hover": { background: "#003b88" },
                }}
              >
                Leave a Message
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;