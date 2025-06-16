import useSWR from 'swr';
import { mockData } from '../../../data/mockData';

/**
 * Custom hook to fetch invoices data using SWR
 * @returns {Object} The SWR result object containing invoices data
 */
export const useInvoicesData = () => {
  const {
    data,
    error,
    isValidating,
    mutate
  } = useSWR('/invoices', {
    fallbackData: mockData.invoices,
    revalidateOnMount: false, // Don't revalidate on mount since we have fallback data
    revalidateOnFocus: false, // Don't revalidate when window regains focus
  });

  return {
    data: data || mockData.invoices, // Ensure we always have data
    error,
    isLoading: false, // Override loading state since we have fallback data
    isError: !!error,
    isFetching: isValidating,
    refetch: mutate
  };
};
