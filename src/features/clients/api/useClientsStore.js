import { useEffect } from 'react';
import { useAppStore } from '../../../store';
import { useClientsData } from './useClientsData';

export const useClientsStore = () => {
  const { 
    data, 
    error, 
    isLoading, 
    refetch 
  } = useClientsData();

  const updateClientsData = useAppStore(state => state.updateClientsData);
  const clients = useAppStore(state => state.clients);
  const clientsError = useAppStore(state => state.clientsError);
  const isClientsLoading = useAppStore(state => state.isClientsLoading);

  // Update store when SWR data changes
  useEffect(() => {
    if (data) {
      updateClientsData(data);
    }
  }, [data, updateClientsData]);

  // Update store when SWR error changes
  useEffect(() => {
    if (error && !clientsError) {
      useAppStore.setState({ clientsError: error.message });
    }
  }, [error, clientsError]);

  // Update store when SWR loading state changes
  useEffect(() => {
    if (isClientsLoading !== isLoading) {
      useAppStore.setState({ isClientsLoading: isLoading });
    }
  }, [isLoading, isClientsLoading]);

  return {
    clients,
    error: clientsError,
    isLoading: isClientsLoading,
    refetch
  };
};
