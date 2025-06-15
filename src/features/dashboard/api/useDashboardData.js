import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { mockData } from '../../../data/mockData';

export const useDashboardData = () => {
  const {
    data: swrData,
    error,
    isLoading,
    isValidating,
    mutate
  } = useSWR('/dashboard', {
    dedupingInterval: 5 * 60 * 1000, // 5 minutes (similar to staleTime)
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  // State to hold the final data (either from SWR or mockFallback)
  const [data, setData] = useState(null);
  const [processedError, setProcessedError] = useState(null);

  useEffect(() => {
    if (swrData) {
      setData(swrData);
      setProcessedError(null);
    } else if (error) {
      // If the API request fails, return the mock data instead
      setData(mockData.dashboard);
      // Clear the error since we're using mock data
      setProcessedError(null);
    }
  }, [swrData, error]);

  return {
    data,
    error: processedError,
    isLoading,
    isError: !!processedError,
    isFetching: isValidating,
    refetch: mutate
  };
};
