import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

import GroupsIcon from "@mui/icons-material/Groups";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import SecurityIcon from "@mui/icons-material/Security";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AiImage3 from "./assets/AiImage3.png";
import AboutImage from "./assets/about-team.jpg";
import AiImage from "./assets/ai-tech.jpg";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(45px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatImage = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
`;

const SectionCard = styled(Card)(() => ({
  width: "100%",
  height: "100%",
  minHeight: "320px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.92)",
  boxShadow: "0 18px 45px rgba(15, 45, 90, 0.12)",
  transition: "0.3s ease",
  animation: `${fadeUp} 0.8s ease both`,
  display: "flex",
  flexDirection: "column",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 25px 60px rgba(15, 45, 90, 0.2)",
  },
}));

const SameSizeImage = {
  width: "100%",
  height: {
    xs: 320,
    sm: 420,
    md: 500,
  },
  objectFit: "cover",
  borderRadius: "30px",
};

const features = [
  {
    icon: <PsychologyIcon />,
    title: "AI-Driven Innovation",
    desc: "We integrate artificial intelligence, automation, machine learning, and modern software systems to build intelligent digital solutions. Our AI-powered approach helps businesses automate repetitive tasks, improve operational efficiency, and make data-driven decisions for long-term growth and innovation.",
  },

  {
    icon: <CloudDoneIcon />,
    title: "Production-First Approach",
    desc: "We focus on practical implementation rather than theoretical solutions. By using scalable cloud platforms, optimized workflows, and modern engineering practices, we ensure every product is production-ready, reliable, and built for real-world business environments.",
  },

  {
    icon: <SecurityIcon />,
    title: "Secure & Scalable Systems",
    desc: "Security and scalability are at the core of everything we create. We develop systems with strong performance optimization, secure architecture, protected data handling, and future scalability to support business expansion without compromising stability.",
  },

  {
    icon: <RocketLaunchIcon />,
    title: "Business Growth Acceleration",
    desc: "We help businesses transform ideas into impactful digital experiences by creating high-performance platforms, automation systems, and scalable technologies that improve productivity, customer engagement, and operational growth.",
  },

  {
    icon: <GroupsIcon />,
    title: "Collaborative Team Culture",
    desc: "Our team believes in collaboration, creativity, and continuous learning. We work closely with clients to understand their business challenges and deliver customized technology solutions aligned with their goals and vision.",
  },

  {
    icon: <AutoAwesomeIcon />,
    title: "Creative Digital Excellence",
    desc: "We combine technology with creativity to design engaging user experiences, modern interfaces, and visually impactful digital products that strengthen brand identity and improve customer interaction.",
  },
];

const values = [
  "Innovation with purpose",
  "Customer-first approach",
  "Quality-driven solutions",
  "Scalable business growth",
  "Excellence in execution",
];

const WhoWeAre = () => {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        background:
          "linear-gradient(135deg, #f7fbff 0%, #eef5ff 45%, #ffffff 100%)",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 8, sm: 10, md: 12 },
          pb: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ animation: `${fadeUp} 0.8s ease both` }}>
                <Chip
                  icon={<AutoAwesomeIcon />}
                  label="WHO WE ARE"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    color: "#1456b8",
                    backgroundColor: "#e8f1ff",
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "2.2rem",
                      sm: "3rem",
                      md: "4rem",
                        fontFamily:"-moz-initial",
                    },
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "#102a43",
                    mb: 2.5,
                  }}
                >
                  Building Technology That Moves Businesses Forward
                </Typography>

                <Typography
                  sx={{
                    color: "#52606d",
                    fontSize: { xs: "1rem", md: "1.12rem" },
                    lineHeight: 1.8,
                    maxWidth: 650,
                    mb: 3,
                  }}
                >
                  Titanoboa Private Limited is a modern innovation company
                  focused on technology, productivity, artificial intelligence,
                  and creative digital solutions. We help businesses transform
                  ideas into scalable, secure, and user-focused digital products.
                </Typography>

                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.4,
                    borderRadius: "50px",
                    textTransform: "none",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #1565d8, #003b88)",
                    boxShadow: "0 15px 35px rgba(21,101,216,0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #003b88, #1565d8)",
                    },
                  }}
                >
                  Explore Our Vision
                </Button>
              </Box>
            </Grid>

       <Grid container spacing={5} alignItems="center" flexDirection="row">
  {/* LEFT SIDE IMAGE */}
  <Grid item xs={12} md={6}  >
    <Box
      sx={{
        position: "relative",
        width: "100%",
        animation: `${floatImage} 4s ease-in-out infinite`,
      }}
    >
      <Box
        component="img"
        src={AboutImage}
        alt="Professional Team"
        sx={{
          // width:"50%",
          // borderRadius:"5%",
          ...SameSizeImage,
        
          boxShadow: "0 30px 80px rgba(16,42,67,0.22)",
        }}
      />

      {/* Floating Quote Card */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -25, sm: 25 },
          left: { xs: 20, sm: -30 },
          maxWidth: 300,
          p: 2.5,
          borderRadius: "22px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 18px 45px rgba(0,0,0,0.16)",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            color: "#102a43",
            mb: 0.7,
          }}
        >
          “Innovation is not just what we build — it is how we solve.”
        </Typography>

        <Typography
          sx={{
            color: "#52606d",
            fontSize: "0.9rem",
          }}
        >
          Technology • Productivity • Creativity
        </Typography>
      </Box>
    
    </Box>
  </Grid>

  {/* RIGHT SIDE CONTENT */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        animation: `${fadeUp} 0.9s ease both`,
      }}
    >
      <Chip
        icon={<AutoAwesomeIcon />}
        label="WHY CHOOSE US"
        sx={{
          mb: 2,
          fontWeight: 700,
          color: "#1456b8",
          backgroundColor: "#e8f1ff",
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
            fontFamily:"-moz-initial",
          color: "#102a43",
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        Empowering Businesses Through Smart Technology
      </Typography>

      <Typography
        sx={{
          color: "#52606d",
          lineHeight: 1.9,
          fontSize: {
            xs: "1rem",
            md: "1.08rem",
          },
          mb: 3,
        }}
      >
        At Titanoboa Private Limited, we combine innovation,
        technology, and strategic thinking to build impactful
        digital solutions. Our mission is to help businesses
        scale efficiently through intelligent systems,
        automation, cloud solutions, and secure digital
        transformation.
      </Typography>

      {/* Small Cards */}
      <Grid container spacing={2}>
        {[
          "AI-Powered Solutions",
          "Secure Architecture",
          "Scalable Systems",
          "Business Growth Focus",
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                p: 2,
                borderRadius: "18px",
                background: "#fff",
                border: "1px solid #e6edf7",
                boxShadow:
                  "0 10px 25px rgba(16,42,67,0.08)",
                fontWeight: 700,
                color: "#102a43",
              }}
            >
              ✓ {item}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
                   onClick={() => (window.location.href = "/learn")}
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          borderRadius: "50px",
          textTransform: "none",
          fontWeight: 700,
          background:
            "linear-gradient(135deg, #1565d8, #003b88)",
          boxShadow:
            "0 15px 35px rgba(21,101,216,0.25)",

          "&:hover": {
            background:
              "linear-gradient(135deg, #003b88, #1565d8)",
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  </Grid>
</Grid>
          </Grid>
        </Container>
      </Box>

      {/* Vision Section */}
      <Box sx={{ py: { xs: 6, md: 9 }, backgroundColor: "#294879" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 900,
              mx: "auto",
              animation: `${fadeUp} 0.8s ease both`,
            }}
          >
            <RocketLaunchIcon
              sx={{
                fontSize: 54,
                color: "#ffffff",
                mb: 2,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 2,
              }}
            >
              Our Vision
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                fontSize: { xs: "1rem", md: "1.15rem" },
                lineHeight: 1.8,
              }}
            >
              To become a global catalyst for innovation by merging technology,
              productivity, and creativity into transformative solutions that
              elevate human potential.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* What Makes Us Different */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                  fontFamily:"-moz-initial",
                color: "#102a43",
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 1.5,
              }}
            >
              What Makes Us Different
            </Typography>


          </Box>

        <Grid container spacing={3} alignItems="stretch">
  {features.map((item, index) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      key={index}
      sx={{ display: "flex" }}
    >
      <SectionCard
        sx={{
          animationDelay: `${index * 0.15}s`,
          width: "100%",
        }}
      >
        <CardContent
          sx={{
            p: { xs: 3, md: 4 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            sx={{
              width: 58,
              height: 58,
              mb: 2,
              background:
                "linear-gradient(135deg, #1565d8, #003b88)",
            }}
          >
            {item.icon}
          </Avatar>

          <Typography
            sx={{
              fontWeight: 800,
              color: "#102a43",
              fontSize: "1.25rem",
              mb: 1.2,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#52606d",
              lineHeight: 1.8,
              flexGrow: 1,
            }}
          >
            {item.desc}
          </Typography>
        </CardContent>
      </SectionCard>
    </Grid>
  ))}
</Grid>
        </Container>
      </Box>

      {/* Culture Section */}
   <Grid container spacing={6} alignItems="center">
  {/* LEFT SIDE IMAGE */}
  <Grid item xs={12} md={6}>
    <Box
      sx={{
        position: "relative",
        width: "100%",
        animation: `${floatImage} 4s ease-in-out infinite`,
      }}
    >
      
<Box
  component="img"
  src={AiImage3}
  alt="AI Technology"
  sx={{
    width: "150%",
    height: {
      xs: 220,
      sm: 280,
      md: 550,
    },
    // objectFit: "cover",
    borderRadius: "32px",
    boxShadow: "0 25px 70px rgba(16,42,67,0.18)",
  }}
/>
      {/* Floating Badge */}
    
    </Box>

  </Grid>
 
  {/* RIGHT SIDE CONTENT */}
  <Grid item xs={12} md={6}>
    <Box sx={{ animation: `${fadeUp} 0.9s ease both` }}>
      <Chip
        icon={<PsychologyIcon />}
        label="AI & TECHNOLOGY"
        sx={{
          mb: 2,
          fontWeight: 700,
          color: "#1456b8",
          backgroundColor: "#e8f1ff",
        }}
      />

      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
            fontFamily:"-moz-initial",
          color: "#102a43",
          fontSize: {
            xs: "2rem",
            md: "3rem",
          },
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        Driving Innovation Through Intelligent Technology
      </Typography>

      <Typography
        sx={{
          color: "#52606d",
          lineHeight: 1.9,
          fontSize: {
            xs: "1rem",
            md: "1.08rem",
          },
          mb: 4,
        }}
      >
        We leverage Artificial Intelligence, cloud computing,
        automation, and advanced digital systems to create
        future-ready business solutions. Our technology-driven
        approach helps organizations improve efficiency,
        accelerate growth, and stay ahead in a competitive world.
      </Typography>

      {/* FEATURE BOXES */}
      <Grid container spacing={2}>
        {[
          "AI Automation",
          "Cloud Solutions",
          "Data Security",
          "Scalable Technology",
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              sx={{
                p: 2,
                borderRadius: "18px",
                background: "#fff",
                border: "1px solid #e6edf7",
                boxShadow:
                  "0 10px 25px rgba(16,42,67,0.08)",
                fontWeight: 700,
                color: "#102a43",
              }}
            >
              ✓ {item}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          borderRadius: "50px",
          textTransform: "none",
          fontWeight: 700,
          background:
            "linear-gradient(135deg, #1565d8, #003b88)",
          boxShadow:
            "0 15px 35px rgba(21,101,216,0.25)",
          "&:hover": {
            background:
              "linear-gradient(135deg, #003b88, #1565d8)",
          },
        }}
      >
        Explore Technology
      </Button>
    </Box>
  </Grid>
</Grid>
    </Box>
  );
};

export default WhoWeAre;