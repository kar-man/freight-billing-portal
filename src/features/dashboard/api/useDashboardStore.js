import { useEffect } from 'react';
import { useAppStore } from '../../../store';
import { useDashboardData } from './useDashboardData';

export const useDashboardStore = () => {
  const { 
    data, 
    error, 
    isLoading, 
    refetch 
  } = useDashboardData();

  const updateDashboardData = useAppStore(state => state.updateDashboardData);
  const dashboard = useAppStore(state => state.dashboard);
  const dashboardError = useAppStore(state => state.dashboardError);
  const isDashboardLoading = useAppStore(state => state.isDashboardLoading);

  // Update store when SWR data changes
  useEffect(() => {
    if (data) {
      updateDashboardData(data);
    }
  }, [data, updateDashboardData]);

  // Update store when SWR error changes
  useEffect(() => {
    if (error && !dashboardError) {
      useAppStore.setState({ dashboardError: error.message });
    }
  }, [error, dashboardError]);

  // Update store when SWR loading state changes
  useEffect(() => {
    if (isDashboardLoading !== isLoading) {
      useAppStore.setState({ isDashboardLoading: isLoading });
    }
  }, [isLoading, isDashboardLoading]);

  return {
    dashboard,
    error: dashboardError,
    isLoading: isDashboardLoading,
    refetch
  };
};
