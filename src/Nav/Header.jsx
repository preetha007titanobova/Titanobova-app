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
import logo from "../assets/logo.jpg";

const Header = () => {
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
                objectFit: "contain",
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "#163372",
                fontWeight: 800,
                fontSize: { xs: "1.4rem", md: "1.8rem" },
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "1px",
              }}
            >
                TITANOBOVA
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Link href="/home" underline="none" sx={navStyle}>
              Home
            </Link>

            <Typography
              onMouseEnter={(e) => setAboutAnchor(e.currentTarget)}
              sx={navStyle}
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
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>

            <Link href="/project" underline="none" sx={navStyle}>
              Projects
            </Link>

            <Typography
              onMouseEnter={(e) => setCourseAnchor(e.currentTarget)}
              sx={navStyle}
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
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>

            <Link href="/customersupport" underline="none" sx={navStyle}>
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
                fontFamily: "'Poppins', sans-serif",
                textTransform: "none",
                boxShadow: "0 8px 20px rgba(25,118,210,0.25)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 25px rgba(25,118,210,0.35)",
                },
              }}
            >
              Let's Talk
            </Button>
          </Box>

          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "#111827",
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
              color: "#163372",
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
              onClick={() => {
                setOpen(false);
                window.location.href = "/conversation";
              }}
              fullWidth
              sx={{
                mt: 2,
                borderRadius: "30px",
                py: 1,
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
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

const MobileItem = ({ text, link, setOpen, subItem = false }) => (
  <ListItem
    component="a"
    href={link}
    onClick={() => setOpen(false)}
    sx={{
      borderRadius: "10px",
    
      mb: 1,
      pl: subItem ? 3.5 : 2,
      cursor: "pointer",
      position: "relative",
      "&:hover": {
        bgcolor: "#a5b4eb",
      },
      "&::before": subItem
        ? {
            content: '""',
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: "#1976d2",
          }
        : {},
    }}
  >
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        fontSize: "15px",
        fontWeight: subItem ? 500 : 600,
        fontFamily: "'Poppins', sans-serif",
        color: "#222",
      }}
    />
  </ListItem>
);

const navStyle = {
  color: "#222",
  fontSize: "15px",
  fontWeight: 600,
  fontFamily: "'Poppins', sans-serif",
  cursor: "pointer",
  position: "relative",
  transition: "all 0.3s ease",
  textDecoration: "none",
  "&:hover": {
    color: "#1976d2",
  },
};

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