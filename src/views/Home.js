import React from 'react';
import AppHero from '../components/home/Hero';
import AppAbout from '../components/home/About';
import AppFeatures from '../components/home/Features';
import AppWorks from '../components/home/Works';
import AppFAQ from '../components/home/FAQ';
import AppPricing from '../components/home/Pricing';
import AppContact from '../components/home/Contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppWorks />
      <AppFAQ />
      <AppPricing />
      <AppContact />
    </div>
  );
}

export default AppHome;
