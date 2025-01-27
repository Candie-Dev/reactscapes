const RecentOrders = () => {
  const orders = [
    {
      item: "Mens Black T-Shirts",
      date: "20 Mar, 2023",
      total: "$75.00",
      status: "Processing",
    },
    {
      item: "Essential Neutrals",
      date: "19 Mar, 2023",
      total: "$22.00",
      status: "Processing",
    },
    {
      item: "Sleek and Cozy Black",
      date: "7 Feb, 2023",
      total: "$57.00",
      status: "Completed",
    },
    {
      item: "MOCKUP Black",
      date: "29 Jan, 2023",
      total: "$30.00",
      status: "Completed",
    },
    {
      item: "Monochromatic Wardrobe",
      date: "27 Jan, 2023",
      total: "$27.00",
      status: "Completed",
    },
  ];

  return (
    <div className="w-[680px] mr-20 bg-white mt-10 ml-5 shadow-md rounded-lg p-6 m-0">
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-sm font-bold">Recent Orders</h2>
        <button className="text-xs text-blue-500 hover:underline">View All</button>
      </div>
      <table className="w-full mt-4 text-left border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-xs">Item</th>
            <th className="py-2 px-4 border-b text-xs">Date</th>
            <th className="py-2 px-4 border-b text-xs">Total</th>
            <th className="py-2 px-4 border-b text-xs">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-xs">{order.item}</td>
              <td className="py-2 px-4 border-b text-xs">{order.date}</td>
              <td className="py-2 px-4 border-b text-xs">{order.total}</td>
              <td
                className={`py-2 px-4 border-b text-xs ${
                  order.status === "Completed"
                    ? "text-green-500"
                    : "text-yellow-500"
                }`}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
