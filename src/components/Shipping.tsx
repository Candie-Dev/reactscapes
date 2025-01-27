import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  const GoToPaymentUnSuccessful = () => {
    navigate('/PaymentUnSuccessful');
  };

  return (
    <section className="p-5">
      <div className="flex justify-between mt-5 transition-all duration-300 delay-100 hover:scale-105">
        <h6 className="text-sm ml-28 font-medium">Subtotal</h6>
        <p className="text-sm mr-36">$90.00</p>
      </div>

      <div className="flex justify-between mt-5 transition-all duration-300 delay-100 hover:scale-105">
        <h6 className="text-sm ml-28 font-medium">Shipping:</h6>
        <p className="text-sm mr-36">Free</p>
      </div>

      <div className="flex justify-between mt-5 transition-all duration-300 delay-100 hover:scale-105">
        <h6 className="text-sm ml-28 font-medium">Tax:</h6>
        <p className="text-sm mr-36">$3.00</p>
      </div>

      <div className="border border-gray-300 w-[390px] ml-28 mt-10 transition-all duration-300 delay-100 hover:border-blue-500"></div>

      <div className="flex justify-between mt-5 transition-all duration-300 delay-100 hover:scale-105">
        <h5 className="text-lg ml-28 font-semibold">Total</h5>
        <p className="text-lg mr-36 font-semibold">$78.00</p>
      </div>

      <button
        onClick={GoToPaymentUnSuccessful} // Corrected function name call
        className="w-[372px] h-[44px] px-6 py-3 mt-20 bg-[#0E1422] text-white rounded hover:bg-[#1E1F3A] ml-32 focus:outline-none focus:ring focus:ring-[#1E1F3A] transition-all duration-300 delay-100 hover:scale-105"
        aria-label="Proceed to Checkout"
      >
        Place Order
      </button>

      <a
        href="#"
        className="block mt-5 text-center text-sm text-gray-500 underline hover:text-gray-700 transition-all duration-300 delay-100 hover:scale-105"
        aria-label="Continue Shopping"
      >
        Continue Shopping
      </a>
    </section>
  );
};

export default Shipping;
