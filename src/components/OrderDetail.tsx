import Shipping from "./Shipping";

const OrderDetail = () => {
  return (
    <div className="border-l border-gray-300 pl-4 h-[500px] transition-all duration-300 delay-100 hover:bg-gray-50">
      <h5 className="font-bold ml-32 mb-4 transition-all duration-300 delay-100 hover:text-gray-700">
        Your Order
      </h5>

      <div className="flex justify-between items-center">
        {/* Image Section */}
        <div className="flex gap-2 ml-32 transition-all duration-300 delay-100 hover:opacity-80">
          <img
            src="/images/image5.png"
            alt="Item 1"
            className="transition-all duration-300 delay-100 hover:scale-105"
          />
          <img
            src="/images/image6.png"
            alt="Item 2"
            className="transition-all duration-300 delay-100 hover:scale-105"
          />
          <img
            src="/images/image7.png"
            alt="Item 3"
            className="transition-all duration-300 delay-100 hover:scale-105"
          />
        </div>

        {/* Button Section */}
        <div>
          <button className="w-[107px] h-[44px] px-[24px] py-[12px] gap-[6px] mr-40 text-xs rounded-md bg-white text-black border flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg hover:text-white">
            Edit Cart
          </button>
        </div>
      </div>
      <Shipping />
    </div>
  );
};

export default OrderDetail;