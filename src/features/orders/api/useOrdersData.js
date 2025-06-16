import useSWR from 'swr';
import { mockData } from '../../../data/mockData';

/**
 * Hook for fetching orders data using SWR
 * @returns {Object} Orders data and status
 */
export const useOrdersData = () => {
  const {
    data,
    error,
    isValidating,
    mutate
  } = useSWR('/orders', {
    fallbackData: mockData.orders,
    revalidateOnMount: false, // Don't revalidate on mount since we have fallback data
    revalidateOnFocus: false, // Don't revalidate when window regains focus
  });

  return {
    data: data || mockData.orders, // Ensure we always have data
    error,
    isLoading: false, // Override loading state since we have fallback data
    isError: !!error,
    isFetching: isValidating,
    refetch: mutate
  };
};
