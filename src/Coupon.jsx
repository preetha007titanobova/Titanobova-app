import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import axios from "axios";
import { toast } from "react-toastify";

const courses = ["React JS", "Node JS", "MERN Stack", "Python", "UI/UX Design"];

const CouponEnrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    courseName: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:7000/api/enrollment/create",
        formData
      );

      toast.success("Enrollment submitted! Coupon sent to email.");

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        courseName: "",
      });

      console.log(res.data);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background:
          "linear-gradient(135deg, #eef5ff 0%, #ffffff 45%, #f3f8ff 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: "28px",
            boxShadow: "0 25px 70px rgba(16,42,67,0.15)",
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <LocalOfferIcon sx={{ fontSize: 48, color: "#1976d2", mb: 1 }} />

            <Typography variant="h4" fontWeight={800}>
              Course Enrollment
            </Typography>

            <Typography sx={{ color: "text.secondary", mt: 1 }}>
              Fill the details and receive your coupon code by email.
            </Typography>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              select
              fullWidth
              label="Select Course"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            >
              {courses.map((course) => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 1.4,
                borderRadius: "14px",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "16px",
              }}
            >
              Generate Coupon
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CouponEnrollment;