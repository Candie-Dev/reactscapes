import { useNavigate } from "react-router-dom";


const TransactionDeclined = () => {

    const navigate = useNavigate();

    const GoToPaymentSuccessful = () => {
        navigate('/PaymentSuccessful');
      };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center transition-all duration-300 delay-100 hover:scale-105 hover:shadow-lg">
            <img
                src="/images/Illustration.svg"
                alt="Illustration"
                className="transition-all duration-300 delay-100 hover:scale-110"
            />
            <h1 className="font-bold text-2xl mt-5 transition-all duration-300 delay-100 hover:text-blue-600">
                Oops! There was an issue
            </h1>
            <p className="mt-5 transition-all duration-300 delay-100 hover:text-gray-500">
                Oops! There was a problem processing your order.
            </p>
            <p className="transition-all duration-300 delay-100 hover:text-gray-500">
                Please review the details and try again.
            </p>
            <button 
  onClick={GoToPaymentSuccessful}
  className="w-[132px] h-[44px] px-[24px] mt-10 py-[12px] text-xs rounded-[4px] bg-[#0E1422] text-white flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1A2433] hover:scale-105 hover:shadow-lg"
>
  Reorder
  <img
    src="/images/Arrow Right.png"
    alt="Arrow"
    className="w-4 h-4 mt-1 ml-2 transition-all duration-300 delay-100 hover:rotate-45"
  />
</button>
        </div>
    );
};

export default TransactionDeclined;
