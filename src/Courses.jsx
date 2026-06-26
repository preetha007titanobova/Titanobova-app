import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import WebIcon from "@mui/icons-material/Web";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from "@mui/icons-material/Dns";
import DataObjectIcon from "@mui/icons-material/DataObject";
import React, { useState } from "react";
import { Box, Typography, Chip, Avatar, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import Course from "./assets/Course.jpg";
import banner2 from "./assets/Banner2.jpg";
import CouponEnrollment from "./Coupon.jsx";
import CourseCoupon from "./Couponcard.jsx";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import HubIcon from "@mui/icons-material/Hub";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CoffeeIcon from "@mui/icons-material/Coffee";
import TerminalIcon from "@mui/icons-material/Terminal";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

const courses = [
  {
    id: 1,
    title: "Artificial Intelligence & GenAI",
    subtitle:
      "High-tier Python, statistics, EDA, Machine Learning, CNN/RNN, Scikit-Learn, LLM fine-tuning, LangChain orchestration, Vector Databases using Pinecone, career mentorship, and live capstone engineering.",
    icon: <PsychologyAltIcon sx={{ fontSize: 42, color: "#6C63FF" }} />,
    level: "Elite",
    duration: "8 Months",
    tags: ["Python", "LLM", "LangChain", "Pinecone"],
  },
  {
    id: 2,
    title: "AWS & Azure Cloud Architecture",
    subtitle:
      "Scalable corporate infrastructure, IAM control, VPC segmentation, S3 storage, serverless Lambda computing, and cloud automation using CloudFormation.",
    icon: <CloudSyncIcon sx={{ fontSize: 42, color: "#00A8E8" }} />,
    level: "Advanced",
    duration: "2–3 Months",
    tags: ["AWS", "Azure", "Lambda", "CloudFormation"],
  },
  {
    id: 3,
    title: "DevOps Architecture Specialist",
    subtitle:
      "Master containerization, orchestration, CI/CD pipelines, Docker, Kubernetes, Jenkins, Terraform, and enterprise deployment automation.",
    icon: <AccountTreeIcon sx={{ fontSize: 42, color: "#FF8C42" }} />,
    level: "Advanced",
    duration: "3–4 Months",
    tags: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
  {
    id: 4,
    title: "Multi-Cloud Expert Combo",
    subtitle:
      "Advanced cross-platform portability, hybrid cloud architecture, high availability systems, and fault-tolerant cloud network strategies.",
    icon: <HubIcon sx={{ fontSize: 42, color: "#00B894" }} />,
    level: "Elite",
    duration: "5 Months",
    tags: ["Multi-Cloud", "Hybrid", "HA", "Networks"],
  },
  {
    id: 5,
    title: "Front-End Application Engineering",
    subtitle:
      "Build modern responsive applications using React, Next.js, Tailwind CSS, advanced UI/UX principles, and production-ready frontend architecture.",
    icon: <WebAssetIcon sx={{ fontSize: 42, color: "#1565D8" }} />,
    level: "Professional",
    duration: "2 Months",
    tags: ["React", "Next.js", "Tailwind", "UI/UX"],
  },
  {
    id: 6,
    title: "MERN Full Stack Development",
    subtitle:
      "Develop complete web applications using MongoDB, Express.js, React.js, and Node.js with real-world project deployment.",
    icon: <DeveloperModeIcon sx={{ fontSize: 42, color: "#2ECC71" }} />,
    level: "Professional",
    duration: "4–6 Months",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 7,
    title: "Java Full Stack Engineering",
    subtitle:
      "Build enterprise-grade applications using Java, Spring Boot, REST APIs, Microservices, SQL databases, security frameworks, and scalable backend architectures.",
    icon: <CoffeeIcon sx={{ fontSize: 42, color: "#F39C12" }} />,
    level: "Professional",
    duration: "5–6 Months",
    tags: ["Java", "Spring Boot", "REST API", "Microservices"],
  },
  {
    id: 8,
    title: "Python Full Stack Engineering",
    subtitle:
      "Develop modern web applications using Python, Django/FastAPI, REST APIs, database integration, authentication systems, and scalable cloud-ready deployments.",
    icon: <TerminalIcon sx={{ fontSize: 42, color: "#3776AB" }} />,
    level: "Professional",
    duration: "5–6 Months",
    tags: ["Python", "Django", "FastAPI", "Backend"],
  },
  {
    id: 9,
    title: "Database Engineering & NoSQL Architecture",
    subtitle:
      "Design scalable database systems using MongoDB, SQL, PostgreSQL, NoSQL architectures, indexing, and performance optimization.",
    icon: <StorageRoundedIcon sx={{ fontSize: 42, color: "#16A085" }} />,
    level: "Professional",
    duration: "Project Based",
    tags: ["MongoDB", "SQL", "PostgreSQL", "NoSQL"],
  },
];
const features = [
  {
    icon: "🚀",
    title: "Production-First Learning",
    desc: "Every participant builds and deploys live projects on cloud platforms.",
  },
  {
    icon: "🏗️",
    title: "System Architecture Focus",
    desc: "Training goes beyond basics into real system design and engineering.",
  },
  {
    icon: "🎯",
    title: "Industry-Focused Curriculum",
    desc: "Courses are aligned with modern enterprise and startup requirements.",
  },
  {
    icon: "🏆",
    title: "Industrial Validation",
    desc: "Programs focus on professional-grade engineering outcomes.",
  },
];

const levelStyle = {
  Elite: {
    bg: "#eaf3ff",
    color: "#003b88",
    border: "1px solid #b8d7ff",
  },
  Advanced: {
    bg: "#eff6ff",
    color: "#1565d8",
    border: "1px solid #bfdbfe",
  },
  Standard: {
    bg: "#f8fbff",
    color: "#0f4fbf",
    border: "1px solid #dbeafe",
  },
};

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

const floatBg = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-22px);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const CourseCard = ({ course }) => {
  const lvl = levelStyle[course.level] || levelStyle.Standard;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: { xs: "16px", md: "24px" },
        p: { xs: 3, sm: 2.5, md: 3 },

        background: "#ffffff",
        border: "1px solid rgba(21,101,216,0.13)",
        boxShadow: "0 18px 45px rgba(16,42,67,0.08)",
        transition: "all 0.35s ease",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: { md: "translateY(-10px)" },
          boxShadow: "0 26px 70px rgba(21,101,216,0.18)",
          borderColor: "#1565d8",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Avatar
          sx={{
            width: { xs: 44, sm: 50, md: 54 },
            height: { xs: 44, sm: 50, md: 54 },
            bgcolor: "#eaf3ff",
            color: "#1565d8",
            fontSize: {
              xs: "1.2rem",
              md: "1.5rem",
            },
          }}
        >
          {course.icon}
        </Avatar>

        <Chip
          label={course.level}
          size="small"
          sx={{
            bgcolor: lvl.bg,
            color: lvl.color,
            border: lvl.border,
            fontWeight: 800,
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "#102a43",
          fontWeight: 900,
          fontSize: {
            xs: "0.95rem",
            sm: "1rem",
            md: "1.05rem",
            lg: "1.15rem",
          },
          mb: 1,
          lineHeight: 1.35,
        }}
      >
        {course.title}
      </Typography>

      <Typography
        sx={{
          color: "#52606d",
          fontSize: "0.85rem",
          lineHeight: 1.7,
          mb: 2,
          flexGrow: 1,
        }}
      >
        {course.subtitle}
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7, mb: 2 }}>
        {course.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              bgcolor: "#eaf3ff",
              color: "#1565d8",
              fontWeight: 700,
              fontSize: "0.68rem",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #dbeafe",
          pt: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography sx={{ color: "#102a43", fontWeight: 900 }}>
            {course.duration}
          </Typography>
          <Typography sx={{ color: "#8a9bab", fontSize: "0.7rem" }}>
            Duration
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ color: "#102a43", fontWeight: 900 }}>
            Live
          </Typography>
          <Typography sx={{ color: "#8a9bab", fontSize: "0.7rem" }}>
            Projects
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Courses = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        py: { xs: 7, md: 10 },
        fontFamily: "'Sora', sans-serif",
      }}
    >
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&display=swap');`}
      </style>

      {/* Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(21,101,216,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(21,101,216,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      {/* Blue Glow */}
      <Box
        sx={{
          position: "absolute",
          top: -130,
          right: -120,
          width: 430,
          height: 430,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(21,101,216,0.14), transparent 70%)",
          animation: `${floatBg} 8s ease-in-out infinite`,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 7,
            px: 2,
            animation: `${fadeUp} 0.9s ease forwards`,
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.9,
              borderRadius: "40px",
              border: "1px solid #bfdbfe",
              background: "#ffffff",
              boxShadow: "0 12px 30px rgba(21,101,216,0.08)",
              mb: 2.5,
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                bgcolor: "#1565d8",
              }}
            />

            <Typography
              sx={{
                fontSize: { md: "0.7rem", xs: "0.5rem", sm: "0.5rem" },
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#1565d8",
              }}
            >
              Corporate Upskilling & Industrial Mastery
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.5rem", md: "4.5rem" },
              lineHeight: 1.08,
              color: "#102a43",
              fontFamily: "serif",
              mb: 2,
            }}
          >
            Learn by Building
            <br />
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #1565d8, #60a5fa, #003b88, #1565d8)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: `${shimmer} 5s linear infinite`,
              }}
            >
              Production-Ready Systems
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              color: "#52606d",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.8,
            }}
          >
            Our industrial training tracks bridge the gap between academic
            foundations and professional engineering. Each program focuses on
            real deployment, scalable architecture and live project execution.
          </Typography>
        </Box>

        {/* Course Banner Image */}
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
            src={Course}
            alt="Course Banner"
            sx={{
              width: "100%",
              display: "block",
              height: {
                xs: 180,
                sm: 320,
                md: 560,
                lg: 660,
              },
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "28px",
              boxShadow: "0 24px 70px rgba(16,42,67,0.16)",
            }}
          />
        </Box>

        {/* CTA Section */}
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 2 }}>
          <Box
            sx={{
              borderRadius: "28px",
              p: { xs: 3, md: 5 },
              border: "1px solid #bfdbfe",
              background: "linear-gradient(135deg, #ffffff 0%, #eaf3ff 100%)",
              textAlign: "center",
              boxShadow: "0 22px 70px rgba(21,101,216,0.12)",
              mb: showAllCourses ? 5 : 8,
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.5rem", md: "2.1rem" },
                color: "#102a43",
                fontFamily: "serif",
                mb: 1,
              }}
            >
              Don’t just learn coding —{" "}
              <Box component="span" sx={{ color: "#1565d8" }}>
                master production engineering.
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                mx: "auto",
                color: "#52606d",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Our programs are designed to make learners build operational
              projects and deploy them using modern infrastructures like AWS,
              Azure, Vercel and DevOps pipelines.
            </Typography>

            <Button
              variant="contained"
              onClick={() => setShowAllCourses(!showAllCourses)}
              sx={{
                px: 4,
                py: 1.3,

                borderRadius: 50,
                textTransform: "none",
                fontWeight: 800,
                background: "linear-gradient(135deg, #1565d8, #003b88)",
                boxShadow: "0 14px 35px rgba(21,101,216,0.25)",
                "&:hover": {
                  background: "linear-gradient(135deg, #003b88, #1565d8)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {showAllCourses ? "Show Less Courses" : "Explore Courses"}
            </Button>
          </Box>
        </Box>

        {/* All Courses Section */}
        {showAllCourses && (
          <Box
            sx={{
              maxWidth: 1250,
              mx: "auto",
              px: { xs: 2, sm: 3 },
              mb: 9,
              mt: 4,

              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },

              columnGap: {
                xs: 5,
                sm: 3,
                md: 4,
              },

              rowGap: {
                xs: 7,
                sm: 4,
                md: 8,
              },

              animation: `${fadeUp} 0.8s ease`,
            }}
          >
            {courses.map((course, index) => (
              <Box
                key={course.id}
                sx={{
                  animation: `${fadeUp} 0.8s ease both`,
                  animationDelay: `${index * 0.1}s`,
                  transition: "all 0.4s ease",
                  minHeight: "100%",
                  display: "flex",
                }}
              >
                <CourseCard course={course} />
              </Box>
            ))}
          </Box>
        )}

        {/* Features Section */}
        <Box sx={{ maxWidth: 1100, mx: "auto", mt: 3, px: 2 }}>
          <Typography
            sx={{
              textAlign: "center",
              mb: 3,
              fontSize: "0.75rem",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#1565d8",
            }}
          >
            Why Choose Our Learning Model
          </Typography>
        </Box>
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
            src={banner2}
            alt="Course Banner"
            sx={{
              width: "98%",
              display: "block",
              height: {
                xs: 220,
                sm: 320,
                md: 560,
                lg: 560,
              },
              objectFit: "cover",
              objectPosition: "center",
              borderRadius: "28px",
              boxShadow: "0 24px 70px rgba(16,42,67,0.16)",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
            mb: 4,
          }}
        >
          {features.map((f, i) => (
            <Box
              key={i}
              sx={{
                background: "#ffffff",
                border: "1px solid #dbeafe",
                borderRadius: "20px",
                p: 2.5,
                boxShadow: "0 16px 40px rgba(16,42,67,0.07)",
                animation: `${fadeUp} 0.8s ease ${i * 0.12}s both`,
                transition: "all 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 22px 60px rgba(21,101,216,0.15)",
                },
              }}
            >
              <Typography sx={{ fontSize: "1.7rem", mb: 1 }}>
                {f.icon}
              </Typography>

              <Typography
                sx={{
                  color: "#102a43",
                  fontWeight: 900,
                  fontSize: "0.95rem",
                  mb: 0.7,
                }}
              >
                {f.title}
              </Typography>

              <Typography
                sx={{
                  color: "#52606d",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                }}
              >
                {f.desc}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            maxWidth: 1250,
            mx: "auto",
            px: 2,
            mt: 8,
            mb: 8,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 900,
              color: "#102a43",
              mb: 2,
              fontFamily: "serif",
            }}
          >
            Internship Programs
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
              color: "#52606d",
              mb: 5,
              lineHeight: 1.8,
            }}
          >
            Kickstart your career through hands-on industrial training and
            real-world project experience. Choose between Paid and Unpaid
            Internship tracks based on your learning goals and career
            objectives.
          </Typography>
          <Box
            sx={{
           
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
             
            }}
          >
            <Button
              variant="contained"
              onClick={() => (window.location.href = "/interapply")}
              sx={{
                mt: 3,
             
                px: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // background: item.color,
              
            
                  borderRadius: 50,
                textTransform: "none",
                fontWeight: 800,
                background: "linear-gradient(135deg, #1565d8, #003b88)",
                boxShadow: "0 14px 35px rgba(21,101,216,0.25)",
                "&:hover": {
                  background: "linear-gradient(135deg, #003b88, #1565d8)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Visit Internships
            </Button>
          </Box>
        </Box>
        {/* Fixed Coupon Card */}
        {/* Fixed Coupon Card */}
        <Box
          sx={{
            position: "fixed",
            bottom: {
              xs: 10,
              sm: 16,
              md: 20,
            },
            right: {
              xs: 8,
              sm: 14,
              md: 20,
            },
            zIndex: 9999,
            background: "transparent",
            cursor: "pointer",

            transform: {
              xs: "scale(0.55)",
              sm: "scale(0.7)",
              md: "scale(0.85)",
              lg: "scale(1)",
            },

            transformOrigin: "bottom right",

            animation: "floatCoupon 3s ease-in-out infinite",

            "@keyframes floatCoupon": {
              "0%,100%": {
                transform: {
                  xs: "scale(0.55) translateY(0px)",
                  sm: "scale(0.7) translateY(0px)",
                  md: "scale(0.85) translateY(0px)",
                  lg: "scale(1) translateY(0px)",
                },
              },
              "50%": {
                transform: {
                  xs: "scale(0.55) translateY(-8px)",
                  sm: "scale(0.7) translateY(-8px)",
                  md: "scale(0.85) translateY(-8px)",
                  lg: "scale(1) translateY(-8px)",
                },
              },
            },
          }}
          // onClick={() => {
          //   window.location.href = "/course-fill";
          // }}
        >
          <CourseCoupon />
        </Box>
      </Box>
    </Box>
  );
};

export default Courses;
