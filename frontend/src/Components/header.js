import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function KFCHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#232323] shadow-lg">
      <nav className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
      
            <div className="w-16 h-16 mr-4 bg-gray-200 border-2 border-dashed rounded-xl" >
            <img
            src="https://i.postimg.cc/Z5P7RQq1/KFC-logo-svg.png"
            alt="Logo"
            className="object-cover w-full h-full"
          />
          
            </div>
            <span className="text-2xl font-bold text-red-600">KFC</span>
          </a>
        </div>

        <div className="hidden space-x-4 md:flex">
          <a href="/" className="text-gray-100 hover:text-red-400">Home</a>
          <a href="#menu" className="text-gray-100 hover:text-red-400">Menu</a>
          <a href="#offers" className="text-gray-100 hover:text-red-400">Offers</a>
          <a href="/signup" className="text-gray-100 hover:text-red-400">SignUp</a>
          <a href="/about" className="text-gray-100 hover:text-red-400">About Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100 hover:text-red-400">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="py-2 space-y-2 bg-[#5D4037] md:hidden">
          <a href="/" className="block px-4 py-2 text-gray-100 hover:bg-red-600">Home</a>
          <a href="#menu" className="block px-4 py-2 text-gray-100 hover:bg-red-600">Menu</a>
          <a href="#offers" className="block px-4 py-2 text-gray-100 hover:bg-red-600">Offers</a>
          <a href="/signup" className="block px-4 py-2 text-gray-100 hover:bg-red-600">SignUp</a>
          <a href="/about" className="block px-4 py-2 text-gray-100 hover:bg-red-600">About Us</a>
        </div>
      )}
    </header>
  )
}
