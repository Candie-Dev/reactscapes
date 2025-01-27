import FeeTag from "./FeeTag";
import Clicker from "./Clicker";

const ItemCard = () => {
    return (
        <div className="flex items-center space-x-4 transition-all duration-300 delay-100 hover:bg-gray-100 p-4 rounded-md">

            {/* Image Section */}
            <div>
                <img src="/images/image10.png" alt="Cart Item" className="w-16 h-16" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col">
                <h5 className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Essential Neutrals</h5>
                <h5 className="text-sm text-gray-500 transition-all duration-300 delay-100 hover:text-blue-500">Added on: 27 July 2024</h5>
                <div>
                    <button className="text-sm transition-all duration-300 delay-100 hover:text-blue-500">Remove Item</button>
                </div>
            </div>

            {/* FeeTag Section */}
            <div className="ml-2">
                <FeeTag />
            </div>

            {/* Clicker Section */}
            <div className="ml-18">
                <Clicker />
            </div>

        </div>
    );
};

export default ItemCard;
