const TotalSales = () => {
    return (
      <div className="w-[328px] h-[187px] ml-24 bg-white mt-28 rounded-lg shadow-sm">
        <div className="flex justify-between">
          <div>
            <h5 className="font-bold mt-8 ml-10 text-sm">Total Sales</h5>
            <h5 className="text-gray-600 mt-3 ml-10 text-xs">THIS MONTH</h5>
          </div>
  
          <div>
            <h2 className="font-bold text-base mt-11 mr-10">$ 4,235</h2>
          </div>
        </div>
  
        <div className="mt-6 ml-6">
          <img src="/images/Vector (11).png" alt="Sales Chart" />
        </div>
      </div>
    );
  };
  
  export default TotalSales;
  