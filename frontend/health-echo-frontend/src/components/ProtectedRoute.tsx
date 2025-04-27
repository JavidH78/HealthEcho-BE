import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/hooks'; // Assuming hooks are set up like this
import { selectIsAuthenticated, selectAuthStatus } from '../features/auth/authSlice';

interface ProtectedRouteProps {
  // No specific props needed for now, but can be extended
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const authStatus = useAppSelector(selectAuthStatus);

  // Optional: Show a loading indicator while checking auth status
  if (authStatus === 'loading' || authStatus === 'idle') {
    // You might want a more sophisticated loading spinner here
    return <div>Loading...</div>;
  }

  // If authenticated, render the child route element
  // If not authenticated, redirect to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
