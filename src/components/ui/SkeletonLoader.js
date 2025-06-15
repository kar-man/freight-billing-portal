import React from 'react';
import PropTypes from 'prop-types';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        );
      case 'table-row':
        return (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 animate-pulse flex">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mr-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mr-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mr-2"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        );
      case 'stat':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        );
      case 'chart':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-6"></div>
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          </div>
        );
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="mb-4">
          {renderSkeleton()}
        </div>
      ))}
    </>
  );
};

SkeletonLoader.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number
};

export default SkeletonLoader;
