import { mockDelay, mockMerchants, mockMenuItems, mockCategories } from '../data';

// Mock discovery handlers
export const discoveryHandlers = {
  // Get all merchants
  getMerchants: async (filters = {}) => {
    await mockDelay(600);
    
    let merchants = [...mockMerchants];
    
    // Apply filters
    if (filters.category) {
      merchants = merchants.filter(m => m.category === filters.category);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      merchants = merchants.filter(m => 
        m.name.toLowerCase().includes(searchLower) ||
        m.category.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters.featured) {
      merchants = merchants.filter(m => m.featured);
    }
    
    return {
      success: true,
      data: {
        merchants,
        total: merchants.length,
      },
    };
  },
  
  // Get merchant by ID
  getMerchantById: async (merchantId) => {
    await mockDelay(400);
    
    const merchant = mockMerchants.find(m => m.id === merchantId);
    
    if (!merchant) {
      throw new Error('Merchant not found');
    }
    
    return {
      success: true,
      data: merchant,
    };
  },
  
  // Search merchants
  searchMerchants: async (query) => {
    await mockDelay(500);
    
    const searchLower = query.toLowerCase();
    const results = mockMerchants.filter(m =>
      m.name.toLowerCase().includes(searchLower) ||
      m.category.toLowerCase().includes(searchLower) ||
      m.address.toLowerCase().includes(searchLower)
    );
    
    return {
      success: true,
      data: {
        merchants: results,
        total: results.length,
        query,
      },
    };
  },
  
  // Get categories
  getCategories: async () => {
    await mockDelay(300);
    
    return {
      success: true,
      data: {
        categories: mockCategories,
      },
    };
  },
  
  // Get popular merchants
  getPopularMerchants: async () => {
    await mockDelay(500);
    
    const popular = mockMerchants
      .filter(m => m.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    
    return {
      success: true,
      data: {
        merchants: popular,
      },
    };
  },
  
  // Get nearby merchants
  getNearbyMerchants: async (userLocation, radius = 5) => {
    await mockDelay(600);
    
    // Simple distance calculation (mock)
    const nearby = mockMerchants.filter(merchant => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lng,
        merchant.coordinates.lat,
        merchant.coordinates.lng
      );
      return distance <= radius;
    });
    
    return {
      success: true,
      data: {
        merchants: nearby,
        total: nearby.length,
        radius,
      },
    };
  },
  
  // Get menu by merchant ID
  getMenuByMerchant: async (merchantId) => {
    await mockDelay(500);
    
    const menuItems = mockMenuItems.filter(item => item.merchantId === merchantId);
    
    return {
      success: true,
      data: {
        merchantId,
        items: menuItems,
        total: menuItems.length,
      },
    };
  },
  
  // Search menu items
  searchMenuItems: async (merchantId, query) => {
    await mockDelay(400);
    
    const searchLower = query.toLowerCase();
    const results = mockMenuItems.filter(item =>
      item.merchantId === merchantId &&
      (item.name.toLowerCase().includes(searchLower) ||
       item.description.toLowerCase().includes(searchLower) ||
       item.category.toLowerCase().includes(searchLower))
    );
    
    return {
      success: true,
      data: {
        items: results,
        total: results.length,
        query,
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
