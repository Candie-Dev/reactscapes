import AmountDisplay from "./AmountDisplay";
import Clicker from "./Clicker";

const ProductCard = () => {
    return (
        <div className="flex items-center space-x-4 transition-all duration-300 delay-100 hover:bg-gray-100 p-4 rounded-md">

            {/* Image Section */}
            <div>
                <img src="/images/image9.png" alt="Cart Item" className="w-16 h-16" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col">
                <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Raw Black T-Shirt Lineup</h5>
                <h5 className="text-sm text-gray-500 transition-all duration-300 delay-100 hover:text-blue-500">Added on: 27 July 2024</h5>
                <div>
                    <button className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Remove Item</button>
                </div>
            </div>

            <AmountDisplay />

            <div className="ml-18"><Clicker /></div>

        </div>
    )
}

export default ProductCard;
