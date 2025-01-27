import { useState } from 'react';
import Page from "../../AdminInterface/Page";
import AdminInterface from "../../AdminInterface/AdminInterface";
import Path from "../../AdminInterface/Path";
import Extra from "../../AdminInterface/Extra";
import Testimonials from "../../AdminInterface/Testimonials";
import Assessments from "../../AdminInterface/Assessments";
import PageControls from "../../AdminInterface/PageBar";
import Logout from '../../AdminInterface/Logout';

const Feedback = () => {
  const [totalItems, setTotalItems] = useState(100); // Example total number of items (replace with actual data)
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Initial current page

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add logic to fetch data for the new page if needed
  };

  return (
    <div className="flex bg-gray-200">
      <div className="w-[260px] h-[925px] bg-white">
        <Page />
        <AdminInterface />
        <Path />
        <Extra />
      </div>
      
      <div className="flex-grow">
        <div className='flex justify-between'>
        <Assessments />
      <div className='mr-80 mt-9'>  <Logout /></div>
        </div>
        <Testimonials />
   <div className='mr-80'>
   <PageControls
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
   </div>
      </div>
    </div>
  );
};

export default Feedback;
