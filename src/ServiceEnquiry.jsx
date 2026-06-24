import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
  MenuItem,
  Chip,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import Api from "./Api.js";

const serviceOptions = [
  "Website Development",
  "Software Development",
  "Mobile Application",
  "Web Application",
  "E-Commerce Website",
  "SaaS Product Development",
  "UI/UX Design",
  "Backend API Development",
  "Project Support",
  "Maintenance & Support",
  "Other",
];

const ServiceEnquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    contact: "",
    serviceType: "",
    otherService: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.serviceType ||
      !formData.description
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    if (formData.serviceType === "Other" && !formData.otherService) {
      toast.error("Please enter your service type");
      return;
    }

    try {
      await Api.post("/serviceenquiry/create", formData);
      toast.success("Your enquiry submitted successfully!");

      setFormData({
        name: "",
        email: "",
        organisation: "",
        contact: "",
        serviceType: "",
        otherService: "",
        description: "",
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Submission failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width:"100%",
        py: { xs: 4, sm: 5, md: 8 },
        px: { xs: 1.5, sm: 2 },
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 50%, #eaf3ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3.5, md: 5 },
            borderRadius: { xs: "18px", sm: "24px", md: "28px" },
            boxShadow: "0 25px 70px rgba(15,48,118,0.14)",
            border: "1px solid rgba(21,101,216,0.12)",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: { xs: 3, md: 5 },
            alignItems: "center",
          }}
        >
          <Box>
            <Chip
              icon={<BusinessCenterIcon />}
              label="Professional IT Services"
              sx={{
                mb: 2,
                bgcolor: "#eaf3ff",
                color: "#0f3076",
                fontWeight: 800,
                fontSize: { xs: 12, sm: 14 },
              }}
            />

            <Typography
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.7rem" },
                fontWeight: 900,
                color: "#102a43",
                fontFamily: "-apple-system",
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Build Your Software With a Trusted Technology Team
            </Typography>

            <Typography
              sx={{
                color: "#52606d",
                lineHeight: 1.8,
                fontSize: { xs: 14, sm: 15, md: 16 },
                mb: 2,
              }}
            >
              We create professional websites, custom software, web
              applications, mobile applications, SaaS platforms, backend APIs,
              and business automation solutions.
            </Typography>

            <Typography
              sx={{
                color: "#52606d",
                lineHeight: 1.8,
                fontSize: { xs: 14, sm: 15, md: 16 },
              }}
            >
              Share your requirement with us and our team will contact you with
              the best solution plan.
            </Typography>

            <Box sx={{ mt: 3 }}>
              {[
                "Reliable project delivery",
                "Clean and scalable development",
                "Client-focused support",
                "Modern UI and secure backend",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    mb: 1,
                    color: "#102a43",
                    fontWeight: 700,
                    fontSize: { xs: 14, sm: 15 },
                  }}
                >
                  ✅ {item}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={{ xs: 1.7, sm: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.4rem" },
                  fontWeight: 900,
                  color: "#0f3076",
                }}
              >
                Get Service Details
              </Typography>

              <TextField label="Full Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />

              <TextField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />

              <TextField label="Organisation / Company Name" name="organisation" value={formData.organisation} onChange={handleChange} fullWidth helperText="Optional" />

              <TextField label="Contact Number" name="contact" value={formData.contact} onChange={handleChange} fullWidth required />

              <TextField select label="What type of service do you need?" name="serviceType" value={formData.serviceType} onChange={handleChange} fullWidth required>
                {serviceOptions.map((service) => (
                  <MenuItem key={service} value={service}>
                    {service}
                  </MenuItem>
                ))}
              </TextField>

              {formData.serviceType === "Other" && (
                <TextField label="Enter Your Service Requirement" name="otherService" value={formData.otherService} onChange={handleChange} fullWidth required />
              )}

              <TextField
                label="Project / Service Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 900,
                  bgcolor: "#0f3076",
                  "&:hover": { bgcolor: "#102a43" },
                }}
              >
                Submit Enquiry
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ServiceEnquiry;