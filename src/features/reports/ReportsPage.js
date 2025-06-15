import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, FileOutput, BarChart2, PieChart } from 'lucide-react';

import PageHeader from '../../components/layout/PageHeader';
import StatCard from '../../components/ui/StatCard';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import { useReportsData } from '../../api/hooks';
import { useReportsContext } from '../../context/ReportsContext';
import { containerVariants, itemVariants } from '../../utils/animationVariants';

const ReportsPage = () => {
    const { data, isLoading, error } = useReportsData();
    const { state, updateReportsData } = useReportsContext();

    // Update global state when data changes
    useEffect(() => {
        if (data) {
            updateReportsData(data);
        }
    }, [data, updateReportsData]);

    // Loading state
    if (isLoading) {
        return <LoadingState />;
    }

    // Error state
    if (error) {
        return <ErrorState title="Error loading reports data" message={error.message} />;
    }

    // Use data from global state or fallback to API data
    const safeData = state.reports || data || { 
        stats: [], 
        revenueTrends: [],
        orderStatusDistribution: [],
        topClients: []
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <PageHeader title="Reports & Analytics" subtitle="Comprehensive insights into freight billing operations." />
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                     <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" /><span>May 12 - Jun 11, 2025</span><ChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                    </button>
                    <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <FileOutput className="w-4 h-4 mr-2 text-blue-500" /><span>Export</span>
                    </button>
                </div>
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
                {safeData.stats.map(stat => (
                    <motion.div key={stat.title} variants={itemVariants}>
                        <StatCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8" variants={containerVariants}>
                <motion.div variants={itemVariants} className="lg:col-span-3 bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center"><BarChart2 className="w-5 h-5 mr-2 text-gray-400" />Revenue Trends</h3>
                        <div className="text-xs text-gray-500">Monthly revenue in thousands ($)</div>
                    </div>
                    <div className="h-64 flex items-end space-x-4 pt-4">
                        {safeData.revenueTrends.map(month => (
                            <div key={month.name} className="flex-1 flex flex-col items-center">
                                <p className="text-xs font-medium text-blue-600 mb-1">${(month.value * 1000).toLocaleString()}k</p>
                                <motion.div 
                                    className="w-full bg-blue-500 rounded-t-md hover:bg-blue-600 transition-colors" 
                                    style={{ minHeight: '4px' }}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${month.value * 40}px` }}
                                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                                />
                                <p className="text-xs text-gray-500 mt-2">{month.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center"><PieChart className="w-5 h-5 mr-2 text-gray-400" />Order Status Distribution</h3>
                    <div className="space-y-4 mt-6">
                        {safeData.orderStatusDistribution.map(status => (
                            <div key={status.name}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-gray-600">{status.name}</span>
                                    <span className="text-gray-500">{status.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <motion.div 
                                        className={`${status.color} h-2.5 rounded-full`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${status.percentage}%` }}
                                        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Performing Clients</h2>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                                <tr>
                                    <th scope="col" className="px-6 py-4">Client Name</th>
                                    <th scope="col" className="px-6 py-4">Total Revenue</th>
                                    <th scope="col" className="px-6 py-4">Total Orders</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {safeData.topClients.map((client) => (
                                    <tr key={client.name} className="bg-white hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{client.name}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-600">{client.amount}</td>
                                        <td className="px-6 py-4 text-sm font-medium text-gray-600">{client.orders}</td>
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

export default ReportsPage;
