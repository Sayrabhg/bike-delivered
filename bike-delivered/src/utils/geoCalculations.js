/**
 * Calculate distance between two coordinates using Haversine formula
 * @param {number} lat1 - Latitude of point 1
 * @param {number} lng1 - Longitude of point 1
 * @param {number} lat2 - Latitude of point 2
 * @param {number} lng2 - Longitude of point 2
 * @returns {number} Distance in kilometers
 */
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = deg2rad(lat2 - lat1);
  const dLng = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Calculate ETA based on distance and average speed
 * @param {number} distance - Distance in kilometers
 * @param {number} avgSpeed - Average speed in km/h (default: 30 km/h for bikes)
 * @returns {number} ETA in minutes
 */
export const calculateETA = (distance, avgSpeed = 30) => {
  return Math.ceil((distance / avgSpeed) * 60);
};

/**
 * Calculate midpoint between two coordinates
 * @param {object} start - {lat, lng}
 * @param {object} end - {lat, lng}
 * @returns {object} Midpoint {lat, lng}
 */
export const calculateMidpoint = (start, end) => {
  const lat = (start.lat + end.lat) / 2;
  const lng = (start.lng + end.lng) / 2;
  return { lat, lng };
};

/**
 * Check if a location is within radius
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {number} centerLat - Center latitude
 * @param {number} centerLng - Center longitude
 * @param {number} radius - Radius in kilometers
 * @returns {boolean} True if within radius
 */
export const isWithinRadius = (lat, lng, centerLat, centerLng, radius) => {
  const distance = calculateDistance(lat, lng, centerLat, centerLng);
  return distance <= radius;
};

/**
 * Convert degrees to radians
 * @param {number} deg - Degrees
 * @returns {number} Radians
 */
export const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

/**
 * Convert radians to degrees
 * @param {number} rad - Radians
 * @returns {number} Degrees
 */
export const rad2deg = (rad) => {
  return rad * (180 / Math.PI);
};

/**
 * Generate random coordinates near a point
 * @param {number} lat - Base latitude
 * @param {number} lng - Base longitude
 * @param {number} radius - Radius in kilometers
 * @returns {object} Random coordinates {lat, lng}
 */
export const generateRandomCoordinates = (lat, lng, radius = 1) => {
  const radiusInDegrees = radius / 111; // Approximately 111 km per degree
  const randomLat = lat + (Math.random() - 0.5) * 2 * radiusInDegrees;
  const randomLng = lng + (Math.random() - 0.5) * 2 * radiusInDegrees;
  return { lat: randomLat, lng: randomLng };
};

/**
 * Validate coordinates
 * @param {object} coords - {lat, lng}
 * @returns {boolean} True if valid
 */
export const isValidCoordinates = (coords) => {
  return (
    coords &&
    typeof coords.lat === 'number' &&
    typeof coords.lng === 'number' &&
    coords.lat >= -90 &&
    coords.lat <= 90 &&
    coords.lng >= -180 &&
    coords.lng <= 180
  );
};
