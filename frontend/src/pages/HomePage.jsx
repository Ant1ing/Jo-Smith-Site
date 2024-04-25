// import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSec from '../components/Home/HeroSec';
import Feature1 from '../components/Home/Feature1';
import Gallery from '../components/Home/Gallery'; 
import Booking from '../components/Home/Booking'; 

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <Feature1 />
      <Gallery />
      <Booking />
      <Footer />
      
    </div>
  );
};

export default HomePage;