import { useAppStore } from '../../store';
import { shallow } from 'zustand/shallow';

// Optimized selector for dashboard stats
export const useDashboardStats = () => 
  useAppStore(
    state => state.dashboard?.stats || [], 
    (a, b) => 
      a.length === b.length && 
      a.every((stat, i) => 
        stat.value === b[i].value && 
        stat.change === b[i].change
      )
  );

// Optimized selector for dashboard loading state
export const useDashboardLoadingState = () => 
  useAppStore(state => ({
    isLoading: state.isDashboardLoading,
    error: state.dashboardError
  }), shallow);

// Optimized selector for actionable orders
export const useActionableOrders = () =>
  useAppStore(state => state.dashboard?.actionableOrders || {}, shallow);

// Optimized selector for billing status
export const useBillingStatus = () =>
  useAppStore(state => state.dashboard?.billingStatus || {}, shallow);

// Optimized selector for live feed
export const useLiveFeed = () =>
  useAppStore(state => state.dashboard?.liveFeed || [], shallow);