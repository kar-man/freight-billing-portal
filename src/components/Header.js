import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Menu, X } from 'lucide-react';

const Header = ({ activePage, setActivePage, isMenuOpen, setMenuOpen }) => {
    const navItems = ['Dashboard', 'Orders', 'Invoices', 'Clients', 'Reports'];
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-white" />
                        </div>
                        <div>
                           <h1 className="text-base font-bold text-gray-900">Janio</h1>
                           <p className="text-xs text-gray-500 -mt-1">Freight Billing Portal</p>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center justify-center">
                        {navItems.map(item => (
                            <button key={item} onClick={() => setActivePage(item.toLowerCase())}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    activePage === item.toLowerCase()
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}>
                                {item}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                         <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-150">
                             <User className="w-5 h-5" />
                         </button>
                         <div className="md:hidden">
                             <button onClick={() => setMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
                                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                             </button>
                         </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden">
                    <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navItems.map(item => (
                            <button key={item} onClick={() => { setActivePage(item.toLowerCase()); setMenuOpen(false); }}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                                    activePage === item.toLowerCase() ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                                }`}>
                                {item}
                            </button>
                        ))}
                    </nav>
                </motion.div>
            )}
            </AnimatePresence>
        </header>
    );
};

export default Header;