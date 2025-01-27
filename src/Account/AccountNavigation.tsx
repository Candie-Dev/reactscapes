import { useNavigate } from "react-router-dom";

const AccountNavigation = () => {
  const navigate = useNavigate();

  // Functions for navigation
  const goToOrders = () => {
    navigate('/Orders'); // Navigate to the Orders page
  };

  const goToWishlist = () => {
    navigate('/Wantlist'); // Navigate to the Wishlist page
  };

  const goToAddress = () => {
    navigate('/Address'); // Navigate to the Address page
  };

  const goToPassword = () => {
    navigate('/Password'); // Navigate to the Password page
  };

  const goToAccountDetail = () => {
    navigate('/AccountDetail'); // Navigate to the Account Detail page
  };

  const logout = () => {
    // Handle logout logic here
    navigate('/EmptyState'); // Navigate to the login page after logout
  };

  return (
    <div className="w-[212px] h-[326px] mt-24 ml-6 p-4"> {/* Added padding (p-4) */}
      <div>
        <button
          onClick={goToOrders} // Navigate to Orders page
          className="bg-white text-black py-2 px-3 text-sm rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Vector (7).png" alt="" className="mr-2 h-5 w-5" />
          Orders
        </button>
      </div>
      <div>
        <button
          onClick={goToWishlist} // Navigate to Wishlist page
          className="bg-white text-black py-2 px-3 text-sm rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Heart.png" alt="" className="mr-2 h-5 w-5" />
          Wishlist
        </button>
      </div>
      <div>
        <button
          onClick={goToAddress} // Navigate to Address page
          className="bg-white text-black py-2 px-3 text-sm rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Delivery.png" alt="" className="mr-2 h-5 w-5" />
          Address
        </button>
      </div>
      <div>
        <button
          onClick={goToPassword} // Navigate to Password page
          className="bg-white text-black py-2 px-3 text-sm rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Group.png" alt="" className="mr-2 h-5 w-5" />
          Password
        </button>
      </div>
      <div>
        <button
          onClick={goToAccountDetail} // Navigate to Account Detail page
          className="bg-white text-black py-2 px-3 text-sm rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Vector (8).png" alt="" className="mr-2 h-5 w-5" />
          Account Detail
        </button>
      </div>
      <div>
        <button
          onClick={logout} // Handle logout
          className="bg-white text-black py-2 px-3 text-sm rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 flex items-center justify-start w-full h-[50px]"
        >
          <img src="/images/Logout.png" alt="" className="mr-2 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AccountNavigation;
