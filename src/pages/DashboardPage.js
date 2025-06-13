import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Eye } from 'lucide-react';

import PageHeader from '../components/PageHeader';
import StatCard from '../components/StatCard';
import StatusBadge from '../components/StatusBadge';
import BillingBlockersCard from '../components/BillingBlockersCard';
import LiveFeedCard from '../components/LiveFeedCard';
import { mockData } from '../data/mockData';
import { containerVariants, itemVariants } from '../utils/animationVariants';

const DashboardPage = () => (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <PageHeader title="Billing Dashboard" subtitle="Live overview of key financial metrics." />
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {mockData.dashboard.stats.map(stat => (
                <motion.div key={stat.title} variants={itemVariants}>
                    <StatCard {...stat} />
                </motion.div>
            ))}
        </motion.div>
        {/* Section 2 & 3: Actionable Information and Live Feed */}
        <motion.div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6" variants={containerVariants}>
            {/* Section 2: Actionable Information (Left Column - 2/3 width) */}
            <div className="lg:col-span-2">
                <motion.div variants={itemVariants}>
                    <BillingBlockersCard data={mockData.dashboard.actionableOrders} />
                </motion.div>
            </div>

            {/* Section 3: Live Feed (Right Column - 1/3 width) */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
                <LiveFeedCard data={mockData.dashboard.liveFeed} />
            </motion.div>
        </motion.div>

    </motion.div>
);

export default DashboardPage;
