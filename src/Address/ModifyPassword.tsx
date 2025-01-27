const ModifyPassword = () => {
    return (
        <div>
            <h1 className="ml-10 font-bold mt-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Change Password</h1>
  
            <h5 className="ml-10 mt-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">New Password</h5>
            <input
                type="email"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border ml-10 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
  
            <h5 className="ml-10 text-sm transition-all mt-5 duration-300 delay-100 hover:text-blue-500">Confirm Password</h5>
            <input
                type="email"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border ml-10 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
  
            <button
                className="w-[150px] h-[44px] px-[24px] py-[12px] gap-[6px] mt-14 ml-10 rounded-[10px] bg-[#0E1422] text-sm text-white flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
            >
                Save Changes
            </button>
        </div>
    )
  }
  
  export default ModifyPassword;
  