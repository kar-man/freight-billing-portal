import React from 'react';

/**
 * LoadingState component
 * Displays a loading spinner when content is being loaded
 * 
 * @param {Object} props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.size='medium'] - Size of the spinner ('small', 'medium', 'large')
 * @returns {JSX.Element} - Loading spinner component
 */
const LoadingState = ({ className = '', size = 'medium' }) => {
  // Determine spinner size based on prop
  const spinnerSizes = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };
  
  const spinnerSize = spinnerSizes[size] || spinnerSizes.medium;
  
  return (
    <div className={`flex justify-center items-center h-64 ${className}`}>
      <div className={`animate-spin rounded-full ${spinnerSize} border-t-2 border-b-2 border-primary-blue-500`}></div>
    </div>
  );
};

export default LoadingState;