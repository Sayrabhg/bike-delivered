// Mock API delay helper
export const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user data
export const mockUsers = [
  {
    id: 'user_1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    password: 'password123',
    role: 'customer',
    avatar: null,
    addresses: [
      {
        id: 'addr_1',
        label: 'Home',
        street: '123 Main Street',
        city: 'New Delhi',
        state: 'Delhi',
        pincode: '110001',
        coordinates: { lat: 28.6139, lng: 77.2090 },
      },
    ],
  },
];

// Mock merchants
export const mockMerchants = [
  {
    id: 'merchant_1',
    name: 'Pizza Palace',
    category: 'pizza',
    rating: 4.5,
    totalReviews: 234,
    deliveryTime: '30-40 min',
    deliveryFee: 25,
    minOrder: 150,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400',
    address: 'Connaught Place, New Delhi',
    coordinates: { lat: 28.6315, lng: 77.2167 },
    isOpen: true,
    featured: true,
  },
  {
    id: 'merchant_2',
    name: 'Burger Kingdom',
    category: 'burger',
    rating: 4.3,
    totalReviews: 189,
    deliveryTime: '25-35 min',
    deliveryFee: 20,
    minOrder: 100,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    address: 'Karol Bagh, New Delhi',
    coordinates: { lat: 28.6519, lng: 77.1909 },
    isOpen: true,
    featured: false,
  },
  {
    id: 'merchant_3',
    name: 'Sushi Express',
    category: 'japanese',
    rating: 4.7,
    totalReviews: 312,
    deliveryTime: '40-50 min',
    deliveryFee: 30,
    minOrder: 200,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
    address: 'Hauz Khas, New Delhi',
    coordinates: { lat: 28.5494, lng: 77.2001 },
    isOpen: true,
    featured: true,
  },
];

// Mock menu items
export const mockMenuItems = [
  {
    id: 'item_1',
    merchantId: 'merchant_1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh mozzarella and basil',
    price: 299,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400',
    isVeg: true,
    isAvailable: true,
    rating: 4.6,
  },
  {
    id: 'item_2',
    merchantId: 'merchant_1',
    name: 'Pepperoni Pizza',
    description: 'Loaded with pepperoni and cheese',
    price: 399,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400',
    isVeg: false,
    isAvailable: true,
    rating: 4.8,
  },
  {
    id: 'item_3',
    merchantId: 'merchant_2',
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh veggies',
    price: 199,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
    isVeg: false,
    isAvailable: true,
    rating: 4.5,
  },
];

// Mock categories
export const mockCategories = [
  { id: 'cat_1', name: 'Pizza', slug: 'pizza', icon: '🍕' },
  { id: 'cat_2', name: 'Burger', slug: 'burger', icon: '🍔' },
  { id: 'cat_3', name: 'Japanese', slug: 'japanese', icon: '🍱' },
  { id: 'cat_4', name: 'Indian', slug: 'indian', icon: '🍛' },
  { id: 'cat_5', name: 'Chinese', slug: 'chinese', icon: '🥡' },
  { id: 'cat_6', name: 'Desserts', slug: 'desserts', icon: '🍰' },
  { id: 'cat_7', name: 'Beverages', slug: 'beverages', icon: '🥤' },
];

// Mock orders
export const mockOrders = [
  {
    id: 'order_1',
    userId: 'user_1',
    merchantId: 'merchant_1',
    items: [
      { itemId: 'item_1', name: 'Margherita Pizza', quantity: 1, price: 299 },
    ],
    totalAmount: 324,
    deliveryFee: 25,
    status: 'in_transit',
    paymentMethod: 'card',
    paymentStatus: 'paid',
    deliveryAddress: mockUsers[0].addresses[0],
    riderId: 'rider_1',
    createdAt: new Date(Date.now() - 1800000).toISOString(),
    estimatedDelivery: new Date(Date.now() + 1200000).toISOString(),
  },
];

// Mock riders
export const mockRiders = [
  {
    id: 'rider_1',
    name: 'Raj Kumar',
    phone: '9876543211',
    rating: 4.8,
    totalDeliveries: 456,
    vehicleNumber: 'DL01AB1234',
    currentLocation: { lat: 28.6200, lng: 77.2100 },
    isAvailable: true,
  },
];

// Mock tracking data
export const mockTracking = {
  orderId: 'order_1',
  riderLocation: { lat: 28.6250, lng: 77.2150 },
  destination: { lat: 28.6139, lng: 77.2090 },
  eta: 15, // minutes
  distance: 3.5, // km
  status: 'in_transit',
  route: [
    { lat: 28.6250, lng: 77.2150 },
    { lat: 28.6230, lng: 77.2140 },
    { lat: 28.6200, lng: 77.2120 },
    { lat: 28.6170, lng: 77.2110 },
    { lat: 28.6139, lng: 77.2090 },
  ],
};
