import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const goToClothingCatalog = () => {
    navigate('/ClothingCatalog');
  };

  return (
    <div className="w-full bg-[#F6F6F6] border-b-[1px] border-gray-300">
      <div className="max-w-7xl mx-auto px-8 py-8 flex justify-between items-center">
        {/* Text and Button Section */}
        <div>
          <h1 className="font-semibold text-[32px] leading-[38.73px] tracking-[-0.035em] text-left underline-offset-4 decoration-none mb-2 
            transition-all duration-300 ease-in-out hover:text-[#0E1422] hover:scale-105 hover:tracking-normal hover:shadow-lg">
            Fresh Arrivals Online
          </h1>

          <p className="mb-8 text-gray-500 
            transition-all duration-300 ease-in-out hover:text-gray-700 hover:scale-105 hover:tracking-normal hover:shadow-md">
            Discover Our Newest Collection Today.
          </p>

          <button 
            onClick={goToClothingCatalog} 
            className="w-[183px] h-[44px] px-[24px] py-[12px] gap-[6px] rounded-[4px] bg-[#0E1422] text-white flex items-center justify-between transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
          >
            View Collection
            <img src="/images/Arrow Right.png" alt="Arrow" className="w-4 h-4 mt-1" />
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-[482px] h-[455px]">
          <img 
            src="/images/Burst-pucker.png" 
            alt="" 
            className="absolute left-[150px] top-[90px]"
          />
          <img 
            src="/images/Ellipse.png" 
            alt="" 
            className="absolute w-[340px] h-[340px] mt-[95px] left-[117px] object-cover rounded-full opacity-60" 
          />
          <img 
            src="/images/Hero Image.png" 
            alt="" 
            className="absolute w-[255px] h-[382px] top-[65px] left-[207px] object-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
