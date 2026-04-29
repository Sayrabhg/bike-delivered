// Mapbox configuration

export const mapboxConfig = {
  style: 'mapbox://styles/mapbox/streets-v12',
  defaultCenter: [77.2090, 28.6139], // Delhi, India
  defaultZoom: 13,
  maxZoom: 18,
  minZoom: 10,
};

export const mapStyles = {
  light: 'mapbox://styles/mapbox/light-v11',
  dark: 'mapbox://styles/mapbox/dark-v11',
  streets: 'mapbox://styles/mapbox/streets-v12',
  satellite: 'mapbox://styles/mapbox/satellite-streets-v12',
};

export const markerColors = {
  customer: '#3b82f6',
  rider: '#22c55e',
  merchant: '#f59e0b',
  destination: '#ef4444',
};

export const routeColors = {
  active: '#0ea5e9',
  completed: '#22c55e',
  pending: '#94a3b8',
};
