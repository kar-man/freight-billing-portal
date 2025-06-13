import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, trend, iconColor }) => {
    const iconColorConfig = {
        blue: 'text-blue-600 bg-blue-100/70', 
        green: 'text-green-600 bg-green-100/70',
        orange: 'text-orange-600 bg-orange-100/70', 
        purple: 'text-purple-600 bg-purple-100/70',
        red: 'text-red-600 bg-red-100/70', 
        gray: 'text-gray-600 bg-gray-100/70',
    };

    return (
        <div className="bg-white/60 backdrop-blur-xl p-5 rounded-3xl shadow-xl shadow-gray-900/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/5 border border-white/20 flex flex-col h-full">
            <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-700">{title}</p>
                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColorConfig[iconColor]}`}>
                    <Icon className="w-5 h-5" />
                </div>
            </div>

            <div className="mt-2 flex-grow">
                <p className="text-4xl font-bold text-gray-900">{value}</p>
            </div>

             {trend && (
                <div className={`mt-4 flex items-center text-sm font-medium ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {trend.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    <span>{trend.value}</span>
                    <span className="text-gray-500 ml-1">vs last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;
