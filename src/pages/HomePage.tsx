// HomePage.jsx
import React from 'react';

import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
    
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <Footer />
    </div>
  );
};

export default HomePage;
