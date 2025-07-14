import React from 'react'
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react'
function AboutSection() {
  return (
    <div>
      {/* SECTION TENTANG SAYA */}
      <section id="Tentang Saya" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Tentang Saya
          </h2>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Siapa Saya ?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Saya Muhammad Fahd Al Islam Al Bantani, seorang Fullstack Developer yang berpengalaman membangun aplikasi web menggunakan Laravel, Next.js, dengan Menggunakan Framework CSS dari Tailwind CSS.
Saat ini saya sedang menempuh pendidikan di D3 Rekayasa Perangkat Lunak Aplikasi,Telkom University.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-justify">
                Selalu mengikuti perkembangan teknologi terbaru dan best practices dalam
                pengembangan web. Saya senang bekerja dalam tim dan selalu berusaha memberikan
                solusi terbaik untuk setiap project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 ">
                  <User className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Nama</p>
                    <p className="text-white">Muhammad Fahd Al Islam Al Bantani</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Lokasi</p>
                    <p className="text-white">Bandung, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Pengalaman</p>
                    <p className="text-white">1 Tahun</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Pendidikan</p>
                    <p className="text-white">D3 Rekayasa Perangkat Lunak Aplikasi</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10 transition-all duration-300 transform hover:scale-104">
                <h4 className="text-xl font-semibold mb-4 text-white">Keahlian Utama</h4>
                <div className="space-y-3">
                  {['HTML, CSS, JavaScript', 'Framework / Library modern : React.JS & Next.JS ', 'Responsive Design & CSS Framework: Tailwind CSS & Bootstrap', 'PHP (Laravel)', 'Api Integration','MySQL'].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection

