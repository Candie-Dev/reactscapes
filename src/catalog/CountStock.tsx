const CountStock = () => {
    return (
      <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md">
        {/* Image Section */}
        <div>
          <img
            src="/images/Badge.png"
            alt="Badge"
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
  
        {/* Stock Section */}
        <div>
          <h1 className="border-solid border border-gray-500 rounded-[20px] text-xs px-4 py-1 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
            Stock
          </h1>
        </div>
      </div>
    );
  };
  
  export default CountStock;
  