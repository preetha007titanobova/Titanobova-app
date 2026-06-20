import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const CustomerSupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    supportType: "Course Support",
    courseName: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const courses = [
    "React JS",
    "Node JS",
    "MERN Stack",
    "Python",
    "AI & GenAI",
    "UI/UX Design",
  ];

  const projectTypes = [
    "Website Development",
    "Mobile App",
    "SaaS Platform",
    "AI Solution",
    "Cloud Solution",
    "Other Project",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:7000/api/v1/customersupport/create", formData);
console.log("formData",formData)
      alert("Your request has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        supportType: "Course Support",
        courseName: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #eef5ff, #ffffff)",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            boxShadow: "0 20px 60px rgba(28, 41, 71, 0.12)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.3rem" },
              fontWeight: 800,
              color: "#163372",
              mb: 1,
              textAlign: "center",
            }}
          >
            How Can We Help You?
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              textAlign: "center",
              mb: 4,
              fontSize: 15,
            }}
          >
            Fill the form and our team will contact you shortly.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Customer Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ mb: 2.5 }}
              required
            />

            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2.5 }}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              sx={{ mb: 3 }}
              required
            />

            <FormControl sx={{ mb: 3 }}>
              <FormLabel sx={{ color: "#163372", fontWeight: 700, mb: 1 }}>
                Select Support Type
              </FormLabel>

              <RadioGroup
                row
                name="supportType"
                value={formData.supportType}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Course Support"
                  control={<Radio />}
                  label="Course Support"
                />
                <FormControlLabel
                  value="Project Support"
                  control={<Radio />}
                  label="Project Support"
                />
                <FormControlLabel
                  value="Other Support"
                  control={<Radio />}
                  label="Other Support"
                />
              </RadioGroup>
            </FormControl>

            {formData.supportType === "Course Support" && (
              <TextField
                select
                fullWidth
                label="Select Course"
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                sx={{ mb: 2.5 }}
              >
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </TextField>
            )}

            {formData.supportType === "Project Support" && (
              <TextField
                select
                fullWidth
                label="Select Project Type"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                sx={{ mb: 2.5 }}
              >
                {projectTypes.map((project) => (
                  <MenuItem key={project} value={project}>
                    {project}
                  </MenuItem>
                ))}
              </TextField>
            )}

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Tell us about your requirement"
              name="message"
              value={formData.message}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                py: 1.5,
                borderRadius: "30px",
                background: "linear-gradient(135deg, #1976d2, #163372)",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CustomerSupportForm;