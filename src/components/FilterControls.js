import React from 'react';
import { Search, Filter, ChevronDown, List, LayoutGrid } from 'lucide-react';

const FilterControls = ({ searchPlaceholder, filterLabel = "All", showViewToggle = false, viewMode, setViewMode }) => (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder={searchPlaceholder} className="w-full pl-11 pr-4 py-2.5 text-sm placeholder-gray-400 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" />
        </div>
        <div className="flex items-center space-x-2">
            <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg px-4 h-full text-sm text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                <span>{filterLabel}</span>
                <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            <div className={`flex items-center bg-white border border-gray-300 rounded-lg shadow-sm ${!showViewToggle && 'invisible'}`}>
                <button onClick={() => setViewMode && setViewMode('list')} className={`p-2.5 rounded-l-md ${viewMode === 'list' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}><List className="w-5 h-5" /></button>
                <button onClick={() => setViewMode && setViewMode('grid')} className={`p-2.5 rounded-r-md ${viewMode === 'grid' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}><LayoutGrid className="w-5 h-5" /></button>
            </div>
        </div>
    </div>
);

export default FilterControls;