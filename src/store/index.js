/**
 * @file Main Zustand store for the application
 * @description This file contains the global state management for the application using Zustand.
 * The store is organized by feature (dashboard, orders, invoices, clients, reports)
 * with additional sections for UI state and user preferences.
 */

import { create } from 'zustand';
import { mockData } from '../data/mockData';
import apiClient from '../api/client';

/**
 * Main application store created with Zustand
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<StoreState>>}
 */
export const useAppStore = create((set) => ({
  // Dashboard state
  dashboard: mockData.dashboard,
  isDashboardLoading: false,
  dashboardError: null,

  /**
   * Fetches dashboard data from the API
   * @async
   * @function fetchDashboard
   * @returns {Promise<Object>} The dashboard data
   * @throws {Error} If the API request fails
   * @description Sets loading state, makes API request, updates store with response data,
   * and handles errors by setting error state and falling back to mock data
   */
  fetchDashboard: async () => {
    // Set loading state and clear any previous errors
    set({ isDashboardLoading: true, dashboardError: null });
    try {
      // Make API request
      const response = await apiClient.get('/dashboard');
      // Update store with response data
      set({ 
        dashboard: response.data, 
        isDashboardLoading: false 
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Handle error by setting error state and falling back to mock data
      set({ 
        dashboardError: error.message, 
        isDashboardLoading: false,
        // Fallback to mock data on error
        dashboard: mockData.dashboard
      });
      // Re-throw for component-level handling if needed
      throw error;
    }
  },

  updateDashboardData: (data) => set((state) => ({
    dashboard: {
      ...state.dashboard,
      ...data,
    },
  })),

  // Orders state
  orders: mockData.orders,
  isOrdersLoading: false,
  ordersError: null,

  fetchOrders: async () => {
    set({ isOrdersLoading: true, ordersError: null });
    try {
      const response = await apiClient.get('/orders');
      set({ 
        orders: response.data, 
        isOrdersLoading: false 
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching orders data:', error);
      set({ 
        ordersError: error.message, 
        isOrdersLoading: false,
        // Fallback to mock data on error
        orders: mockData.orders
      });
      throw error;
    }
  },

  updateOrdersData: (data) => set((state) => ({
    orders: {
      ...state.orders,
      ...data,
    },
  })),

  // Invoices state
  invoices: mockData.invoices,
  isInvoicesLoading: false,
  invoicesError: null,

  fetchInvoices: async () => {
    set({ isInvoicesLoading: true, invoicesError: null });
    try {
      const response = await apiClient.get('/invoices');
      set({ 
        invoices: response.data, 
        isInvoicesLoading: false 
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching invoices data:', error);
      set({ 
        invoicesError: error.message, 
        isInvoicesLoading: false,
        // Fallback to mock data on error
        invoices: mockData.invoices
      });
      throw error;
    }
  },

  updateInvoicesData: (data) => set((state) => ({
    invoices: {
      ...state.invoices,
      ...data,
    },
  })),

  // Clients state
  clients: mockData.clients,
  isClientsLoading: false,
  clientsError: null,

  fetchClients: async () => {
    set({ isClientsLoading: true, clientsError: null });
    try {
      const response = await apiClient.get('/clients');
      set({ 
        clients: response.data, 
        isClientsLoading: false 
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching clients data:', error);
      set({ 
        clientsError: error.message, 
        isClientsLoading: false,
        // Fallback to mock data on error
        clients: mockData.clients
      });
      throw error;
    }
  },

  updateClientsData: (data) => set((state) => ({
    clients: {
      ...state.clients,
      ...data,
    },
  })),

  // Reports state
  reports: mockData.reports,
  isReportsLoading: false,
  reportsError: null,

  fetchReports: async () => {
    set({ isReportsLoading: true, reportsError: null });
    try {
      const response = await apiClient.get('/reports');
      set({ 
        reports: response.data, 
        isReportsLoading: false 
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching reports data:', error);
      set({ 
        reportsError: error.message, 
        isReportsLoading: false,
        // Fallback to mock data on error
        reports: mockData.reports
      });
      throw error;
    }
  },

  updateReportsData: (data) => set((state) => ({
    reports: {
      ...state.reports,
      ...data,
    },
  })),

  // UI state
  theme: 'light',
  notifications: [],
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
  addNotification: (notification) => {
    const id = Date.now().toString();
    set((state) => ({
      notifications: [...state.notifications, { id, ...notification }],
    }));
    return id;
  },
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(
      (notification) => notification.id !== id
    ),
  })),

  // User preferences state
  userPreferences: {
    showWelcomeMessage: true,
    dashboardLayout: 'default',
  },
  updateUserPreferences: (preferences) => set((state) => ({
    userPreferences: {
      ...state.userPreferences,
      ...preferences,
    },
  })),
}));
