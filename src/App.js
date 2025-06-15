import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/layout/Header';
import DashboardPage from './features/dashboard/DashboardPage';
import OrdersPage from './features/orders/OrdersPage';
import InvoicesPage from './features/invoices/InvoicesPage';
import ClientsPage from './features/clients/ClientsPage';
import ReportsPage from './features/reports/ReportsPage';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { pageVariants, pageTransition } from './utils/animationVariants';
import { CombinedProvider } from './context/CombinedProvider';

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
                            <ErrorBoundary fallbackMessage="Dashboard is temporarily unavailable">
                                <AnimatedPage>
                                    <DashboardPage />
                                </AnimatedPage>
                            </ErrorBoundary>
                        } />
                        <Route path="/dashboard" element={
                            <ErrorBoundary fallbackMessage="Dashboard is temporarily unavailable">
                                <AnimatedPage>
                                    <DashboardPage />
                                </AnimatedPage>
                            </ErrorBoundary>
                        } />
                        <Route path="/orders" element={
                            <ErrorBoundary fallbackMessage="Orders page is temporarily unavailable">
                                <AnimatedPage>
                                    <OrdersPage />
                                </AnimatedPage>
                            </ErrorBoundary>
                        } />
                        <Route path="/invoices" element={
                            <ErrorBoundary fallbackMessage="Invoices page is temporarily unavailable">
                                <AnimatedPage>
                                    <InvoicesPage />
                                </AnimatedPage>
                            </ErrorBoundary>
                        } />
                        <Route path="/clients" element={
                            <ErrorBoundary fallbackMessage="Clients page is temporarily unavailable">
                                <AnimatedPage>
                                    <ClientsPage />
                                </AnimatedPage>
                            </ErrorBoundary>
                        } />
                        <Route path="/reports" element={
                            <ErrorBoundary fallbackMessage="Reports page is temporarily unavailable">
                                <AnimatedPage>
                                    <ReportsPage />
                                </AnimatedPage>
                            </ErrorBoundary>
                        } />
                    </Routes>
                </AnimatePresence>
            </main>
        </>
    );
};

export default function App() {
    return (
        <CombinedProvider>
            <BrowserRouter>
                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-sans antialiased">
                    <AnimatedRoutes />
                </div>
            </BrowserRouter>
        </CombinedProvider>
    );
}
