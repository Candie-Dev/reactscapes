const DeliveryForm = () => {
    return (
      <div className="p-4"> {/* Added inside padding to the entire form */}
        <h5 className="mt-10 ml-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Street Address</h5>
        <input
          type="email"
          placeholder="2436 Naples Avenue"
          className="h-[45px] w-[534px] ml-10 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
  
        <div className="flex">
          <div>
            <h5 className="mt-5 ml-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">City</h5>
            <input
              type="email"
              placeholder="Panama City"
              className="h-[45px] w-full p-2 border ml-10 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
          </div>
  
          <div className="ml-14">
            <h5 className="mt-5 ml-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">State</h5>
            <input
              type="email"
              placeholder="FL"
              className="h-[45px] w-full p-2 ml-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
          </div>
        </div>
  
        <div className="flex">
          <div>
            <h5 className="mt-5 ml-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Zip Code</h5>
            <input
              type="email"
              placeholder="32405"
              className="h-[45px] w-full ml-10 p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
          </div>
  
          <div className="ml-10">
            <h5 className="mt-5 ml-14 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Country</h5>
            <input
              type="email"
              placeholder="United States"
              className="h-[45px] w-[241px] p-2 border ml-14 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
          </div>
        </div>
  
        <button
          className="w-[284px] h-[44px] px-[24px] py-[12px] gap-[6px] mt-10 ml-10 rounded-[10px] bg-[#0E1422] text-sm text-white flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
        >
          Save Changes
        </button>
      </div>
    );
  };
  
  export default DeliveryForm;