import { useEffect } from 'react';
import { useAppStore } from '../../../store';
import { useOrdersData } from './useOrdersData';

export const useOrdersStore = () => {
  const { 
    data, 
    error, 
    isLoading, 
    refetch 
  } = useOrdersData();

  const updateOrdersData = useAppStore(state => state.updateOrdersData);
  const orders = useAppStore(state => state.orders);
  const ordersError = useAppStore(state => state.ordersError);
  const isOrdersLoading = useAppStore(state => state.isOrdersLoading);

  // Update store when SWR data changes
  useEffect(() => {
    if (data) {
      updateOrdersData(data);
    }
  }, [data, updateOrdersData]);

  // Update store when SWR error changes
  useEffect(() => {
    if (error && !ordersError) {
      useAppStore.setState({ ordersError: error.message });
    }
  }, [error, ordersError]);

  // Update store when SWR loading state changes
  useEffect(() => {
    if (isOrdersLoading !== isLoading) {
      useAppStore.setState({ isOrdersLoading: isLoading });
    }
  }, [isLoading, isOrdersLoading]);

  return {
    orders,
    error: ordersError,
    isLoading: isOrdersLoading,
    refetch
  };
};
