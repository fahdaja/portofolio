import React from 'react';
// Make sure the path and filename are correct; adjust as needed:
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChevronScroll from './components/ChevronScroll';
import AboutSection from './components/AboutSection';
import KeahlianTeknis from './components/KeahlianTeknis';
import ProjectsSection from './components/ProjectsSection';
import ExperiencesSection from './components/ExperiencesSection';
import ContactSection from './components/ContactSection';
import SwipeAtas from './components/SwipeAtas';

export default function Home() {
  
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <ChevronScroll />
      <AboutSection />
      <KeahlianTeknis />
      <ProjectsSection />
      <ExperiencesSection />
      <ContactSection />
      <SwipeAtas items={[]} />
    </div>
  );
}
