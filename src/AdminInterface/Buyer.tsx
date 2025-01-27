const Buyer = () => {
  const Guest = [
    {
      Image: "/images/Avatar.png",
      Name: "Esther Howard",
      Email: "esther.howard@gmail.com",
      Address: "8642 Yule Street, Arvada CO 80007",
      Action: "...",
    },
    {
      Image: "/images/Avatar (1).png",
      Name: "Wade Warren",
      Email: "esther.howard@gmail.com",
      Address: "5331 Rexford Court, Montgomery AL 36116",
      Action: "...",
    },
    {
      Image: "/images/Avatar (2).png",
      Name: "Brooklyn Simmons",
      Email: "esther.howard@gmail.com",
      Address: "2325 Eastridge Circle, Moore OK 73160",
      Action: "...",
    },
    {
      Image: "/images/Avatar (3).png",
      Name: "Robert Fox",
      Email: "esther.howard@gmail.com",
      Address: "2436 Naples Avenue, Panama City FL 32405",
      Action: "...",
    },
    {
      Image: "/images/Avatar (4).png",
      Name: "Dianne Russell",
      Email: "esther.howard@gmail.com",
      Address: "6095 Terry Lane, Golden CO 80403",
      Action: "...",
    },
    {
      Image: "/images/Avatar (5).png",
      Name: "Ralph Edwards",
      Email: "esther.howard@gmail.com",
      Address: "4001 Anderson Road, Nashville TN 37217",
      Status: "Cancelled",
      Action: "...",
    },
    {
      Image: "/images/Avatar (6).png",
      Name: "Theresa Webb",
      Email: "esther.howard@gmail.com",
      Address: "19141 Pine Ridge Circle, Anchorage AK 99516",
      Action: "...",
    },
    {
      Image: "/images/Avatar (7).png",
      Name: "Arlene McCoy",
      Email: "esther.howard@gmail.com",
      Address: "2613 Cottonwood Street, Anchorage AK 99508",
      Action: "...",
    },
  ];

  return (
    <div className="w-full max-w-4xl bg-white ml-10 mt-28 mx-auto shadow-lg rounded-lg p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-6 border-b border-gray-300">
        <h2 className="text-xl font-semibold text-gray-800">Products</h2>
        <div className="relative w-1/3 sm:w-[200px]">
          <input
            type="text"
            placeholder="Search customers"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-gray-600 text-gray-800 pr-10"
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Image</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Name</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Email</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Shipping Address</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {Guest.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                <td className="py-4 px-6 border-b text-gray-800 text-xs">
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Name}</td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Email}</td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Address}</td>
                <td className="py-4 px-6 border-b text-blue-500 text-xs">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buyer;
