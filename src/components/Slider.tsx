import React, { useState } from "react";

const Slider = () => {
  // Define the state for the slider value
  const [sliderValue, setSliderValue] = useState<number>(50); // Default value

  // Function to handle slider value change
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value)); // Update the slider value
  };

  return (
    <div className="p-6 w-64 bg-white border rounded-md mt-20 shadow-md transition-all duration-300 delay-100 hover:scale-105 hover:shadow-lg">
      <h3 className="text-lg font-bold mb-4 transition-all duration-300 delay-100 hover:text-blue-600">
        Select Price
      </h3>
      
      <div className="flex items-center">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-blue-500 rounded-full transition-all duration-300 delay-100 hover:bg-blue-600"
        />
        <span className="ml-4 text-gray-600 transition-all duration-300 delay-100 hover:text-blue-600">
          {sliderValue}
        </span>
      </div>
    </div>
  );
};

export default Slider;
