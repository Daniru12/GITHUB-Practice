import { useState } from 'react'

export default function KFCHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    {
      name: 'Original Recipe Chicken',
      description: 'Our signature crispy, juicy chicken.',
      image: <img src="https://i.postimg.cc/2yMz5KHR/kfc-fried-chicken-62e0ca.webp" alt="Original Recipe Chicken" className="w-80 h-80 rounded-xl" />, // 20rem (320px)
    },
    {
      name: 'Colonel Crispy Strips',
      description: 'Perfectly crispy chicken strips, perfect for sharing.',
      image: <img src="https://i.postimg.cc/nVyrpXNs/crunchy-chicken-100-breast-meat-strips-kfc-styled.jpg" alt="Colonel Crispy Strips" className="w-80 h-80 rounded-xl" />, // 20rem (320px)
    },
    {
      name: 'KFC Bucket',
      description: 'A classic bucket of crispy, juicy chicken.',
      image: <img src="https://i.postimg.cc/QC0fg22w/kfc-periyar-nagar-jawahar-nagar-chennai-fast-food-weiayifzt2.avif" alt="KFC Bucket" className="w-80 h-80 rounded-xl" />, // 20rem (320px)
    },
  ];

  return (
    <div className="text-gray-900 bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="py-20 text-white bg-center bg-cover"
        style={{
          backgroundImage: "url('https://i.postimg.cc/rsb1gqpd/home-slider-3.jpg')",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold"><br/><br/></h1>
          <p className="mb-8 text-lg"><br/></p>
          <a href="/menu" className="px-6 py-3 font-bold text-red-700 bg-white rounded-full hover:bg-red-100">
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
          <a href="/menu" className="inline-block px-6 py-3 mt-8 font-bold text-white bg-red-600 rounded-full hover:bg-red-700">
            View Full Menu
          </a>
        </div>
      </section>
    </div>
  )
}