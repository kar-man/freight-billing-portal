import { useQuery } from '@tanstack/react-query';
import apiClient from '../../../api/client';
import { mockData } from '../../../data/mockData';

export const useDashboardData = () => {
  return useQuery({
    queryKey: ['dashboardData'],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get('/dashboard');
        return data;
      } catch (error) {
        // If the API request fails, return the mock data instead
        console.log('API request failed, using mock data instead:', error.message);
        return mockData.dashboard;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
