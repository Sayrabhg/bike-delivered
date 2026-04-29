import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import trackingReducer from './slices/trackingSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    tracking: trackingReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for non-serializable values
        ignoredActions: ['tracking/setLocation'],
        // Ignore these field paths in state
        ignoredPaths: ['tracking.currentLocation'],
      },
    }),
});

export default store;
