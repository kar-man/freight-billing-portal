import { mockData } from '../../data/mockData';
import { useApiData } from './useApiData';

/**
 * Hook for fetching orders data
 * 
 * @param {Object} options - Additional options to pass to useQuery
 * @returns {Object} - The query result object from react-query
 */
export const useOrdersData = (options) => {
  return useApiData('/orders', 'ordersData', mockData.orders, options);
};
