import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const GoToLogin = () => {
    navigate("/Login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4">
      {/* Social Login Button */}
      <button className="flex items-center justify-center transition-all duration-300 delay-100 hover:scale-105">
        <img src="/images/Social Login Button.png" alt="Social Login" />
      </button>

      {/* Divider with "OR" */}
      <div className="flex items-center justify-between w-full max-w-sm">
        <div className="border-t border-gray-300 flex-grow transition-all duration-300 delay-100 hover:border-blue-600"></div>
        <h5 className="mx-4 text-sm text-gray-600 transition-all duration-300 delay-100 hover:text-blue-500">
          OR
        </h5>
        <div className="border-t border-gray-300 flex-grow transition-all duration-300 delay-100 hover:border-blue-600"></div>
      </div>

      {/* Name Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Name</h5>
        <input
          type="text"
          placeholder="Enter your name"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Email Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Email</h5>
        <input
          type="email"
          placeholder="Enter your email"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Password Input */}
      <div className="w-full max-w-sm">
        <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Password</h5>
        <input
          type="password"
          placeholder="Enter your password"
          className="h-[45px] w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* Terms and Privacy */}
      <p className="text-xs text-center text-gray-600 px-4 transition-all duration-300 delay-100 hover:text-blue-500">
        By creating an account, you agree with our{" "}
        <span className="text-blue-500 cursor-pointer hover:underline">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-blue-500 cursor-pointer hover:underline">
          Privacy Policy
        </span>.
      </p>

      {/* Sign Up Button */}
      <button
        className="w-full max-w-sm h-[44px] bg-[#0E1422] text-xs text-white rounded-md flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
      >
        Sign Up
      </button>

      {/* Log In Link */}
      <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">
        Already have an account?{" "}
        <span
          onClick={GoToLogin}
          className="text-blue-500 cursor-pointer hover:underline"
        >
          Log in
        </span>
      </h5>
    </div>
  );
};

export default Register;
