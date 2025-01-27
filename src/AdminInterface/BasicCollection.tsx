const BasicCollection = () => {
  const basics = [
    {
      Image: "/images/Image12.png",
      Order: "Raw Black T-Shirt Lineup",
      Date: "20 Mar, 2023",
      Total: "$75.00",
      Status: "Processing",
      Action: "View",
    },
    {
      Image: "/images/Image13.png",
      Order: "Classic Monochrome Tees",
      Date: "19 Mar, 2023",
      Total: "$35.00",
      Status: "Processing",
      Action: "View",
    },
    {
      Image: "/images/Image14.png",
      Order: "Monochromatic Wardrobe",
      Date: "7 Feb, 2023",
      Total: "$27.00",
      Status: "Completed",
      Action: "View",
    },
    {
      Image: "/images/Image15.png",
      Order: "Essential Neutrals",
      Date: "29 Jan, 2023",
      Total: "$22.00",
      Status: "Completed",
      Action: "View",
    },
    {
      Image: "/images/Image16.png",
      Order: "UTRAANET Black",
      Date: "27 Jan, 2023",
      Total: "$43.00",
      Status: "Processing",
      Action: "View",
    },
    {
      Image: "/images/Image17.png",
      Order: "Elegant Ebony Sweatshirts",
      Date: "4 Jan, 2023",
      Total: "$35.00",
      Status: "Cancelled",
      Action: "View",
    },
    {
      Image: "/images/Image18.png",
      Order: "Sleek and Cozy Black",
      Date: "28 Dec, 2022",
      Total: "$57.00",
      Status: "Completed",
      Action: "View",
    },
    {
      Image: "/images/Image19.png",
      Order: "UTRAANET Black",
      Date: "20 Dec, 2022",
      Total: "$43.00",
      Status: "Processing",
      Action: "View",
    },
  ];

  return (
    <div className="w-[950px] max-w-4xl bg-white ml-10 mt-32 mx-auto shadow-lg rounded-lg p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-6 border-b border-gray-300">
        <h2 className="font-semibold text-gray-800 text-xs">Products</h2>
        <div className="relative w-1/3 sm:w-[200px]">
          <input
            type="text"
            placeholder="Search products"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 text-gray-800 pr-10 text-xs"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Image</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Order</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Date</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Total</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Status</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {basics.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                <td className="py-4 px-6 border-b text-gray-800 text-xs">
                  <img
                    src={item.Image}
                    alt={item.Order}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Order}</td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Date}</td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Total}</td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Status}</td>
                <td className="py-4 px-6 border-b text-blue-500 text-xs">
                  <button className="text-blue-500 hover:underline">{item.Action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasicCollection;

