const Container = () => {
    return (
      <div className="w-full h-[64px] flex gap-2 items-center mx-auto py-[10px] px-8 border-b-[1px] bg-[#F6F6F6] border-gray-300 bg-white-500 transition-shadow duration-300 hover:shadow-lg">
        <h5 className="text-gray-700 transition-colors duration-300 delay-100 hover:text-gray-800">
          Eccomerce
        </h5>
        <img
          className="mt-1 transition-transform duration-300 delay-100 hover:scale-110"
          src="/images/Vector (1).png"
          alt=""
        />
        <h5 className="transition-colors duration-300 delay-100 hover:text-gray-800">
          Search
        </h5>
      </div>
    );
  };
  
  export default Container;
  