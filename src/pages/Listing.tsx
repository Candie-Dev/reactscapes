import React, { useState } from 'react';
import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Filter from "../components/Filter";
import Properties from "../components/Properties";
import CountSort from "../components/CountSort";
import TestDropdown from "../components/TestDropdown";
import TeesList from '../components/TeesList';
import TeesData from "../components/TeesData";  // Import Tees data
import Pagination from "../components/PaginationComponent"; // Pagination Component
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Listing: React.FC = () => {
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the total number of items
  const totalItems = TeesData.length; 

  // Calculate the paginated data based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = TeesData.slice(startIndex, endIndex); // Get the data for the current page

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Set current page when user clicks page number
  };

  return (
    <div>
      <DiscountHeader />
      <Header />
      <Container />
      
      <div className="flex">
        <div className="ml-8">
          <Sidebar />
        </div>
        
        <div className="flex-1">
          <Filter />
          <Properties />
          
          <div className="flex justify-between">
            <CountSort />
            <TestDropdown />
          </div>

          {/* Pass the paginated data to Tees component */}
          <TeesList data={paginatedData} />

          {/* Pagination controls */}
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
     <div className='mt-10'><Newsletter /></div>
     <Footer />
    </div>
  );
};

export default Listing;
