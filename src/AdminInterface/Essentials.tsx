import { useNavigate } from "react-router-dom";

const EssentialsCollection = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleAddProduct = () => {
    navigate('/InsertItem');
  };

  const essentials = [
    {
      Image: "/images/Image12.png",
      Name: "Raw Black T-Shirt Lineup",
      SKU: "47514501",
      Price: "$75.00",
      Stock: "In Stock",
      Categories: "T-shirt, Men",
      Action: "...",
    },
    {
      Image: "/images/Image13.png",
      Name: "Classic Monochrome Tees",
      SKU: "47514501",
      Price: "$35.00",
      Stock: "In Stock",
      Categories: "T-shirt, Men",
      Action: "...",
    },
    {
      Image: "/images/Image14.png",
      Name: "Monochromatic Wardrobe",
      SKU: "47514501",
      Price: "$27.00",
      Stock: "In Stock",
      Categories: "T-shirt",
      Action: "...",
    },
    {
      Image: "/images/Image15.png",
      Name: "Essential Neutrals",
      SKU: "47514501",
      Price: "$22.00",
      Stock: "In Stock",
      Categories: "T-shirt, Raw",
      Action: "...",
    },
    {
      Image: "/images/Image16.png",
      Name: "UTRAANET Black",
      SKU: "47514501",
      Price: "$43.00",
      Stock: "In Stock",
      Categories: "T-shirt, Trend",
      Action: "...",
    },
    {
      Image: "/images/Image17.png",
      Name: "Elegant Ebony Sweatshirts",
      SKU: "47514501",
      Price: "$35.00",
      Stock: "In Stock",
      Categories: "T-shirt, Trend",
      Action: "...",
    },
    {
      Image: "/images/Image18.png",
      Name: "Sleek and Cozy Black",
      SKU: "47514501",
      Price: "$57.00",
      Stock: "In Stock",
      Categories: "Hoodie",
      Action: "...",
    },
    {
      Image: "/images/Image19.png",
      Name: "UTRAANET Black",
      SKU: "47514501",
      Price: "$43.00",
      Stock: "In Stock",
      Categories: "T-shirt, Trend",
      Action: "...",
    },
  ];

  return (
    <div className="w-full max-w-4xl bg-white ml-10 mt-32 mx-auto shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-300">
        <h2 className="text-sm font-semibold text-gray-800">Products</h2>
        <div className="flex justify-between items-center w-full sm:w-auto">
        <button
  onClick={handleAddProduct} // Navigate to /InsertItem when clicked
  className="w-[150px] h-[44px] px-[24px] py-[12px] rounded-lg bg-black mr-5 text-white text-sm flex items-center justify-center transition-all duration-300 delay-100 hover:bg-gray-700 hover:scale-105 hover:shadow-xl"
>
  Add product
</button>


          <div className="relative w-1/3 sm:w-[200px]">
            <input
              type="text"
              placeholder=""
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 text-gray-800 pr-10"
            />

            <img
              src="/images/Search.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* Add responsive table here */}
      <div className="overflow-x-auto">
        <table className="w-full mt-4 text-left table-auto">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">Image</th>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">Name</th>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">SKU</th>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">Price</th>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">Stock</th>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">Categories</th>
              <th className="py-3 px-4 border-b text-gray-600 text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {essentials.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                <td className="py-3 px-4 border-b text-gray-800 text-xs">
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4 border-b text-gray-800 text-xs">{item.Name}</td>
                <td className="py-3 px-4 border-b text-gray-800 text-xs">{item.SKU}</td>
                <td className="py-3 px-4 border-b text-gray-800 text-xs">{item.Price}</td>
                <td className="py-3 px-4 border-b text-gray-800 text-xs">{item.Stock}</td>
                <td className="py-3 px-4 border-b text-gray-800 text-xs">{item.Categories}</td>
                <td className="py-3 px-4 border-b text-blue-500 text-xs">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EssentialsCollection;
