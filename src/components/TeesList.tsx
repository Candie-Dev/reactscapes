import React from 'react';

// Define the type for each tee item
interface Tee {
  id: number;
  name: string;
  price: string;
  image: string;
  instock: boolean;
}

// Define the props that Tees component will accept
interface TeesProps {
  data: Tee[]; // Accepts an array of Tee objects
}

const Tees: React.FC<TeesProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-10 mt-40 ml-28">
      {data.map((tee) => (
        <div key={tee.id} className="border rounded-md shadow-md p-4 flex flex-col justify-between">
          <img src={tee.image} alt={tee.name} className="w-full h-auto object-cover mb-4" />
          <h3 className="text-lg font-bold text-center mb-4">{tee.name}</h3>
          <div className="flex justify-between items-center">
            <span
              className={`px-4 py-1 text-sm font-semibold rounded-full border ${
                tee.instock ? "bg-white text-black border-gray-300" : "bg-white text-black border-gray-300"
              }`}
            >
              {tee.instock ? "IN STOCK" : "OUT OF STOCK"}
            </span>
            <p className="text-gray-500">{tee.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tees;
