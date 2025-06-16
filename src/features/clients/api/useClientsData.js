import useSWR from 'swr';
import { mockData } from '../../../data/mockData';

/**
 * Hook for fetching clients data using SWR
 * @returns {Object} Clients data and status
 */
export const useClientsData = () => {
  const {
    data,
    error,
    isValidating,
    mutate
  } = useSWR('/clients', {
    fallbackData: mockData.clients,
    revalidateOnMount: false,
    revalidateOnFocus: false,
  });

  return {
    data: data || mockData.clients,
    error,
    isLoading: false,
    isError: !!error,
    isFetching: isValidating,
    refetch: mutate
  };
};
