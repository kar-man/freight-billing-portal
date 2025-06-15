import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardProvider } from './DashboardContext';
import { OrdersProvider } from './OrdersContext';
import { InvoicesProvider } from './InvoicesContext';
import { ClientsProvider } from './ClientsContext';
import { ReportsProvider } from './ReportsContext';
import { UIProvider } from './UIContext';
import { UserPreferencesProvider } from './UserPreferencesContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export const CombinedProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <UserPreferencesProvider>
          <DashboardProvider>
            <OrdersProvider>
              <InvoicesProvider>
                <ClientsProvider>
                  <ReportsProvider>
                    {children}
                  </ReportsProvider>
                </ClientsProvider>
              </InvoicesProvider>
            </OrdersProvider>
          </DashboardProvider>
        </UserPreferencesProvider>
      </UIProvider>
    </QueryClientProvider>
  );
};