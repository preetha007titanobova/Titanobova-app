import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Nav/Header";
import Home from "./Home";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Alldata from "./Alldata";
import Learn from "./Learn";
import Courses from "./Courses";
import Coupon from "./Coupon"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhoWeAre from "./WhoWeAre";
import Conversation from "./Conversation";
import CourseCoupon from "./Couponcard";
import Footer from "./Nav/Footer";
import CustomerSupport from "./customerservice.jsx";
import technology from "./technology.jsx"
import TechnologySection from "./technology.jsx";
function App() {
  return (
    <>
    
 <ToastContainer />
  
  <Header/>

      <Routes>
        {/* redirect to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* HOME PAGE ONLY */}
        <Route
          path="/home"
          element={
            <>
             
    <Home/>
       
         </>
          }
        />
        <Route path = "/conversation" element ={<Conversation/>}/>
        <Route path="/who-we-are" element={<WhoWeAre/>}/>
        <Route path="/course-fill" element={<Coupon/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/project" element={<Project />} />
         <Route path="/customersupport" element={<CustomerSupport/>} />
        <Route path="/technology" element ={<TechnologySection/>}/>
      </Routes>

  <Footer/>
    </>
  );
}

export default App;
