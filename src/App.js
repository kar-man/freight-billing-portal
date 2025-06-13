import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import OrdersPage from './pages/OrdersPage';
import InvoicesPage from './pages/InvoicesPage';
import ClientsPage from './pages/ClientsPage';
import ReportsPage from './pages/ReportsPage';
import { pageVariants, pageTransition } from './utils/animationVariants';

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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-sans antialiased">
            <Header activePage={activePage} setActivePage={setActivePage} isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            <main className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div key={activePage}>
                    {renderPage()}
                </div>
            </main>
        </div>
    );
}
