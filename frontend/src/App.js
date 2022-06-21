import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar.js/Navbar";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Garden from "./pages/Garden";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Error - 404</h1>} />
      </Routes>

      <Footer />
    </>
  );
}
