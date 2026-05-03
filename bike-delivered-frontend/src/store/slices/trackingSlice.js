import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { trackingHandlers } from '../../mocks/handlers/trackingHandlers';

const initialState = {
  currentLocation: null,
  trackingOrder: null,
  riderLocation: null,
  route: null,
  eta: null,
  distance: null,
  status: null,
  loading: false,
  error: null,
  lastUpdated: null,
};

export const getCurrentLocation = createAsyncThunk(
  'tracking/getCurrentLocation',
  async (_, { rejectWithValue }) => {
    try {
      const response = await trackingHandlers.getCurrentLocation();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getRoute = createAsyncThunk(
  'tracking/getRoute',
  async ({ origin, destination }, { rejectWithValue }) => {
    try {
      const response = await trackingHandlers.getRoute(origin, destination);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getETA = createAsyncThunk(
  'tracking/getETA',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await trackingHandlers.getETA(orderId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getRiderLocation = createAsyncThunk(
  'tracking/getRiderLocation',
  async (riderId, { rejectWithValue }) => {
    try {
      const response = await trackingHandlers.getRiderLocation(riderId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTrackingDetails = createAsyncThunk(
  'tracking/getTrackingDetails',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await trackingHandlers.getTrackingDetails(orderId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    clearTracking: (state) => {
      state.trackingOrder = null;
      state.riderLocation = null;
      state.route = null;
      state.eta = null;
      state.distance = null;
      state.status = null;
      state.lastUpdated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get current location
      .addCase(getCurrentLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.currentLocation = action.payload.location;
      })
      .addCase(getCurrentLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get route
      .addCase(getRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.route = action.payload.route;
        state.distance = action.payload.distance;
        state.eta = action.payload.duration;
      })
      .addCase(getRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get ETA
      .addCase(getETA.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getETA.fulfilled, (state, action) => {
        state.loading = false;
        state.eta = action.payload.eta;
        state.distance = action.payload.distance;
        state.status = action.payload.status;
        state.lastUpdated = new Date().toISOString();
      })
      .addCase(getETA.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get rider location
      .addCase(getRiderLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRiderLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.riderLocation = action.payload.location;
        state.lastUpdated = action.payload.timestamp;
      })
      .addCase(getRiderLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get tracking details
      .addCase(getTrackingDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrackingDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.trackingOrder = action.payload.orderId;
        state.riderLocation = action.payload.riderLocation;
        state.route = action.payload.route;
        state.eta = action.payload.eta;
        state.distance = action.payload.distance;
        state.status = action.payload.status;
        state.lastUpdated = action.payload.lastUpdated;
      })
      .addCase(getTrackingDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLocation, clearTracking } = trackingSlice.actions;
export default trackingSlice.reducer;
