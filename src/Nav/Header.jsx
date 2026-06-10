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

const Header = () => {
  const [open, setOpen] = useState(false);

const menuItems = [
  {
    text: "Home",
    link: "/home",
    submenu: [
      { text: "Who We Are", link: "/who-we-are" },
    ],
  },
  { text: "About", link: "/about" },
  { text: "Projects", link: "/project" },
  { text: "Courses", link: "/courses" },
  { text: "Contact Us", link: "/contact" },
];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          px: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Titanobova
          </Typography>

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
                color="black"
                sx={{
                  fontSize: "16px",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {item.text}
              </Link>
            ))}

            <Button variant="contained">
              Let's Talk
            </Button>
          </Box>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{
              display: { xs: "block", md: "none" },
              color: "black",
            }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 150,
            p: 2,
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.link}
                
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
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