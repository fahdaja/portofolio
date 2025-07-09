'use client'
import React, { useState, useEffect } from 'react'

interface SwipeButtonUpProps {
  items: string[]
}

export default function SwipeAtas({ }: SwipeButtonUpProps) {
  
  const [showButton, setShowButton] = useState(false)

  const handleSwipe = () => {
    
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showButton) return null

  return (
    <button
      onClick={handleSwipe}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full  bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-md
                 flex items-center justify-center cursor-pointer
                 hover:bg-gray-600 hover:scale-110 transition-all duration-300 ease-in-out z-50"
    >
      <span className="text-2xl drop-shadow">↑</span>
    </button>
  )
}
