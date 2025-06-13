import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import FilterControls from '../components/FilterControls';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import { mockData } from '../data/mockData';
import { containerVariants, itemVariants } from '../utils/animationVariants';

const OrdersPage = () => ( 
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants}>
            <PageHeader title="Order Management" subtitle="Track and manage all logistics orders." />
            <FilterControls searchPlaceholder="Search orders by ID, client, or status..." filterLabel="All Orders" />
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {mockData.orders.stats.map(stat => (
                <motion.div key={stat.title} variants={itemVariants}>
                    <StatCard {...stat} />
                </motion.div>
            ))}
        </motion.div>
        <motion.div variants={itemVariants} className="mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">All Orders</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-xs font-semibold text-gray-500 uppercase border-b border-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-4">Order ID</th>
                                <th scope="col" className="px-6 py-4">Client</th>
                                <th scope="col" className="px-6 py-4">Status</th>
                                <th scope="col" className="px-6 py-4">Amount</th>
                                <th scope="col" className="px-6 py-4">Date</th>
                                <th scope="col" className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockData.orders.allOrders.map((order, index) => (
                                <tr key={`${order.id}-${index}`} className="bg-white hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{order.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">{order.client}</td>
                                    <td className="px-6 py-4 text-sm"><StatusBadge status={order.status} /></td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.amount}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-600">{order.date}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div className="flex justify-end">
                                            <button className="flex items-center font-medium text-gray-600 hover:text-gray-900">
                                                <Eye className="w-4 h-4 mr-2" /> View
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

export default OrdersPage;