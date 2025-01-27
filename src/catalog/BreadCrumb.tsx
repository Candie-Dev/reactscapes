const BreadCrumb = () => {
    return (
      <div className="w-full h-[20px] flex gap-2 items-center mx-auto py-4 px-8 border-b-[1px] bg-white border-gray-300 transition-all duration-300 delay-100 hover:bg-[#eaeaea]">
        <div className="px-4 py-2">
          <h5 className="text-gray-700 transition-all duration-300 delay-100 hover:text-blue-500">
            Eccomerce
          </h5>
        </div>
        <img
          className="mt-1 transition-all duration-300 delay-100 hover:scale-110"
          src="/images/Vector (1).png"
          alt="Arrow Icon"
        />
        <div className="px-4 py-2">
          <h5 className="transition-all duration-300 delay-100 hover:text-blue-500">
            Black man T-shirt
          </h5>
        </div>
      </div>
    );
  };
  
  export default BreadCrumb;
  