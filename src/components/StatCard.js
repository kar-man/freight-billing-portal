import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, trend, iconColor }) => {
    const iconColorConfig = {
        blue: 'text-blue-600 bg-blue-100', 
        green: 'text-green-600 bg-green-100',
        orange: 'text-orange-600 bg-orange-100', 
        purple: 'text-purple-600 bg-purple-100',
        red: 'text-red-600 bg-red-100', 
        gray: 'text-gray-600 bg-gray-100',
    };
    
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg border border-gray-100 flex flex-col h-full">
            <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                 <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconColorConfig[iconColor]}`}>
                    <Icon className="w-5 h-5" />
                </div>
            </div>
            
            <div className="mt-2 flex-grow">
                <p className="text-4xl font-bold text-gray-900">{value}</p>
            </div>
            
             {trend && (
                <div className={`mt-4 flex items-center text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {trend.isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    <span>{trend.value}</span>
                    <span className="text-gray-500 ml-1">vs last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;