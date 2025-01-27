const Breadcrumbs = () => {
    return (
        <div className="w-full h-[160px] flex justify-between items-center mx-auto py-[10px] px-8 border-b-[1px] bg-[#F6F6F6] border-gray-300 bg-white-500 transition-shadow duration-300 hover:shadow-lg">
            <div className="flex flex-col items-start p-8"> {/* Padding applied inside the flex container */}
                <h1 className="text-2xl font-bold transition-transform duration-300 delay-200 hover:scale-105 hover:text-gray-800">
                    Checkout
                </h1>
                <div className="flex items-center mt-2">
                    <h5 className="text-gray-700 mr-2 transition-colors duration-300 delay-200 hover:text-gray-900">
                        Eccomerce
                    </h5>
                    <img
                        className="mt-1 transition-transform duration-300 delay-200 hover:scale-110"
                        src="/images/Vector (1).png"
                        alt=""
                    />
                    <h5 className="ml-2 transition-colors duration-300 delay-200 hover:text-gray-900">
                        Checkout
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
