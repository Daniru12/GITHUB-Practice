import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    title: "CHRISTMAS CHICKEN COMBO",
    description: "06 H&C Chicken 06 hot drumlets 08 chicken nuggets",
    price: 3990,
    image: "https://i.postimg.cc/264HHdqm/download.jpg",
  },
  {
    id: 2,
    title: "NEW ULTIMATE BURGER COMBO",
    description: "1 crispy fillet burger & H&C Drumsticks",
    price: 3590,
    image: "https://i.postimg.cc/ZnbLVGtF/download-1.jpg",
  },
  {
    id: 3,
    title: "CHRISTMAS RICE COMBO",
    description: "4pc HC chicken 4 hot drumlets 4 rice pilaf, 8 chicken nuggets",
    price: 3990,
    image: "https://i.postimg.cc/ZnbLVGtF/download-1.jpg",
  },
  {
    id: 4,
    title: "CHRISTMAS BURGER COMBO",
    description: "4 zinger burgers 6 chicken nuggets",
    price: 3990,
    image: "https://i.postimg.cc/ydBh8Md4/images.jpg",
  },
  {
    id: 5,
    title: "CHRISTMAS PARTY COMBO",
    description: "15 Hot drumlets 09 crispy bites 09 chicken nuggets",
    price: 3990,
    image: "https://i.postimg.cc/1tQx53wm/images-3.jpg",
  },
];

export default function OffersPage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#B5121B]">KFC Christmas Specials</h1>
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#B5121B] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="text-xl font-bold text-[#B5121B] mt-2">Rs. {product.price.toLocaleString()}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-[#B5121B] text-white py-2 px-6 rounded mt-4 hover:bg-[#8f0e16] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-up p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <p className="text-gray-600">Total: Rs. {getCartTotal().toLocaleString()}</p>
                <p className="text-sm text-gray-500">Delivery Charge: Rs. 0</p>
                <p className="text-sm text-gray-500">Packing Charge: Rs. 0</p>
              </div>
              <button className="bg-[#B5121B] text-white py-2 px-6 rounded hover:bg-[#8f0e16] transition-colors">
                Checkout Rs. {getCartTotal().toLocaleString()}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
