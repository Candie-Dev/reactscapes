import React, { useState } from "react";

const Radiobuttons = () => {
  // Define the selectedOption state to track the selected radio button
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Define handleChange function to update the selectedOption state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="p-4 mr-32 mt-20">
      <h4 className="text-xs font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        COLOR
      </h4>

      <div className="flex space-x-6 mt-5">
        <label className="flex items-center space-x-2 transition-all duration-300 delay-100 hover:scale-105">
          <input
            type="radio"
            name="options"
            value="Option 1"
            checked={selectedOption === "Option 1"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 bg-blue-500 border-blue-500 checked:bg-blue-500 checked:ring-2 checked:ring-blue-300 focus:outline-none cursor-pointer transition-all duration-300 delay-100 hover:ring-2 hover:ring-blue-300"
          />
        </label>

        <label className="flex items-center space-x-2 transition-all duration-300 delay-100 hover:scale-105">
          <input
            type="radio"
            name="options"
            value="Option 2"
            checked={selectedOption === "Option 2"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 border-orange-500 bg-orange-500 checked:bg-orange-500 checked:ring-2 checked:ring-red-300 focus:outline-none cursor-pointer transition-all duration-300 delay-100 hover:ring-2 hover:ring-orange-300"
          />
        </label>

        <label className="flex items-center space-x-2 transition-all duration-300 delay-100 hover:scale-105">
          <input
            type="radio"
            name="options"
            value="Option 3"
            checked={selectedOption === "Option 3"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 bg-green-500 border-green-500 checked:bg-green-500 checked:ring-2 checked:ring-green-300 focus:outline-none cursor-pointer transition-all duration-300 delay-100 hover:ring-2 hover:ring-green-300"
          />
        </label>

        <label className="flex items-center space-x-2 transition-all duration-300 delay-100 hover:scale-105">
          <input
            type="radio"
            name="options"
            value="Option 3"
            checked={selectedOption === "Option 3"}
            onChange={handleChange}
            className="appearance-none w-6 h-6 rounded-full border-2 bg-green-500 border-green-500 checked:bg-green-500 checked:ring-2 checked:ring-green-300 focus:outline-none cursor-pointer transition-all duration-300 delay-100 hover:ring-2 hover:ring-green-300"
          />
        </label>
      </div>
    </div>
  );
};

export default Radiobuttons;
