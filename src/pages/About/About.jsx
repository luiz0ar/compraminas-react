import React from 'react';
import PageBanner from '../../components/PageBanner/PageBanner.jsx';
import AboutContent from '../../components/AboutContent/AboutContent.jsx';

function AboutPage() {
  return (
    <>
      <PageBanner title="Sobre" breadcrumb="SOBRE" />
      <AboutContent />
    </>
  );
}

export default AboutPage;
