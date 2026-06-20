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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png"
const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      text: "Home",
      link: "/home",
      submenu: [{ text: "Who We Are", link: "/who-we-are" }],
    },
    { text: "About", link: "/about" },
    { text: "Projects", link: "/project" },
    { text: "Courses", link: "/courses" },
    { text: "Contact Us", link: "/customersupport" },
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
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 0.5, // Reduce space (0 = no gap)
  }}
>
         <Box
  component="img"
  src={logo}
  alt="Titanobova Logo"
  sx={{
    width: { xs: 60, md: 100 },
    height: "auto",
    fontWeight:500,   
     objectFit: "contain",
  }}
/>
          {/* Logo */}
          <Typography
            variant="h6"
            onClick={() => (window.location.href = "/home")}
            sx={{
              color: "#163372",
              fontWeight: 800,
          
              fontSize: { xs: "1.4rem", md: "1.8rem" },
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            Titanobova
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
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                underline="none"
                sx={{
                  color: "#222",
                  fontSize: "15px",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  position: "relative",
                  transition: "all 0.3s ease",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: 0,
                    height: "2px",
                    bottom: -6,
                    left: 0,
                    backgroundColor: "#1976d2",
                    transition: "width 0.3s ease",
                  },

                  "&:hover": {
                    color: "#1976d2",
                  },

                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.text}
              </Link>
            ))}

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
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 25px rgba(25,118,210,0.35)",
                },
              }}
            >
              Let's Talk
            </Button>
          </Box>

          {/* Mobile Hamburger */}
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
        <Box
          sx={{
            width: 230,
            p: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.4rem",
              fontWeight: 800,
              fontFamily: "'Poppins', sans-serif",
              mb: 2,
            }}
          >
            Titanobova
          </Typography>

          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.link}
                onClick={() => setOpen(false)}
                sx={{
                  borderRadius: "10px",
                  mb: 1,

                  "&:hover": {
                    bgcolor: "#eef5ff",
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "15px",
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    color: "#222",
                  }}
                />
              </ListItem>
            ))}

            <Button
              variant="contained"
              onClick={() => (window.location.href = "/conversation")}
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

export default Header;