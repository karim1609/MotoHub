import React, { useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturedCategories from '../components/FeaturedCategories';
import FeaturedMotorcycles from '../components/FeaturedMotorcycles';
import StatCounter from '../components/StatCounter';
import ServiceSection from '../components/ServiceSection';
import PartsSection from '../components/PartsSection';
import SearchTool from '../components/SearchTool';

const HomePage = () => {
  useEffect(() => {
    document.title = 'MotoHub - Premier Motorcycle Dealership';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSlider />
      <FeaturedCategories />
      <FeaturedMotorcycles />
      <StatCounter />
      <PartsSection />
      <ServiceSection />
      <SearchTool />
    </div>
  );
};

export default HomePage;