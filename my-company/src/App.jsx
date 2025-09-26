import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
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