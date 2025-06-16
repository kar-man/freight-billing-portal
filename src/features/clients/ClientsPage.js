import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PageHeader from '../../components/layout/PageHeader';
import FilterControls from '../../components/filters/FilterControls';
import StatCard from '../../components/ui/StatCard';
import LoadingState from '../../components/ui/LoadingState';
import ErrorState from '../../components/ui/ErrorState';
import ClientCard from './components/ClientCard';
import { useClientsData } from './api/useClientsData';
import { containerVariants, itemVariants, noFadeItemVariants } from '../../utils/animationVariants';

const ClientsPage = () => { 
    const [viewMode, setViewMode] = useState('grid');
    const { data: clients, isLoading, error, refetch } = useClientsData();

    // Loading state
    if (isLoading) {
        return <LoadingState />;
    }

    // Error state
    if (error) {
        return <ErrorState 
            title="Error loading clients data" 
            message={error} 
            onRetry={refetch}
        />;
    }

    // Use data from store with fallback
    const safeData = clients || { 
        stats: [], 
        allClients: [] 
    };

    return ( 
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
            <motion.div variants={itemVariants}>
                <PageHeader title="Client Management" subtitle="View and manage all client accounts." />
            </motion.div>
            <motion.div variants={noFadeItemVariants}>
                <FilterControls searchPlaceholder="Search clients by name, industry, or location..." filterLabel="All Clients" showViewToggle={true} viewMode={viewMode} setViewMode={setViewMode} />
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
                {safeData.stats.map(stat => (
                    <motion.div key={stat.title} variants={itemVariants}>
                        <StatCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">All Clients</h2>
                    <p className="text-sm font-medium text-gray-500">Showing {safeData.allClients.length} of {safeData.allClients.length} clients</p>
                </div>
                <motion.div 
                    className={`grid gap-6 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`} 
                    variants={containerVariants}
                    transition={{ staggerChildren: 0.05 }} // Reduce stagger time
                >
                    {safeData.allClients.map((client) => (
                        <motion.div key={client.name} variants={itemVariants} transition={{ duration: 0.2 }}>
                            <ClientCard client={client} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div> 
    );
};

export default ClientsPage;
