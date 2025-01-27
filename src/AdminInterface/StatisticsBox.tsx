import Scroller from "./Scroller";

const StatisticsBox = () => {
  return (
    <div className="w-[328px] h-[187px] bg-white mt-28 ml-5 p-4">
      
      <div className="flex">
      <div>  <h5 className="font-bold text-sm mt-3 ml-5">Orders</h5>
      <h5 className="text-gray-500 mt-3 text-xs ml-5">MONTHLY GOALS: 1,000</h5></div>
      <div> <h2 className="font-bold text-lg mt-5 ml-24">734</h2></div>
      
      </div>
    
     

      {/* Scroller inside the div */}
      <div className="mt-6 ml-3">
      <Scroller />
      </div>
    </div>
  );
};

export default StatisticsBox;
