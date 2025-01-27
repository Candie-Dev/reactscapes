const Overview = () => {
  return (
      <div className="flex items-center gap-4 mt-5 ml-12">
          {/* Item 1 */}
          <div>
              <h5 className="font-semibold  text-gray-700 mt-1 text-xs">Admin</h5>
          </div>

          {/* Arrow Icon */}
          <div>
              <img 
                  className="mt-1"
                  src="/images/Vector (1).png"
                  alt="Arrow Icon"
              />
          </div>

          {/* Item 2 */}
          <div>
              <h5 className="font-bold text-xs mt-1">Dashboard</h5>
          </div>
      </div>
  );
};

export default Overview;
