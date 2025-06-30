// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticated, getUserRole } from '../utils/auth';

const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const userIsAuthenticated = isAuthenticated();
  const userRole = getUserRole();

  if (!userIsAuthenticated) {
    // User is not authenticated, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is authenticated, now check roles
  if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // User is authenticated, but their role is not in allowedRoles.
    // Redirect them to their own default dashboard.
    let userDefaultDashboard = '/dashboard/overview'; // A generic fallback
    switch (userRole) {
      case 'admin':
        userDefaultDashboard = '/dashboard/adminDashboard';
        break;
      case 'manager':
        userDefaultDashboard = '/dashboard/managerDashboard';
        break;
      case 'user':
        userDefaultDashboard = '/dashboard/userDashboard';
        break;
      default:
        // If role is unknown or not set, redirect to login as a safety measure.
        // This case should ideally not be reached if login logic is correct.
        return <Navigate to="/login" state={{ from: location, error: "Unknown role" }} replace />;
    }
    // Prevent redirection loop if they are already on their default path
    // or if the default path itself is what they're not allowed to access (which shouldn't happen with this logic).
    if (location.pathname === userDefaultDashboard) {
        // This scenario implies a configuration issue or they are on their default page
        // but somehow this specific ProtectedRoute instance (e.g. a more specific one further down)
        // still denies access. Fallback to a generic safe page.
        return <Navigate to="/dashboard/overview" state={{ from: location, error: "Access Denied Configuration" }} replace />;
    }
    return <Navigate to={userDefaultDashboard} state={{ from: location, error: "Unauthorized Access" }} replace />;
  }

  // User is authenticated and has the required role (or no specific role is required for this route segment)
  return <Outlet />;
};

export default ProtectedRoute;
