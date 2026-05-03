import { mockDelay, mockTracking, mockRiders } from '../data';

// Mock tracking handlers
export const trackingHandlers = {
  // Get current location
  getCurrentLocation: async () => {
    await mockDelay(300);
    
    return {
      success: true,
      data: {
        location: {
          lat: 28.6139,
          lng: 77.2090,
          accuracy: 10,
          timestamp: new Date().toISOString(),
        },
      },
    };
  },
  
  // Update location
  updateLocation: async (locationData) => {
    await mockDelay(200);
    
    return {
      success: true,
      data: {
        message: 'Location updated',
        location: locationData,
      },
    };
  },
  
  // Get route
  getRoute: async (origin, destination) => {
    await mockDelay(600);
    
    // Mock route with intermediate points
    const route = [
      origin,
      {
        lat: (origin.lat + destination.lat) / 3 * 2,
        lng: (origin.lng + destination.lng) / 3 * 2,
      },
      {
        lat: (origin.lat + destination.lat) / 3,
        lng: (origin.lng + destination.lng) / 3,
      },
      destination,
    ];
    
    const distance = calculateDistance(
      origin.lat,
      origin.lng,
      destination.lat,
      destination.lng
    );
    
    const duration = Math.ceil(distance * 3); // Assume 3 minutes per km
    
    return {
      success: true,
      data: {
        route,
        distance,
        duration,
        origin,
        destination,
      },
    };
  },
  
  // Get ETA
  getETA: async (orderId) => {
    await mockDelay(400);
    
    return {
      success: true,
      data: {
        orderId,
        eta: mockTracking.eta,
        distance: mockTracking.distance,
        status: mockTracking.status,
        estimatedArrival: new Date(Date.now() + mockTracking.eta * 60 * 1000).toISOString(),
      },
    };
  },
  
  // Get rider location
  getRiderLocation: async (riderId) => {
    await mockDelay(300);
    
    const rider = mockRiders.find(r => r.id === riderId);
    
    if (!rider) {
      throw new Error('Rider not found');
    }
    
    return {
      success: true,
      data: {
        riderId: rider.id,
        name: rider.name,
        phone: rider.phone,
        location: rider.currentLocation,
        rating: rider.rating,
        vehicleNumber: rider.vehicleNumber,
        timestamp: new Date().toISOString(),
      },
    };
  },
  
  // Get tracking details
  getTrackingDetails: async (orderId) => {
    await mockDelay(500);
    
    return {
      success: true,
      data: {
        orderId,
        riderLocation: mockTracking.riderLocation,
        destination: mockTracking.destination,
        eta: mockTracking.eta,
        distance: mockTracking.distance,
        status: mockTracking.status,
        route: mockTracking.route,
        lastUpdated: new Date().toISOString(),
      },
    };
  },
  
  // Simulate rider movement
  simulateRiderMovement: async (orderId) => {
    await mockDelay(300);
    
    // Update rider location slightly closer to destination
    const updatedLocation = {
      lat: mockTracking.riderLocation.lat - 0.001,
      lng: mockTracking.riderLocation.lng - 0.001,
    };
    
    mockTracking.riderLocation = updatedLocation;
    mockTracking.eta = Math.max(0, mockTracking.eta - 1);
    mockTracking.distance = Math.max(0, mockTracking.distance - 0.2);
    
    return {
      success: true,
      data: {
        riderLocation: updatedLocation,
        eta: mockTracking.eta,
        distance: mockTracking.distance,
      },
    };
  },
};

// Helper function to calculate distance between two coordinates (in km)
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in km
  const dLat = deg2rad(lat2 - lat1);
  const dLng = deg2rad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
