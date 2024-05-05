// import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PricingSec from '../components/Services/PricingSec';
import TestimonialsCarousel from '../components/Services/Testimonials';

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <TestimonialsCarousel />
      <PricingSec />
      <Footer />
    </div>
  );
};

export default ServicesPage;