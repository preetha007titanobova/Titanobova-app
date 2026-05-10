import React from "react";
import { AppBar, Toolbar, Typography, Grid, Link } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Typography variant="body1">
              <Link
                href="/home"
                 color= "black"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "black",
                    textDecoration: "underline",
                  },
                }}
              >
                Home
              </Link>
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body1">
              <Link
                href="/aboutus"
                 color= "black"
                underline="none"
                sx={{
                  "&:hover": {
                   color: "black",
                    textDecoration: "underline",
                  },
                }}
              >
                About
              </Link>
            </Typography>
          </Grid>
       <Grid item>
            <Typography variant="body1">
              <Link
                href="/aboutus"
                color= "black"
                underline="none"
                sx={{
                  "&:hover": {
                   color: "black",
                    textDecoration: "underline",
                  },
                }}
              >
          Projects
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link
                href="/contact"
                 color= "black"
                underline="none"
                sx={{
                  "&:hover": {
                    color: "black",
                    textDecoration: "underline",
                  },
                }}
              >
                Contact Us
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;