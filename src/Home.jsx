import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Banner1 from "./assets/Banner1.jpg";
import Banner2 from "./assets/Banner2.jpg";
import Banner3 from "./assets/Banner3.jpg";

const banners = [Banner1, Banner2, Banner3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box id="home">
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 220, sm: 380, md: 520 },
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        {banners.map((src, i) => (
          <Box
            key={i}
            component="img"
            src={src}
            alt={`Banner ${i + 1}`}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: current === i ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
            }}
          />
        ))}

        {/* Dot indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
          }}
        >
          {banners.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrent(i)}
              sx={{
                width: current === i ? 24 : 8,
                height: 8,
                borderRadius: 99,
                bgcolor: current === i ? "white" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Content below banner */}
      <Box sx={{ px: 5, mt: 3 }}>
        <Typography variant="h4">hj7787j</Typography>
      </Box>
    </Box>
  );
};

export default Home;