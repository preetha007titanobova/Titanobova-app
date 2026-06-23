import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";
import { toast } from "react-toastify";
import Api from "./Api.js";
import SendIcon from "@mui/icons-material/Send";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { keyframes } from "@mui/system";

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

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
`;

function Conversation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    
  try {
  const response = await Api.post(
     "/conversation/create",
      formData
    );



    const data = await response.json();
    console.log('data...')
    if (response.ok) {
      // alert("Conversation submitted successfully!");

    toast.success("Message sent successfully!");
      // Clear form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });

      console.log(data);
    } else {
      alert(data.message || "Something went wrong");
    }
 } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #EAF3FF 0%, #FFFFFF 50%, #DDEBFF 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 5,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.12)",
          top: 60,
          left: 80,
          animation: `${floating} 4s ease-in-out infinite`,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 160,
          height: 160,
          borderRadius: "50%",
          background: "rgba(30, 64, 175, 0.12)",
          bottom: 80,
          right: 100,
          animation: `${floating} 5s ease-in-out infinite`,
        }}
      />

      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 560,
          p: { xs: 3, sm: 5 },
          borderRadius: "26px",
          background: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 25px 80px rgba(30, 64, 175, 0.18)",
          animation: `${fadeUp} 0.8s ease both`,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack alignItems="center" spacing={1.5} mb={4}>
          {/* <Box
            sx={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2563EB, #1E40AF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              animation: `${floating} 3s ease-in-out infinite`,
            }}
          >
            {/* <ChatBubbleOutlineIcon sx={{ fontSize: 34 }} /> */}
          {/* </Box> */} 

          <Typography
            variant="h4"
            sx={{fontSize: { xs: "1.8rem", md: "2.3rem" },
              fontWeight: 800, color: "#163372",
              mb: 1,
              textAlign: "center",}}
            
          
          >
            Start a Conversation
          </Typography>

          {/* <Typography color="text.secondary" textAlign="center">
            Fill the form below and we will contact you soon.
          </Typography> */}
        </Stack>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.4}>
            <TextField
              label="Name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Phone Number"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Message"
              name="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={5}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              endIcon={<SendIcon />}
              sx={{
                mt: 1,
                py: 1.5,
                borderRadius: "14px",
                fontSize: "16px",
                fontWeight: 700,
                textTransform: "none",
                background: "linear-gradient(135deg, #2563EB, #1E40AF)",
                boxShadow: "0 12px 30px rgba(37, 99, 235, 0.35)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 18px 40px rgba(37, 99, 235, 0.45)",
                  background: "linear-gradient(135deg, #1D4ED8, #1E3A8A)",
                },
              }}
            >
              Submit Conversation
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default Conversation;