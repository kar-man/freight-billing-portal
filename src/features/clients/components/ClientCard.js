import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';

import StatusBadge from '../../../components/common/StatusBadge';

const ClientCard = ({ client }) => (
    <motion.div className="bg-white/60 backdrop-blur-xl p-6 rounded-3xl shadow-xl shadow-gray-900/10 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col border border-white/20">
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gray-200/80 rounded-full flex items-center justify-center font-bold text-gray-600 text-lg shadow-sm">
                {client.initials}
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.industry} • {client.location}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-white/70 transition-all">
                <MoreHorizontal className="w-5 h-5" />
            </button>
        </div>
        <div className="mt-4 flex items-center">
            <StatusBadge status={client.status} />
        </div>
        <div className="mt-6 pt-4 border-t border-white/20 flex-grow flex items-end justify-between text-sm">
            <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="font-medium text-gray-800">{client.totalOrders}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="font-medium text-gray-800">{client.totalRevenue}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Last Order</p>
                <p className="font-medium text-gray-800">{client.lastOrder}</p>
            </div>
        </div>
    </motion.div>
);

export default ClientCard;
