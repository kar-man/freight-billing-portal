import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';

// Initial state based on mockData
const initialState = {
  dashboard: mockData.dashboard,
  orders: mockData.orders,
  invoices: mockData.invoices,
  clients: mockData.clients,
  reports: mockData.reports,
  // UI state
  theme: 'light',
  notifications: [],
  userPreferences: {
    showWelcomeMessage: true,
    dashboardLayout: 'default',
  },
};

// Action types
export const ActionTypes = {
  UPDATE_DASHBOARD_DATA: 'UPDATE_DASHBOARD_DATA',
  UPDATE_ORDERS_DATA: 'UPDATE_ORDERS_DATA',
  UPDATE_INVOICES_DATA: 'UPDATE_INVOICES_DATA',
  UPDATE_CLIENTS_DATA: 'UPDATE_CLIENTS_DATA',
  UPDATE_REPORTS_DATA: 'UPDATE_REPORTS_DATA',
  TOGGLE_THEME: 'TOGGLE_THEME',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
  UPDATE_USER_PREFERENCES: 'UPDATE_USER_PREFERENCES',
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          ...action.payload,
        },
      };
    case ActionTypes.UPDATE_ORDERS_DATA:
      return {
        ...state,
        orders: {
          ...state.orders,
          ...action.payload,
        },
      };
    case ActionTypes.UPDATE_INVOICES_DATA:
      return {
        ...state,
        invoices: {
          ...state.invoices,
          ...action.payload,
        },
      };
    case ActionTypes.UPDATE_CLIENTS_DATA:
      return {
        ...state,
        clients: {
          ...state.clients,
          ...action.payload,
        },
      };
    case ActionTypes.UPDATE_REPORTS_DATA:
      return {
        ...state,
        reports: {
          ...state.reports,
          ...action.payload,
        },
      };
    case ActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case ActionTypes.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case ActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    case ActionTypes.UPDATE_USER_PREFERENCES:
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const updateDashboardData = (data) => {
    dispatch({ type: ActionTypes.UPDATE_DASHBOARD_DATA, payload: data });
  };

  const updateOrdersData = (data) => {
    dispatch({ type: ActionTypes.UPDATE_ORDERS_DATA, payload: data });
  };

  const updateInvoicesData = (data) => {
    dispatch({ type: ActionTypes.UPDATE_INVOICES_DATA, payload: data });
  };

  const updateClientsData = (data) => {
    dispatch({ type: ActionTypes.UPDATE_CLIENTS_DATA, payload: data });
  };

  const updateReportsData = (data) => {
    dispatch({ type: ActionTypes.UPDATE_REPORTS_DATA, payload: data });
  };

  const toggleTheme = () => {
    dispatch({ type: ActionTypes.TOGGLE_THEME });
  };

  const addNotification = (notification) => {
    const id = Date.now().toString();
    dispatch({
      type: ActionTypes.ADD_NOTIFICATION,
      payload: { id, ...notification },
    });
    return id;
  };

  const removeNotification = (id) => {
    dispatch({ type: ActionTypes.REMOVE_NOTIFICATION, payload: id });
  };

  const updateUserPreferences = (preferences) => {
    dispatch({
      type: ActionTypes.UPDATE_USER_PREFERENCES,
      payload: preferences,
    });
  };

  // Value object to be provided to consumers
  const value = {
    state,
    updateDashboardData,
    updateOrdersData,
    updateInvoicesData,
    updateClientsData,
    updateReportsData,
    toggleTheme,
    addNotification,
    removeNotification,
    updateUserPreferences,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};