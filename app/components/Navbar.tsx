'use client'
import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const hamburgerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(e.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 transition-transform duration-300 
          md:bg-black/50 md:backdrop-blur-md md:border-b md:border-white/10
          ${showNavbar ? 'md:translate-y-0' : 'md:-translate-y-full'}`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#Home" className="hidden md:block text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
            portofolio
          </a>

          <div className="hidden md:flex space-x-6">
            {["Home","Tentang Saya","Tech Stack","Project & Sertifikat","Pengalaman Kerja","Kontak"].map((link, i) => (
              <a key={i} href={`#${link}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{link}</a>
            ))}
          </div>

          <div ref={hamburgerRef} className="md:hidden absolute top-4 right-4 z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center w-8 h-8 space-y-1 focus:outline-none"
            >
              <span className={`h-0.5 w-full bg-gray-300 rounded transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-300 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`h-0.5 w-full bg-gray-300 rounded transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        ref={sidebarRef} 
        className={`fixed top-0 right-0 h-full w-64 bg-black/80 backdrop-blur-md border-l border-white/10 
          transform transition-transform duration-500 ease-in-out 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden flex flex-col pt-20 px-6 space-y-4 z-40`}
      >
        {["Home","Tentang Saya","Tech Stack","Project & Sertifikat","Pengalaman Kerja","Kontak"].map((link, i) => (
          <a 
            key={i}
            onClick={() => setMenuOpen(false)}
            href={`#${link}`}
            className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 py-2"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar;
