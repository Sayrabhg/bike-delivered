import { useSelector } from 'react-redux';

/**
 * Custom hook to get authentication state
 * @returns {object} Auth state and helper methods
 */
export const useAuth = () => {
  const authState = useSelector(state => state.auth);
  
  return {
    user: authState.user,
    token: authState.token,
    isAuthenticated: authState.isAuthenticated,
    loading: authState.loading,
    error: authState.error,
  };
};

export default useAuth;
