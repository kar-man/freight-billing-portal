import React from 'react';
import PropTypes from 'prop-types';
import { AlertCircle, RefreshCw, Home, Send } from 'lucide-react';

/**
 * ErrorBoundary component that catches JavaScript errors in its child component tree
 * and displays a fallback UI instead of crashing the whole app
 * 
 * @component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null,
      errorReported: false
    };

    // Bind methods to ensure they have the correct 'this' context
    this.handleRetry = this.handleRetry.bind(this);
    this.handleGoHome = this.handleGoHome.bind(this);
    this.handleReportError = this.handleReportError.bind(this);
  }

  /**
   * Update state when an error occurs
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Log error details and report to monitoring service if available
   */
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });

    // In a real app, you would report to an error monitoring service like Sentry
    // This is a placeholder for that functionality
    if (process.env.NODE_ENV === 'production') {
      // reportErrorToService(error, errorInfo);
      // eslint-disable-next-line no-console
      console.log('Error would be reported to monitoring service in production');
    }
  }

  /**
   * Reset error state to try rendering the component again
   */
  handleRetry() {
    this.setState({ hasError: false, error: null, errorInfo: null, errorReported: false });
  }

  /**
   * Navigate to the dashboard/home page
   */
  handleGoHome() {
    window.location.href = '/';
  }

  /**
   * Report the error to support (simulated)
   */
  handleReportError() {
    this.setState({ errorReported: true });
    // In a real app, you would send the error details to your support team
    // eslint-disable-next-line no-console
    console.log('Error reported to support team:', this.state.error, this.state.errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Get error details for display
      const errorMessage = this.state.error?.message || 'Unknown error';
      const errorName = this.state.error?.name || 'Error';

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-900/10 border border-white/20 p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Something went wrong
              </h2>
              <p className="text-gray-600 mb-2">
                {this.props.fallbackMessage || "We're sorry, but something unexpected happened. Please try again."}
              </p>

              {/* Show error details in development mode */}
              {process.env.NODE_ENV !== 'production' && (
                <div className="bg-gray-100 p-3 rounded-lg mb-4 text-left overflow-auto max-h-32 text-xs">
                  <p className="font-bold text-red-600">{errorName}: {errorMessage}</p>
                  {this.state.errorInfo && (
                    <pre className="mt-2 text-gray-700">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try Again
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go to Dashboard
                </button>
              </div>

              {!this.state.errorReported && (
                <button
                  onClick={this.handleReportError}
                  className="inline-flex items-center justify-center px-4 py-2 mt-3 text-sm text-blue-600 hover:text-blue-800"
                >
                  <Send className="w-3 h-3 mr-1" />
                  Report this issue
                </button>
              )}

              {this.state.errorReported && (
                <p className="text-sm text-green-600 mt-3">
                  Thank you for reporting this issue. Our team has been notified.
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallbackMessage: PropTypes.string
};

export default ErrorBoundary;
