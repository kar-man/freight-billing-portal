# API Hooks Documentation

This document provides an overview of the API hooks used in the application for data fetching with SWR.

## Client Hooks

### `useClientsData()`

Fetches clients data from the API.

```javascript
const { 
  data,         // Raw API response
  clients,      // Array of client objects
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useClientsData();
```

### `useClientDetails(clientId)`

Fetches details for a specific client.

```javascript
const {
  data,         // Raw API response
  client,       // Client object
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useClientDetails(clientId);
```

## Order Hooks

### `useOrdersData()`

Fetches orders data from the API.

```javascript
const {
  data,         // Raw API response
  orders,       // Array of order objects
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useOrdersData();
```

### `useOrderDetails(orderId)`

Fetches details for a specific order.

```javascript
const {
  data,         // Raw API response
  order,        // Order object
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useOrderDetails(orderId);
```

## Invoice Hooks

### `useInvoicesData()`

Fetches invoices data from the API.

```javascript
const {
  data,         // Raw API response
  invoices,     // Array of invoice objects
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useInvoicesData();
```

### `useInvoiceDetails(invoiceId)`

Fetches details for a specific invoice.

```javascript
const {
  data,         // Raw API response
  invoice,      // Invoice object
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useInvoiceDetails(invoiceId);
```

## Dashboard Hooks

### `useDashboardData()`

Fetches dashboard data from the API.

```javascript
const {
  data,         // Raw API response
  dashboard,    // Dashboard data object
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useDashboardData();
```

## Reports Hooks

### `useReportsData()`

Fetches reports data from the API.

```javascript
const {
  data,         // Raw API response
  reports,      // Reports data object
  isLoading,    // Boolean loading state
  isError,      // Boolean error state
  error,        // Error object if any
  mutate        // Function to manually refresh data
} = useReportsData();
```

## Integration with Zustand

The API hooks are integrated with the Zustand store using custom hooks that synchronize the SWR data with the store. For example:

```javascript
// src/features/clients/api/useClientsStore.js
import { useEffect } from 'react';
import { useAppStore } from '../../../store';
import { useClientsData } from './useClientsData';

export const useClientsStore = () => {
  const { 
    data, 
    error, 
    isLoading, 
    isError, 
    mutate 
  } = useClientsData();
  
  const updateClientsData = useAppStore(state => state.updateClientsData);
  const clients = useAppStore(state => state.clients);
  const clientsError = useAppStore(state => state.clientsError);
  const isClientsLoading = useAppStore(state => state.isClientsLoading);
  
  // Update store when SWR data changes
  useEffect(() => {
    if (data) {
      updateClientsData(data);
    }
  }, [data, updateClientsData]);
  
  // Update store when SWR error changes
  useEffect(() => {
    if (error && !clientsError) {
      useAppStore.setState({ clientsError: error.message });
    }
  }, [error, clientsError]);
  
  // Update store when SWR loading state changes
  useEffect(() => {
    if (isClientsLoading !== isLoading) {
      useAppStore.setState({ isClientsLoading: isLoading });
    }
  }, [isLoading, isClientsLoading]);
  
  return {
    clients,
    error: clientsError,
    isLoading: isClientsLoading,
    refetch: mutate
  };
};
```

This pattern ensures that data is fetched using SWR and then synchronized with the Zustand store, providing the benefits of both libraries.