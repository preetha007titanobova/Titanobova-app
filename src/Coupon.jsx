import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Stack,
  Chip,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";
import { toast } from "react-toastify";

const courses = ["React JS", "Node JS", "MERN Stack", "Python", "UI/UX Design"];

const paymentTypes = [
  { label: "UPI", value: "upi", icon: <QrCodeScannerIcon /> },
  { label: "Card", value: "card", icon: <CreditCardIcon /> },
  { label: "Net Banking", value: "netbanking", icon: <AccountBalanceIcon /> },
  { label: "Wallet", value: "wallet", icon: <AccountBalanceWalletIcon /> },
];

const CouponEnrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    courseName: "",
    paymentType: "upi",
  });

  const loadRazorpayScript = () =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptLoaded = await loadRazorpayScript();

    if (!scriptLoaded) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:7000/api/v1/enrollment/create-order",
        formData
      );

      const options = {
        key: data.key,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Course Enrollment",
        description: formData.courseName,
        order_id: data.order.id,

        method: {
          upi: formData.paymentType === "upi",
          card: formData.paymentType === "card",
          netbanking: formData.paymentType === "netbanking",
          wallet: formData.paymentType === "wallet",
        },

        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phoneNumber,
        },

        handler: async function (response) {
          const verifyRes = await axios.post(
            "http://localhost:7000/api/v1/enrollment/verify-payment",
            {
              enrollmentId: data.enrollmentId,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }
          );

          toast.success(`Payment successful! Coupon: ${verifyRes.data.couponCode}`);

          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            courseName: "",
            paymentType: "upi",
          });
        },

        theme: {
          color: "#0f766e",
        },
      };

      new window.Razorpay(options).open();
    } catch (error) {
      console.log(error);
      toast.error("Payment failed!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "10vh",
        py: { xs: 3, md: 5 },
        px: 2,
        background:
          "linear-gradient(135deg, #ecfeff 0%, #f8fafc 45%, #ecfdf5 100%)",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.1fr" },
            overflow: "hidden",
            borderRadius: "26px",
            boxShadow: "0 24px 70px rgba(15, 23, 42, 0.14)",
          }}
        >
          {/* LEFT CONTENT */}
          <Box
            sx={{
              p: { xs: 3, sm: 4 },
              background: "linear-gradient(160deg, #0f3076, #0f172a)",
              color: "#fff",
            }}
          >
            <Chip
              label="Limited Offer"
              sx={{
                bgcolor: "rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 700,
                mb: 2,
              }}
            />

            <Typography variant="h4" fontWeight={900} sx={{ mb: 1 }}>
              Join Your Course Today
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.78)", mb: 3 }}>
              Complete your enrollment securely using Razorpay and get your
              course coupon instantly after payment.
            </Typography>

            <Box
              sx={{
                bgcolor: "rgba(60, 75, 174, 0.12)",
                p: 2,
                borderRadius: "18px",
                mb: 3,
              }}
            >
              <Typography fontSize={14}>Course Fee</Typography>
              <Typography variant="h4" fontWeight={900}>
                ₹4500
              </Typography>
              <Typography fontSize={13} color="rgba(255,255,255,0.7)">
                One-time payment
              </Typography>
            </Box>

            {[
              "Instant coupon after successful payment",
              "Secure payment with Razorpay",
              "UPI, Card, Net Banking and Wallet support",
              "Beginner-friendly course access",
            ].map((item) => (
              <Stack key={item} direction="row" spacing={1.2} sx={{ mb: 1.4 }}>
                <CheckCircleIcon sx={{ fontSize: 20, color: "#86efac" }} />
                <Typography fontSize={14}>{item}</Typography>
              </Stack>
            ))}
          </Box>

          {/* FORM */}
          <Box sx={{ p: { xs: 3, sm: 4 } }}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <LocalOfferIcon sx={{ fontSize: 42, color: "#0f3076", mb: 1 }} />
              <Typography variant="h5" fontWeight={900}>
                Course Enrollment
              </Typography>
              <Typography color="text.secondary" fontSize={14}>
                Fill your details and complete payment.
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={1}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />

                <TextField
                  select
                  fullWidth
                  label="Select Course"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  required
                >
                  {courses.map((course) => (
                    <MenuItem key={course} value={course}>
                      {course}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Typography fontWeight={800} sx={{ mt: 3, mb: 1.5 }}>
                Payment Method
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                {paymentTypes.map((item) => (
                  <Box
                    key={item.value}
                    onClick={() =>
                      setFormData({ ...formData, paymentType: item.value })
                    }
                    sx={{
                      p: 1.5,
                      borderRadius: "14px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      border:
                        formData.paymentType === item.value
                          ? "2px solid #0f3076"
                          : "1px solid #dbeafe",
                      bgcolor:
                        formData.paymentType === item.value
                          ? "#ecfdf5"
                          : "#ffffff",
                      color:
                        formData.paymentType === item.value
                          ? "#0f3076"
                          : "#334155",
                      fontWeight: 800,
                    }}
                  >
                    {item.icon}
                    {item.label}
                  </Box>
                ))}
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  py: 1.5,
                  borderRadius: "14px",
                  fontWeight: 900,
                  textTransform: "none",
                  fontSize: "16px",
                  bgcolor: "#0f3076",
                  "&:hover": {
                    bgcolor: "#3d37ab",
                  },
                }}
              >
                Pay ₹4500 using {formData.paymentType.toUpperCase()}
              </Button>

              <Typography
                textAlign="center"
                color="text.secondary"
                fontSize={12}
                sx={{ mt: 2 }}
              >
                Your payment is processed securely through Razorpay.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CouponEnrollment;