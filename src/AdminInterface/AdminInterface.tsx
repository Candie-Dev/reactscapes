import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminInterface = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="w-[212px] h-[326px] mt-24 ml-6">
      <div>
        <button
          onClick={() => handleNavigate('/dashboard')}
          className="bg-white text-black py-2 px-3 text-xs rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Vector (9).png" alt="" className="mr-2 h-4 w-4" />
          Dashboard
        </button>
      </div>
      <div>
        <button
          onClick={() => handleNavigate('/collection')}  // Navigate to /collection page
          className="bg-white text-black py-2 px-3 text-xs rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Vector (10).png" alt="" className="mr-2 h-4 w-4" />
          Products
        </button>
      </div>
      <div>
        <button
          onClick={() => handleNavigate('/Deals')}
          className="bg-white text-black py-2 px-3 text-xs rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Cart.svg" alt="" className="mr-2 h-4 w-4" />
          Orders
        </button>
      </div>
      <div>
        <button
          onClick={() => handleNavigate('/Shopper')}
          className="bg-white text-black py-2 px-3 text-xs rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Users.svg" alt="" className="mr-2 h-4 w-4" />
          Customers
        </button>
      </div>
      <div>
        <button
          onClick={() => handleNavigate('/FeedBack')}
          className="bg-white text-black py-2 px-3 text-xs rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Empty star.svg" alt="" className="mr-2 h-4 w-4" />
          Reviews
        </button>
      </div>
      <div>
        <button
          onClick={() => handleNavigate('/Parameters')}
          className="bg-white text-black py-2 px-3 text-xs rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Vector2.png" alt="" className="mr-2 h-4 w-4" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default AdminInterface;
