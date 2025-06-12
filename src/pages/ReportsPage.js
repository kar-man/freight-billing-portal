import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, FileOutput, BarChart2, PieChart, Users } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import { mockData } from '../data/mockData';
import { containerVariants, itemVariants } from '../utils/animationVariants';

const ReportsPage = () => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <PageHeader title="Reports & Analytics" subtitle="Comprehensive insights into freight billing operations." />
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                 <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 font-medium shadow-sm hover:bg-gray-50">
                    <Calendar className="w-4 h-4 mr-2" /><span>May 12 - Jun 11, 2025</span><ChevronDown className="w-4 h-4 ml-2" />
                </button>
                <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 font-medium shadow-sm hover:bg-gray-50">
                    <FileOutput className="w-4 h-4 mr-2" /><span>Export</span>
                </button>
            </div>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {mockData.reports.stats.map(stat => (
                <motion.div key={stat.title} variants={itemVariants}>
                    <StatCard {...stat} />
                </motion.div>
            ))}
        </motion.div>

        <motion.div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8" variants={containerVariants}>
            <motion.div variants={itemVariants} className="lg:col-span-3 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><BarChart2 className="w-5 h-5 mr-2 text-gray-400" />Revenue Trends</h3>
                <div className="h-64 flex items-end space-x-4 pt-4">
                    {mockData.reports.revenueTrends.map(month => (
                        <div key={month.name} className="flex-1 flex flex-col items-center">
                            <motion.div 
                                className="w-full bg-blue-500 rounded-t-md" 
                                initial={{ height: 0 }}
                                animate={{ height: `${month.value * 25}%` }}
                                transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
                            />
                            <p className="text-xs text-gray-500 mt-2">{month.name}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center"><PieChart className="w-5 h-5 mr-2 text-gray-400" />Order Status Distribution</h3>
                <div className="space-y-4 mt-6">
                    {mockData.reports.orderStatusDistribution.map(status => (
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
                        <thead className="text-xs text-gray-500 font-semibold uppercase border-b border-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-4">Client Name</th>
                                <th scope="col" className="px-6 py-4">Total Revenue</th>
                                <th scope="col" className="px-6 py-4">Total Orders</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockData.reports.topClients.map((client) => (
                                <tr key={client.name} className="bg-white hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{client.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{client.amount}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{client.orders}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

export default ReportsPage;