import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Nav/Header";
import Home from "./Home";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import About from "./About.jsx";
import Courses from "./Courses.jsx";
import Contact from "./Contact";
import Alldata from "./Alldata";

function Router() {
  return (
    <>
    

  
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
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

  
    </>
  );
}

export default Router;
