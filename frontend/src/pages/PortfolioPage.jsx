// import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSec2 from '../components/Portfolio/HeroSec2';
import BentoPort from '../components/Portfolio/BentoPort';

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSec2 />
      <BentoPort />
      <Footer />
    </div>
  );
};

export default PortfolioPage;