import { mockData } from '../../data/mockData';
import { useApiData } from './useApiData';

/**
 * Hook for fetching dashboard data
 * 
 * @param {Object} options - Additional options to pass to useQuery
 * @returns {Object} - The query result object from react-query
 */
export const useDashboardData = (options) => {
  return useApiData('/dashboard', 'dashboardData', mockData.dashboard, options);
};
