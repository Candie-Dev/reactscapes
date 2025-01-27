const Section = () => {
  return (
    <div className="w-full h-auto mx-auto py-10 px-8 border-b border-gray-300 bg-[#F6F6F6]">
      {/* Section Layout */}
      <div className="flex flex-wrap gap-8">
        {/* Left Sidebar: Details and Reviews */}
        <div className="flex flex-col w-full sm:w-[25%]">
          {/* Details Tab */}
          <div className="flex items-center gap-2 py-4 px-6 bg-white rounded-md shadow-md transition-transform duration-300 delay-200 hover:scale-105">
            <span className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </span>
            <h2 className="text-xs font-semibold text-gray-800">Details</h2>
          </div>

          {/* Reviews Tab */}
          <div className="flex items-center gap-2 py-4 px-6 bg-white rounded-md shadow-md mt-4 transition-transform duration-300 delay-200 hover:scale-105">
            <span className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20l-8-8 8-8m8 16l-8-8"
                />
              </svg>
            </span>
            <h2 className="text-xs font-semibold text-gray-800">Reviews</h2>
          </div>
        </div>

        {/* Right Content: Detail Section */}
        <div className="flex-1 w-full sm:w-[70%] bg-white rounded-md shadow-md p-6 transition-transform duration-300 delay-200 hover:scale-105">
          <h1 className="text-xs font-bold mb-4 text-gray-800">Detail</h1>
          <p className="text-gray-700 text-xs leading-relaxed mb-6">
            Elevate your everyday style with our Men's Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection. The classic black color never goes out of style. Whether you're dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.
          </p>
          <ul className="list-none space-y-2 text-xs">
            <li className="flex items-center px-4 py-2 bg-gray-50 rounded-md">
              <span className="text-green-500 mr-2">✔</span>
              Premium Quality
            </li>
            <li className="flex items-center px-4 py-2 bg-gray-50 rounded-md">
              <span className="text-green-500 mr-2">✔</span>
              Versatile Wardrobe Staple
            </li>
            <li className="flex items-center px-4 py-2 bg-gray-50 rounded-md">
              <span className="text-green-500 mr-2">✔</span>
              Available in Various Sizes
            </li>
            <li className="flex items-center px-4 py-2 bg-gray-50 rounded-md">
              <span className="text-green-500 mr-2">✔</span>
              Tailored Fit
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
