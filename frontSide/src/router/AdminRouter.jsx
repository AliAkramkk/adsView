import React from 'react'
import {Routes,Route} from 'react-router-dom'
import RequireRoute from '../Components/routes/RequireRoute'
import Dashbord from '../Pages/admin/Dashbord';
import CustomerList from '../Pages/admin/CustomerList';
import UserList from '../Pages/admin/UserList';
import ApproveAds from '../Pages/admin/ApproveAds';


const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireRoute allowedRole={[1000]}>
        <Dashbord />
      </RequireRoute>} />
      <Route path="/customerList" element={<RequireRoute allowedRole={[1000]}>
        <CustomerList />
      </RequireRoute>} />
      <Route path="/userList" element={<RequireRoute allowedRole={[1000]}>
        <UserList />
      </RequireRoute>} />
      <Route path="/approveAds" element={<RequireRoute allowedRole={[1000]}>
        <ApproveAds />
      </RequireRoute>} />
    </Routes>
  )
}

export default AdminRouter