import { useState } from 'react'

export default function KFCHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    {
      name: 'Original Recipe Chicken',
      description: 'Our signature crispy, juicy chicken.',
      image: <img src="https://i.postimg.cc/sxFzMBcg/cover-image-VYAJ3-I9-P-WIL05186-jpg-760x400-q85-crop-upscale.jpg" alt="Original Recipe Chicken" className="w-80 h-80 rounded-xl" />, // 20rem (320px)
    },
    {
      name: 'Colonel Crispy Strips',
      description: 'Perfectly crispy chicken strips, perfect for sharing.',
      image: <img src="https://i.postimg.cc/br2vMc6s/KFC2-20211118114655.jpg" alt="Colonel Crispy Strips" className="w-80 h-80 rounded-xl" />, // 20rem (320px)
    },
    {
      name: 'KFC Bucket',
      description: 'A classic bucket of crispy, juicy chicken.',
      image: <img src="https://i.postimg.cc/J7QkQTc5/brand-kfc-product.jpg" alt="KFC Bucket" className="w-80 h-80 rounded-xl" />, // 20rem (320px)
    },
  ];


  return (
    <div className="text-gray-900 bg-white">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <section id="home" className="py-20 text-white bg-red-600">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to KFC</h1>
          <p className="mb-8 text-lg">Experience the taste of KFC - crispy, juicy, and delicious.</p>
          <a href="#menu" className="px-6 py-3 font-bold text-red-600 bg-white rounded-full hover:bg-red-100">
            Explore Menu
          </a>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold">Popular Menu Items</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {menuItems.map((item, index) => (
              <div key={index} className="p-6 text-center bg-white rounded-lg shadow-md">
                {item.image}
                <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <a href="#menu" className="inline-block px-6 py-3 mt-8 font-bold text-white bg-red-600 rounded-full hover:bg-red-700">
            View Full Menu
          </a>
        </div>
      </section>
    </div>
  )
}