// Environment variable exports

export const environment = {
  apiUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  mapboxKey: import.meta.env.VITE_MAPBOX_KEY || '',
  appName: import.meta.env.VITE_APP_NAME || 'Bike Delivered',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  mockApiEnabled: import.meta.env.VITE_MOCK_API_ENABLED === 'true',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
};

export const { 
  apiUrl, 
  mapboxKey, 
  appName, 
  appVersion, 
  mockApiEnabled,
  isDevelopment,
  isProduction 
} = environment;
