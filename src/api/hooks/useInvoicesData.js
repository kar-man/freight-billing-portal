import { mockData } from '../../data/mockData';
import { useApiData } from './useApiData';

/**
 * Hook for fetching invoices data
 * 
 * @param {Object} options - Additional options to pass to useQuery
 * @returns {Object} - The query result object from react-query
 */
export const useInvoicesData = (options) => {
  return useApiData('/invoices', 'invoicesData', mockData.invoices, options);
};
