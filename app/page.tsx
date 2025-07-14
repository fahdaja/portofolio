import React from 'react';
// Make sure the path and filename are correct; adjust as needed:
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChevronScroll from './components/ChevronScroll';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperiencesSection from './components/ExperiencesSection';
import ContactSection from './components/ContactSection';
import SwipeUp from './components/SwipeUp';
import TechStack from './components/TechStack';

export default function Home() {
  
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <ChevronScroll />
      <AboutSection />
      <TechStack />
      <ProjectsSection />
      <ExperiencesSection />
      <ContactSection />
      <SwipeUp items={[]} />
    </div>
  );
}
