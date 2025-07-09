'use client';

import React, { useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const projects = [
    {
      title: 'GEMARAWANA',
      category: 'Project',
      description: 'Full-stack Mendevelop Website Informasi Menggunakan Framework Styling CSS dari Tailwind CSS Dengan Laravel & MySQL',
      tech: ['Laravel', 'MySql', 'Tailwind CSS'],
      image: '/project.png',
      github: 'https://github.com/fahdaja/Gemarawana',
      demo: '#'
    },
    {
      title: 'Portofolio Website',
      category: 'Project',
      description: 'Website Portofolio Pribadi Menggunakan Next.js Dan Tailwind CSS.',
      tech: ['Next.js','Tailwind CSS'],
      image: '/porto webbb.png',
      github: 'https://github.com/fahdaja/portofolio',
      demo: '#'
    },
    {
      title: 'Sertifikat Uji Kompetensi TKJ 2023',
      category: 'Sertifikat',
      description: 'SMK TELKOM MAKASSAR',
      tech: ['Ujikom', 'TKJ', ],
      image: '/sertif ujikomm.png',
      github: '#',
      demo: '/sertif ujikomm.png'
    }
  ];

  const filteredProjects = selectedCategory === 'Semua'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div>
      <section id="Project" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project & Sertifikat
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12 flex-wrap gap-3 sm:gap-4 ">
            {['Semua', 'Project', 'Sertifikat'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 sm:px-8 py-2 sm:py-3 rounded-full border-2 font-semibold 
                  text-sm sm:text-base transition-all duration-300
                  ${selectedCategory === category
                    ? category === 'Sertifikat'
                      ? 'bg-green-400 text-black border-green-400'
                      : 'bg-blue-400 text-black border-blue-400'
                    : category === 'Sertifikat'
                      ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black'
                      : 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const isSertifikat = project.category === 'Sertifikat';

              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    {isSertifikat && (
                      <div className="absolute top-4 left-4 bg-green-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-lg tracking-wide">
                        SERTIFIKAT
                      </div>
                    )}
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={`px-3 py-1 rounded-full text-xs
                          ${isSertifikat ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'}
                        `}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {isSertifikat ? (
                        <a 
                          href={project.demo}
                          target="_blank"
                          className="flex items-center justify-center w-full px-4 py-2 border-2 border-green-400 text-green-300 rounded-full hover:bg-green-400 hover:text-black transition-colors duration-200"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          <span className="text-sm">Lihat Sertifikat</span>
                        </a>
                      ) : (
                        <>
                          <a 
                            href={project.github}
                            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">Code</span>
                          </a>
                          <a 
                            href={project.demo}
                            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">Demo</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsSection;
