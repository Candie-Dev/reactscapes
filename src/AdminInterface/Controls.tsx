import Logout from "./Logout";

const AddtoStore = () => {
  return (
    <div className="flex justify-between items-center ml-16 mt-8 mx-14 w-full">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Item 1 */}
        <div>
          <h5 className="font-semibold text-gray-700 text-xs">Admin</h5>
        </div>

        {/* Arrow Icon */}
        <div>
          <img src="/images/Vector (1).png" alt="Arrow Icon" />
        </div>

        {/* Item 2 */}
        <div>
          <h5 className="font-bold text-xs">Dashboard</h5>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mr-20">
        <Logout />
      </div>
    </div>
  );
};

export default AddtoStore;
