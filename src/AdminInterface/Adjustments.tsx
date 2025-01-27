const Adjusments = () => {
    return (
      <div className="w-[1068px] h-[588px] mt-32 ml-12 bg-white p-6 rounded-lg">
        <h1 className="text-xs">Settings</h1>
  
        <div className="border-t border-gray-300 pt-1 mt-10 transition-all duration-300 delay-100 hover:border-blue-600"></div> {/* Adds a thin top border */}
  
        <h5 className="mt-10 text-xs">Site Name</h5>
        <input
          id="site-name"
          type="text"
          placeholder=""
          className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
  
        <h5 className="mt-3 text-xs">Support Email</h5>
        <input
          id="support-email"
          type="email"
          placeholder=""
          className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
  
        <h5 className="mt-3 text-xs">Monthly Order Goal</h5>
        <input
          id="order-goal"
          type="number"
          placeholder=""
          className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
  
        <button
          className="w-[144px] h-[44px] px-[24px] py-[12px] gap-[6px] rounded-md mt-28 bg-[#0E1422] text-xs text-white flex items-center justify-between transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
        >
          Save Changes
        </button>
      </div>
    );
  }
  
  export default Adjusments;
  