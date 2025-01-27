import React, { useState } from "react";
import Radiobuttons from "./radio-buttons";
import SizeAttribute from "./SizeAttribute";
import Slider from "./Slider";

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "Perfume",
    "Trousers",
    "Shoe",
    "Handbag",
    "Hat",
    "Thermos",
  ];

  const handleCheckboxChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="p-6 h-[828px] w-[307px] bg-white border rounded-md mt-10 shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105">
      <h3 className="text-lg font-bold mb-4 transition-colors duration-300 hover:text-gray-700">
        Categories
      </h3>
      <div>
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center mb-2 cursor-pointer transition-colors duration-300 hover:text-gray-800"
          >
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="form-checkbox h-4 w-4 border-gray-300 text-black focus:ring-black transition-all duration-300"
            />
            <span className="ml-2 text-gray-600 transition-colors duration-300">
              {category}
            </span>
          </label>
        ))}
      </div>

      <Radiobuttons />
      <SizeAttribute />
      <Slider />
    </div>
  );
};

export default Categories;
