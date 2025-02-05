import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated,selectUserRole } from '../context/authSlice';

const RequireRoute = ({children,requiredRole}) => {

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userRole = useSelector(selectUserRole);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
      }
      if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/unauthorized" replace />;
      }

      return children;      
}

export default RequireRoute