import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck2, AlertCircle, DollarSign, CheckCircle, Clock } from 'lucide-react';

const LiveFeedCard = ({ data }) => {
    const getIcon = (iconName) => {
        switch(iconName) {
            case 'FileCheck2':
                return <FileCheck2 className="w-5 h-5" />;
            case 'AlertCircle':
                return <AlertCircle className="w-5 h-5" />;
            case 'DollarSign':
                return <DollarSign className="w-5 h-5" />;
            case 'CheckCircle':
                return <CheckCircle className="w-5 h-5" />;
            case 'Clock':
                return <Clock className="w-5 h-5" />;
            default:
                return <FileCheck2 className="w-5 h-5" />;
        }
    };

    const getIconColorClass = (color) => {
        switch(color) {
            case 'green':
                return 'bg-green-100/50 text-green-600';
            case 'red':
                return 'bg-red-100/50 text-red-600';
            case 'blue':
                return 'bg-blue-100/50 text-blue-600';
            case 'orange':
                return 'bg-orange-100/50 text-orange-600';
            default:
                return 'bg-gray-100/50 text-gray-600';
        }
    };

    return (
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 border border-white/20 p-6 h-full flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Feed</h2>
            <div className="space-y-4 flex-grow overflow-y-auto custom-scrollbar">
                {data.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-start p-3 border-b border-white/20 last:border-b-0"
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-sm ${getIconColorClass(item.iconColor)}`}>
                            {getIcon(item.icon)}
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-800">{item.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-4 pt-2 border-t border-white/20">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800 w-full text-center">
                    View all activity
                </button>
            </div>
        </div>
    );
};

export default LiveFeedCard;
