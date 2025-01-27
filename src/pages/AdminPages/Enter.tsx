import React from 'react';
import { useNavigate } from 'react-router-dom';

const Enter = () => {
  const navigate = useNavigate();

  // Navigate to the dashboard page when the login button is clicked
  const GoToDashboard = () => {
    navigate('/dashboard');  // Replace '/dashboard' with the actual path you want to navigate to
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="w-[384px] h-[453px] flex flex-col justify-center items-center py-[10px] px-8 border border-solid border-gray-300 rounded-lg bg-white">
        <div className="flex gap-5">
          <img src="/images/Vector3.png" alt="Logo" className="mb-4" />
          <h1 className="text-xl font-semibold">Admin</h1>
        </div>

        <div className="flex flex-col items-start mt-4">
          <label htmlFor="email" className="text-sm text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            placeholder=""
            className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>

        <div className="flex flex-col items-start mt-4">
          <label htmlFor="password" className="text-sm text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            placeholder=""
            className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>

        <button 
          onClick={GoToDashboard}
          className="mt-6 w-[318px] h-[44px] px-[24px] py-[12px] gap-[6px] text-xs rounded-md bg-neutral-900 text-white border flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default Enter;
