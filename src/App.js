import React, { useEffect, useState, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Booking from "./pages/Booking";
import Location from "./pages/Location";
import Faq from "./pages/Faq";
import Aos from "aos";
import 'aos/dist/aos.css';
import Details from "./pages/Details";
// require('dotenv').config()


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggle = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };


  useLayoutEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])


  useEffect (() => {
    Aos.init({})
  }, [])

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/testimonials" element={<Testimonials/>} />
        <Route exact path="/location" element={<Location/>} />
        <Route exact path="/booking" element={<Booking/>} />
        <Route exact path="/faq" element={<Faq/>} />
        <Route exact path="/details" element={<Details/>} />



      </Routes>

      <Footer />
    </>
  );
}

export default App;
