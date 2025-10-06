import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App (){
  return (
  <div>
    <Navbar />

    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Services" element={<Services />} />
  <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer/>
  </div>

  );

}

export default App;