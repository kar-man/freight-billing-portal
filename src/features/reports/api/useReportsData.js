import useSWR from 'swr';
import { mockData } from '../../../data/mockData';

/**
 * Hook for fetching reports data using SWR
 * @returns {Object} Reports data and status
 */
export const useReportsData = () => {
  const {
    data,
    error,
    isValidating,
    mutate
  } = useSWR('/reports', {
    fallbackData: mockData.reports,
    revalidateOnMount: false, // Don't revalidate on mount since we have fallback data
    revalidateOnFocus: false, // Don't revalidate when window regains focus
  });

  return {
    data: data || mockData.reports, // Ensure we always have data
    error,
    isLoading: false, // Override loading state since we have fallback data
    isError: !!error,
    isFetching: isValidating,
    refetch: mutate
  };
};
