import Pants from "./PantsData";

const PantsList = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mx-auto py-8 px-8 border-b-[1px] bg-[#F6F6F6] border-gray-300">
      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {Pants.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 border rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-contain mb-4 rounded-md"
            />
            <h3 className="text-sm font-medium text-center mb-2 px-4">{item.name}</h3>
            <div className="flex flex-row items-center justify-center gap-4 px-4">
              <span
                className={`px-4 py-1 text-sm font-semibold rounded-full border ${
                  item.instock
                    ? "bg-white text-black border-gray-300"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                {item.instock ? "IN STOCK" : "OUT OF STOCK"}
              </span>
              <p className="text-sm font-bold text-gray-700">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PantsList;
