const Confirmation = () => {
    return (
        <div className="w-full h-[160px] flex justify-between items-center mx-auto py-4 px-8 border-b border-gray-300 bg-[#D5E5D7] transition-all duration-300 delay-100 hover:bg-[#A8D8A1]">
            <div className="flex flex-col items-start">
                <h1 className="text-2xl font-bold transition-all duration-300 delay-100 hover:text-green-700">Successful Order</h1>
                <div className="flex items-center mt-2">
                    <h5 className="text-gray-700 mr-2 transition-all duration-300 delay-100 hover:text-green-700">Ecommerce</h5>
                    <img 
                        className="mt-1 transition-all duration-300 delay-100 hover:scale-105" 
                        src="/images/Vector (1).png" 
                        alt="Arrow icon indicating navigation" 
                    />
                    <h5 className="ml-2 text-gray-700 transition-all duration-300 delay-100 hover:text-green-700">Successful Order</h5>
                </div>
            </div>
        </div>
    );
};

export default Confirmation;
