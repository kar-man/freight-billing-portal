import { mockData } from '../../data/mockData';
import { useApiData } from './useApiData';

/**
 * Hook for fetching reports data
 * 
 * @param {Object} options - Additional options to pass to useQuery
 * @returns {Object} - The query result object from react-query
 */
export const useReportsData = (options) => {
  return useApiData('/reports', 'reportsData', mockData.reports, options);
};
