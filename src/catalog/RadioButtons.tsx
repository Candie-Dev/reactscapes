


import React, { useState } from "react";

function RadioButtonGroup() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4 mr-32 mt-5">
      

<h4
  className="text-xs font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 delay-100 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
>
  AVAILABLE COLORS
</h4>


      <div className="flex space-x-6 mt-5">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="options"
            value="Option 1"
            checked={selectedOption === "Option 1"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 bg-blue-500 border-blue-500 checked:bg-blue-500 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-blue-300 checked:ring-4 checked:ring-blue-500"
          />
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="options"
            value="Option 2"
            checked={selectedOption === "Option 2"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 bg-orange-500 border-orange-500 checked:bg-orange-500 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-orange-300 checked:ring-4 checked:ring-orange-500"
          />
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="options"
            value="Option 3"
            checked={selectedOption === "Option 3"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 bg-green-500 border-green-500 checked:bg-green-500 focus:outline-none cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-green-300 checked:ring-4 checked:ring-green-500"
          />
        </label>
      </div>
    </div>
  );
}

export default RadioButtonGroup;
