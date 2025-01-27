const EmptySpace = () => {
  return (
    <div className="flex flex-col ml-96 items-center justify-center min-h-screen ">
      <img 
        src="/images/Vector4.png" 
        alt="" 
        className="transition-all duration-300 delay-100 hover:scale-105 hover:opacity-80"
      />
      <h5 className="text-center mt-4 text-sm transition-all duration-300 delay-100 hover:text-blue-500">
        Your order history is waiting to be filled.
      </h5>
      <button
        className="w-[150px] h-[44px] px-[24px] py-[12px] gap-[6px] mt-10 rounded-[10px] bg-[#0E1422] text-sm text-white flex items-center justify-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EmptySpace;
