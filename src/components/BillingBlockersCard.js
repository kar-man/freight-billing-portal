import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, ClipboardList, PackageCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const BillingBlockersCard = ({ data }) => {
    const [selectedMonth, setSelectedMonth] = useState(data.currentMonth);
    const [updateTime, setUpdateTime] = useState('');
    const months = Object.keys(data.missingBillingAmount.byMonth);

    useEffect(() => {
        // Set the update time when the component mounts or when the selected month changes
        const now = new Date();
        const formattedTime = now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        setUpdateTime(`As of ${formattedTime}`);
    }, [selectedMonth]);

    // Configuration for the different blocker types
    const blockerTypes = [
        { 
            key: 'missingBillingAmount', 
            label: 'Pending Rate Calculation', 
            team: 'Pricing', 
            color: '#f87171', 
            icon: (props) => <Calculator {...props} />, 
            isEstimate: true 
        },
        { 
            key: 'missingSupportingDocs', 
            label: 'Missing Supporting Docs', 
            team: 'Operations', 
            color: '#fb923c', 
            icon: (props) => <ClipboardList {...props} /> 
        },
        { 
            key: 'missingPOD', 
            label: 'Missing Proof of Delivery', 
            team: 'Operations', 
            color: '#facc15', 
            icon: (props) => <PackageCheck {...props} /> 
        },
    ];

    // Calculate the total held up amount and percentage
    const selectedMonthData = useMemo(() => {
        const result = {};
        blockerTypes.forEach(blocker => {
            result[blocker.key] = data[blocker.key].byMonth[selectedMonth] || { count: 0, value: '$0' };
        });
        return result;
    }, [data, selectedMonth, blockerTypes]);

    const totalHeldUp = useMemo(() => {
        let total = 0;
        blockerTypes.forEach(blocker => {
            const value = selectedMonthData[blocker.key].value;
            if (value && value !== '$0') {
                // Convert string like '$68,250' to number
                total += parseInt(value.replace(/[$,]/g, ''));
            }
        });
        return total;
    }, [selectedMonthData, blockerTypes]);

    // For the progress bar, we need to estimate the total revenue for the month
    // In a real app, this would come from the data, but for this example we'll estimate
    const totalRevenueForMonth = 950000; // This would come from the data in a real app
    const heldUpPercentage = (totalHeldUp / totalRevenueForMonth) * 100;

    // Component for each blocker row
    const BlockerRow = ({ icon, amount, title, team, color, delay, isEstimate }) => {
        // Define team tag colors
        const teamColors = {
            'Pricing': {
                bg: 'bg-red-100/80',
                text: 'text-red-600',
                border: 'border-red-200/30'
            },
            'Operations': {
                bg: 'bg-orange-100/80',
                text: 'text-orange-600',
                border: 'border-orange-200/30'
            }
        };

        // Get colors for the current team (default to blue if team not found)
        const teamColor = teamColors[team] || {
            bg: 'bg-blue-100/80',
            text: 'text-blue-600',
            border: 'border-blue-200/30'
        };

        return (
            <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: delay * 0.1 + 0.2 }}
                className="flex items-center space-x-3 py-2"
            >
                <div className="p-2.5 rounded-full" style={{ backgroundColor: `${color}30` }}>
                    {React.cloneElement(icon, { style: { color }, size: 20 })}
                </div>
                <div className="flex-1">
                    <p className="font-bold text-gray-800">
                        {amount}
                        {isEstimate && <span className="text-xs font-normal text-gray-500 ml-1">(est.)</span>}
                    </p>
                    <p className="text-sm text-gray-600">{title}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${teamColor.bg} ${teamColor.text} ${teamColor.border} shadow-sm backdrop-blur-sm`}>{team}</span>
            </motion.div>
        );
    };

    return (
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 p-6 border border-white/20">
            <header className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Billing Blockers
                </h2>
                <div className="inline-flex space-x-3 bg-white/50 backdrop-blur-2xl p-2 rounded-2xl border border-white/30 shadow-md shadow-gray-900/5">
                    {months.map(month => (
                        <button
                            key={month}
                            onClick={() => setSelectedMonth(month)}
                            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 relative ${selectedMonth === month ? 'text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-white/80 hover:backdrop-blur-lg hover:shadow-md hover:shadow-gray-900/15 hover:scale-95'}`}
                        >
                            {selectedMonth === month && (
                                <motion.div
                                    layoutId="selectedMonthBg"
                                    className="absolute inset-0 bg-gray-600 rounded-xl z-0"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{month}</span>
                        </button>
                    ))}
                </div>
            </header>

            <motion.div
                layout
                key={selectedMonth}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-md shadow-gray-900/5"
            >
                <h2 className="text-lg font-semibold text-gray-800">
                    {selectedMonth} Summary
                </h2>
                <div className="flex items-center mt-4">
                    <p className="text-4xl font-bold text-red-500">${totalHeldUp.toLocaleString()}</p>
                    <p className="text-base text-gray-600 ml-2">on hold</p>
                </div>

                <div className="w-full h-1.5 bg-gray-200 rounded-full mt-4 overflow-hidden">
                    <motion.div 
                        layout 
                        className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${heldUpPercentage}%`}}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                </div>

                <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                    <span>{updateTime}</span>
                    <span>{heldUpPercentage.toFixed(1)}% of total revenue</span>
                </div>

                <div className="my-4 border-t border-white/20"></div>

                <h3 className="text-lg font-semibold text-gray-800 mb-1">Blocker Breakdown</h3>

                <AnimatePresence>
                    {blockerTypes.map((blocker, index) => (
                        <BlockerRow
                            key={blocker.key}
                            icon={blocker.icon()}
                            amount={selectedMonthData[blocker.key].value}
                            title={`${blocker.label} (${selectedMonthData[blocker.key].count} Orders)`}
                            team={blocker.team}
                            color={blocker.color}
                            delay={index}
                            isEstimate={blocker.isEstimate}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default BillingBlockersCard;
