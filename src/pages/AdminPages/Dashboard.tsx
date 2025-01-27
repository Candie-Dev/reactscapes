import AdminInterface from "../../AdminInterface/AdminInterface";
import Page from "../../AdminInterface/Page";
import Path from "../../AdminInterface/Path";
import Extra from "../../AdminInterface/Extra";
import AdminDashboard from "../../AdminInterface/AdminDashboard";
import TotalSales from "../../AdminInterface/TotalSales";
import BestSelling from "../../AdminInterface/BestSelling";
import Customers from "../../AdminInterface/Customers";
import RecentOrders from "../../AdminInterface/RecentOrders";
import StatisticsBox from "../../AdminInterface/StatisticsBox";
import Logout from "../../AdminInterface/Logout";

const Dashboard = () => {
  return (
    <div className="flex bg-neutral-200">
      {/* Sidebar Section */}
      <div className="w-[260px] h-[925px] bg-white">
        <Page />
        <AdminInterface />
        <Path />
        <Extra />
      </div>

      {/* Main Content Section */}
      <div className="flex-grow p-4">
        <div className="flex justify-between mr-24">
        <AdminDashboard />
      <div className="mt-5">  <Logout /></div>
        </div>
        <div className="flex mt-5">
        <TotalSales />
        <Customers />
        <StatisticsBox />
        </div>
      <div className="flex">
      <BestSelling />
      <RecentOrders />
    
      </div>
        
     
      </div>

      {/* Additional Content Section */}
      <div className="mt-1">
  
      </div>

     
   
        
   
    </div>
  );
};

export default Dashboard;
