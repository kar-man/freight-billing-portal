import React from 'react';
import { Status } from '../types/common';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const statusConfig: Record<Status, string> = {
        'Delivered': 'bg-green-100/80 text-green-800 border border-green-200/30', 
        'Paid': 'bg-green-100/80 text-green-800 border border-green-200/30', 
        'Active': 'bg-green-100/80 text-green-800 border border-green-200/30',
        'In Transit': 'bg-blue-100/80 text-blue-700 border border-blue-200/30',
        'Outstanding': 'bg-orange-100/80 text-orange-700 border border-orange-200/30', 
        'Pending': 'bg-orange-100/80 text-orange-700 border border-orange-200/30',
        'Cancelled': 'bg-red-100/80 text-red-700 border border-red-200/30', 
        'Overdue': 'bg-red-100/80 text-red-700 border border-red-200/30',
        'Draft': 'bg-gray-100/80 text-gray-700 border border-gray-200/30', 
        'Inactive': 'bg-gray-100/80 text-gray-700 border border-gray-200/30',
        'Pricing': 'bg-blue-100/80 text-blue-600 border border-blue-200/30',
        'Operations': 'bg-blue-100/80 text-blue-600 border border-blue-200/30',
    };
    return <span className={`px-2.5 py-1 text-xs font-medium rounded-full shadow-sm backdrop-blur-sm ${statusConfig[status]}`}>{status}</span>;
};

export default StatusBadge;