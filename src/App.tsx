import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store/store'; // Import the store

import './index.css'; // Adjust the path based on your folder structure

import Homepage from './pages/Homeapage';
import ClothingCatalog from './pages/ClothingCatalog';
import Listing from './pages/Listing';
import Cart from './pages/Cart';
import SecureCheckout from './pages/SecureCheckout';
import PaymentSuccessful from './pages/PaymentSuccessful';
import PaymentUnSuccessful from './pages/PaymentUnSuccessful';
import FashionCatalogue from './pages/FashionCatalogue';
import ShoppingCart from './pages/ShoppingCart';


import Login from './pages/Authentication/Login';
import JoinNow from './pages/Authentication/JoinNow';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import UpdatePassword from './pages/Authentication/UpdatePassword';


import Orders from './pages/Profile/Orders';
import WantList from './pages/Profile/WantList';
import Address from './pages/Profile/Address';
import AccountDetail from './pages/Profile/AccountDetail';
import Password from './pages/Profile/Password';
import EmptyState from './pages/Profile/EmptyState';

import Enter from './pages/AdminPages/Enter';
import Dashboard from './pages/AdminPages/Dashboard';
import Collection from './pages/AdminPages/Collection';
import InsertItem from './pages/AdminPages/InsertItem';
import Deals from './pages/AdminPages/Deals';
import Shopper from './pages/AdminPages/Shopper';
import Feedback from './pages/AdminPages/Feedback';
import Parameters from './pages/AdminPages/Parameters';
import Share from './pages/Share';
import Review from './pages/Review';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/ClothingCatalog" element={<ClothingCatalog />} />
          <Route path="/FashionCatalogue" element={<FashionCatalogue />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Share" element={<Share />} />
          <Route path="/Review" element={<Review />} />

          
         
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/SecureCheckout" element={<SecureCheckout />} />
          <Route path="/PaymentSuccessful" element={<PaymentSuccessful />} />
          <Route path="/PaymentUnSuccessful" element={<PaymentUnSuccessful />} />


          <Route path="/Login" element={<Login />} />
          <Route path="/JoinNow" element={<JoinNow />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/UpdatePassword" element={<UpdatePassword  />} />
          
          <Route path="/Orders" element={<Orders />} />
          <Route path="/WantList" element={<WantList />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/AccountDetail" element={<AccountDetail />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/EmptyState" element={<EmptyState />} />

          <Route path="/Enter" element={<Enter />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/InsertItem" element={<InsertItem />} />
          <Route path="/Deals" element={<Deals />} />
          <Route path="/Shopper" element={<Shopper />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Parameters" element={<Parameters />} />

          

          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </Provider>

  );
};

export default App;
