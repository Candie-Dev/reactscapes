const Testimonials = () => {
  const User = [
    {
      Image: "/images/Avatar.png",
      Name: "Esther Howard",
      Review: "Completed the task and added the required documentation, can someone please ....",
      Action: "...",
    },
    {
      Image: "/images/Avatar (1).png",
      Name: "Wade Warren",
      Review: "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.",
      Action: "...",
    },
    {
      Image: "/images/Avatar (2).png",
      Name: "Brooklyn Simmons",
      Review: "Twenty 30-second applications within half an hour is well in excess.",
      Action: "...",
    },
    {
      Image: "/images/Avatar (3).png",
      Name: "Robert Fox",
      Review: "An interesting implication of the 2007 study concerns the use of hand sanitizers.",
      Action: "...",
    },
    {
      Image: "/images/Avatar (4).png",
      Name: "Dianne Russell",
      Review: "I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ",
      Action: "...",
    },
    {
      Image: "/images/Avatar (5).png",
      Name: "Ralph Edwards",
      Review: "The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ",
      Action: "...",
    },
    {
      Image: "/images/Avatar (6).png",
      Name: "Theresa Webb",
      Review: "Alcohol based exposures through inadvertently consuming hand sanitize",
      Action: "...",
    },
    {
      Image: "/images/Avatar (7).png",
      Name: "Arlene McCoy",
      Review: "I'm grateful for the supportive work environment during personal challenges.",
      Action: "...",
    },
  ];

  return (
    <div className="w-full max-w-4xl bg-white ml-10 mt-32 mx-auto shadow-lg rounded-lg p-8">
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
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Review</th>
              <th className="py-4 px-6 border-b text-gray-600 text-xs">Action</th>
            </tr>
          </thead>
          <tbody>
            {User.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-300">
                <td className="py-4 px-6 border-b text-gray-800 text-xs">
                  <img
                    src={item.Image}
                    alt={item.Name}
                    className="w-12 h-12 object-cover rounded" // Changed to smaller size
                  />
                </td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Name}</td>
                <td className="py-4 px-6 border-b text-gray-800 text-xs">{item.Review}</td>
                <td className="py-4 px-6 border-b text-blue-500 text-xs">{item.Action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Testimonials;
