'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
  <nav className="w-full fixed top-0 z-50 shadow-lg" style={{ backgroundColor: '#4267b2' }}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">KSL Fido Global</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScrollToSection('Home')} className="text-white hover:text-blue-300">
              Home
            </button>
            <button onClick={() => handleScrollToSection('Services')} className="text-white hover:text-blue-300">
              Services
            </button>
            <button onClick={() => handleScrollToSection('Portfolio')} className="text-white hover:text-blue-300">
              Portfolio
            </button>
            
            <button onClick={() => handleScrollToSection('Contact')} className="text-white hover:text-blue-300">
              Contact Us
            </button>

            <Link 
              href="#Portfolio"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              See Projects →
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleScrollToSection('Home')} className="text-white hover:text-blue-300">
                Home
              </button>
              <button onClick={() => handleScrollToSection('About')} className="text-white hover:text-blue-300">
                About
              </button>
              <button onClick={() => handleScrollToSection('Portfolio')} className="text-white hover:text-blue-300">
                Portfolio
              </button>
              <button onClick={() => handleScrollToSection('Client')} className="text-white hover:text-blue-300">
                Client
              </button>
              <button onClick={() => handleScrollToSection('Blog')} className="text-white hover:text-blue-300">
                Blog
              </button>
              <button onClick={() => handleScrollToSection('Contact')} className="text-white hover:text-blue-300">
                Contact
              </button>
              <Link 
                href="/projects"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-block"
              >
                See Projects →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
