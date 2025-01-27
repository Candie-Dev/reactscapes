import { useState } from 'react';
import Page from "../../AdminInterface/Page";
import AdminInterface from "../../AdminInterface/AdminInterface";
import Path from "../../AdminInterface/Path";
import Extra from "../../AdminInterface/Extra";
import EssentialsCollection from "../../AdminInterface/Essentials";
import Insights from "../../AdminInterface/Insights";
import PageControls from "../../AdminInterface/PageBar";
import Logout from '../../AdminInterface/Logout';

const Collection = () => {
  const [totalItems, setTotalItems] = useState(100); // Example total number of items (replace with real data)
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
        <div className="mt-7 text-gray-700">
         <div className='flex justify-between'>
         <Insights /> 
        <div className='mr-80 mt-2'> <Logout /></div>
         </div>
        </div>
        <div>
          <EssentialsCollection />
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
    </div>
  );
};

export default Collection;
