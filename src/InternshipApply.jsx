import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Stack,
  Chip,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PaidIcon from "@mui/icons-material/Paid";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import axios from "axios";
import Api from "./Api.js";

const internChoices = [
  "MERN Full Stack Developer",
  "Java Full Stack Developer",
  "Python Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Testing",
  "DevOps",
];

const internships = [
  {
    title: "Paid Internship Program",
    type: "Paid",
    internType: "Paid Intern",
    color: "#16A34A",
    icon: <PaidIcon />,
    benefits: [
      "Monthly Stipend Based on Performance",
      "Work on Real Client Projects",
      "Industry Mentor Guidance",
      "Certificate of Completion",
      "Letter of Recommendation",
      "Potential Full-Time Opportunity",
    ],
    description:
      "Designed for students and fresh graduates who want real-world experience while earning a stipend.",
  },
  {
    title: "Unpaid Internship Program",
    type: "Unpaid",
    internType: "Unpaid Intern",
    color: "#2563EB",
    icon: <VolunteerActivismIcon />,
    benefits: [
      "Live Project Experience",
      "Technical Mentorship",
      "Portfolio Building",
      "Industry Exposure",
      "Internship Certificate",
      "Career Guidance Sessions",
    ],
    description:
      "Ideal for learners seeking practical experience and skill development.",
  },
];

const InternshipApply = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    internType: "",
    internChoice: "",
  });

  const openApplyForm = (type) => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      internType: type,
      internChoice: "",
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.contact ||
      !formData.internType ||
      !formData.internChoice
    ) {
      alert("Please fill all required fields");
      return;
    }
    try {
      setIsSubmitted(true);
      await Api.post("/intern/apply", formData);
      toast.success(`${formData.internType} application submitted!`);
      console.log("formData", formData);
      setFormData({
        name: "",
        email: "",
        contact: "",
        internType: "",
        internChoice: "",
      });

      setShowForm(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Application failed");
    } finally {
      setIsSubmitted(false);
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 7 },
        px: 2,
        background:
          "linear-gradient(135deg, #eef6ff 0%, #ffffff 50%, #eaf3ff 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              color: "#163372",
              mb: 1,
              textAlign: "center",
            }}
          >
            Apply for Internship
          </Typography>

          <Typography
            sx={{
              color: "#52606d",
              maxWidth: 760,
              mx: "auto",
              mt: 1.5,
              lineHeight: 1.8,
            }}
          >
            Choose Paid or Unpaid internship and submit your details. Our team
            will contact you soon.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 4,
          }}
        >
          {internships.map((item, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: "24px",
                background: "#fff",
                border: `1px solid ${item.color}30`,
                boxShadow: "0 20px 50px rgba(16,42,67,0.08)",
                transition: ".35s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 28px 70px rgba(21,101,216,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "18px",
                  bgcolor: `${item.color}15`,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  "& svg": {
                    fontSize: 32,
                  },
                }}
              >
                {item.icon}
              </Box>

              <Chip
                label={item.type}
                sx={{
                  bgcolor: item.color,
                  color: "#fff",
                  fontWeight: 800,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.4rem" },
                  fontWeight: 900,
                  color: "#102a43",
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#52606d",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {item.description}
              </Typography>

              <Box>
                {item.benefits.map((benefit, i) => (
                  <Typography
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      color: "#102a43",
                      fontWeight: 600,
                      fontSize: { xs: 14, md: 15 },
                    }}
                  >
                    ✅ {benefit}
                  </Typography>
                ))}
              </Box>

              <Button
                fullWidth
                variant={item.type === "Paid" ? "contained" : "outlined"}
                onClick={() => openApplyForm(item.internType)}
                sx={{
                  mt: 3,
                  py: 1.4,
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 800,
                  color: "white",
                  ...(item.type === "Paid"
                    ? {
                        bgcolor: "#16A34A",
                        "&:hover": {
                          bgcolor: "#186434",
                        },
                      }
                    : {
                        bgcolor: "#20148d",
                        "&:hover": {
                          bgcolor: "#13134a",
                          color: "white",
                        },
                      }),
                }}
              >
                Apply for {item.type} Internship
              </Button>
            </Paper>
          ))}
        </Box>

        <Dialog
          open={showForm}
          onClose={() => setShowForm(false)}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            sx: {
              borderRadius: "24px",
              p: { xs: 1, sm: 2 },
              boxShadow: "0 25px 80px rgba(15, 48, 118, 0.25)",
            },
          }}
        >
          <DialogTitle
            sx={{
              textAlign: "center",
              color: "#102a43",
              fontWeight: 900,
              position: "relative",
              pb: 1,
            }}
          >
            <SchoolIcon
              sx={{
                fontSize: 42,
                color:
                  formData.internType === "Paid Intern" ? "#16A34A" : "#2563EB",
                display: "block",
                mx: "auto",
                mb: 1,
              }}
            />
            {formData.internType} Application
            <IconButton
              onClick={() => setShowForm(false)}
              sx={{
                position: "absolute",
                right: 12,
                top: 12,
                color: "#64748B",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent>
          

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />

                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />

                <TextField
                  label="Contact Number"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  fullWidth
                  required
                />

                <TextField
                  select
                  label="Internship Role"
                  name="internChoice"
                  value={formData.internChoice}
                  onChange={handleChange}
                  fullWidth
                  required
                >
                  {internChoices.map((choice) => (
                    <MenuItem key={choice} value={choice}>
                      {choice}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Intern Type"
                  name="internType"
                  value={formData.internType}
                  fullWidth
                  disabled
                />

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitted}
                    // endIcon={!isSubmitted && <SendIcon />}
                    sx={{
                      width: "50%",
                      py: 1.0,
                      borderRadius: "14px",
                      textTransform: "none",
                      fontWeight: 900,
                      bgcolor:
                        formData.internType === "Paid Intern"
                          ? "#16A34A"
                          : "#2563EB",

                      "&:hover": {
                        bgcolor:
                          formData.internType === "Paid Intern"
                            ? "#15803D"
                            : "#1D4ED8",
                      },

                      "&:disabled": {
                        bgcolor: "#94A3B8",
                        color: "#fff",
                      },
                    }}
                  >
                    {isSubmitted ? "Submitting..." : "Submit Application"}
                  </Button>

                  <Button
                    type="button"
                    variant="contained"
                    onClick={() => setShowForm(false)}
                    sx={{
                      width: "50%",
                      py: 1.5,
                      borderRadius: "14px",
                      textTransform: "none",
                      bgcolor: "#64748B",
                      fontWeight: 900,

                      "&:hover": {
                        bgcolor: "#475569",
                      },
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </Stack>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default InternshipApply;
