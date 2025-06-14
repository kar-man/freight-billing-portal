import React from 'react';
import { Search, Filter, ChevronDown, List, LayoutGrid } from 'lucide-react';

const FilterControls = ({ searchPlaceholder, filterLabel = "All", showViewToggle = false, viewMode, setViewMode }) => (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder={searchPlaceholder} className="w-full pl-11 pr-4 py-2.5 text-sm placeholder-gray-400 bg-white/60 backdrop-blur-xl border border-white/30 rounded-xl shadow-md shadow-gray-900/5 focus:outline-none focus:ring-2 focus:ring-gray-900/50 focus:border-white/50 transition-all" />
        </div>
        <div className="flex items-center space-x-2">
            <button className="flex items-center justify-center bg-white/60 backdrop-blur-xl border border-white/30 rounded-xl px-4 py-2.5 text-sm text-gray-700 font-medium shadow-md shadow-gray-900/5 hover:bg-white/80 hover:text-gray-800 hover:backdrop-blur-lg hover:shadow-sm hover:shadow-gray-900/5 transition-all duration-200">
                <Filter className="w-4 h-4 mr-2" />
                <span>{filterLabel}</span>
                <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            <div className={`flex items-center bg-white/60 backdrop-blur-xl border border-white/30 rounded-xl shadow-md shadow-gray-900/5 ${!showViewToggle && 'invisible'}`}>
                <button onClick={() => setViewMode && setViewMode('list')} className={`p-2.5 rounded-l-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-gray-900/90 text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-white/80 hover:backdrop-blur-lg hover:shadow-sm hover:shadow-gray-900/5'}`}><List className="w-5 h-5" /></button>
                <button onClick={() => setViewMode && setViewMode('grid')} className={`p-2.5 rounded-r-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-gray-900/90 text-white' : 'text-gray-600 hover:text-gray-800 hover:bg-white/80 hover:backdrop-blur-lg hover:shadow-sm hover:shadow-gray-900/5'}`}><LayoutGrid className="w-5 h-5" /></button>
            </div>
        </div>
    </div>
);

export default FilterControls;
