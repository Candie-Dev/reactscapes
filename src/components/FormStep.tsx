const FormStep = () => {
  return (
    <div className="p-8"> {/* Added padding inside the container */}
      <h5 className="font-bold text-xl mb-6 transition-all duration-300 delay-100 hover:text-gray-700">
        Shipping Address
      </h5>

      {/* Street Address */}
      <div>
        <h5 className="mt-6 transition-all duration-300 delay-100 hover:text-gray-700">Street Address</h5>
        <input
          type="text"
          className="h-[45px] w-[534px] mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
        />
      </div>

      {/* City and State */}
      <div className="mt-5 flex items-center">
        <div className="mr-4">
          <h5 className="mb-2 transition-all duration-300 delay-100 hover:text-gray-700">City</h5>
          <input
            type="text"
            className="h-[45px] w-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>
        <div>
          <h5 className="mb-2 transition-all duration-300 delay-100 hover:text-gray-700">State</h5>
          <input
            type="text"
            className="h-[45px] w-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>
      </div>

      {/* Zip Code and Country */}
      <div className="mt-5 flex items-center">
        <div className="mr-4">
          <h5 className="mb-2 transition-all duration-300 delay-100 hover:text-gray-700">Zip Code</h5>
          <input
            type="text"
            className="h-[45px] w-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>
        <div>
          <h5 className="mb-2 transition-all duration-300 delay-100 hover:text-gray-700">Country</h5>
          <input
            type="text"
            className="h-[45px] w-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>
      </div>

      {/* Additional Labels */}
      <div className="mt-10 flex">
        <div className="mr-4">
          <h5 className="mb-2 transition-all duration-300 delay-100 hover:text-gray-700">Email</h5>
          <input
            type="text"
            className="h-[45px] w-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>
        <div>
          <h5 className="mb-2 transition-all duration-300 delay-100 hover:text-gray-700">Full Name</h5>
          <input
            type="text"
            className="h-[45px] w-[259px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default FormStep;
