import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireRoute from '../Components/routes/RequireRoute';
import Home from '../Pages/Home';
import AdsList from '../Pages/user/AdsList';
import Profile from '../Pages/user/Profile';


const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RequireRoute allowedRole={[3000]}>
        <Home /> 
        </RequireRoute>} />

       <Route path="/adsView" element={<RequireRoute allowedRole={[3000]}>
        <AdsList />
        </RequireRoute>} />

       <Route path="/profile" element = {<RequireRoute allowedRole={[3000]}>
        <Profile />
       </RequireRoute>}  />

    </Routes>
  )
}

export default UserRouter;