import React from 'react';

const StatusBadge = ({ status }) => {
    const statusConfig = {
        'Delivered': 'bg-green-100 text-green-800', 'Paid': 'bg-green-100 text-green-800', 'Active': 'bg-green-100 text-green-800',
        'In Transit': 'bg-blue-100 text-blue-700',
        'Outstanding': 'bg-orange-100 text-orange-700', 'Pending': 'bg-orange-100 text-orange-700',
        'Cancelled': 'bg-red-100 text-red-700', 'Overdue': 'bg-red-100 text-red-700',
        'Draft': 'bg-gray-100 text-gray-700', 'Inactive': 'bg-gray-100 text-gray-700',
    };
    return <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${statusConfig[status]}`}>{status}</span>;
};

export default StatusBadge;