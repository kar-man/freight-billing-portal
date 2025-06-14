import React from 'react';

/**
 * ErrorState component
 * Displays an error message when data fetching fails
 * 
 * @param {Object} props
 * @param {string} props.message - The error message to display
 * @param {string} [props.title='Error loading data'] - The title of the error message
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} - Error message component
 */
const ErrorState = ({ 
  message, 
  title = 'Error loading data', 
  className = '' 
}) => {
  return (
    <div className={`bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md ${className}`}>
      <p className="font-medium">{title}</p>
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ErrorState;