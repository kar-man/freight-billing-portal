import { useEffect } from 'react';
import { useAppStore } from '../../../store';
import { useInvoicesData } from './useInvoicesData';

export const useInvoicesStore = () => {
  const { 
    data, 
    error, 
    isLoading, 
    refetch 
  } = useInvoicesData();

  const updateInvoicesData = useAppStore(state => state.updateInvoicesData);
  const invoices = useAppStore(state => state.invoices);
  const invoicesError = useAppStore(state => state.invoicesError);
  const isInvoicesLoading = useAppStore(state => state.isInvoicesLoading);

  // Update store when SWR data changes
  useEffect(() => {
    if (data) {
      updateInvoicesData(data);
    }
  }, [data, updateInvoicesData]);

  // Update store when SWR error changes
  useEffect(() => {
    if (error && !invoicesError) {
      useAppStore.setState({ invoicesError: error.message });
    }
  }, [error, invoicesError]);

  // Update store when SWR loading state changes
  useEffect(() => {
    if (isInvoicesLoading !== isLoading) {
      useAppStore.setState({ isInvoicesLoading: isLoading });
    }
  }, [isLoading, isInvoicesLoading]);

  return {
    invoices,
    error: invoicesError,
    isLoading: isInvoicesLoading,
    refetch
  };
};
