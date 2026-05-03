// App-wide constants

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Bike Delivered';
export const APP_VERSION = import.meta.env.VITE_APP_VERSION || '1.0.0';

// API Constants
export const API_TIMEOUT = 10000; // 10 seconds
export const API_RETRY_ATTEMPTS = 3;

// Map Constants
export const DEFAULT_ZOOM = 13;
export const MAX_ZOOM = 18;
export const MIN_ZOOM = 10;

// Delivery Constants
export const DELIVERY_FEE_PER_KM = 2.5;
export const MIN_DELIVERY_FEE = 10;
export const MAX_DELIVERY_DISTANCE = 20; // km
export const ESTIMATED_DELIVERY_TIME_MIN = 30;
export const ESTIMATED_DELIVERY_TIME_MAX = 60;

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PREPARING: 'preparing',
  PICKED_UP: 'picked_up',
  IN_TRANSIT: 'in_transit',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

// Payment Methods
export const PAYMENT_METHODS = {
  CASH: 'cash',
  CARD: 'card',
  UPI: 'upi',
  WALLET: 'wallet',
};

// User Roles
export const USER_ROLES = {
  CUSTOMER: 'customer',
  RIDER: 'rider',
  MERCHANT: 'merchant',
  ADMIN: 'admin',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  CART_ITEMS: 'cart_items',
  THEME: 'theme',
  LOCATION: 'user_location',
};

// Validation Constants
export const PASSWORD_MIN_LENGTH = 8;
export const PHONE_NUMBER_LENGTH = 10;
export const OTP_LENGTH = 6;

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// Debounce Delays
export const SEARCH_DEBOUNCE_DELAY = 300;
export const LOCATION_UPDATE_DELAY = 5000; // 5 seconds
