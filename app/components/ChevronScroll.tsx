'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

function ChevronScroll() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center my-8">
      <button
        onClick={() => scrollToSection('Tentang Saya')}
        className="animate-bounce"
      >
        <ChevronDown className="w-10 h-10 text-gray-400" />
      </button>
    </div>
  );
}

export default ChevronScroll;
