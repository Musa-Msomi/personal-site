// components/Navbar.tsx
import { useState } from 'react'
import profileImage from '../assets/musa-msomi-swe.jpg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Add this function to handle link clicks
  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name section with image */}
          <div className="flex items-center space-x-3">
            <img 
              src={profileImage}
              alt="Musa Msomi"
              className="h-10 w-10 rounded-full object-cover"
            />
          <div className="text-xl font-bold">
            Musa Msomi
          </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <a href="#about" onClick={handleLinkClick} className="block py-2 hover:text-blue-600">About</a>
            <a href="#portfolio" onClick={handleLinkClick} className="block py-2 hover:text-blue-600">Portfolio</a>
            <a href="#skills" onClick={handleLinkClick} className="block py-2 hover:text-blue-600">Skills</a>
            <a href="#contact" onClick={handleLinkClick} className="block py-2 hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar