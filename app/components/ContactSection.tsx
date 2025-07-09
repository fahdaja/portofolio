import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'
function ContactSection() {
  return (
    <div>
      {/* Contact Section */}
      <section id="Contact" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hubungi Saya
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Mari Berkolaborasi</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-justify">
                Saya selalu terbuka untuk proyek-proyek menarik dan peluang kerja yang menantang. 
                Jangan ragu untuk menghubungi saya jika Anda membutuhkan frontend developer yang 
                passionate dan berpengalaman.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">fahdalbantani04@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telepon</p>
                    <p className="text-white">+62 81256478847</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Lokasi</p>
                    <p className="text-white">Bandung, Indonesia</p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://github.com/dashboard" 
                  className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-blue-400" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/fahd-albantani-b587b1298/" 
                  className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="nama@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                
                <button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection

