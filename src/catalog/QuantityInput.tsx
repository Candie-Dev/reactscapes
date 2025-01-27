import React, { useState } from "react";

function QuantityInput() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      
      <div className="flex items-center w-[628px] h-[80px] space-x-4">
        {/* Image Section */}
        <img src="/images/image4.png" alt="Cart Item" className="w-16 h-16" />
  
        {/* Content Section */}
        <div className="flex flex-col">
          <h5>Essential Neutrals</h5>
          <div className="flex gap-5 items-center">
            <h5>Color:</h5>
            <div className="w-6 h-6 bg-blue-700 rounded-full"></div>
            <h5>—</h5>
            <h5>Size: M</h5>
           
          </div>
  
          {/* Price or Additional Information */}
          
        </div>
      </div>
      
      
      
      {/* Price */}




      <h1 className="font-bold">$22.00</h1>

      {/* Increment/Decrement Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-white text-black rounded-md focus:outline-none"
        >
          -
        </button>
        <div className="text-xl text-gray-700">{count}</div>
        <button
          onClick={increment}
          className="px-4 py-2 bg-white text-black rounded-md focus:outline-none"
        >
          +
        </button>
      </div>

      {/* Additional Button (X button) */}
      <button className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">
        <img src="/images/X.png" alt="Remove" />
      </button>
    </div>
  );
}

export default QuantityInput;
