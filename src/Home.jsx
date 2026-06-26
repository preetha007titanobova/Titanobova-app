import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Solutions from "./Solutions";
import Banner from "./assets/Banner.jpg";
import better from "./assets/better.jpg";
import Archi from "./assets/archi.jpg";
import Excellence from "./assets/Excellence.jpg";

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

const fontFamily = "'Century Gothic', 'Poppins', 'Segoe UI', sans-serif";

const headingStyle = {
  fontFamily,
  fontWeight: 900,
  lineHeight: 1.15,
  fontSize: {
    xs: "1.8rem",
    sm: "2.2rem",
    md: "2.8rem",
    lg: "3.4rem",
  },
};

const bodyStyle = {
  fontFamily,
  fontSize: {
    xs: "0.92rem",
    sm: "0.98rem",
    md: "1.05rem",
  },
  lineHeight: 1.8,
};

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
    <Box
      id="home"
      sx={{
        width: "100%",
        overflowX: "hidden",
        fontFamily,
        bgcolor: "#fff",
      }}
    >
      {/* Banner */}
    <Box
  sx={{
    width: "100%",
    height: {
      xs: "200px",
      sm: "280px",
      md: "420px",
      lg: "650px", 
    },
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
            height: "120%",
            // objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      {/* Who We Are */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #f8fbff 0%, #eef5ff 100%)",
          py: { xs: 4, sm: 5, md: 7, lg: 9 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ textAlign: "center", maxWidth: 850, mx: "auto" }}>
            <Typography
              sx={{
              
                color: "#1565d8",
                fontWeight: 800,
                fontFamily:"-apple-system",
                letterSpacing: "2px",
                textTransform: "uppercase",
                mb: 1.5,
                fontSize: { xs: "0.75rem", md: "0.9rem" },
              }}
            >
              Who We Are
            </Typography>

            <Typography sx={{ ...headingStyle, color: "#102a43", mb: 2 ,    fontFamily:"-apple-system",}}>
              Building Smart Digital Solutions for Growing Businesses
            </Typography>

            <Typography
              sx={{
                ...bodyStyle,
                color: "#3b434a",
                mb: 3,
                               fontSize: {
              xs: "0.92rem",
              sm:"1.2rem",
              md: "1.52rem",
              lg: "1.05rem",
            },
                   fontFamily:"math",
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
                px: { xs: 2.5, md: 4 },
                py: { xs: 1, md: 1.3 },
                borderRadius: "50px",
                textTransform: "none",
                fontFamily,
                fontWeight: 700,
                fontSize: { xs: "0.85rem", md: "1rem" },
                background: "linear-gradient(135deg, #1565d8, #003b88)",
                boxShadow: "0 10px 25px rgba(21,101,216,0.25)",
              }}
            >
              Who We Are
            </Button>
          </Box>
        </Container>
      </Box>

      <Solutions />

      {/* Design Experience Section */}
<Box sx={{ background: "#eeeeee", py: { xs: 4, sm: 5, md: 6, lg: 9 } }}>
  <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 4 } }}>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr",
          md: "0.8fr 1.25fr 0.8fr",
          lg: "0.8fr 1.4fr 0.8fr",
        },
        gap: { xs: 2.5, sm: 3, md: 2, lg: 3 },
        alignItems: "stretch",
      }}
    >
      {/* Left Slider */}
      <Box
        sx={{
          minHeight: { xs: 250, sm: 320, md: 430, lg: 650 },
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
            minHeight: { xs: 250, sm: 320, md: 430, lg: 650 },
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            transition: "all 0.8s ease",
          }}
        />
      </Box>

      {/* Center Content */}
      <Box
        sx={{
          background: "#fff",
          borderRadius: "12px",
          p: { xs: 2.5, sm: 3, md: 2.5, lg: 7 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: { md: 430, lg: "auto" },
        }}
      >
        <Typography
          sx={{
            ...headingStyle,
            color: "#07111f",
            fontFamily: "-apple-system",
            mb: 2,
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "1.7rem",
              lg: "2.4rem",
            },
          }}
        >
          Better Designs, Better Experiences
        </Typography>

        <Typography
          sx={{
            ...bodyStyle,
            color: "#333",
            fontWeight: 750,
            fontFamily: "math",
            fontSize: {
              xs: "0.92rem",
              md: "1.62rem",
                  sm:"1.5rem",
              lg: "1.05rem",
            },
          }}
        >
          We believe great design is more than just appearance. It is about
          creating meaningful digital experiences that connect users with
          technology. Our approach blends creativity, usability, innovation, and
          business strategy to build websites, applications, and software
          products that are clean, modern, and easy to use.
        </Typography>

        <Typography
          sx={{
            ...bodyStyle,
            color: "#333",
            fontWeight: 750,
            fontFamily: "math",
            mt: 2,
            fontSize: {
              xs: "0.92rem",
              sm:"1.5rem",
                    md: "1.62rem",
              lg: "1.05rem",
            },
          }}
        >
          From wireframes to final interfaces, we focus on clarity,
          accessibility, responsive design, and smooth user interaction. Every
          screen is designed to support your business goals and improve customer
          engagement.
        </Typography>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          display: "grid",
          gap: { xs: 2, md: 2, lg: 2.5 },
          gridTemplateColumns: "1fr",
        }}
      >
        <Box
          component="img"
          src={Archi}
          alt="Professional Team"
          sx={{
            width: "100%",
            height: {
              xs: 480,
              sm: 700,
              md: 620,
              lg: 420,
            },
        object:"cover",
            borderRadius: "18px",
            boxShadow: "0 30px 80px rgba(16,42,67,0.22)",
            display: "block",
          }}
        />

        <Box
          sx={{
            borderRadius: "18px",
            background: "linear-gradient(135deg, #091c37, #003b88)",
            boxShadow: "0 10px 25px rgba(21,101,216,0.25)",
            p: { xs: 3, md: 2, lg: 4 },
            minHeight: { xs: 150, md: 100, lg: 200 },
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontFamily,
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "1.25rem",
                lg: "2rem",
              },
              fontWeight: 900,
            }}
          >
            Let’s Talk Design!
          </Typography>

          <Button
            onClick={() => (window.location.href = "/conversation")}
            sx={{
              mt: { xs: 3, md: 2 },
              width: { xs: 56, md: 45, lg: 56 },
              minWidth: { xs: 56, md: 45, lg: 56 },
              height: { xs: 56, md: 45, lg: 56 },
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
      <Box sx={{ background: "#edf4ff", py: { xs: 4, sm: 5, md: 7, lg: 9 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr",
                lg: "1.1fr 0.9fr",
              },
              gap: { xs: 4, md: 6, lg: 8 },
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
                      gap: 2,
                      cursor: "pointer",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily:"math",
                        fontWeight: 800,
                            fontSize: {
              xs: "0.92rem",
              sm:"1.5rem",
                   md: "1.62rem",
              lg: "1.05rem",
            },
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
                        ...bodyStyle,
                        mt: 2,
                            fontSize: {
              xs: "0.92rem",
              sm:"1.5rem",
                md: "1.62rem",
              lg: "1.05rem",
            },
                        color: "#3e444a",
                  
                      }}
                    >
                      {item.a}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ pt: { xs: 0, lg: 2 } }}>
              <Typography
                sx={{
                  ...headingStyle,
                  color: "#111",
                  lineHeight: 1,
                  mb: 2,
                    fontFamily:"math",
                }}
              >
                Frequently Asked Questions
              </Typography>

              <Typography
                sx={{
                  ...bodyStyle,
                  color: "#374151",
                  maxWidth: 420,
                  mb: 3,
                                fontSize: {
              xs: "0.92rem",
              sm:"1.5rem",
                 md: "1.62rem",
              lg: "1.05rem",
            },
                    fontFamily:"math",
                }}
              >
                Find quick answers to the most common questions about our
                services, features, support, and project process.
              </Typography>

              <Button
                variant="contained"
                onClick={() => (window.location.href = "/conversation")}
                sx={{
                  background: "#111",
                  color: "#fff",
                  borderRadius: "8px",
                  px: { xs: 2.5, md: 3 },
                  py: { xs: 1, md: 1.3 },
                  textTransform: "none",
                  fontFamily,
                  fontWeight: 800,
                              fontSize: {
              xs: "0.92rem",
              sm:"1.2rem",
              md: "0.82rem",
              lg: "1.05rem",
            },
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