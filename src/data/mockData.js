import { 
    ShoppingCart, FileText, FileCheck2, DollarSign, 
    PackageCheck, Truck, Clock, PackageX, AlertCircle, 
    Users, TrendingUp, Package2
} from 'lucide-react';

/**
 * @typedef {import('../types/common').Status} Status
 * @typedef {import('../types/orders').Order} Order
 * @typedef {import('../types/invoices').Invoice} Invoice
 * @typedef {import('../types/clients').Client} Client
 * @typedef {import('../types/context').OrdersData} OrdersData
 * @typedef {import('../types/context').InvoicesData} InvoicesData
 * @typedef {import('../types/context').ClientsData} ClientsData
 */

export const mockData = {
    dashboard: {
        stats: [
            { title: 'Total Orders', value: '1,247', trend: { value: '12.5%', isPositive: true }, icon: Package2, iconColor: 'blue' },
            { title: 'Outstanding Invoices', value: '$456,780', trend: { value: '8.2%', isPositive: false }, icon: FileText, iconColor: 'orange' },
            { title: 'Paid Invoices', value: '$2,847,650', trend: { value: '15.3%', isPositive: true }, icon: FileCheck2, iconColor: 'green' },
            { title: 'Revenue', value: '$2,847,650', trend: { value: '18.7%', isPositive: true }, icon: DollarSign, iconColor: 'purple' },
        ],
        actionableOrders: {
            currentMonth: 'June 2025',
            missingBillingAmount: { 
                count: 23, 
                value: '$125,430', 
                description: 'Orders missing billing amount',
                byMonth: {
                    'June 2025': { count: 12, value: '$68,250' },
                    'May 2025': { count: 8, value: '$42,180' },
                    'April 2025': { count: 3, value: '$15,000' }
                }
            },
            missingSupportingDocs: { 
                count: 15, 
                value: '$87,650', 
                description: 'Orders missing supporting documents',
                byMonth: {
                    'June 2025': { count: 9, value: '$52,300' },
                    'May 2025': { count: 4, value: '$23,450' },
                    'April 2025': { count: 2, value: '$11,900' }
                }
            },
            missingPOD: { 
                count: 18, 
                value: '$103,200', 
                description: 'Orders missing proof of delivery',
                byMonth: {
                    'June 2025': { count: 10, value: '$58,700' },
                    'May 2025': { count: 6, value: '$32,500' },
                    'April 2025': { count: 2, value: '$12,000' }
                }
            }
        },
        billingStatus: {
            currentMonth: 'June 2025',
            readyToBill: { 
                count: 42, 
                value: '$235,780', 
                description: 'Orders ready to bill',
                byMonth: {
                    'June 2025': { count: 22, value: '$125,450' },
                    'May 2025': { count: 15, value: '$82,330' },
                    'April 2025': { count: 5, value: '$28,000' }
                }
            },
            draftInvoices: { 
                count: 28, 
                value: '$156,430', 
                description: 'Invoices in draft state',
                byMonth: {
                    'June 2025': { count: 16, value: '$89,250' },
                    'May 2025': { count: 9, value: '$52,180' },
                    'April 2025': { count: 3, value: '$15,000' }
                }
            },
            disputedInvoices: { 
                count: 12, 
                value: '$78,900', 
                description: 'Invoices in disputed state',
                byMonth: {
                    'June 2025': { count: 7, value: '$45,300' },
                    'May 2025': { count: 4, value: '$26,600' },
                    'April 2025': { count: 1, value: '$7,000' }
                }
            }
        },
        liveFeed: [
            { id: 1, type: 'invoice_issued', description: '$10,000 worth of orders has been issued with Invoices to Clients', timestamp: '2 hours ago', icon: 'FileCheck2', iconColor: 'green' },
            { id: 2, type: 'invoice_disputed', description: '$400 worth of invoices moved to disputed state', timestamp: '3 hours ago', icon: 'AlertCircle', iconColor: 'red' },
            { id: 3, type: 'payment_received', description: '$28,900 payment received from Global Logistics Inc', timestamp: '5 hours ago', icon: 'DollarSign', iconColor: 'green' },
            { id: 4, type: 'order_ready', description: '$45,200 in orders now ready for billing', timestamp: '6 hours ago', icon: 'CheckCircle', iconColor: 'blue' },
            { id: 5, type: 'invoice_overdue', description: '$12,300 in invoices now overdue by 30+ days', timestamp: '1 day ago', icon: 'Clock', iconColor: 'orange' },
            { id: 6, type: 'payment_received', description: '$15,750 payment received from Acme Corp', timestamp: '1 day ago', icon: 'DollarSign', iconColor: 'green' },
            { id: 7, type: 'invoice_issued', description: '$8,750 worth of orders has been issued with Invoices to Freight Masters', timestamp: '2 days ago', icon: 'FileCheck2', iconColor: 'green' },
            { id: 8, type: 'order_ready', description: '$32,500 in orders now ready for billing', timestamp: '2 days ago', icon: 'CheckCircle', iconColor: 'blue' },
            { id: 9, type: 'invoice_disputed', description: '$7,800 worth of invoices moved to disputed state', timestamp: '3 days ago', icon: 'AlertCircle', iconColor: 'red' },
            { id: 10, type: 'invoice_overdue', description: '$9,450 in invoices now overdue by 45+ days', timestamp: '3 days ago', icon: 'Clock', iconColor: 'orange' },
        ],
        recentOrders: [
            { id: 'ORD-2024-001', client: 'Acme Corp', status: 'Delivered', amount: '$15,750.00', date: 'Jan 15, 2024' },
            { id: 'ORD-2024-002', client: 'Global Logistics Inc', status: 'In Transit', amount: '$28,900.50', date: 'Jan 14, 2024' },
            { id: 'ORD-2024-003', client: 'Supply Chain Solutions', status: 'Pending', amount: '$12,300.75', date: 'Jan 13, 2024' },
            { id: 'ORD-2024-004', client: 'Metro Distribution', status: 'Delivered', amount: '$45,200.00', date: 'Jan 12, 2024' },
            { id: 'ORD-2024-005', client: 'Freight Masters', status: 'Cancelled', amount: '$8,750.25', date: 'Jan 11, 2024' },
        ],
    },
    orders: {
        stats: [
            { title: 'Delivered', value: '847', trend: { value: '12.5%', isPositive: true }, icon: PackageCheck, iconColor: 'green' },
            { title: 'In Transit', value: '156', trend: { value: '8.3%', isPositive: true }, icon: Truck, iconColor: 'blue' },
            { title: 'Pending', value: '89', trend: { value: '5.2%', isPositive: false }, icon: Clock, iconColor: 'orange' },
            { title: 'Cancelled', value: '23', trend: { value: '15.7%', isPositive: false }, icon: PackageX, iconColor: 'red' },
        ],
        allOrders: [
             { id: 'ORD-2024-001', client: 'Acme Corp', status: 'Delivered', amount: '$15,750.00', date: 'Jan 15, 2024' },
            { id: 'ORD-2024-002', client: 'Global Logistics Inc', status: 'In Transit', amount: '$28,900.50', date: 'Jan 14, 2024' },
            { id: 'ORD-2024-003', client: 'Supply Chain Solutions', status: 'Pending', amount: '$12,300.75', date: 'Jan 13, 2024' },
            { id: 'ORD-2024-004', client: 'Metro Distribution', status: 'Delivered', amount: '$45,200.00', date: 'Jan 12, 2024' },
            { id: 'ORD-2024-005', client: 'Freight Masters', status: 'Cancelled', amount: '$8,750.25', date: 'Jan 11, 2024' },
        ],
    },
    invoices: {
        stats: [
            { title: 'Paid', value: '1,158', subtitle: '$2,847,650', trend: { value: '15.3%', isPositive: true }, icon: FileCheck2, iconColor: 'green' },
            { title: 'Outstanding', value: '89', subtitle: '$456,780', trend: { value: '8.2%', isPositive: false }, icon: Clock, iconColor: 'orange' },
            { title: 'Overdue', value: '23', subtitle: '$125,430', trend: { value: '12.5%', isPositive: false }, icon: AlertCircle, iconColor: 'red' },
            { title: 'Draft', value: '45', subtitle: '$234,560', trend: { value: '22.1%', isPositive: true }, icon: FileText, iconColor: 'gray' },
        ],
        allInvoices: [
            { id: 'INV-2024-001', client: 'Acme Corp', status: 'Paid', amount: '$15,750.00', dueDate: 'Jan 15, 2024' },
            { id: 'INV-2024-002', client: 'Global Logistics Inc', status: 'Outstanding', amount: '$28,900.50', dueDate: 'Jan 20, 2024', overdue: true },
            { id: 'INV-2024-003', client: 'Supply Chain Solutions', status: 'Overdue', amount: '$12,300.75', dueDate: 'Jan 10, 2024', overdue: true },
            { id: 'INV-2024-004', client: 'Metro Distribution', status: 'Paid', amount: '$45,200.00', dueDate: 'Jan 18, 2024' },
            { id: 'INV-2024-005', client: 'Freight Masters', status: 'Draft', amount: '$8,750.25', dueDate: 'Jan 25, 2024' },
        ],
    },
    clients: {
        stats: [
            { title: 'Total Clients', value: '6', subtitle: '5 active • 1 inactive', icon: Users, iconColor: 'blue' },
            { title: 'Total Revenue', value: '$4,152,000', subtitle: 'Across all clients', icon: DollarSign, iconColor: 'green' },
            { title: 'Total Orders', value: '902', subtitle: 'Lifetime orders', icon: ShoppingCart, iconColor: 'purple' },
            { title: 'Avg Revenue', value: '$692,000', subtitle: 'Per client', icon: TrendingUp, iconColor: 'orange' },
        ],
        allClients: [
            { initials: 'AC', name: 'Acme Corporation', industry: 'Manufacturing', location: 'New York, NY', status: 'Active', totalOrders: 247, totalRevenue: '$1,250,000', lastOrder: 'Jan 15, 2024' },
            { initials: 'GL', name: 'Global Logistics Inc', industry: 'Logistics', location: 'Los Angeles, CA', status: 'Active', totalOrders: 189, totalRevenue: '$890,000', lastOrder: 'Jan 14, 2024' },
            { initials: 'SC', name: 'Supply Chain Solutions', industry: 'Supply Chain', location: 'Chicago, IL', status: 'Active', totalOrders: 156, totalRevenue: '$675,000', lastOrder: 'Jan 13, 2024' },
        ]
    },
    reports: {
        stats: [
            { title: 'Monthly Revenue', value: '$2,847,650', subtitle: 'Current month', trend: { value: '18.7%', isPositive: true }, icon: DollarSign, iconColor: 'purple' },
            { title: 'Active Clients', value: '5', subtitle: 'Total active', icon: Users, iconColor: 'blue' },
            { title: 'Processed Orders', value: '1,247', subtitle: 'This month', trend: { value: '12.5%', isPositive: true }, icon: FileCheck2, iconColor: 'green' },
            { title: 'Growth Rate', value: '18.7%', subtitle: 'Month over month', trend: { value: '2.3%', isPositive: true }, icon: TrendingUp, iconColor: 'orange' },
        ],
        revenueTrends: [
            { name: 'Jan', value: 2.1 }, { name: 'Feb', value: 2.5 }, { name: 'Mar', value: 1.8 },
            { name: 'Apr', value: 2.9 }, { name: 'May', value: 3.2 }, { name: 'Jun', value: 2.8 },
        ],
        orderStatusDistribution: [
            { name: 'Delivered', value: 847, percentage: 68.2, color: 'bg-green-500' },
            { name: 'In Transit', value: 156, percentage: 12.5, color: 'bg-blue-500' },
            { name: 'Pending', value: 89, percentage: 7.2, color: 'bg-orange-500' },
            { name: 'Cancelled', value: 23, percentage: 1.8, color: 'bg-red-500' },
            { name: 'Other', value: 127, percentage: 10.3, color: 'bg-gray-400' },
        ],
        topClients: [
            { name: 'Acme Corporation', amount: '$1,250,000', orders: 247 },
            { name: 'Global Logistics Inc', amount: '$890,000', orders: 189 },
            { name: 'Supply Chain Solutions', amount: '$675,000', orders: 156 },
            { name: 'Metro Distribution', amount: '$550,000', orders: 121 },
        ]
    }
};
