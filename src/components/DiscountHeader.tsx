import React from 'react';

const DiscountHeader = () => {
  return (
    <header className="w-full h-[40px] flex justify-center items-center mx-auto bg-[#0E1422]">
      <h1 className="text-white text-sm md:text-base lg:text-xs
        transition-all duration-300 delay-100 ease-in-out hover:text-[#F6F6F6] hover:scale-105 hover:tracking-normal">
        Get 25% OFF on your first order. Order Now
      </h1> {/* Added transition, hover effects and responsive text size */}
    </header>
  );
};

export default DiscountHeader;
