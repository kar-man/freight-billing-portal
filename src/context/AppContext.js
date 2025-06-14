import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { ActionType } from '../types/context';

/**
 * @typedef {import('../types/context').AppState} AppState
 * @typedef {import('../types/context').AppContextValue} AppContextValue
 * @typedef {import('../types/context').Notification} Notification
 * @typedef {import('../types/context').UserPreferences} UserPreferences
 */

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

// Using ActionType enum from context.js

/**
 * @param {AppState} state
 * @param {Object} action
 * @returns {AppState}
 */
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UPDATE_DASHBOARD_DATA:
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          ...action.payload,
        },
      };
    case ActionType.UPDATE_ORDERS_DATA:
      return {
        ...state,
        orders: {
          ...state.orders,
          ...action.payload,
        },
      };
    case ActionType.UPDATE_INVOICES_DATA:
      return {
        ...state,
        invoices: {
          ...state.invoices,
          ...action.payload,
        },
      };
    case ActionType.UPDATE_CLIENTS_DATA:
      return {
        ...state,
        clients: {
          ...state.clients,
          ...action.payload,
        },
      };
    case ActionType.UPDATE_REPORTS_DATA:
      return {
        ...state,
        reports: {
          ...state.reports,
          ...action.payload,
        },
      };
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case ActionType.ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload],
      };
    case ActionType.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.payload
        ),
      };
    case ActionType.UPDATE_USER_PREFERENCES:
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
const AppContext = createContext(undefined);

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const updateDashboardData = (data) => {
    dispatch({ type: ActionType.UPDATE_DASHBOARD_DATA, payload: data });
  };

  const updateOrdersData = (data) => {
    dispatch({ type: ActionType.UPDATE_ORDERS_DATA, payload: data });
  };

  const updateInvoicesData = (data) => {
    dispatch({ type: ActionType.UPDATE_INVOICES_DATA, payload: data });
  };

  const updateClientsData = (data) => {
    dispatch({ type: ActionType.UPDATE_CLIENTS_DATA, payload: data });
  };

  const updateReportsData = (data) => {
    dispatch({ type: ActionType.UPDATE_REPORTS_DATA, payload: data });
  };

  const toggleTheme = () => {
    dispatch({ type: ActionType.TOGGLE_THEME });
  };

  const addNotification = (notification) => {
    const id = Date.now().toString();
    dispatch({
      type: ActionType.ADD_NOTIFICATION,
      payload: { id, ...notification },
    });
    return id;
  };

  const removeNotification = (id) => {
    dispatch({ type: ActionType.REMOVE_NOTIFICATION, payload: id });
  };

  const updateUserPreferences = (preferences) => {
    dispatch({
      type: ActionType.UPDATE_USER_PREFERENCES,
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

/**
 * @returns {AppContextValue}
 */
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
