import React from 'react';
import {Routes,Route} from 'react-router-dom';
import RequireRoute from '../Components/routes/RequireRoute';
import CustomerHome from '../Pages/customer/CustomerHome';
import Profile from '../Pages/customer/Profile';
import AddAds from '../Pages/customer/AddAds';



const CustomerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireRoute allowedRole={[2000]}>
        <CustomerHome />
      </RequireRoute>} />
      <Route path="/profile" element={<RequireRoute allowedRole={[2000]}>
        <Profile />
      </RequireRoute>} />
      <Route path="/addAds" element={<RequireRoute allowedRole={[2000]}>
        <AddAds />
      </RequireRoute>} />
      </Routes>
  )
}

export default CustomerRouter