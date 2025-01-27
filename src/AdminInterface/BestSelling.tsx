const BestSelling = () => {
    return (
        <div className="w-[328px] bg-white ml-24 mt-10 p-5">
            <div>
                {/* Fixed margin for "Best Selling" */}
                <h5 className="font-bold text-sm mt-1">Best Selling</h5>
                <h5 className="text-gray-600 mt-2 text-[10px]">THIS MONTH</h5>
            </div>

            <div>
                {/* Adds a thin top border with margin-right */}
                <div className="border-t border-gray-300 pt-1 mt-5 transition-all duration-300 delay-100 hover:border-blue-600"></div>
            </div>

            <div className="flex items-center mt-5 gap-2">
                <h1 className="text-base font-bold">$2,400</h1>
                <h5 className="text-[10px]">—</h5>
                <h5 className="text-gray-800 text-[10px]">Total Sales</h5>
            </div>

            <div className="mt-5 space-y-3">
                <div className="border-solid flex border border-gray-500 rounded-[20px] text-[10px] px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                    <h5>Classic Monochrome Tees —</h5>
                    <h5 className="font-bold ml-1">$940 Sales</h5>
                </div>

                <div className="border-solid flex border border-gray-500 rounded-[20px] text-[10px] px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                    <h5>Monochromatic Wardrobe —</h5>
                    <h5 className="font-bold ml-1">$790 Sales</h5>
                </div>

                <div className="border-solid flex border border-gray-500 rounded-[20px] text-[10px] px-4 py-2 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                    <h5>Essential Neutrals —</h5>
                    <h5 className="font-bold ml-1">$740 Sales</h5>
                </div>
            </div>

            <div className="mt-5">
                <img src="/images/Doughnut Chart.png" alt="Doughnut Chart" />
            </div>
        </div>
    );
};

export default BestSelling;
