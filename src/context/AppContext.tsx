import React, { createContext, useContext, useReducer } from 'react';
import { mockData } from '../data/mockData';
import { 
  AppState, 
  AppContextValue, 
  AppProviderProps, 
  AppAction, 
  ActionType,
  Notification,
  UserPreferences
} from '../types/context';

// Initial state based on mockData
const initialState: AppState = {
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

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
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
const AppContext = createContext<AppContextValue | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const updateDashboardData = (data: any) => {
    dispatch({ type: ActionType.UPDATE_DASHBOARD_DATA, payload: data });
  };

  const updateOrdersData = (data: any) => {
    dispatch({ type: ActionType.UPDATE_ORDERS_DATA, payload: data });
  };

  const updateInvoicesData = (data: any) => {
    dispatch({ type: ActionType.UPDATE_INVOICES_DATA, payload: data });
  };

  const updateClientsData = (data: any) => {
    dispatch({ type: ActionType.UPDATE_CLIENTS_DATA, payload: data });
  };

  const updateReportsData = (data: any) => {
    dispatch({ type: ActionType.UPDATE_REPORTS_DATA, payload: data });
  };

  const toggleTheme = () => {
    dispatch({ type: ActionType.TOGGLE_THEME });
  };

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    dispatch({
      type: ActionType.ADD_NOTIFICATION,
      payload: { id, ...notification },
    });
    return id;
  };

  const removeNotification = (id: string) => {
    dispatch({ type: ActionType.REMOVE_NOTIFICATION, payload: id });
  };

  const updateUserPreferences = (preferences: Partial<UserPreferences>) => {
    dispatch({
      type: ActionType.UPDATE_USER_PREFERENCES,
      payload: preferences,
    });
  };

  // Value object to be provided to consumers
  const value: AppContextValue = {
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
export const useAppContext = (): AppContextValue => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
