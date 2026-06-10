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
import WhoWeAre from "./WhoWeAre";
function App() {
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
        <Route path="/who-we-are" element={<WhoWeAre/>}/>
        <Route path="/learn" element={<Learn/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/project" element={<Project />} />
      </Routes>

  
    </>
  );
}

export default App;
