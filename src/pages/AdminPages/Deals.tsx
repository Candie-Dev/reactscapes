import { useState } from 'react';
import Page from "../../AdminInterface/Page";
import AdminInterface from "../../AdminInterface/AdminInterface";
import Path from "../../AdminInterface/Path";
import Extra from "../../AdminInterface/Extra";
import BasicCollection from "../../AdminInterface/BasicCollection";
import Overview from "../../AdminInterface/Overview";
import PageControls from "../../AdminInterface/PageBar";
import SignOut from '../../AdminInterface/SignOut';


const Deals = () => {
  const [totalItems, setTotalItems] = useState(100); // Example, replace with your actual total items
  const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
  const [currentPage, setCurrentPage] = useState(1); // Initial page

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add logic to fetch data for the new page if necessary
  };

  return (
    <div className="flex bg-gray-200">
      <div className="w-[260px] h-[925px] bg-white">
        <Page />
        <AdminInterface />
        <Path />
        <Extra />
      </div>

      <div>
        <div className='flex justify-between'>
        <Overview />
        <SignOut />
     
        </div>
        <BasicCollection />

        <PageControls
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Deals;
