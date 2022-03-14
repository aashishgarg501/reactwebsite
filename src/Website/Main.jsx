import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
