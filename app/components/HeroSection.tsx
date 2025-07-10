'use client';
import React from 'react';

function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section id="Home" className="relative z-10 min-h-screen flex items-center px-4 md:px-8 pt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* Kolom Foto Profil */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end transition-all duration-300 transform hover:scale-103">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img
                src="/foto_profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Kolom Teks Deskripsi */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              Muhammad Fahd Al Islam Al Bantani
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
              Fullstack Developer 🚀
            </p>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-justify">
              Saya siap membantu perusahaan Anda mengembangkan website dan aplikasi modern
              yang handal, aman, dan berorientasi pada pengalaman pengguna,
              menggunakan teknologi Laravel, Next.js, dan Tailwind CSS.
              Jangan ragu untuk menghubungi saya untuk berdiskusi lebih lanjut
              mengenai kebutuhan dan visi digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('Project')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Lihat Portofolio
              </button>
              <button
                onClick={() => scrollToSection('Contact')}
                className="px-8 py-3 border-2 border-blue-400 rounded-full text-blue-400 font-semibold hover:bg-blue-400 hover:text-black transition-all duration-300"
              >
                Hubungi Saya
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
