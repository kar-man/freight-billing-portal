/**
 * @file Main Zustand store for the application
 * @description This file contains the global state management for client-side state only.
 * Server state is managed by SWR hooks directly.
 * The store is focused on UI state, user preferences, and other client-side state.
 */

import { create } from 'zustand';

/**
 * Main application store created with Zustand
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<StoreState>>}
 */
export const useAppStore = create((set) => ({

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

  // Filters state (example of client-side state)
  filters: {
    dateRange: 'last30days',
    status: 'all',
    sortBy: 'date',
    sortOrder: 'desc',
  },
  updateFilters: (newFilters) => set((state) => ({
    filters: {
      ...state.filters,
      ...newFilters,
    },
  })),
  resetFilters: () => set({
    filters: {
      dateRange: 'last30days',
      status: 'all',
      sortBy: 'date',
      sortOrder: 'desc',
    }
  }),
}));
