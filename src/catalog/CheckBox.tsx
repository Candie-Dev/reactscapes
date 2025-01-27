import { useNavigate } from "react-router-dom";

const Checkbox = () => {
  const navigate = useNavigate();

  const goToSecureCheckout = () => {
    navigate('/SecureCheckout'); // Navigate to SecureCheckout page
  };

  return (
    <div className="h-[430px] w-[341px] border border-gray-300 mt-20 p-8 rounded-lg transition-all duration-300 delay-100 hover:bg-[#F9F9F9]">
      <h5 className="font-bold transition-all duration-300 delay-100 hover:text-blue-500">Order Summary</h5>

      <div className="flex justify-between mt-5">
        <h6 className="transition-all duration-300 delay-100 hover:text-blue-500">Subtotal</h6>
        <h6 className="transition-all duration-300 delay-100 hover:text-blue-500">$ 90.00</h6>
      </div>

      <div className="flex justify-between mt-5">
        <h6 className="transition-all duration-300 delay-100 hover:text-blue-500">Shipping:</h6>
        <h6 className="transition-all duration-300 delay-100 hover:text-blue-500">Free</h6>
      </div>

      <div className="flex justify-between mt-5">
        <h6 className="transition-all duration-300 delay-100 hover:text-blue-500">Tax:</h6>
        <h6 className="transition-all duration-300 delay-100 hover:text-blue-500">$ 3.00</h6>
      </div>

      <div className="border border-gray-300 mt-10"></div>

      <div className="flex justify-between mt-5">
        <h5 className="transition-all duration-300 delay-100 hover:text-blue-500">Total</h5>
        <h5 className="transition-all duration-300 delay-100 hover:text-blue-500">$ 100.00</h5>
      </div>

      <button 
        onClick={goToSecureCheckout} // Correct function call
        className="w-full h-[44px] px-[24px] py-[12px] gap-[6px] rounded-md bg-[#0E1422] text-white flex items-center justify-center mt-5 transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
      >
        Checkout
      </button>

      <h6 className="mt-5 text-center text-gray-500 underline transition-all duration-300 delay-100 hover:text-blue-500">
        Continue Shopping
      </h6>
    </div>
  );
};

export default Checkbox;
