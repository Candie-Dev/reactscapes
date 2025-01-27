import SortBy from "./SortBy";
import Path from "../AdminInterface/Path";
import ReviewItems from "./ReviewItems";
import Appraisal from "./appraisal";
import Article from "./article";

const Reviews = () => {
  return (
    <div className="w-full h-auto mx-auto py-10  px-8 border-b border-gray-300 bg-white">
      {/* Section Layout */}
      <div className="flex flex-wrap gap-8">
        {/* Left Sidebar: Details and Reviews */}
        <div className="flex flex-col mt-16 w-full sm:w-[25%]">
          {/* Details Tab */}
          <div className="flex items-center gap-2 py-4 px-6 bg-white rounded-md shadow-md transition-transform duration-300 delay-200 hover:scale-105">
            <span className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            </span>
            <h2 className="text-xs font-semibold text-gray-800">Details</h2>
          </div>

          {/* Reviews Tab */}
          <div className="flex items-center gap-2 py-4 px-6 bg-white rounded-md shadow-md mt-4 transition-transform duration-300 delay-200 hover:scale-105">
            <span className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20l-8-8 8-8m8 16l-8-8"
                />
              </svg>
            </span>
            <h2 className="text-xs font-semibold text-gray-800">Reviews</h2>
          </div>
        </div>

        {/* Right Content: Detail Section */}
        <div className="flex-1 w-full sm:w-[70%] bg-white rounded-md shadow-md p-8 transition-transform duration-300 delay-200 hover:scale-105">
          <h1 className="text-xs font-bold mb-4 text-gray-800">Reviews</h1>
          <div>
            <div className="flex">
              <h5 className="text-2xl font-bold">4.2</h5>
              <h5 className="mt-2 ml-2 text-gray-700">— 54 Reviews</h5>
            </div>
            <button className="w-[107px] h-[44px] px-[24px] py-[12px] gap-[6px] mt-10 text-[10px] rounded-md bg-white text-black border flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg hover:text-white whitespace-nowrap">
              Write a review
            </button>
          </div>

          <SortBy />
          <Path />
          <ReviewItems />
          <Appraisal />
          <Article />
          <button className="w-[175px] h-[44px] ml-80 px-[24px] py-[12px] gap-[6px] text-[10px] mt-10 rounded-md bg-white text-black border flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg hover:text-white whitespace-nowrap">
            Load more reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
