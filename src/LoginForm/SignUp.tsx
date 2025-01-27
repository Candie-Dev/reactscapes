import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // Navigation functions
  const navigateToOrders = () => {
    navigate('/Orders');
  };

  const navigateToForgotPassword = () => {
    navigate('/ForgotPassword');
  };

  const navigateToJoinNow = () => {
    navigate('/JoinNow');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 mt-10 px-4">
      {/* Social Login Button */}
      <button className="flex items-center justify-center transition-all duration-300 delay-100 hover:scale-105 hover:shadow-lg">
        <img
          src="/images/Social Login Button.png"
          alt="Social Login"
          className="transition-all duration-300 delay-100 hover:opacity-90"
        />
      </button>

      {/* Divider with "OR" */}
      <div className="flex items-center justify-between w-full max-w-sm">
        <div className="border-t border-gray-300 flex-grow transition-all duration-300 delay-100 hover:border-blue-600"></div>
        <h5 className="mx-4 text-sm text-gray-600 transition-all duration-300 delay-100 hover:text-blue-600">
          OR
        </h5>
        <div className="border-t border-gray-300 flex-grow transition-all duration-300 delay-100 hover:border-blue-600"></div>
      </div>

      {/* Email Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">
          Email
        </h5>
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Password Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">
          Password
        </h5>
        <input
          type="password"
          placeholder="Enter your password"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Forgot Password Link */}
      <h6
        onClick={navigateToForgotPassword}
        className="text-sm text-blue-500 cursor-pointer hover:underline transition-all duration-300 delay-100"
      >
        Forgot Password?
      </h6>

      {/* Submit Button */}
      <button
        onClick={navigateToOrders}
        className="w-full max-w-sm h-[44px] px-[24px] py-[12px] bg-[#0E1422] text-sm text-white rounded-md flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
      >
        Login
      </button>

      {/* Sign-up Link */}
      <h5 className="text-sm">
        Don't have an account?{" "}
        <span
          onClick={navigateToJoinNow}
          className="text-blue-500 cursor-pointer hover:underline transition-all duration-300 delay-100"
        >
          Sign up
        </span>
      </h5>
    </div>
  );
};

export default SignUp;
