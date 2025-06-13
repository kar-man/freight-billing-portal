import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Menu, X } from 'lucide-react';

const Header = ({ activePage, setActivePage, isMenuOpen, setMenuOpen }) => {
    const navItems = ['Dashboard', 'Orders', 'Invoices', 'Clients', 'Reports'];
    return (
        <header className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-sm shadow-gray-900/5">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-md shadow-gray-200/50 border border-gray-200/50">
                            <img 
                                src="/assets/Janio-icon white.png" 
                                alt="Janio Logo" 
                                className="w-6 h-6 object-contain filter invert"
                            />
                        </div>
                        <div>
                           <h1 className="text-xl font-bold text-gray-900">Janio</h1>
                           <p className="text-sm font-normal text-gray-500 -mt-1">Freight Billing Portal</p>
                        </div>
                    </div>
                    <nav className="hidden md:flex items-center justify-center space-x-2">
                        {navItems.map(item => (
                            <button key={item} onClick={() => setActivePage(item.toLowerCase())}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    activePage === item.toLowerCase()
                                        ? 'bg-gray-900 text-white shadow-md shadow-gray-900/20'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/80 hover:backdrop-blur-lg hover:shadow-md hover:shadow-gray-900/15 hover:scale-95 transition-all duration-200'
                                }`}>
                                {item}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4">
                         <button className="p-2 rounded-full text-gray-500 hover:bg-white/80 hover:text-gray-700 hover:backdrop-blur-lg hover:shadow-md hover:shadow-gray-900/15 hover:scale-95 transition-all duration-200">
                             <User className="w-5 h-5" />
                         </button>
                         <div className="md:hidden">
                             <button onClick={() => setMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-500 hover:bg-white/80 hover:text-gray-700 hover:backdrop-blur-lg hover:shadow-md hover:shadow-gray-900/15 hover:scale-95 transition-all duration-200">
                                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                             </button>
                         </div>
                    </div>
                </div>
            </div>
            <AnimatePresence>
            {isMenuOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden">
                    <nav className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-md shadow-gray-900/5">
                         {navItems.map(item => (
                            <button key={item} onClick={() => { setActivePage(item.toLowerCase()); setMenuOpen(false); }}
                                className={`block w-full text-left px-3 py-2 rounded-xl text-base font-medium ${
                                    activePage === item.toLowerCase() ? 'bg-gray-900 text-white shadow-sm shadow-gray-900/20' : 'text-gray-600 hover:text-gray-800 hover:bg-white/80 hover:backdrop-blur-lg hover:shadow-md hover:shadow-gray-900/15 hover:scale-95 transition-all duration-200'
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