import useSWR from 'swr';
import { mockData } from '../../../data/mockData';

/**
 * Hook for fetching dashboard data using SWR
 * @returns {Object} Dashboard data and status
 */
export const useDashboardData = () => {
  const {
    data,
    error,
    isValidating,
    mutate
  } = useSWR('/dashboard', {
    fallbackData: mockData.dashboard,
    revalidateOnMount: false, // Don't revalidate on mount since we have fallback data
    revalidateOnFocus: false, // Don't revalidate when window regains focus
  });

  return {
    data: data || mockData.dashboard, // Ensure we always have data
    error,
    isLoading: false, // Override loading state since we have fallback data
    isError: !!error,
    isFetching: isValidating,
    refetch: mutate
  };
};
