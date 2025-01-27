const ReviewItems = () => {
  return (
    <div className="flex mt-10  items-center">

      {/* User Details Section */}
      <div className="flex items-center">
        <img className="mt-2 mr-4" src="/images/ED.png" alt="User" /> {/* Add margin-right for spacing */}
        <div>
          <h5 className="font-bold text-sm mt-10">Emily Davis</h5>
          <h6 className="text-gray-500 text-xs">1 Week ago</h6>
          <p className="text-gray-700 mt-2 text-xs">This company always goes above and beyond to satisfy their customers.</p>
       
    
        </div>
      </div>

      {/* Star Rating Section */}
      <div className="ml-36">
        <img src="/images/Star.png" alt="Star Rating" />
      </div>

    </div>
  );
}

export default ReviewItems;