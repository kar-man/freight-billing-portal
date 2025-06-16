import React from 'react';
import { motion } from 'framer-motion';

import PageHeader from '../../components/layout/PageHeader';
import StatCard from '../../components/ui/StatCard';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import BillingBlockersCard from './components/BillingBlockersCard';
import RevenuePipeline from './components/RevenuePipeline';
import LiveFeedCard from './components/LiveFeedCard';
import { useDashboardData } from './api/useDashboardData';
import { containerVariants, itemVariants } from '../../utils/animationVariants';

const DashboardPage = () => {
    const { data: dashboard, isLoading, error, refetch } = useDashboardData();

    // Loading state
    if (isLoading) {
        return <LoadingState />;
    }

    // Error state
    if (error) {
        return <ErrorState 
            title="Error loading dashboard data" 
            message={error} 
            onRetry={refetch}
        />;
    }

    // Use data from store with fallback
    const safeData = dashboard || { 
        stats: [], 
        actionableOrders: {}, 
        billingStatus: {}, 
        liveFeed: [] 
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <PageHeader title="Billing Dashboard" subtitle="Live overview of key financial metrics." />
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
                {safeData.stats.map(stat => (
                    <motion.div key={stat.title} variants={itemVariants}>
                        <StatCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>
            {/* Section 2 & 3: Actionable Information and Live Feed */}
            <motion.div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6" variants={containerVariants}>
                {/* Section 2: Actionable Information (Left Column - 2/3 width) */}
                <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                        {/* Billing Blockers Card */}
                        <motion.div variants={itemVariants}>
                            <BillingBlockersCard data={safeData.actionableOrders} />
                        </motion.div>

                        {/* Action Queue (Revenue Pipeline) Card */}
                        <motion.div variants={itemVariants}>
                            <RevenuePipeline data={safeData.billingStatus} />
                        </motion.div>
                    </div>
                </div>

                {/* Section 3: Live Feed (Right Column - 1/3 width) */}
                <motion.div variants={itemVariants} className="lg:col-span-1 h-full">
                    <div className="h-full">
                        <LiveFeedCard data={safeData.liveFeed} />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default DashboardPage;
