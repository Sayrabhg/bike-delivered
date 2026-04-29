import axios from 'axios';
import { apiUrl } from '../config/environment';
import { API_TIMEOUT } from '../config/constants';
import { STORAGE_KEYS } from '../config/constants';

// Create axios instance
const apiClient = axios.create({
  baseURL: apiUrl,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add request timestamp for tracking
    config.metadata = { startTime: new Date() };
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Add response time tracking
    const endTime = new Date();
    const startTime = response.config.metadata?.startTime || endTime;
    response.duration = endTime - startTime;
    
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - clear auth data and redirect to login
          localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
          localStorage.removeItem(STORAGE_KEYS.USER_DATA);
          window.location.href = '/login';
          break;
        case 403:
          console.error('Forbidden access');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Internal server error');
          break;
        default:
          console.error('API Error:', data?.message || 'Unknown error');
      }
    } else if (error.request) {
      console.error('Network error - no response received');
    } else {
      console.error('Request error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
