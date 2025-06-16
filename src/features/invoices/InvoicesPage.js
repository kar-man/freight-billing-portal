import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

import PageHeader from '../../components/layout/PageHeader';
import FilterControls from '../../components/filters/FilterControls';
import StatCard from '../../components/ui/StatCard';
import StatusBadge from '../../components/ui/StatusBadge';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import { useInvoicesData } from './api/useInvoicesData';
import { containerVariants, itemVariants, noFadeItemVariants } from '../../utils/animationVariants';

const InvoicesPage = () => {
    const { data: invoices, isLoading, error, refetch } = useInvoicesData();

    // Loading state
    if (isLoading) {
        return <LoadingState />;
    }

    // Error state
    if (error) {
        return <ErrorState 
            title="Error loading invoices data" 
            message={error} 
            onRetry={refetch}
        />;
    }

    // Use data from store with fallback
    const safeData = invoices || { 
        stats: [], 
        allInvoices: [] 
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            <motion.div variants={itemVariants}>
                <PageHeader title="Invoice Management" subtitle="Manage all billing and invoices." />
            </motion.div>
            <motion.div variants={noFadeItemVariants}>
                <FilterControls searchPlaceholder="Search invoices by ID, client, or amount..." filterLabel="All Invoices" />
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
                {safeData.stats.map(stat => (
                    <motion.div key={stat.title} variants={itemVariants}>
                        <StatCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={itemVariants} className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">All Invoices</h2>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Invoice #</th>
                                    <th scope="col" className="px-6 py-4">Client</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4">Amount</th>
                                    <th scope="col" className="px-6 py-4">Due Date</th>
                                    <th scope="col" className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {safeData.allInvoices.map(invoice => (
                                    <tr key={invoice.id} className="bg-white hover:bg-gray-50 transition-colors duration-150">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{invoice.id}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-600">{invoice.client}</td>
                                        <td className="px-6 py-4 text-sm"><StatusBadge status={invoice.status} /></td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-800">{invoice.amount}</td>
                                        <td className={`px-6 py-4 text-sm font-medium text-gray-600 ${invoice.overdue ? 'text-red-700' : ''}`}>{invoice.dueDate}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex justify-end">
                                                <button className="flex items-center font-medium text-gray-600 hover:text-gray-900">
                                                    <Download className="w-4 h-4 mr-2" /> Download
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default InvoicesPage;
