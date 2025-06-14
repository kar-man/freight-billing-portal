import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, ClipboardList, PackageCheck, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * @typedef {Object} BlockerData
 * @property {number} count - Number of orders
 * @property {string} value - Monetary value
 */

/**
 * @typedef {Object} BlockerTypeData
 * @property {Object.<string, BlockerData>} byMonth - Data organized by month
 * @property {number} count - Total count
 * @property {string} value - Total value
 * @property {string} description - Description of the blocker
 */

/**
 * @typedef {Object} BlockerType
 * @property {string} key - Unique identifier for the blocker type
 * @property {string} label - Display label
 * @property {string} team - Team responsible
 * @property {string} color - Color code
 * @property {Function} icon - Icon component function
 * @property {boolean} [isEstimate] - Whether the value is an estimate
 */

/**
 * Billing Blockers Card component that displays billing blockers information
 * @param {Object} props - Component props
 * @param {Object} props.data - Billing blockers data
 * @param {string} props.data.currentMonth - Current month
 * @param {BlockerTypeData} props.data.missingBillingAmount - Orders missing billing amount
 * @param {BlockerTypeData} props.data.missingSupportingDocs - Orders missing supporting documents
 * @param {BlockerTypeData} props.data.missingPOD - Orders missing proof of delivery
 * @returns {JSX.Element} The BillingBlockersCard component
 */
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
    const blockerTypes = useMemo(() => [
        { 
            key: 'missingBillingAmount', 
            label: 'Pending Rates', 
            team: 'Pricing', 
            color: '#f87171', 
            icon: (props) => <Calculator {...props} />, 
            isEstimate: true 
        },
        { 
            key: 'missingSupportingDocs', 
            label: 'Missing Support Docs', 
            team: 'Operation', 
            color: '#fb923c', 
            icon: (props) => <ClipboardList {...props} /> 
        },
        { 
            key: 'missingPOD', 
            label: 'Missing POD Docs', 
            team: 'Operation', 
            color: '#facc15', 
            icon: (props) => <PackageCheck {...props} /> 
        },
    ], []);

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

    /**
     * Component for each blocker row
     * @param {Object} props - Component props
     * @param {JSX.Element} props.icon - Icon element
     * @param {string} props.amount - Monetary amount
     * @param {string} props.title - Title of the blocker
     * @param {number} props.count - Number of orders
     * @param {string} props.color - Color code
     * @param {boolean} [props.isEstimate] - Whether the value is an estimate
     * @param {string} [props.team] - Team responsible
     * @returns {JSX.Element} The BlockerRow component
     */
    const BlockerRow = ({ icon, amount, title, count, color, isEstimate, team }) => {
        return (
            <div className="group flex items-center justify-between p-4 rounded-xl transition-all duration-200 ease-in-out cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full" style={{ backgroundColor: `${color}20` }}>
                        {React.cloneElement(icon, { style: { color }, size: 20 })}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">{title}</p>
                        <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-500">{count} Orders</p>
                            {team && (
                                <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                                    {team}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                        <p className="font-semibold text-gray-800 text-lg">{amount}</p>
                        {isEstimate && <span className="text-xs font-normal text-gray-500">(est.)</span>}
                    </div>
                    <ChevronRight className="text-gray-400 group-hover:text-gray-600 transition-colors" size={20} />
                </div>
            </div>
        );
    };

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 p-6 border border-white/20">
            <header className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">
                    Billing Blockers
                </h2>
                <div className="inline-flex space-x-3 bg-white/50 backdrop-blur-2xl p-2 rounded-2xl border border-white/30 shadow-md shadow-gray-900/5">
                    {months.map(month => (
                        <button
                            key={month}
                            onClick={() => setSelectedMonth(month)}
                            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 relative ${selectedMonth === month ? 'text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-white/80 hover:backdrop-blur-lg hover:shadow-md hover:shadow-gray-900/15 hover:scale-98'}`}
                        >
                            {selectedMonth === month && (
                                <motion.div
                                    layoutId="selectedMonthBg"
                                    className="absolute inset-0 bg-gray-600 rounded-xl z-0"
                                    transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 1.2 }}
                                />
                            )}
                            <span className="relative z-10">{month}</span>
                        </button>
                    ))}
                </div>
            </header>

            <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-md shadow-gray-900/5">
                <motion.div
                    key={selectedMonth}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6, 
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.8 }
                    }}
                >
                    <h2 className="text-lg font-semibold text-gray-800">
                        {selectedMonth} Summary
                    </h2>
                    <motion.p 
                        key={`total-${selectedMonth}`}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 0.7, 
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1
                        }}
                        className="text-4xl font-bold text-red-500 tracking-tight mt-4"
                    >
                        ${totalHeldUp.toLocaleString()}{' '}
                        <span className="text-base font-medium text-gray-500">on hold</span>
                    </motion.p>

                    <div className="w-full h-1.5 bg-gray-200 rounded-full mt-4 overflow-hidden">
                        <motion.div 
                            key={`progress-${selectedMonth}`}
                            className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-full" 
                            initial={{ width: 0 }}
                            animate={{ width: `${heldUpPercentage}%`}}
                            transition={{ 
                                duration: 1.2, 
                                ease: [0.34, 1.56, 0.64, 1],
                                delay: 0.3
                            }}
                        />
                    </div>

                    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                        <span>{updateTime}</span>
                        <span>{heldUpPercentage.toFixed(1)}% of total revenue</span>
                    </div>

                    <div className="space-y-2 border-t border-gray-200 pt-4 mt-4">
                        {blockerTypes.map((blocker, index) => (
                            <motion.div
                                key={`${selectedMonth}-${blocker.key}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ 
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                    mass: 0.8,
                                    delay: 0.25 + (index * 0.15)
                                }}
                            >
                                <BlockerRow
                                    icon={blocker.icon({})}
                                    amount={selectedMonthData[blocker.key].value}
                                    title={blocker.label}
                                    count={selectedMonthData[blocker.key].count}
                                    color={blocker.color}
                                    isEstimate={blocker.isEstimate}
                                    team={blocker.team}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BillingBlockersCard;