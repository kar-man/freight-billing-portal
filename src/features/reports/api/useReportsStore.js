import { useEffect } from 'react';
import { useAppStore } from '../../../store';
import { useReportsData } from './useReportsData';

export const useReportsStore = () => {
  const { 
    data, 
    error, 
    isLoading, 
    refetch 
  } = useReportsData();

  const updateReportsData = useAppStore(state => state.updateReportsData);
  const reports = useAppStore(state => state.reports);
  const reportsError = useAppStore(state => state.reportsError);
  const isReportsLoading = useAppStore(state => state.isReportsLoading);

  // Update store when SWR data changes
  useEffect(() => {
    if (data) {
      updateReportsData(data);
    }
  }, [data, updateReportsData]);

  // Update store when SWR error changes
  useEffect(() => {
    if (error && !reportsError) {
      useAppStore.setState({ reportsError: error.message });
    }
  }, [error, reportsError]);

  // Update store when SWR loading state changes
  useEffect(() => {
    if (isReportsLoading !== isLoading) {
      useAppStore.setState({ isReportsLoading: isLoading });
    }
  }, [isLoading, isReportsLoading]);

  return {
    reports,
    error: reportsError,
    isLoading: isReportsLoading,
    refetch
  };
};
