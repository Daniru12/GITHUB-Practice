import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    name: "Original Recipe Chicken",
    description: "Crispy, juicy, and finger-lickin' good.",
    price: 9.99,
    category: "Chicken",
    image: "https://kfckosova.com/wp-content/uploads/2020/05/6.24wings-missing-compressor.png",
    ingredients: "Chicken, Breading, Spices",
    nutritionalFacts: "Calories: 320, Fat: 15g, Carbs: 20g, Protein: 30g",
    additionalNotes: "Served with coleslaw and hush puppies.",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Zinger Burger",
    description: "A juicy, breaded chicken breast patty with a tangy sauce.",
    price: 7.99,
    category: "Burgers",
    image: "https://th.bing.com/th/id/OIP.jBl_KC6SKJEIjzp6s3NU4AHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
    ingredients: "Chicken, Breading, Sauce, Lettuce, Tomato, Pickle",
    nutritionalFacts: "Calories: 450, Fat: 25g, Carbs: 30g, Protein: 20g",
    additionalNotes: "Served with fries.",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Colonel’s Signature Biscuit",
    description: "A fluffy, buttery biscuit.",
    price: 2.99,
    category: "Sides",
    image: "https://th.bing.com/th/id/OIP.djumnf4CAN620BZx9l3kjwHaFj?rs=1&pid=ImgDetMain",
    ingredients: "Flour, Butter, Milk, Yeast",
    nutritionalFacts: "Calories: 200, Fat: 10g, Carbs: 25g, Protein: 5g",
    additionalNotes: "Served with butter and jam.",
    rating: 4.8,
  },
];

const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-6 text-center text-white bg-red-600">
        <h1 className="text-4xl font-bold">KFC Menu</h1>
        <p className="mt-2 text-lg">Discover our delicious menu items!</p>
      </header>

      <div className="container px-4 py-6 mx-auto">
        <div className="mb-6">
          <select
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm md:w-1/4 focus:ring focus:ring-red-400"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h2 className="mt-4 text-xl font-bold text-center">{item.name}</h2>
              <p className="mt-2 text-center text-gray-600">{item.description}</p>
              <p className="mt-4 font-bold text-center text-red-600">
                ${item.price.toFixed(2)}
              </p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`h-4 w-4 inline-block ${
                      index < Math.round(item.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="p-4 text-center text-gray-400 bg-gray-800">
        <p>© 2025 KFC. All rights reserved.</p>
      </footer>
    </div>
  );
}
