import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Chatbot /> { }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} /> { }
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
