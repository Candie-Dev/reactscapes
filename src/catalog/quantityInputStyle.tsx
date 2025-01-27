import React, { useState } from "react";

type QuantityInputProps = {
  initialCount?: number; // Optional initial count
  onChange?: (count: number) => void; // Callback when count changes
};

function QuantityInput({ initialCount = 0, onChange }: QuantityInputProps) {
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    if (onChange) onChange(newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      if (onChange) onChange(newCount);
    }
  };

  return (
    <div className="flex items-center mt-5 gap-2 ml-10">
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
    
  );
}

export default QuantityInput;
