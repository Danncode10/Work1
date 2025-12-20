/**
 * Authentication utility functions
 */

/**
 * Check if user is authenticated by verifying presence of access token
 * @returns {boolean} True if authenticated, false otherwise
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('access_token');
  return !!token; // Return true if token exists
};
