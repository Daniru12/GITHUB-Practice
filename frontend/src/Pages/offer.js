import React, { useState } from "react";

export default function OffersPage() {
  const offers = [
    {
      name: "Sunday Special",
      description: "Enjoy a 20% discount on 8 PC Buckets this weekend!",
      imageUrl: "https://i.postimg.cc/264HHdqm/download.jpg", // Image for first offer
    },
    {
      name: "Buy 1 Get 1 Free",
      description: "Free dessert with any main course order!",
      imageUrl: "https://i.postimg.cc/ZnbLVGtF/download-1.jpg", // Image for second offer
    },
    {
      name: "Limited Time Offer",
      description: "Order before 6 PM and get a free drink!",
      imageUrl: "https://i.postimg.cc/ZnbLVGtF/download-1.jpg", // Image for third offer
    },
    {
      name: "Group Discount",
      description: "Groups of 4 or more get 10% off their bill!",
      imageUrl: "https://i.postimg.cc/ydBh8Md4/images.jpg", // Image for fourth offer
    },
    {
      name: "Movie Night Special",
      description: "Enjoy a 2 pilaf Rice with every movie ticket purchase!",
      imageUrl: "https://i.postimg.cc/1tQx53wm/images-3.jpg", // Image for fifth offer
    },
  ];

  const [popup, setPopup] = useState(null); // State for popup

  const handlePopup = (offer) => {
    setPopup(offer);
  };

  return (
    <div className="p-6 bg-rose-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Special Offers</h1>

      {/* Offers Layout */}
      <div className="flex justify-between gap-6">
        {/* Left Side Offers */}
        <div className="flex flex-col space-y-6 w-1/2">
          {offers.slice(0, 3).map((offer, index) => (
            <div
              key={index}
              className="flex items-center border rounded-lg shadow-md p-6"
              style={{
                backgroundColor: index % 2 === 0 ? "#FF4C4C" : "#FFEB8D", // Darker red and lighter yellow
                cursor: "pointer", // Make it look clickable
              }}
              onClick={() => handlePopup(offer)} // Trigger popup on click
            >
              {/* Offer Image */}
              <div className="flex-shrink-0">
                <img
                  src={offer.imageUrl}
                  alt={offer.name}
                  className={`object-cover rounded-lg ${
                    index < 2 ? "h-40 w-40" : "h-36 w-36"
                  }`} // Larger image size
                />
              </div>

              {/* Offer Details */}
              <div className="ml-6 flex-grow">
                <h2
                  className={`text-xl font-semibold ${
                    index % 2 === 0 ? "text-white" : "text-red-600"
                  }`}
                >
                  {offer.name}
                </h2> {/* Change text color to white for red background */}
                <p className="text-black text-base mt-1">{offer.description}</p> {/* Updated to black */}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Offers */}
        <div className="flex flex-col space-y-6 w-1/2">
          {offers.slice(3).map((offer, index) => {
            let backgroundColor = "#FFEB8D"; // Default background color for 4th offer
            if (index === 0) backgroundColor = "#FF4C4C"; // Red background for 5th offer
            return (
              <div
                key={index + 3} // Adjust index for unique key
                className="flex items-center border rounded-lg shadow-md p-6"
                style={{
                  backgroundColor: backgroundColor, // Conditional background color
                  cursor: "pointer", // Make it look clickable
                }}
                onClick={() => handlePopup(offer)} // Trigger popup on click
              >
                {/* Offer Image */}
                <div className="flex-shrink-0">
                  <img
                    src={offer.imageUrl}
                    alt={offer.name}
                    className={`object-cover rounded-lg ${
                      index < 2 ? "h-40 w-40" : "h-36 w-36"
                    }`} // Larger image size
                  />
                </div>

                {/* Offer Details */}
                <div className="ml-6 flex-grow">
                  <h2
                    className={`text-xl font-semibold ${
                      index === 0 ? "text-white" : "text-red-600"
                    }`}
                  >
                    {offer.name}
                  </h2> {/* Change text color to white for red background */}
                  <p className="text-black text-base mt-1">{offer.description}</p> {/* Updated to black */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold text-red-600">{popup.name}</h2> {/* Red text */}
            <p className="text-black text-base mt-2">{popup.description}</p> {/* Updated to black */}
            <button
              onClick={() => setPopup(null)} // Close the popup
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
