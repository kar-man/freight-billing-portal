import { useQuery } from '@tanstack/react-query';
import apiClient from '../client';

/**
 * Generic hook for fetching API data with consistent error handling and caching
 * 
 * @param {string} endpoint - The API endpoint to fetch data from
 * @param {string|Array} queryKey - The query key for react-query caching
 * @param {Object} mockFallback - Mock data to use if the API request fails
 * @param {Object} options - Additional options to pass to useQuery
 * @returns {Object} - The query result object from react-query
 */
export const useApiData = (endpoint, queryKey, mockFallback, options = {}) => {
  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get(endpoint);
        return data;
      } catch (error) {
        // In production, you might want to log to a service like Sentry
        console.error(`API request to ${endpoint} failed:`, error);
        
        // For production, consider showing an error UI instead of silently falling back
        if (process.env.NODE_ENV === 'production') {
          throw error; // Let error boundaries catch this
        }
        
        // Only use mock data in development
        console.log('Using mock data for development');
        return mockFallback;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options
  });
};