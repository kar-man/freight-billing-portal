import { ReactNode } from 'react';
import { Order } from './orders';
import { Invoice } from './invoices';
import { Client } from './clients';
import { StatCardProps } from './dashboard';

// Define the shape of the dashboard data
export interface DashboardData {
  stats: StatCardProps[];
  actionableOrders: {
    currentMonth: string;
    missingBillingAmount: {
      count: number;
      value: string;
      description: string;
      byMonth: {
        [key: string]: { count: number; value: string };
      };
    };
    missingSupportingDocs: {
      count: number;
      value: string;
      description: string;
      byMonth: {
        [key: string]: { count: number; value: string };
      };
    };
    missingPOD: {
      count: number;
      value: string;
      description: string;
      byMonth: {
        [key: string]: { count: number; value: string };
      };
    };
  };
  billingStatus: {
    currentMonth: string;
    readyToBill: {
      count: number;
      value: string;
      description: string;
      byMonth: {
        [key: string]: { count: number; value: string };
      };
    };
    draftInvoices: {
      count: number;
      value: string;
      description: string;
      byMonth: {
        [key: string]: { count: number; value: string };
      };
    };
    disputedInvoices: {
      count: number;
      value: string;
      description: string;
      byMonth: {
        [key: string]: { count: number; value: string };
      };
    };
  };
  liveFeed: {
    id: number;
    type: string;
    description: string;
    timestamp: string;
    icon: string;
    iconColor: string;
  }[];
  recentOrders: {
    id: string;
    client: string;
    status: string;
    amount: string;
    date: string;
  }[];
  revenueByMonth?: {
    month: string;
    revenue: number;
  }[];
}

// Define the shape of the reports data
export interface ReportsData {
  // Define the structure of reports data
  [key: string]: any;
}

// Define the shape of a notification
export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp?: number;
}

// Define the shape of user preferences
export interface UserPreferences {
  showWelcomeMessage: boolean;
  dashboardLayout: string;
  // Add other user preferences as needed
}

// Define the shape of the orders data
export interface OrdersData {
  stats: StatCardProps[];
  allOrders: Order[];
  list?: Order[]; // Optional for backward compatibility
}

// Define the shape of the invoices data
export interface InvoicesData {
  stats: StatCardProps[];
  allInvoices: Invoice[];
  list?: Invoice[]; // Optional for backward compatibility
}

// Define the shape of the clients data
export interface ClientsData {
  stats: StatCardProps[];
  allClients: Client[];
  list?: Client[]; // Optional for backward compatibility
}

// Define the shape of the application state
export interface AppState {
  dashboard: DashboardData;
  orders: OrdersData;
  invoices: InvoicesData;
  clients: ClientsData;
  reports: ReportsData;
  theme: 'light' | 'dark';
  notifications: Notification[];
  userPreferences: UserPreferences;
}

// Define the shape of the context value
export interface AppContextValue {
  state: AppState;
  updateDashboardData: (data: Partial<DashboardData>) => void;
  updateOrdersData: (data: Partial<OrdersData>) => void;
  updateInvoicesData: (data: Partial<InvoicesData>) => void;
  updateClientsData: (data: Partial<ClientsData>) => void;
  updateReportsData: (data: Partial<ReportsData>) => void;
  toggleTheme: () => void;
  addNotification: (notification: Omit<Notification, 'id'>) => string;
  removeNotification: (id: string) => void;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
}

// Define the props for the AppProvider component
export interface AppProviderProps {
  children: ReactNode;
}

// Define action types
export enum ActionType {
  UPDATE_DASHBOARD_DATA = 'UPDATE_DASHBOARD_DATA',
  UPDATE_ORDERS_DATA = 'UPDATE_ORDERS_DATA',
  UPDATE_INVOICES_DATA = 'UPDATE_INVOICES_DATA',
  UPDATE_CLIENTS_DATA = 'UPDATE_CLIENTS_DATA',
  UPDATE_REPORTS_DATA = 'UPDATE_REPORTS_DATA',
  TOGGLE_THEME = 'TOGGLE_THEME',
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
  UPDATE_USER_PREFERENCES = 'UPDATE_USER_PREFERENCES',
}

// Define the shape of actions
export type AppAction =
  | { type: ActionType.UPDATE_DASHBOARD_DATA; payload: Partial<DashboardData> }
  | { type: ActionType.UPDATE_ORDERS_DATA; payload: Partial<OrdersData> }
  | { type: ActionType.UPDATE_INVOICES_DATA; payload: Partial<InvoicesData> }
  | { type: ActionType.UPDATE_CLIENTS_DATA; payload: Partial<ClientsData> }
  | { type: ActionType.UPDATE_REPORTS_DATA; payload: Partial<ReportsData> }
  | { type: ActionType.TOGGLE_THEME }
  | { type: ActionType.ADD_NOTIFICATION; payload: Notification }
  | { type: ActionType.REMOVE_NOTIFICATION; payload: string }
  | { type: ActionType.UPDATE_USER_PREFERENCES; payload: Partial<UserPreferences> };
