# Store Documentation

## Store Structure

```javascript
const storeStructure = {
  // Dashboard state
  dashboard: {
    stats: [],
    recentActivity: [],
    // other dashboard data
  },
  isDashboardLoading: false,
  dashboardError: null,

  // Orders state
  orders: {
    allOrders: [],
    stats: [],
    // other orders data
  },
  isOrdersLoading: false,
  ordersError: null,

  // Invoices state
  invoices: {
    allInvoices: [],
    stats: [],
    // other invoices data
  },
  isInvoicesLoading: false,
  invoicesError: null,

  // Clients state
  clients: {
    allClients: [],
    stats: [],
    // other clients data
  },
  isClientsLoading: false,
  clientsError: null,

  // Reports state
  reports: {
    stats: [],
    // other reports data
  },
  isReportsLoading: false,
  reportsError: null,

  // UI state
  theme: 'light', // or 'dark'
  notifications: [
    {
      id: "1",
      title: "Example Notification",
      message: "This is an example notification",
      type: "info",
      timestamp: "2023-06-15T12:00:00Z"
    }
  ],

  // User preferences state
  userPreferences: {
    showWelcomeMessage: true,
    dashboardLayout: "default",
    // other preferences
  }
};
```

## Available Actions

### Dashboard Actions

- `fetchDashboard()`: Loads dashboard data from the API
- `updateDashboardData(data)`: Updates the dashboard data in the store

### Orders Actions

- `fetchOrders()`: Loads all orders from the API
- `updateOrdersData(data)`: Updates the orders data in the store

### Invoices Actions

- `fetchInvoices()`: Loads all invoices from the API
- `updateInvoicesData(data)`: Updates the invoices data in the store

### Clients Actions

- `fetchClients()`: Loads all clients from the API
- `updateClientsData(data)`: Updates the clients data in the store

### Reports Actions

- `fetchReports()`: Loads reports data from the API
- `updateReportsData(data)`: Updates the reports data in the store

### UI Actions

- `toggleTheme()`: Toggles between light and dark theme
- `addNotification(notification)`: Adds a new notification to the store
- `removeNotification(id)`: Removes a notification by ID

### User Preferences Actions

- `updateUserPreferences(preferences)`: Updates user preferences in the store

## Using the Store

### Basic Usage

```javascript
import { useAppStore } from '../store';

const MyComponent = () => {
  // Select only what you need from the store
  const clients = useAppStore((state) => state.clients);
  const isLoading = useAppStore((state) => state.isClientsLoading);
  const error = useAppStore((state) => state.clientsError);
  const fetchClients = useAppStore((state) => state.fetchClients);

  // Use the state and actions
  return (
    <div>
      {isLoading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState error={error} onRetry={fetchClients} />
      ) : (
        <ClientsList clients={clients.allClients} />
      )}
    </div>
  );
};
```

### Updating the Store

```javascript
import { useAppStore } from '../store';

const NotificationButton = () => {
  const addNotification = useAppStore((state) => state.addNotification);
  const removeNotification = useAppStore((state) => state.removeNotification);

  const handleClick = () => {
    const id = addNotification({
      title: 'Success',
      message: 'Operation completed successfully',
      type: 'success',
      timestamp: new Date().toISOString()
    });

    // Auto-remove after 3 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  return (
    <button onClick={handleClick}>
      Show Notification
    </button>
  );
};
```
