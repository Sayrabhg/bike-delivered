import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { orderingHandlers } from '../../mocks/handlers/orderingHandlers';
import { STORAGE_KEYS } from '../../config/constants';

const loadCartFromStorage = () => {
  try {
    const cart = localStorage.getItem(STORAGE_KEYS.CART_ITEMS);
    return cart ? JSON.parse(cart) : { items: [], merchantId: null };
  } catch {
    return { items: [], merchantId: null };
  }
};

const initialState = {
  items: loadCartFromStorage().items,
  merchantId: loadCartFromStorage().merchantId,
  total: 0,
  itemCount: 0,
  loading: false,
  error: null,
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (itemData, { rejectWithValue }) => {
    try {
      const response = await orderingHandlers.addToCart(itemData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (itemId, { rejectWithValue }) => {
    try {
      const response = await orderingHandlers.removeFromCart(itemId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  'cart/updateCartItem',
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const response = await orderingHandlers.updateCartItem(itemId, quantity);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderingHandlers.clearCart();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await orderingHandlers.createOrder(orderData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    syncCart: (state) => {
      const cart = loadCartFromStorage();
      state.items = cart.items;
      state.merchantId = cart.merchantId;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add to cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.merchantId = action.payload.items.length > 0 ? action.payload.items[0].merchantId : null;
        state.total = action.payload.total;
        state.itemCount = action.payload.itemCount;
        localStorage.setItem(STORAGE_KEYS.CART_ITEMS, JSON.stringify({
          items: action.payload.items,
          merchantId: state.merchantId,
        }));
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Remove from cart
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.itemCount = action.payload.itemCount;
        localStorage.setItem(STORAGE_KEYS.CART_ITEMS, JSON.stringify({
          items: action.payload.items,
          merchantId: state.merchantId,
        }));
      })
      // Update cart item
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.itemCount = action.payload.itemCount;
        localStorage.setItem(STORAGE_KEYS.CART_ITEMS, JSON.stringify({
          items: action.payload.items,
          merchantId: state.merchantId,
        }));
      })
      // Clear cart
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
        state.merchantId = null;
        state.total = 0;
        state.itemCount = 0;
        localStorage.removeItem(STORAGE_KEYS.CART_ITEMS);
      })
      // Create order
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
        state.items = [];
        state.merchantId = null;
        state.total = 0;
        state.itemCount = 0;
        localStorage.removeItem(STORAGE_KEYS.CART_ITEMS);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { syncCart } = cartSlice.actions;
export default cartSlice.reducer;
