import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Booking from './pages/Booking';
import HowItWorks from './pages/HowItWorks';
import Locations from './pages/Locations';
import SignIn from './pages/SignIn';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="w-full bg-white font-body selection:bg-primary selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
