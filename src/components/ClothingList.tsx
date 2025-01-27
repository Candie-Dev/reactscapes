import React from "react";
import clothes from "./clothesData"; // Assuming your data is imported here

const ClothingList = () => {
  return (
    <div className="w-full bg-white">
      {/* Outer container with consistent padding */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Section Heading */}
        <h6 className="text-center text-gray-600 tracking-wide uppercase transition-transform duration-300 delay-100 hover:scale-110 hover:text-gray-800">
          SHOP NOW
        </h6>
        <h2 className="text-3xl font-bold mt-5 mb-8 text-center transition-transform duration-300 delay-100 hover:scale-105 hover:text-gray-900">
          Best Selling
        </h2>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clothes.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 border rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-contain mb-4 rounded-md"
              />
              <h3 className="text-sm font-medium text-center mb-2">{item.name}</h3>
              <div className="flex flex-row items-center justify-center gap-4">
                <span
                  className={`px-4 py-1 text-sm font-semibold rounded-full border ${
                    item.instock
                      ? "bg-white text-black border-gray-300"
                      : "bg-gray-200 text-gray-500 border-gray-300"
                  }`}
                >
                  {item.instock ? "IN STOCK" : "OUT OF STOCK"}
                </span>
                <p className="text-sm font-bold text-gray-700">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClothingList;
