import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../api/client';
import { mockData } from '../../../data/mockData';

export const useReportsData = () => {
  return useQuery({
    queryKey: ['reportsData'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/reports');
        return data;
      } catch (error) {
        // If the API request fails, return the mock data instead
        console.log('API request failed, using mock data instead:', error.message);
        return mockData.reports;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
