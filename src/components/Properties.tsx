const Properties = () => {
  return (
    <div className="flex gap-10 ml-28 mt-10 transition-all duration-300 delay-100 hover:bg-gray-50">
      {/* Perfume with close icon */}
      <h1 className="flex items-center gap-2 border border-gray-500 rounded-[20px] text-xs px-4 py-1 transition-all duration-300 delay-100 hover:bg-gray-200 hover:scale-105">
        Perfume
        <img
          src="/images/X.png"
          alt="Close icon"
          className="w-4 h-4 transition-all duration-300 delay-100 hover:scale-125"
        />
      </h1>

      {/* Size: M with close icon */}
      <h1 className="flex items-center gap-2 border border-gray-500 rounded-[20px] text-xs px-4 py-1 transition-all duration-300 delay-100 hover:bg-gray-200 hover:scale-105">
        Size: M
        <img
          src="/images/X.png"
          alt="Close icon"
          className="w-4 h-4 transition-all duration-300 delay-100 hover:scale-125"
        />
      </h1>
    </div>
  );
};

export default Properties;
