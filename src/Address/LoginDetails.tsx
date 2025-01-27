const LoginDetails = () => {
    return (
        <div>
            <h5 className="ml-10 mt-6 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Full name</h5>
            <input
                type="email"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border ml-10 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
            <h5 className="ml-10 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Email</h5>
            <input
                type="email"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border ml-10 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
            />
  
            <button
                 className="w-[150px] h-[44px] px-[24px] py-[12px] gap-[6px] mt-10 ml-10 rounded-[4px] bg-[#0E1422] text-sm text-white flex items-center justify-between transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
            >
                Save Changes
            </button>
        </div>
    )
  }
  
  export default LoginDetails; 