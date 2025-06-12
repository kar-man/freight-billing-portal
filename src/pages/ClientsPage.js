import React, { useState } from 'react';
import { motion } from 'framer-motion';

import PageHeader from '../components/PageHeader';
import FilterControls from '../components/FilterControls';
import StatCard from '../components/StatCard';
import ClientCard from '../components/ClientCard';
import { mockData } from '../data/mockData';
import { containerVariants, itemVariants } from '../utils/animationVariants';

const ClientsPage = () => { 
    const [viewMode, setViewMode] = useState('grid'); 
    return ( 
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}>
                <PageHeader title="Client Management" subtitle="View and manage all client accounts." />
                <FilterControls searchPlaceholder="Search clients by name, industry, or location..." filterLabel="All Clients" showViewToggle={true} viewMode={viewMode} setViewMode={setViewMode} />
            </motion.div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
                {mockData.clients.stats.map(stat => (
                    <motion.div key={stat.title} variants={itemVariants}>
                        <StatCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">All Clients</h2>
                    <p className="text-sm text-gray-500">Showing {mockData.clients.allClients.length} of {mockData.clients.allClients.length} clients</p>
                </div>
                <motion.div className={`grid gap-6 ${viewMode === 'list' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'}`} variants={containerVariants} key={viewMode}>
                    {mockData.clients.allClients.map((client) => <ClientCard key={client.name} client={client} />)}
                </motion.div>
            </motion.div>
        </motion.div> 
    );
};

export default ClientsPage;