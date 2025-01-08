import { useState } from 'react'

export default function KFCHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    {
      name: 'Original Recipe Chicken',
      description: 'Our signature crispy, juicy chicken.',
      image: <img src="https://kfcrestaurants.be/wp-content/uploads/2019/05/chick-n-share.jpg" alt="Original Recipe Chicken" className="rounded-xl w-16 h-16" />,
    },
    {
      name: 'Colonel Crispy Strips',
      description: 'Perfectly crispy chicken strips, perfect for sharing.',
      image: <img src="https://th.bing.com/th/id/OIP.44bzrFWIjfv6InzAjSB4uwHaFj?rs=1&pid=ImgDetMain" alt="Colonel Crispy Strips" className="rounded-xl w-16 h-16" />,
    },
    {
      name: 'KFC Bucket',
      description: 'A classic bucket of crispy, juicy chicken.',
      image: <img src="https://kfcrestaurants.be/wp-content/uploads/2019/05/chick-n-share.jpg" alt="KFC Bucket" className="rounded-xl w-16 h-16" />,
    },
  ];
  

  return (
    <div className="bg-white text-gray-900">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <section id="home" className="bg-red-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to KFC</h1>
          <p className="text-lg mb-8">Experience the taste of KFC - crispy, juicy, and delicious.</p>
          <a href="#menu" className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-100">
            Explore Menu
          </a>
        </div>
      </section>

      {/* Menu Highlight Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Menu Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                {item.image}
                <h3 className="text-xl font-bold mt-4">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
          <a href="#menu" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700">
            View Full Menu
          </a>
        </div>
      </section>
    </div>
  )
}