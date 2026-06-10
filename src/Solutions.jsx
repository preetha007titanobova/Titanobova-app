import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Card,
  CardContent,
  useTheme,
  alpha,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BoltIcon from "@mui/icons-material/Bolt";
import PaletteIcon from "@mui/icons-material/Palette";
import CodeIcon from "@mui/icons-material/Code";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LanguageIcon from "@mui/icons-material/Language";
import SecurityIcon from "@mui/icons-material/Security";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";

const slideFromLeft = keyframes`
  0% { opacity: 0; transform: translateX(-70px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideFromRight = keyframes`
  0% { opacity: 0; transform: translateX(70px); }
  100% { opacity: 1; transform: translateX(0); }
`;

const slideToRight = keyframes`
  0% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(70px); }
`;

const slideToLeft = keyframes`
  0% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(-70px); }
`;

const cardGradients = [
  "linear-gradient(135deg, #ffd6e0, #fff1f5)",
  "linear-gradient(135deg, #d6f5ff, #eefcff)",
  "linear-gradient(135deg, #e8d9ff, #f7f1ff)",
  "linear-gradient(135deg, #d4f8e8, #effff7)",
  "linear-gradient(135deg, #fff0c9, #fff9e8)",
  "linear-gradient(135deg, #ffdede, #fff5f5)",
  "linear-gradient(135deg, #dff7ff, #f4fcff)",
  "linear-gradient(135deg, #f5e1ff, #fcf5ff)",
  "linear-gradient(135deg, #e2ffe8, #f6fff8)",
];

const StyledCard = styled(Card)(({ theme, cardindex }) => ({
  position: "relative",
  height: "100%",
  minHeight: 280,
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(2.5),
  overflow: "hidden",
  background: cardGradients[cardindex % cardGradients.length],
  transition: "box-shadow 0.3s ease-in-out",
  willChange: "transform",

  [theme.breakpoints.down("sm")]: {
    minHeight: "auto",
  },

  "&:hover": {
    boxShadow: theme.shadows[12],
    "& .icon-wrapper": {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
      color: theme.palette.common.white,
    },
    "& .card-title": {
      color: theme.palette.primary.main,
    },
    "& .bottom-gradient": {
      transform: "scaleX(1)",
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  padding: theme.spacing(1.2),
  borderRadius: theme.spacing(2),
  background: alpha(theme.palette.common.white, 0.75),
  color: theme.palette.primary.main,
  transition: "all 0.25s ease-in-out",
  marginBottom: theme.spacing(2),
  width: "fit-content",
  "& svg": {
    width: 26,
    height: 26,
  },
}));

const BottomGradient = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 3,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  transform: "scaleX(0)",
  transition: "transform 0.35s ease-in-out",
  transformOrigin: "left",
}));

const RowBox = styled(Box)(() => ({
  overflow: "hidden",
}));

const SolutionCard = ({ solution, cardindex, row, animPhase, animDelay }) => {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const isLeftRow = row % 2 === 0;

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    if (window.innerWidth < 900) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

      cardRef.current.style.transform = `perspective(700px) rotateX(${
        -dy * 5
      }deg) rotateY(${dx * 5}deg) scale(1.02)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    if (cardRef.current) {
      cardRef.current.style.transition =
        "transform 0.35s ease, box-shadow 0.3s ease";
      cardRef.current.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  let animCss = {};

  if (animPhase === "enter") {
    const animation = isLeftRow ? slideFromLeft : slideFromRight;
    animCss = {
      animation: `${animation} 0.55s ease ${animDelay}ms both`,
    };
  }

  if (animPhase === "exit") {
    const animation = isLeftRow ? slideToRight : slideToLeft;
    animCss = {
      animation: `${animation} 0.35s ease ${animDelay}ms both`,
    };
  }

  return (
    <StyledCard
      ref={cardRef}
      elevation={0}
      cardindex={cardindex}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={animCss}
    >
      <CardContent
        sx={{
          p: {
            xs: 2.2,
            sm: 2,
            md: 3,
          },
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <IconWrapper className="icon-wrapper">{solution.icon}</IconWrapper>

        <Typography
          className="card-title"
          variant="h6"
          sx={{
            fontWeight: 700,
            mb: 1.2,
            fontSize: {
              xs: "1.05rem",
              sm: "1rem",
              md: "1.25rem",
            },
            lineHeight: 1.25,
            transition: "color 0.2s ease-in-out",
          }}
        >
          {solution.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            mb: 2,
            fontSize: {
              xs: "0.9rem",
              sm: "0.85rem",
              md: "0.95rem",
            },
            display: "-webkit-box",
            WebkitLineClamp: {
              xs: 4,
              sm: 5,
              md: 3,
            },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {solution.description}
        </Typography>

        <Button
          endIcon={<ArrowRightAltIcon />}
          sx={{
            mt: "auto",
            color: "primary.main",
            fontWeight: 700,
            p: 0,
            justifyContent: "flex-start",
            textTransform: "none",
            width: "fit-content",
            fontSize: {
              xs: "0.9rem",
              sm: "0.85rem",
              md: "0.95rem",
            },
            "&:hover": {
              backgroundColor: "transparent",
              "& .MuiButton-endIcon": {
                transform: "translateX(5px)",
              },
            },
            "& .MuiButton-endIcon": {
              transition: "transform 0.3s ease",
            },
          }}
        >
          Learn more
        </Button>
      </CardContent>

      <BottomGradient className="bottom-gradient" />
    </StyledCard>
  );
};

const Solutions = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [mountAnimKey, setMountAnimKey] = useState(0);
  const [mountAnimDone, setMountAnimDone] = useState(false);
  const timeoutsRef = useRef([]);

  const clear = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      setMountAnimKey((k) => k + 1);

      const t2 = setTimeout(() => {
        setMountAnimDone(true);
      }, 800);

      timeoutsRef.current.push(t2);
    }, 80);

    timeoutsRef.current.push(t);

    return () => clear();
  }, [clear]);

  const row0 = [
    {
      title: "UI/UX Design",
      description:
        "We design intuitive, accessible, and engaging experiences tailored to your enterprise requirements.",
      icon: <PaletteIcon />,
      row: 0,
    },
    {
      title: "Custom Web App Development",
      description:
        "We build custom web applications tailored precisely to your unique workflows and business challenges.",
      icon: <CodeIcon />,
      row: 0,
    },
    {
      title: "E-Commerce Development",
      description:
        "We create sales-optimized platforms with smooth checkout flows and robust product catalogs.",
      icon: <ShoppingCartIcon />,
      row: 0,
    },
  ];

  const row1 = [
    {
      title: "Mobile Design",
      description:
        "We craft user-centric mobile designs that improve engagement, usability, and retention.",
      icon: <SmartphoneIcon />,
      row: 1,
    },
    {
      title: "Web Design",
      description:
        "We build fast, responsive, and visually stunning websites that deliver real results.",
      icon: <LanguageIcon />,
      row: 1,
    },
    {
      title: "Design System",
      description:
        "We create scalable design systems that keep your brand consistent across all platforms.",
      icon: <SecurityIcon />,
      row: 1,
    },
  ];

  const row2 = [
    {
      title: "User Research & Strategy",
      description:
        "Our research-driven approach uncovers insights that guide better digital product decisions.",
      icon: <PeopleIcon />,
      row: 2,
    },
    {
      title: "UX Audit",
      description:
        "We identify usability issues and provide clear recommendations to improve product performance.",
      icon: <AssessmentIcon />,
      row: 2,
    },
    {
      title: "Mobile App Development",
      description:
        "We build fast, reliable, and feature-rich mobile apps from concept to deployment.",
      icon: <AppSettingsAltIcon />,
      row: 2,
    },
  ];

  const handleToggle = () => {
    if (phase === "expanding" || phase === "collapsing") return;

    clear();

    if (!isExpanded) {
      setIsExpanded(true);
      setPhase("expanding");

      const t = setTimeout(() => {
        setPhase("expanded");
      }, 1000);

      timeoutsRef.current.push(t);
    } else {
      setPhase("collapsing");

      const t = setTimeout(() => {
        setIsExpanded(false);
        setPhase("idle");
      }, 650);

      timeoutsRef.current.push(t);
    }
  };

  const getRow0Anim = (i) => {
    if (!mountAnimDone) {
      return {
        animPhase: "enter",
        animDelay: i * 80,
      };
    }

    return {
      animPhase: "none",
      animDelay: 0,
    };
  };

  const getRow1Anim = (i) => {
    if (phase === "expanding") {
      return {
        animPhase: "enter",
        animDelay: i * 80,
      };
    }

    if (phase === "collapsing") {
      return {
        animPhase: "exit",
        animDelay: (2 - i) * 55,
      };
    }

    return {
      animPhase: "none",
      animDelay: 0,
    };
  };

  const getRow2Anim = (i) => {
    if (phase === "expanding") {
      return {
        animPhase: "enter",
        animDelay: 180 + i * 80,
      };
    }

    if (phase === "collapsing") {
      return {
        animPhase: "exit",
        animDelay: i * 55,
      };
    }

    return {
      animPhase: "none",
      animDelay: 0,
    };
  };

  const renderRow = (cards, getAnim, globalOffset) => (
    <RowBox>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          alignItems: "stretch",
        }}
      >
        {cards.map((sol, i) => {
          const { animPhase, animDelay } = getAnim(i);

          return (
            <SolutionCard
              key={`card-${globalOffset + i}-${mountAnimKey}`}
              solution={sol}
              cardindex={globalOffset + i}
              row={sol.row}
              animPhase={animPhase}
              animDelay={animDelay}
            />
          );
        })}
      </Box>
    </RowBox>
  );

  return (
    <Box
      component="section"
      id="strength"
      sx={{
        py: {
          xs: 5,
          sm: 6,
          md: 8,
          lg: 10,
        },
        overflow: "hidden",
        position: "relative",
        background: "#294879",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 2,
            md: 4,
            lg: 5,
          },
        }}
      >
        <Box
          textAlign="center"
          mb={{
            xs: 4,
            sm: 4,
            md: 6,
          }}
        >
          <Chip
            icon={<BoltIcon />}
            label="WHAT WE OFFER"
            sx={{
              mb: 2,
              color: "white",
              fontWeight: 600,
              backgroundColor: alpha(theme.palette.common.white, 0.25),
              "& .MuiChip-icon": {
                color: "white",
              },
            }}
          />

          <Typography
            variant="h2"
            sx={{
               fontFamily:"-moz-initial",
              fontSize: {
                xs: "1.9rem",
                sm: "2.3rem",
                md: "3rem",
              },
              fontWeight: 800,
              color: "white",
              mb: 1,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Solutions That Drive Results
          </Typography>
        </Box>

        {renderRow(row0, getRow0Anim, 0)}

        {isExpanded && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: {
                xs: 2,
                sm: 2,
                md: 3,
              },
              mt: {
                xs: 2,
                sm: 2,
                md: 3,
              },
            }}
          >
            {renderRow(row1, getRow1Anim, 3)}
            {renderRow(row2, getRow2Anim, 6)}
          </Box>
        )}
<br/>
        <Box
          textAlign="center"
          mt={{
            xs: 4,
            sm: 5,
            md: 6,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleToggle}
            endIcon={
              <ExpandMoreIcon
                sx={{
                  transform:
                    isExpanded && phase !== "collapsing"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.35s ease",
                }}
              />
            }
            sx={{
              borderRadius: 60,
              px: {
                xs: 3,
                sm: 4,
              },
              py: {
                xs: 1.2,
                sm: 1.5,
              },
              textTransform: "none",
              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
              },
              fontWeight: 600,
              boxShadow: theme.shadows[2],
              backgroundColor: theme.palette.primary.main,
              color: "white",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: theme.shadows[6],
                backgroundColor: theme.palette.primary.dark,
              },
              "&:active": {
                transform: "translateY(0) scale(0.98)",
              },
            }}
          >
            {isExpanded && phase !== "collapsing"
              ? "Show Less Services"
              : "View All Services"}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Solutions;