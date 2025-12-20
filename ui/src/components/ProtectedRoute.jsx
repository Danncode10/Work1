import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

/**
 * Component for protecting routes that require authentication
 * Redirects unauthenticated users to login page
 * Placeholder for future protected routes
 */
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  // Allow access to protected content for authenticated users
  return children;
};

export default ProtectedRoute;
