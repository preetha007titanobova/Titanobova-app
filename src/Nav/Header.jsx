import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useLocation } from "react-router-dom";

import logo from "../assets/logo.jpg";

const Header = () => {
  const location = useLocation();

  const currentPath = location.pathname;

  const [open, setOpen] = useState(false);
  const [aboutAnchor, setAboutAnchor] = useState(null);
  const [courseAnchor, setCourseAnchor] = useState(null);

  const aboutSubMenu = [
    { text: "About Us", link: "/about" },
    { text: "Who We Are", link: "/who-we-are" },
    { text: "Technology", link: "/technology" },
    { text: "Vision", link: "/about" },
  ];

  const courseSubMenu = [
    { text: "Courses", link: "/courses" },
    { text: "Interns", link: "/interapply" },
  ];

  const aboutActive = aboutSubMenu.some((item) => item.link === currentPath);

  const courseActive = courseSubMenu.some((item) => item.link === currentPath);

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          px: { xs: 1, md: 4 },
        }}
      >
        <Toolbar
          sx={{
            minHeight: "72px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* LOGO */}

          <Box
            onClick={() => (window.location.href = "/home")}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Titanobova Logo"
              sx={{
                width: { xs: 60, md: 100 },
                height: "auto",
              }}
            />

            <Typography
              sx={{
                color: "#163372",
                fontWeight: 800,
                fontSize: { xs: "1.2rem", md: "1.8rem" },
                fontFamily: "'Poppins',sans-serif",
                letterSpacing: "1px",
              }}
            >
              TITANOBOVA
            </Typography>
          </Box>

          {/* DESKTOP MENU */}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Link
              href="/home"
              underline="none"
              fontFamily="Inter, sans-serif"
              sx={navStyle("/home", currentPath)}
            >
              Home
            </Link>

            <Typography
              onMouseEnter={(e) => setAboutAnchor(e.currentTarget)}
              fontFamily="Inter, sans-serif"
              sx={{
                ...navStyle("/about", currentPath),
                color: aboutActive ? "#1976d2" : "#222",
              }}
            >
              About
            </Typography>

            <Menu
              anchorEl={aboutAnchor}
              open={Boolean(aboutAnchor)}
              onClose={() => setAboutAnchor(null)}
              MenuListProps={{
                onMouseLeave: () => setAboutAnchor(null),
              }}
            >
              {aboutSubMenu.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => (window.location.href = item.link)}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: currentPath === item.link ? 700 : 500,

                    color: currentPath === item.link ? "#1976d2" : "#222",
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>

            <Link
              href="/project"
              underline="none"
              sx={navStyle("/project", currentPath)}
            >
              Projects
            </Link>

            <Typography
              onMouseEnter={(e) => setCourseAnchor(e.currentTarget)}
              sx={{
                ...navStyle("/courses", currentPath),
                color: courseActive ? "#1976d2" : "#222",
              }}
            >
              Courses
            </Typography>

            <Menu
              anchorEl={courseAnchor}
              open={Boolean(courseAnchor)}
              onClose={() => setCourseAnchor(null)}
              MenuListProps={{
                onMouseLeave: () => setCourseAnchor(null),
              }}
            >
              {courseSubMenu.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => (window.location.href = item.link)}
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: currentPath === item.link ? 700 : 500,

                    color: currentPath === item.link ? "#1976d2" : "#222",
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>

            <Link
              href="/customersupport"
              underline="none"
              sx={navStyle("/customersupport", currentPath)}
            >
              Contact Us
            </Link>

            <Button
              variant="contained"
              onClick={() => (window.location.href = "/conversation")}
              sx={{
                borderRadius: "30px",
                px: 3,
                py: 1,
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Let's Talk
            </Button>
          </Box>

          {/* MOBILE ICON */}

          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "#111",
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "#163372",
              mb: 2,
            }}
          >
            Titanobova
          </Typography>

          <List>
            <MobileItem text="Home" link="/home" setOpen={setOpen} />

            <Typography sx={mobileTitle}>About</Typography>

            {aboutSubMenu.map((item, index) => (
              <MobileItem
                key={index}
                text={item.text}
                link={item.link}
                setOpen={setOpen}
                subItem
              />
            ))}

            <MobileItem text="Projects" link="/project" setOpen={setOpen} />

            <Typography sx={mobileTitle}>Courses</Typography>

            {courseSubMenu.map((item, index) => (
              <MobileItem
                key={index}
                text={item.text}
                link={item.link}
                setOpen={setOpen}
                subItem
              />
            ))}

            <MobileItem
              text="Contact Us"
              link="/customersupport"
              setOpen={setOpen}
            />

            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setOpen(false);

                window.location.href = "/conversation";
              }}
              sx={{
                mt: 2,
                borderRadius: "30px",
                textTransform: "none",
              }}
            >
              Let's Talk
            </Button>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const MobileItem = ({ text, link, setOpen, subItem = false }) => {
  const location = useLocation();

  const active = location.pathname === link;

  return (
    <ListItem
      component="a"
      href={link}
      onClick={() => setOpen(false)}
      sx={{
        borderRadius: "10px",

        mb: 1,

        pl: subItem ? 3.5 : 2,

        backgroundColor: active ? "#dbeafe" : "transparent",

        position: "relative",

        "&:hover": {
          backgroundColor: "#a5b4eb",
        },
      }}
    >
      <ListItemText
        primary={text}
        primaryTypographyProps={{
          fontSize: "15px",

          fontWeight: active ? 700 : 500,

          color: active ? "#1976d2" : "#222",

          fontFamily: "Poppins",
        }}
      />
    </ListItem>
  );
};

const navStyle = (path, currentPath) => ({
  color: currentPath === path ? "#1976d2" : "#222",

  fontSize: "15px",

  fontWeight: currentPath === path ? 800 : 600,

  fontFamily: "Poppins",

  cursor: "pointer",

  position: "relative",

  textDecoration: "none",

  "&:after": {
    content: '""',

    position: "absolute",

    bottom: -8,

    left: 0,

    height: "2px",

    backgroundColor: "#1976d2",

    width: currentPath === path ? "100%" : "0%",

    transition: "0.3s",
  },

  "&:hover": {
    color: "#1976d2",
  },
});

const mobileTitle = {
  mt: 1.5,

  mb: 1,

  fontSize: "13px",

  fontWeight: 800,

  color: "#163372",

  textTransform: "uppercase",

  letterSpacing: "1px",
};

export default Header;
