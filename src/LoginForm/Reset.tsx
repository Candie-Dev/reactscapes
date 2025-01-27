const Reset = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      {/* New Password Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm  transition-all duration-300 delay-100 hover:text-blue-500">
          New Password
        </h5>
        <input
          type="password"
          placeholder="Enter your new password"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Confirm Password Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm  transition-all duration-300 delay-100 hover:text-blue-500">
          Confirm Password
        </h5>
        <input
          type="password"
          placeholder="Confirm your new password"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Reset Password Button */}
      <button
        className="w-full max-w-sm h-[44px] bg-[#0E1422] text-sm text-white rounded-md flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
      >
        Reset Password
      </button>
    </div>
  );
};

export default Reset;
