import React from 'react';
import PropTypes from 'prop-types';

/**
 * ErrorState component
 * Displays an error message when data fetching fails
 * 
 * @param {Object} props
 * @param {string|Object} props.message - The error message to display
 * @param {string} [props.title='Error loading data'] - The title of the error message
 * @param {string} [props.className] - Additional CSS classes
 * @param {Function} [props.onRetry] - Function to retry the failed operation
 * @returns {JSX.Element} - Error message component
 */
const ErrorState = ({ 
  message, 
  title = 'Error loading data', 
  className = '',
  onRetry
}) => {
  // Extract error message from error object if needed
  const errorMessage = typeof message === 'object' && message !== null
    ? message.message || 'An unknown error occurred'
    : message;

  return (
    <div className={`bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md ${className}`}>
      <p className="font-medium">{title}</p>
      <p className="text-sm">{errorMessage}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Try again
        </button>
      )}
    </div>
  );
};

ErrorState.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  onRetry: PropTypes.func
};

ErrorState.defaultProps = {
  title: 'Error loading data',
  className: '',
  onRetry: null
};

export default ErrorState;
