import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockMerchants } from '../../mocks/data';

const RestaurantsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Restaurants</h1>
        <p className="text-gray-600">Discover the best food & drinks near you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMerchants.map(merchant => (
          <Card key={merchant.id} className="overflow-hidden hover:shadow-medium transition-shadow">
            <img
              src={merchant.image}
              alt={merchant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{merchant.name}</h3>
                <Badge variant="success" size="sm">
                  {merchant.rating} ★
                </Badge>
              </div>
              <p className="text-sm text-gray-500 mb-2">{merchant.category}</p>
              <p className="text-xs text-gray-500 mb-3">{merchant.address}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{merchant.deliveryTime}</span>
                <span className="text-gray-600">₹{merchant.deliveryFee} delivery</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
