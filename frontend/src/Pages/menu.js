import React, { useState } from "react";
const menuItems = [
    {
        id: 1,
        name: "Chicken Biryani",
        description: "Aromatic rice mixed with tender chicken pieces, seasoned with traditional spices.",
        price: 12.99,
        category: "Rice & Biryani",
        image: "https://i.postimg.cc/pd2tHPDG/1.jpg", 
        ingredients: "Chicken, Basmati Rice, Spices, Yogurt, Onion, Garlic, Ginger",
        nutritionalFacts: "Calories: 600, Fat: 25g, Carbs: 80g, Protein: 35g",
        additionalNotes: "Served with raita and a side of pickle.",
        rating: 4.7,
    },
    {
      id: 2,
      name: "Zinger Burger",
      description: "A juicy, breaded chicken breast patty with a tangy sauce.",
      price: 7.99,
      category: "Burgers",
      image: "https://i.postimg.cc/zftD2y9S/2.jpg",
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
      image: "https://i.postimg.cc/7YnkQCzG/3.webp",
      ingredients: "Flour, Butter, Milk, Yeast",
      nutritionalFacts: "Calories: 200, Fat: 10g, Carbs: 25g, Protein: 5g",
      additionalNotes: "Served with butter and jam.",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Chicken Bacon Burger",
      description: "A crispy chicken patty topped with crispy bacon and cheese.",
      price: 8.99,
      category: "Burgers",
      image: "https://i.postimg.cc/TY9zJz8n/4.jpg",
      ingredients: "Chicken, Bacon, Cheese, Lettuce, Tomato, Pickle",
      nutritionalFacts: "Calories: 500, Fat: 28g, Carbs: 35g, Protein: 25g",
      additionalNotes: "Served with fries.",
      rating: 4.6,
    },
    {
      id: 5,
      name: "BBQ Chicken Burger",
      description: "A chicken patty smothered in smoky BBQ sauce, topped with cheese.",
      price: 8.49,
      category: "Burgers",
      image: "https://i.postimg.cc/C1g3hmCh/avacado.webp",
      ingredients: "Chicken, BBQ Sauce, Cheese, Lettuce, Onion",
      nutritionalFacts: "Calories: 480, Fat: 24g, Carbs: 42g, Protein: 22g",
      additionalNotes: "Served with fries.",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Classic Chicken Burger",
      description: "A simple and tasty chicken burger with lettuce, tomato, and mayo.",
      price: 6.99,
      category: "Burgers",
      image: "https://i.postimg.cc/2yjwkXHf/6.jpg",
      ingredients: "Chicken, Lettuce, Tomato, Mayo",
      nutritionalFacts: "Calories: 420, Fat: 20g, Carbs: 38g, Protein: 22g",
      additionalNotes: "Served with fries.",
      rating: 4.7,
    },
    {
        id: 7,
        name: "Mashed Potatoes with Gravy",
        description: "Creamy mashed potatoes topped with savory gravy.",
        price: 3.49,
        category: "Sides",
        image: "https://i.postimg.cc/4yn9FCLn/7.jpg",
        ingredients: "Potatoes, Gravy, Butter, Milk",
        nutritionalFacts: "Calories: 250, Fat: 12g, Carbs: 30g, Protein: 5g",
        additionalNotes: "A classic comfort food.",
        rating: 4.6,
      },
      {
        id: 8,
        name: "Coleslaw",
        description: "A fresh and tangy cabbage salad.",
        price: 2.99,
        category: "Sides",
        image: "https://i.postimg.cc/SRzKMm1L/8.jpg",
        ingredients: "Cabbage, Carrots, Mayonnaise, Vinegar",
        nutritionalFacts: "Calories: 150, Fat: 10g, Carbs: 15g, Protein: 2g",
        additionalNotes: "A perfect side for fried chicken.",
        rating: 4.5,
      },
      {
        id: 9,
        name: "Hush Puppies",
        description: "Deep-fried cornmeal balls, crispy on the outside and soft on the inside.",
        price: 3.29,
        category: "Sides",
        image: "https://i.postimg.cc/JzRB9Bd9/9.jpg",
        ingredients: "Cornmeal, Flour, Onion, Spices",
        nutritionalFacts: "Calories: 180, Fat: 10g, Carbs: 25g, Protein: 4g",
        additionalNotes: "Perfectly paired with fried chicken.",
        rating: 4.7,
      },
      {
        id: 10,
        name: "Corn on the Cob",
        description: "Grilled corn on the cob, seasoned with butter and salt.",
        price: 2.99,
        category: "Sides",
        image: "https://i.postimg.cc/g0QjkwNc/10.jpg",
        ingredients: "Corn, Butter, Salt",
        nutritionalFacts: "Calories: 120, Fat: 5g, Carbs: 20g, Protein: 3g",
        additionalNotes: "A simple and delicious side dish.",
        rating: 4.6,
      },
    
    {
      id: 11,
      name: "Cheesy BBQ Chicken Burger",
      description: "A BBQ chicken burger with extra cheese and smoky BBQ sauce.",
      price: 8.99,
      category: "Burgers",
      image: "https://i.postimg.cc/nc3HhjL8/11.jpg",
      ingredients: "Chicken, BBQ Sauce, Cheese, Lettuce, Onion",
      nutritionalFacts: "Calories: 520, Fat: 28g, Carbs: 40g, Protein: 28g",
      additionalNotes: "Served with fries.",
      rating: 4.7,
    },
    {
      id: 12,
      name: "Avocado Chicken Burger",
      description: "A chicken burger with creamy avocado, lettuce, and tomato.",
      price: 8.29,
      category: "Burgers",
      image: "https://i.postimg.cc/Pr75MvnW/av.webp",
      ingredients: "Chicken, Avocado, Lettuce, Tomato, Mayo",
      nutritionalFacts: "Calories: 470, Fat: 24g, Carbs: 38g, Protein: 25g",
      additionalNotes: "Served with fries.",
      rating: 4.6,
    },
    {
      id: 13,
      name: "Buffalo Chicken Burger",
      description: "A spicy buffalo chicken patty with blue cheese dressing.",
      price: 7.99,
      category: "Burgers",
      image: "https://i.postimg.cc/kGdKhtdh/13.jpg",
      ingredients: "Chicken, Buffalo Sauce, Blue Cheese, Lettuce, Tomato",
      nutritionalFacts: "Calories: 500, Fat: 26g, Carbs: 40g, Protein: 28g",
      additionalNotes: "Served with fries.",
      rating: 4.8,
    },
];

const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="relative p-6 text-center text-white bg-red-600">
        <h1 className="text-4xl font-bold">KFC Menu</h1>
        <p className="mt-2 text-lg">Discover our delicious menu items!</p>
        <div className="absolute flex items-center top-4 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h18c1.104 0 2 .896 2 2v14c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2V5c0-1.104.896-2 2-2z"
            />
          </svg>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 px-2 py-1 text-xs text-black bg-white rounded-full">
              {cart.length}
            </span>
          )}
        </div>
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
                      index < Math.round(item.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <button
                onClick={() => addToCart(item)}
                className="w-full py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
              >
                + Add to Cart
              </button>
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