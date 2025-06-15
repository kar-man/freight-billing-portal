import React from 'react';
import { useAppStore } from '../../store';

const GlobalStateDemo = () => {
  // Select UI state and actions from the store
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const addNotification = useAppStore((state) => state.addNotification);
  const removeNotification = useAppStore((state) => state.removeNotification);
  const notifications = useAppStore((state) => state.notifications);

  // Select data from the store
  const dashboard = useAppStore((state) => state.dashboard);
  const orders = useAppStore((state) => state.orders);
  const invoices = useAppStore((state) => state.invoices);
  const clients = useAppStore((state) => state.clients);
  const reports = useAppStore((state) => state.reports);

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
        <p className="text-sm text-gray-600 mb-2">Current theme: <span className="font-medium">{theme}</span></p>
        <button 
          onClick={toggleTheme}
          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
        >
          Toggle Theme
        </button>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Notifications: <span className="font-medium">{notifications.length}</span></p>
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
          <li>Dashboard Stats: {dashboard?.stats?.length || 0} items</li>
          <li>Orders: {orders?.allOrders?.length || 0} items</li>
          <li>Invoices: {invoices?.allInvoices?.length || 0} items</li>
          <li>Clients: {clients?.allClients?.length || 0} items</li>
          <li>Reports: {reports?.stats?.length || 0} stats</li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalStateDemo;
