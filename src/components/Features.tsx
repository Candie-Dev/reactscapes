const Features = () => {
  return (
    <div className="w-full bg-white border-b-[1px] border-gray-300">
      {/* Outer container with consistent padding */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex justify-center items-center">
        {/* Grid container for the features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 w-full max-w-[1200px] justify-items-center">
          {/* First Column */}
          <div className="bg-white p-4 text-center mt-5 transition-all duration-300 delay-100 hover:scale-105 hover:shadow-lg">
            <img
              className="mt-4 mx-auto transition-all duration-300 delay-100 hover:scale-110 hover:shadow-md"
              src="/images/Vector1.png"
              alt="Free Shipping"
            />
            <h1 className="mt-4 text-sm text-neutral-900 transition-all duration-300 delay-100 hover:text-gray-600">
              Free Shipping
            </h1>
            <p className="mt-2 text-xs text-gray-500 transition-all duration-300 delay-100 hover:text-gray-600">
              Upgrade your style today and get FREE
            </p>
            <p className="text-xs text-gray-500 transition-all duration-300 delay-100 hover:text-gray-600">
              shipping on all orders! Don't miss out.
            </p>
          </div>

          {/* Second Column */}
          <div className="bg-white p-4 text-center transition-all duration-300 delay-100 hover:scale-105 hover:shadow-lg">
            <img
              className="mt-4 mx-auto transition-all duration-300 delay-100 hover:scale-110 hover:shadow-md"
              src="/images/IconBox.png"
              alt="Satisfaction Guarantee"
            />
            <h1 className="mt-4 text-sm text-neutral-900 transition-all duration-300 delay-100 hover:text-gray-600">
              Satisfaction Guarantee
            </h1>
            <p className="mt-2 text-xs text-gray-500 transition-all duration-300 delay-100 hover:text-gray-600">
              Shop confidently with our Satisfaction
            </p>
            <p className="text-xs text-gray-500 transition-all duration-300 delay-100 hover:text-gray-600">
              Guarantee: Love it or get a refund.
            </p>
          </div>

          {/* Third Column */}
          <div className="bg-white p-4 text-center transition-all duration-300 delay-100 hover:scale-105 hover:shadow-lg">
            <img
              className="mt-4 mx-auto transition-all duration-300 delay-100 hover:scale-110 hover:shadow-md"
              src="/images/IconBox.png"
              alt="Secure Payment"
            />
            <h1 className="mt-4 text-sm text-neutral-900 transition-all duration-300 delay-100 hover:text-gray-600">
              Secure Payment
            </h1>
            <p className="mt-2 text-xs text-gray-500 transition-all duration-300 delay-100 hover:text-gray-600">
              Your security is our priority.
            </p>
            <p className="text-xs text-gray-500 transition-all duration-300 delay-100 hover:text-gray-600">
              Your payments are secure with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
