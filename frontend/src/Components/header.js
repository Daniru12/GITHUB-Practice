import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function KFCHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
            <span className="text-2xl font-bold text-red-600">KFC</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="text-gray-700 hover:text-red-600">Home</a>
          <a href="#menu" className="text-gray-700 hover:text-red-600">Menu</a>
          <a href="#offers" className="text-gray-700 hover:text-red-600">Offers</a>
          <a href="#locations" className="text-gray-700 hover:text-red-600">Locations</a>
          <a href="#about" className="text-gray-700 hover:text-red-600">About Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 space-y-2">
          <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
          <a href="#menu" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Menu</a>
          <a href="#offers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Offers</a>
          <a href="#locations" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Locations</a>
          <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
        </div>
      )}
    </header>
  )
}