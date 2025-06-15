import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import DashboardPage from './features/dashboard/DashboardPage';
import OrdersPage from './features/orders/OrdersPage';
import InvoicesPage from './features/invoices/InvoicesPage';
import ClientsPage from './features/clients/ClientsPage';
import ReportsPage from './features/reports/ReportsPage';
import { pageVariants, pageTransition } from './utils/animationVariants';

// Import context providers
import { DashboardProvider } from './context/DashboardContext';
import { OrdersProvider } from './context/OrdersContext';
import { InvoicesProvider } from './context/InvoicesContext';
import { ClientsProvider } from './context/ClientsContext';
import { ReportsProvider } from './context/ReportsContext';
import { UIProvider } from './context/UIContext';
import { UserPreferencesProvider } from './context/UserPreferencesContext';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Animated Page component to handle transitions for each page
const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
    const location = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            <main className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <AnimatePresence mode="wait" initial={false}>
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={
                            <AnimatedPage>
                                <DashboardPage />
                            </AnimatedPage>
                        } />
                        <Route path="/dashboard" element={
                            <AnimatedPage>
                                <DashboardPage />
                            </AnimatedPage>
                        } />
                        <Route path="/orders" element={
                            <AnimatedPage>
                                <OrdersPage />
                            </AnimatedPage>
                        } />
                        <Route path="/invoices" element={
                            <AnimatedPage>
                                <InvoicesPage />
                            </AnimatedPage>
                        } />
                        <Route path="/clients" element={
                            <AnimatedPage>
                                <ClientsPage />
                            </AnimatedPage>
                        } />
                        <Route path="/reports" element={
                            <AnimatedPage>
                                <ReportsPage />
                            </AnimatedPage>
                        } />
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
};

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <UIProvider>
                <UserPreferencesProvider>
                    <DashboardProvider>
                        <OrdersProvider>
                            <InvoicesProvider>
                                <ClientsProvider>
                                    <ReportsProvider>
                                        <BrowserRouter>
                                            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-sans antialiased">
                                                <AnimatedRoutes />
                                            </div>
                                        </BrowserRouter>
                                    </ReportsProvider>
                                </ClientsProvider>
                            </InvoicesProvider>
                        </OrdersProvider>
                    </DashboardProvider>
                </UserPreferencesProvider>
            </UIProvider>
        </QueryClientProvider>
    );
}
