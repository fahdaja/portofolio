import React from 'react'

function TechStack() {
    const skills = [    
    { name: 'Next.js', level: 50, icon: "/nextjs.svg" },
    { name: 'JavaScript', level: 75, icon: "/javascript.svg" },
    { name: 'Laravel', level: 85, icon: "/laravel.svg" },
    { name: 'HTML5 & CSS', level: 80, icon: "/html.svg" },
    { name: 'Tailwind CSS', level: 80, icon: "/tailwind.svg" },
    { name: 'PHP', level: 75, icon: "/php.svg" }, // Mengganti ikon duplikat
  ];
  return (
    <div>
      {/* SECTION KEAHLIAN TEKNIS */}
      <section id="Skills" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          {/* PERUBAHAN: Menghapus lg:grid-cols-3 agar tetap 2 kolom */}
          <div className="grid sm:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {/* Menggunakan tag <img> biasa */}
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-400 text-sm">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechStack

