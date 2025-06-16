export const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
  environment: process.env.NODE_ENV,
  featureFlags: {
    enableNewDashboard: process.env.REACT_APP_ENABLE_NEW_DASHBOARD === 'true',
  },
  // Add other environment variables here
};