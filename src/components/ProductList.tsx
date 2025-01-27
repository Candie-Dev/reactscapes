import React, { useState } from 'react';
import Products from './ProductData';

const ProductList = () => {
  const [activeTab, setActiveTab] = useState('featured');

  // Mock data filtering for demonstration
  const featuredProducts = Products; // All products for the "Featured" tab
  const latestProducts = Products.filter((product) => product.id > 2); // Example condition for "Latest"

  return (
    <div className="w-full bg-[#F6F6F6] border-b-[1px] border-gray-300">
      {/* Outer Container with Consistent Padding */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-center transition-transform duration-300 hover:scale-105">
          Clothing Collection
        </h2>

        {/* Tabs for Switching */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab('featured')}
            className={`px-4 py-2 border-b-2 transition-all duration-300 ${
              activeTab === 'featured' ? 'border-black font-bold text-black' : 'border-transparent text-gray-500'
            } hover:text-black`}
          >
            Featured
          </button>
          <button
            onClick={() => setActiveTab('latest')}
            className={`px-4 py-2 border-b-2 transition-all duration-300 ${
              activeTab === 'latest' ? 'border-black font-bold text-black' : 'border-transparent text-gray-500'
            } hover:text-black`}
          >
            Latest
          </button>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(activeTab === 'featured' ? featuredProducts : latestProducts).map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 border rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4 rounded-md transition-transform duration-300 hover:scale-110"
              />
              <div className="flex flex-col items-center">
                <h3 className="text-xs font-semibold mb-2">{item.name}</h3>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-1 text-sm font-semibold rounded-full border ${
                      item.instock
                        ? 'bg-white text-black border-gray-300'
                        : 'bg-white text-black border-gray-300'
                    }`}
                  >
                    {item.instock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </span>
                  <p className="text-xs font-bold text-gray-700">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
