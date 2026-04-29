import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockOrders } from '../../mocks/data';

const OrdersPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Your Orders</h1>

      {mockOrders.length === 0 ? (
        <div className="text-center py-16">
          <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h2>
          <p className="text-gray-600">Start ordering from your favorite restaurants</p>
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map(order => (
            <Card key={order.id} className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                  <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <Badge
                  variant={order.status === 'delivered' ? 'success' : order.status === 'cancelled' ? 'error' : 'info'}
                  size="md"
                  dot
                >
                  {order.status.replace('_', ' ').toUpperCase()}
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-700">{item.name} x {item.quantity}</span>
                    <span className="text-gray-900">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{order.totalAmount}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
