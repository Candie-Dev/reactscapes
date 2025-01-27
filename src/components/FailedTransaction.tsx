const FailedTransaction = () => {
  return (
    <div className="w-full h-[160px] flex justify-between items-center mx-auto py-4 px-8 border-b border-gray-300 bg-[#FBD9D0] transition-shadow duration-300 hover:shadow-lg p-8"> {/* Added padding (p-8) */}
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold transition-transform duration-300 delay-100 hover:scale-105 hover:text-red-600">
          Failed Order
        </h1>
        <div className="flex items-center mt-2">
          <h5 className="text-gray-700 mr-2 transition-colors duration-300 delay-100 hover:text-gray-800">
            Ecommerce
          </h5>
          <img
            className="mt-1 transition-transform duration-300 delay-100 hover:scale-110"
            src="/images/Vector (1).png"
            alt="Arrow icon indicating navigation"
          />
          <h5 className="ml-2 text-gray-700 transition-colors duration-300 delay-100 hover:text-gray-800">
            Failed Order
          </h5>
        </div>
      </div>
    </div>
  );
};

export default FailedTransaction;
