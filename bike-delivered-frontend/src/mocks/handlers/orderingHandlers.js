import { mockDelay, mockOrders, mockMenuItems } from '../data';

// Mock cart state
let mockCart = {
  items: [],
  merchantId: null,
};

// Mock ordering handlers
export const orderingHandlers = {
  // Get cart
  getCart: async () => {
    await mockDelay(300);
    
    const total = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
      success: true,
      data: {
        items: mockCart.items,
        total,
        itemCount: mockCart.items.reduce((sum, item) => sum + item.quantity, 0),
      },
    };
  },
  
  // Add item to cart
  addToCart: async (itemData) => {
    await mockDelay(400);
    
    const menuItem = mockMenuItems.find(i => i.id === itemData.itemId);
    
    if (!menuItem) {
      throw new Error('Menu item not found');
    }
    
    // Check if cart has items from different merchant
    if (mockCart.merchantId && mockCart.merchantId !== menuItem.merchantId) {
      // Clear cart for new merchant
      mockCart = { items: [], merchantId: menuItem.merchantId };
    } else {
      mockCart.merchantId = menuItem.merchantId;
    }
    
    // Check if item already in cart
    const existingItem = mockCart.items.find(i => i.itemId === itemData.itemId);
    
    if (existingItem) {
      existingItem.quantity += itemData.quantity || 1;
    } else {
      mockCart.items.push({
        itemId: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: itemData.quantity || 1,
        image: menuItem.image,
      });
    }
    
    const total = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
      success: true,
      data: {
        message: 'Item added to cart',
        items: mockCart.items,
        total,
        itemCount: mockCart.items.reduce((sum, item) => sum + item.quantity, 0),
      },
    };
  },
  
  // Remove item from cart
  removeFromCart: async (itemId) => {
    await mockDelay(300);
    
    mockCart.items = mockCart.items.filter(i => i.itemId !== itemId);
    
    const total = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
      success: true,
      data: {
        message: 'Item removed from cart',
        items: mockCart.items,
        total,
        itemCount: mockCart.items.reduce((sum, item) => sum + item.quantity, 0),
      },
    };
  },
  
  // Update cart item quantity
  updateCartItem: async (itemId, quantity) => {
    await mockDelay(300);
    
    const item = mockCart.items.find(i => i.itemId === itemId);
    
    if (!item) {
      throw new Error('Item not found in cart');
    }
    
    if (quantity <= 0) {
      mockCart.items = mockCart.items.filter(i => i.itemId !== itemId);
    } else {
      item.quantity = quantity;
    }
    
    const total = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return {
      success: true,
      data: {
        message: 'Cart updated',
        items: mockCart.items,
        total,
        itemCount: mockCart.items.reduce((sum, item) => sum + item.quantity, 0),
      },
    };
  },
  
  // Clear cart
  clearCart: async () => {
    await mockDelay(200);
    
    mockCart = { items: [], merchantId: null };
    
    return {
      success: true,
      data: {
        message: 'Cart cleared',
        items: [],
        total: 0,
        itemCount: 0,
      },
    };
  },
  
  // Create order
  createOrder: async (orderData) => {
    await mockDelay(1000);
    
    if (mockCart.items.length === 0) {
      throw new Error('Cart is empty');
    }
    
    const subtotal = mockCart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 25;
    const totalAmount = subtotal + deliveryFee;
    
    const newOrder = {
      id: 'order_' + Date.now(),
      userId: orderData.userId,
      merchantId: mockCart.merchantId,
      items: [...mockCart.items],
      totalAmount,
      deliveryFee,
      status: 'pending',
      paymentMethod: orderData.paymentMethod,
      paymentStatus: 'pending',
      deliveryAddress: orderData.deliveryAddress,
      riderId: null,
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    };
    
    // Add to mock orders
    mockOrders.push(newOrder);
    
    // Clear cart
    mockCart = { items: [], merchantId: null };
    
    return {
      success: true,
      data: {
        message: 'Order created successfully',
        order: newOrder,
      },
    };
  },
  
  // Get orders
  getOrders: async (userId) => {
    await mockDelay(500);
    
    const userOrders = mockOrders.filter(o => o.userId === userId);
    
    return {
      success: true,
      data: {
        orders: userOrders,
        total: userOrders.length,
      },
    };
  },
  
  // Get order by ID
  getOrderById: async (orderId) => {
    await mockDelay(400);
    
    const order = mockOrders.find(o => o.id === orderId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    return {
      success: true,
      data: order,
    };
  },
  
  // Cancel order
  cancelOrder: async (orderId) => {
    await mockDelay(600);
    
    const order = mockOrders.find(o => o.id === orderId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    if (order.status === 'delivered' || order.status === 'cancelled') {
      throw new Error('Order cannot be cancelled');
    }
    
    order.status = 'cancelled';
    
    return {
      success: true,
      data: {
        message: 'Order cancelled successfully',
        order,
      },
    };
  },
  
  // Track order
  trackOrder: async (orderId) => {
    await mockDelay(400);
    
    const order = mockOrders.find(o => o.id === orderId);
    
    if (!order) {
      throw new Error('Order not found');
    }
    
    return {
      success: true,
      data: {
        orderId: order.id,
        status: order.status,
        riderId: order.riderId,
        estimatedDelivery: order.estimatedDelivery,
        deliveryAddress: order.deliveryAddress,
      },
    };
  },
};
