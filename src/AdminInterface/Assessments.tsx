const Assessments = () => {
  return (
      <div className="flex items-start gap-4 mt-4 ml-12">
          {/* Item 1 */}
          <div>
              <h5 className="font-semibold mt-4 text-gray-700 text-xs">Admin</h5>
          </div>

          {/* Arrow Icon */}
          <div>
              <img 
                  className="mt-5"
                  src="/images/Vector (1).png"
                  alt="Arrow Icon"
              />
          </div>

          {/* Item 2 */}
          <div>
              <h5 className="font-bold text-xs mt-4">Dashboard</h5>
          </div>
      </div>
  );
};

export default Assessments;
