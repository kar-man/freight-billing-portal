import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, FileText, FileCheck2, Calendar, ChevronDown } from 'lucide-react';

const RevenueHealthCard = ({ data }) => {
    const [selectedMonth, setSelectedMonth] = useState(data.currentMonth);
    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [showTooltip, setShowTooltip] = useState(null);

    const months = Object.keys(data.missingBillingAmount.byMonth);

    const getIcon = (key) => {
        switch(key) {
            case 'missingBillingAmount':
                return <AlertCircle className="w-5 h-5 text-red-500" />;
            case 'missingSupportingDocs':
                return <FileText className="w-5 h-5 text-orange-500" />;
            case 'missingPOD':
                return <FileCheck2 className="w-5 h-5 text-yellow-500" />;
            default:
                return <AlertCircle className="w-5 h-5 text-gray-500" />;
        }
    };

    const getActionText = (key) => {
        switch(key) {
            case 'missingBillingAmount':
                return 'Pricing team';
            case 'missingSupportingDocs':
                return 'Operations';
            case 'missingPOD':
                return 'Operations';
            default:
                return 'Take action';
        }
    };

    const getTooltipText = (key) => {
        switch(key) {
            case 'missingBillingAmount':
                return 'Follow up with pricing team to get billing rates';
            case 'missingSupportingDocs':
                return 'Follow up with operations to get supporting documents';
            case 'missingPOD':
                return 'Follow up with operations to get proof of delivery';
            default:
                return 'Take action on this item';
        }
    };

    const validKeys = ['missingBillingAmount', 'missingSupportingDocs', 'missingPOD'];

    return (
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 border border-white/20 p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Revenue Health</h2>
                <div className="relative">
                    <button 
                        className="flex items-center text-sm font-medium text-gray-600 bg-white/50 backdrop-blur-2xl hover:bg-white/70 rounded-xl px-3 py-1.5 border border-white/30 shadow-md shadow-gray-900/5"
                        onClick={() => setShowMonthDropdown(!showMonthDropdown)}
                    >
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{selectedMonth}</span>
                        <ChevronDown className="w-4 h-4 ml-2" />
                    </button>

                    {showMonthDropdown && (
                        <div className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg z-10 border border-white/30">
                            {months.map(month => (
                                <button
                                    key={month}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white/70 first:rounded-t-xl last:rounded-b-xl"
                                    onClick={() => {
                                        setSelectedMonth(month);
                                        setShowMonthDropdown(false);
                                    }}
                                >
                                    {month}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="space-y-4">
                {Object.entries(data)
                    .filter(([key]) => validKeys.includes(key))
                    .map(([key, item]) => (
                    <motion.div 
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between p-4 border border-white/30 rounded-xl bg-white/40 backdrop-blur-sm shadow-sm hover:bg-white/50 transition-all"
                    >
                        <div className="flex items-center">
                            <div className="mr-4">
                                {getIcon(key)}
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">
                                    {item.byMonth[selectedMonth]?.value || '$0'}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.description} ({item.byMonth[selectedMonth]?.count || 0})
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <button 
                                className="text-sm font-medium text-blue-600 hover:text-blue-800 px-3 py-1.5 rounded-lg hover:bg-white/70 transition-all"
                                onMouseEnter={() => setShowTooltip(key)}
                                onMouseLeave={() => setShowTooltip(null)}
                            >
                                {getActionText(key)}
                            </button>
                            {showTooltip === key && (
                                <div className="absolute right-0 bottom-full mb-2 w-48 bg-gray-800/90 backdrop-blur-sm text-white text-xs rounded-lg py-1.5 px-3 z-10 shadow-lg">
                                    {getTooltipText(key)}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RevenueHealthCard;
