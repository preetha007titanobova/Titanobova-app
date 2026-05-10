import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Nav/Header";
import Home from "./home";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Aboutus from "./About";


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
             
         <Alldata/>
         </>
          }
        />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>

  
    </>
  );
}

export default Router;
