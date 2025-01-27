const AccountRecovery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      {/* Instructions */}
      <p className="text-center text-sm text-gray-600 transition-all duration-300 delay-100 hover:text-blue-500">
        Please enter the email address associated with
        <p className="text-center text-sm text-gray-600 transition-all duration-300 delay-100 hover:text-blue-500">
          your account. We'll promptly send you a link to
        </p>
        <p className="text-center text-sm text-gray-600 transition-all duration-300 delay-100 hover:text-blue-500">
          reset your password.
        </p>
      </p>

      {/* Email Input */}
      <div className="w-full max-w-sm">
        <h5 className="mb-2 text-sm transition-all duration-300 delay-100 hover:text-blue-500">Email</h5>
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        className="w-full max-w-sm h-[44px] bg-[#0E1422] text-sm text-white rounded-md flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
      >
        Send Reset Link
      </button>
    </div>
  );
};

export default AccountRecovery;
