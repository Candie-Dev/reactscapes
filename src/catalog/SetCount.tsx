import React, { useState } from "react";

function IncrementDecrementMenu() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Prevent going below 0
    }
  };

  return (
    <div className="p-4 mr-32">
      <h1 className="text-xs font-semibold text-gray-700 tracking-wider text-left transition-all duration-300 delay-100 hover:text-blue-600">
        QUANTITY
      </h1>

      <div className="flex items-center space-x-4 mt-5">
        {/* Decrement Button with a minus */}
        <button
          onClick={decrement}
          className="px-4 py-2 bg-white text-black rounded-md focus:outline-none transition-all duration-300 delay-100 hover:bg-gray-100 hover:scale-105"
        >
          -
        </button>

        {/* Display the count */}
        <div className="text-xl text-gray-700 transition-all duration-300 delay-100 hover:text-blue-600">
          {count}
        </div>

        {/* Increment Button with a plus */}
        <button
          onClick={increment}
          className="px-4 py-2 bg-white text-black rounded-md focus:outline-none transition-all duration-300 delay-100 hover:bg-gray-100 hover:scale-105"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default IncrementDecrementMenu;
