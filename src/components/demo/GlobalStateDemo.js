import React from 'react';
import { useUIContext } from '../../context/UIContext';
import { useDashboardContext } from '../../context/DashboardContext';
import { useOrdersContext } from '../../context/OrdersContext';
import { useInvoicesContext } from '../../context/InvoicesContext';
import { useClientsContext } from '../../context/ClientsContext';
import { useReportsContext } from '../../context/ReportsContext';

const GlobalStateDemo = () => {
  const { state: uiState, toggleTheme, addNotification, removeNotification } = useUIContext();
  const { state: dashboardState } = useDashboardContext();
  const { state: ordersState } = useOrdersContext();
  const { state: invoicesState } = useInvoicesContext();
  const { state: clientsState } = useClientsContext();
  const { state: reportsState } = useReportsContext();

  const handleAddNotification = () => {
    const id = addNotification({
      title: 'Test Notification',
      message: 'This is a test notification from the global state.',
      type: 'info',
      timestamp: new Date().toISOString(),
    });

    // Auto-remove after 3 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Global State Demo</h3>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Current theme: <span className="font-medium">{uiState.theme}</span></p>
        <button 
          onClick={toggleTheme}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
        >
          Toggle Theme
        </button>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Notifications: <span className="font-medium">{uiState.notifications.length}</span></p>
        <button 
          onClick={handleAddNotification}
          className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
        >
          Add Test Notification
        </button>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Data Summary:</p>
        <ul className="text-xs text-gray-500 space-y-1">
          <li>Dashboard Stats: {dashboardState?.stats?.length || 0} items</li>
          <li>Orders: {ordersState?.allOrders?.length || 0} items</li>
          <li>Invoices: {invoicesState?.allInvoices?.length || 0} items</li>
          <li>Clients: {clientsState?.allClients?.length || 0} items</li>
          <li>Reports: {reportsState?.stats?.length || 0} stats</li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalStateDemo;
