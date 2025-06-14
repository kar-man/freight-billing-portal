import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import PageHeader from '../../components/common/PageHeader';
import StatCard from '../../components/common/StatCard';
import LoadingState from '../../components/common/LoadingState';
import ErrorState from '../../components/common/ErrorState';
import BillingBlockersCard from '../../components/dashboard/BillingBlockersCard';
import RevenuePipeline from '../../components/dashboard/RevenuePipeline';
import LiveFeedCard from '../../components/dashboard/LiveFeedCard';
import { useDashboardData } from './api/useDashboardData';
import { useAppContext } from '../../context/AppContext';
import { containerVariants, itemVariants } from '../../utils/animationVariants';

const DashboardPage = () => {
    const { data, isLoading, error } = useDashboardData();
    const { state, updateDashboardData } = useAppContext();

    // Update global state when data changes
    useEffect(() => {
        if (data) {
            updateDashboardData(data);
        }
    }, [data, updateDashboardData]);

    // Loading state
    if (isLoading) {
        return <LoadingState />;
    }

    // Error state
    if (error) {
        return <ErrorState title="Error loading dashboard data" message={error.message} />;
    }

    // Use data from global state or fallback to API data
    const safeData = state.dashboard || data || { 
        stats: [], 
        actionableOrders: {}, 
        billingStatus: {}, 
        liveFeed: [] 
    };

    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
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
