import React from 'react';
import PropTypes from 'prop-types';
import SkeletonLoader from './SkeletonLoader';

/**
 * LoadingState component
 * Displays a loading state with skeleton loaders or a spinner
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type='default'] - Type of skeleton loader ('card', 'table-row', 'stat', 'chart', 'default')
 * @param {number} [props.count=4] - Number of skeleton loaders to display
 * @param {boolean} [props.useSpinner=false] - Whether to use a spinner instead of skeleton loaders
 * @param {string} [props.size='medium'] - Size of the spinner ('small', 'medium', 'large')
 * @returns {JSX.Element} - Loading state component
 */
const LoadingState = ({ 
  className = '', 
  type = 'default', 
  count = 4, 
  useSpinner = false,
  size = 'medium' 
}) => {
  // Determine spinner size based on prop
  const spinnerSizes = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  const spinnerSize = spinnerSizes[size] || spinnerSizes.medium;

  if (useSpinner) {
    return (
      <div className={`flex justify-center items-center h-64 ${className}`}>
        <div className={`animate-spin rounded-full ${spinnerSize} border-t-2 border-b-2 border-primary-blue-500`}></div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="text-center mb-4">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Loading data...</p>
      </div>
      <SkeletonLoader type={type} count={count} />
    </div>
  );
};

LoadingState.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  count: PropTypes.number,
  useSpinner: PropTypes.bool,
  size: PropTypes.string
};

export default LoadingState;
