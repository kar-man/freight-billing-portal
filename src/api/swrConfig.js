import React from 'react';
import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import apiClient from './client';

/**
 * Global fetcher function for SWR
 * @param {string} url - The API endpoint to fetch
 * @returns {Promise<any>} The response data
 * @throws {Error} If the API request fails
 */
const fetcher = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fetching ${url}:`, error);

    // Handle network errors or server errors
    if (!error.response || error.response.status >= 500 || error.code === 'ECONNABORTED') {
      // eslint-disable-next-line no-console
      console.log(`Network error or server error for ${url}, using fallback data`);
      return null; // Return null to use the fallbackData
    }

    // Don't throw the error for 404s, let SWR use the fallbackData
    if (error.response && error.response.status === 404) {
      // eslint-disable-next-line no-console
      console.log(`Endpoint ${url} not found, using fallback data`);
      return null; // Return null to use the fallbackData
    }

    // For other client errors (400, 401, 403, etc.), throw the error
    throw error;
  }
};

/**
 * SWR Provider component with global configuration
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} SWRConfig provider with global settings
 */
export const SWRProvider = ({ children }) => {
  return (
    <SWRConfig 
      value={{
        fetcher,
        revalidateOnFocus: false,
        revalidateIfStale: true,
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
        dedupingInterval: 5 * 60 * 1000, // 5 minutes
      }}
    >
      {children}
    </SWRConfig>
  );
};

SWRProvider.propTypes = {
  children: PropTypes.node.isRequired
};
