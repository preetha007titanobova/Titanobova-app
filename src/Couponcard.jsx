import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

const paperOpen = keyframes`
  0% {
    opacity: 0;
    transform: translateY(35px) scaleY(0.15);
  }
  45% {
    opacity: 1;
    transform: translateY(-65px) scaleY(0.15);
  }
  100% {
    opacity: 1;
    transform: translateY(-110px) scaleY(1);
  }
`;

const CourseCoupon = () => {
  return (
    <Box
      sx={{
        width: 210,
        height: 250,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        cursor: "pointer",

        "&:hover .gift-lid": {
          transform: "rotate(-28deg) translate(-25px, -85px)",
        },

        "&:hover .scholarship-paper": {
          animation: `${paperOpen} 1.1s ease forwards`,
        },
      }}
    >
      {/* Scholarship Paper */}
      <Box
        className="scholarship-paper"
        sx={{
          width: 145,
          minHeight: 115,
          position: "absolute",
          bottom: 45,
          zIndex: 2,
          opacity: 0,
          transformOrigin: "bottom center",
          background: "linear-gradient(180deg, #fffdf5, #fff3c4)",
          border: "2px solid #d8b75a",
          borderRadius: "10px",
          boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
          px: 1.2,
          py: 1.3,
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Ribbon */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 24,
            background: "#1c2947",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 8, fontWeight: 800 }}>
            SCHOLARSHIP OFFER
          </Typography>
        </Box>

        <Typography
          sx={{
            mt: 3,
            fontSize: 10,
            fontWeight: 900,
            color: "#1c2947",
            lineHeight: 1.3,
          }}
        >
          FIRST 100 STUDENTS
        </Typography>

        <Typography
          sx={{
            fontSize: 21,
            fontWeight: 900,
            color: "#d18b00",
            lineHeight: 1.1,
            mt: 0.5,
          }}
        >
          10% OFF
        </Typography>

        <Typography sx={{ fontSize: 8, fontWeight: 700, color: "#333", mt: 0.5 }}>
          Discount for all courses
        </Typography>

        <Typography sx={{ fontSize: 7, color: "#777", mt: 0.7 }}>
          Valid till July 30
        </Typography>
      </Box>

      {/* Gift Lid */}
      <Box
        className="gift-lid"
        sx={{
          width: 135,
          height: 34,
          background: "linear-gradient(135deg, #2f80ed, #1c2947)",
          borderRadius: "9px 9px 4px 4px",
          position: "absolute",
          bottom: 82,
          zIndex: 5,
          transition: "0.7s ease",
          transformOrigin: "left center",
          boxShadow: "0 8px 18px rgba(0,0,0,0.25)",

          "&::before": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: 22,
            height: "100%",
            background: "#ffffff55",
          },
        }}
      />

      {/* Gift Box */}
      <Box
        sx={{
          width: 120,
          height: 78,
          background: "linear-gradient(135deg, #1c2947, #2f80ed)",
          borderRadius: "7px 7px 15px 15px",
          position: "relative",
          zIndex: 4,
          boxShadow: "0 15px 30px rgba(0,0,0,0.25)",

          "&::before": {
            content: '""',
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: 24,
            height: "100%",
            background: "#ffffff55",
          },

          "&::after": {
            content: '""',
            position: "absolute",
            top: 30,
            left: 0,
            width: "100%",
            height: 17,
            background: "#ffffff40",
          },
        }}
      />

      {/* Bow */}
      <Box
        sx={{
          position: "absolute",
          bottom: 115,
          zIndex: 6,
          display: "flex",
          gap: 0.7,
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 20,
            borderRadius: "50% 50% 0 50%",
            background: "#4da3ff",
            transform: "rotate(-25deg)",
          }}
        />
        <Box
          sx={{
            width: 28,
            height: 20,
            borderRadius: "50% 50% 50% 0",
            background: "#4da3ff",
            transform: "rotate(25deg)",
          }}
        />
      </Box>
    </Box>
  );
};

export default CourseCoupon;