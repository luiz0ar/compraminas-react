import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import AboutSection from '../../components/AboutSection/AboutSection.jsx'
import PartnersSection from '../../components/PartnerSection/PartnerSection.jsx';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PartnersSection />
    </div>
  );
}

export default HomePage;
