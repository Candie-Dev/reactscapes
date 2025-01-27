import React, { useState } from "react";

function Buttons() {
  const [selectedOptionSquare, setSelectedOptionSquare] = useState<string>("S");

  const handleSquareChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionSquare(event.target.value);
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="p-4 mt-5 mr-2">
     

<h4
  className="text-xs font-semibold text-gray-700 tracking-wider text-left transition-all duration-300 delay-100 hover:text-black hover:scale-105 hover:tracking-wide"
>
  SELECT SIZE
</h4>

      <div className="flex space-x-4">
        {sizes.map((size) => (
          <label key={size} className="relative flex items-center mt-5">
            <input
              type="radio"
              name="squareOptions"
              value={size}
              checked={selectedOptionSquare === size}
              onChange={handleSquareChange}
              className="absolute opacity-0 w-0 h-0"
            />
            <div
              className={`w-[35px] h-[35px] rounded flex justify-center items-center border-2 cursor-pointer transition-all duration-300 delay-100 ${
                selectedOptionSquare === size
                  ? "border-black text-black font-bold hover:scale-110 hover:shadow-md"
                  : "border-gray-300 text-gray-500 hover:scale-105 hover:border-gray-400"
              }`}
            >
              {size}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
