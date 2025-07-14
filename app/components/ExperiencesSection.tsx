import React from 'react'
import { Calendar } from 'lucide-react'

function ExperiencesSection() {
    const experiences = [
    {
      company: 'Telkom University',
      position: 'Fullstack Developer',
      period: 'Februari 2025 - Mei 2025',
      description: 'Mendevelop website informasi untuk Organisasi Mapala Gemarawana dengan Framework Laravel dan Tailwind CSS'
    },
    {
      company: 'Telkom University',
      position: 'Front-end Developer',
      period: 'Februari 2024 - Juni 2024',
      description: 'Mendevelop website aplikasi penyewaan lapangan Futsal dengan Framework Laravel dan bootstrap'
    },
    {
      company: 'IndiHome',
      position: 'Stock Opname',
      period: 'Maret 2022 - Juni 2022',
      description: 'Menginput data barang yang dibutuhkan dari masing masing client yang berlangganan pada indiHome namun sedang terkendala pada bagian telekomunikasi'
    }
  ];
  return (
    <div>
      {/* Experience Section */}
      <section id="Pengalaman Kerja" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pengalaman Kerja
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.position}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperiencesSection

