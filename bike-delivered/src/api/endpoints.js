// API endpoint constants

export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  VERIFY_OTP: '/auth/verify-otp',
  RESEND_OTP: '/auth/resend-otp',
  LOGOUT: '/auth/logout',
  REFRESH_TOKEN: '/auth/refresh',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
};

export const USER_ENDPOINTS = {
  PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile/update',
  CHANGE_PASSWORD: '/users/change-password',
  ADDRESSES: '/users/addresses',
  ADD_ADDRESS: '/users/addresses/add',
  UPDATE_ADDRESS: '/users/addresses/update',
  DELETE_ADDRESS: '/users/addresses/delete',
};

export const MERCHANT_ENDPOINTS = {
  LIST: '/merchants',
  DETAIL: '/merchants/:id',
  SEARCH: '/merchants/search',
  CATEGORIES: '/merchants/categories',
  POPULAR: '/merchants/popular',
  NEARBY: '/merchants/nearby',
  REVIEWS: '/merchants/:id/reviews',
};

export const MENU_ENDPOINTS = {
  LIST: '/merchants/:merchantId/menu',
  DETAIL: '/menu/:id',
  CATEGORIES: '/menu/categories',
  SEARCH: '/menu/search',
};

export const ORDER_ENDPOINTS = {
  CREATE: '/orders/create',
  LIST: '/orders',
  DETAIL: '/orders/:id',
  CANCEL: '/orders/:id/cancel',
  TRACK: '/orders/:id/track',
  HISTORY: '/orders/history',
};

export const CART_ENDPOINTS = {
  GET: '/cart',
  ADD_ITEM: '/cart/add',
  REMOVE_ITEM: '/cart/remove/:itemId',
  UPDATE_ITEM: '/cart/update/:itemId',
  CLEAR: '/cart/clear',
};

export const PAYMENT_ENDPOINTS = {
  CREATE_INTENT: '/payments/create-intent',
  VERIFY: '/payments/verify',
  HISTORY: '/payments/history',
  REFUND: '/payments/:id/refund',
};

export const TRACKING_ENDPOINTS = {
  LOCATION: '/tracking/location',
  UPDATE_LOCATION: '/tracking/location/update',
  ROUTE: '/tracking/route',
  ETA: '/tracking/eta',
  RIDER_LOCATION: '/tracking/rider/:riderId',
};

export const NOTIFICATION_ENDPOINTS = {
  LIST: '/notifications',
  MARK_READ: '/notifications/:id/mark-read',
  MARK_ALL_READ: '/notifications/mark-all-read',
  UNREAD_COUNT: '/notifications/unread-count',
};
