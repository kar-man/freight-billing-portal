import React, { Component } from 'react';
import ErrorState from '../ui/ErrorState';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.handleRetry = this.handleRetry.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Here you could log to a service like Sentry
  }

  handleRetry() {
    this.setState({ hasError: false, error: null });
    // Optionally refresh data
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          title={this.props.title || "Something went wrong"}
          message={this.state.error?.message || "An unexpected error occurred"}
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
