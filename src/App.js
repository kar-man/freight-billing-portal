import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import DashboardPage from './features/dashboard/DashboardPage';
import OrdersPage from './features/orders/OrdersPage';
import InvoicesPage from './features/invoices/InvoicesPage';
import ClientsPage from './features/clients/ClientsPage';
import ReportsPage from './features/reports/ReportsPage';
import { pageVariants, pageTransition } from './utils/animationVariants';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export default function App() {
    const [activePage, setActivePage] = useState('dashboard');
    const [isMenuOpen, setMenuOpen] = useState(false);

    const renderPage = () => {
        switch (activePage) {
            case 'dashboard': return <DashboardPage />;
            case 'orders': return <OrdersPage />;
            case 'invoices': return <InvoicesPage />;
            case 'clients': return <ClientsPage />;
            case 'reports': return <ReportsPage />;
            default: return <DashboardPage />;
        }
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-sans antialiased">
                <Header activePage={activePage} setActivePage={setActivePage} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
                <main className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePage}
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            {renderPage()}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </QueryClientProvider>
    );
}
