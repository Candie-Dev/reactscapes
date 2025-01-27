import { useNavigate } from "react-router-dom";

const CategoriesCTA = () => {
  const navigate = useNavigate();

  const GoToListing = () => {
    navigate('/Listing');
  };

  return (
    <div className="w-full bg-[#F6F6F6] border-b-[1px] border-gray-300">
      {/* Outer Container with Consistent Padding */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        {/* Text Section */}
        <div>
          <h1 className="font-semibold text-[32px] leading-[38.73px] tracking-[-0.035em] text-left underline-offset-4 decoration-none mb-4 transition-transform duration-300 hover:scale-105">
            Browse Our Fashion Paradise!
          </h1>
          <p className="mb-6 text-gray-500 transition-transform duration-300 hover:scale-105">
            Step into a world of style and explore our diverse collection of clothing categories.
          </p>
          <button
            onClick={GoToListing}
            className="w-[183px] h-[44px] px-[24px] py-[12px] gap-[6px] rounded-[4px] bg-[#0E1422] text-white flex items-center justify-between transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
          >
            Start Browsing
            <img src="/images/Arrow Right.png" alt="Arrow" className="w-4 h-4 mt-1" />
          </button>
        </div>

        {/* Image Section */}
        <img src="/images/Category Image.png" className="h-60 object-contain transition-transform duration-300 hover:scale-105" alt="Fashion Categories" />
      </div>
    </div>
  );
};

export default CategoriesCTA;
