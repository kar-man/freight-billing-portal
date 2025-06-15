import axios from 'axios';
import { config } from '../config';

const apiClient = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetcher function for SWR
export const fetcher = async (url) => {
  try {
    const response = await apiClient.get(url);
    return response.data;
  } catch (error) {
    // In production, you might want to log to a service like Sentry
    console.error(`API request to ${url} failed:`, error);

    // Throw the error so SWR can handle it
    throw error;
  }
};

export default apiClient;
