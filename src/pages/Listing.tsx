import React, { useState } from 'react';
import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import Tees from '../components/TeesData';
import Filter from "../components/Filter";
import Properties from "../components/Properties";
import CountSort from "../components/CountSort";
import TestDropdown from "../components/TestDropdown";

import TeesData from "../components/TeesData";  // Import Tees data

const Listing: React.FC = () => {
  const totalItems = TeesData.length; // Get the total number of items in TeesData
  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate the paginated data based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = TeesData.slice(startIndex, endIndex); // Get the paginated data

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber); // Update currentPage when page changes
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

       
          />
        </div>
      </div>
    </div>
  );
};

export default Listing;
