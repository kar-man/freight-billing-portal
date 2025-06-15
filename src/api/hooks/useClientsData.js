import { mockData } from '../../data/mockData';
import { useApiData } from './useApiData';

/**
 * Hook for fetching clients data
 * 
 * @param {Object} options - Additional options to pass to useQuery
 * @returns {Object} - The query result object from react-query
 */
export const useClientsData = (options) => {
  return useApiData('/clients', 'clientsData', mockData.clients, options);
};
