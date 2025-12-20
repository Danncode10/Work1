import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

/**
 * Component that redirects authenticated users away from auth pages
 * Wraps Login and Register components to prevent access when logged in
 */
const AuthRedirect = ({ children }) => {
  if (isAuthenticated()) {
    // Redirect authenticated users to home page
    return <Navigate to="/" replace />;
  }

  // Allow access to auth pages for unauthenticated users
  return children;
};

export default AuthRedirect;
