import { useNavigate } from "react-router-dom";

const ShoppingConfirmation = () => {
    const navigate = useNavigate(); 
    
    const goToOrders = () => {
        navigate('/Orders'); // Navigate to the Orders page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <img 
                src="/images/Frame 11.png" 
                alt="Confirmation Image" 
                className="transition-all duration-300 delay-100 hover:scale-105"
            />
            <h1 className="font-bold text-2xl mt-5 transition-all duration-300 delay-100 hover:text-blue-600">
                Thank you for shopping
            </h1>
            <p className="mt-5 transition-all duration-300 delay-100 hover:text-gray-700">
                Your order has been successfully placed and is now
            </p>
            <p className="transition-all duration-300 delay-100 hover:text-gray-700">
                being processed.
            </p>
            <button 
                onClick={goToOrders} // Call goToOrders function here
                className="w-[284px] h-[44px] px-[24px] mt-10 py-[12px] text-xs rounded-[4px] bg-[#0E1422] text-white flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1A2433] hover:scale-105 hover:shadow-lg"
            >
                Go to my account
                <img 
                    src="/images/Arrow Right.png" 
                    alt="Arrow" 
                    className="w-4 h-4 mt-1 ml-2 transition-all duration-300 delay-100 hover:transform hover:translate-x-1"
                />
            </button>
        </div>
    );
};

export default ShoppingConfirmation;
