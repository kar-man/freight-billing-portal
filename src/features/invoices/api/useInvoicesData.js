import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../api/client';
import { mockData } from '../../../data/mockData';

/**
 * Custom hook to fetch invoices data
 * @returns {Object} The useQuery result object containing invoices data
 */
export const useInvoicesData = () => {
  return useQuery({
    queryKey: ['invoicesData'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/invoices');
        return data;
      } catch (error) {
        // If the API request fails, return the mock data instead
        console.log('API request failed, using mock data instead:', error.message);
        return mockData.invoices;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
