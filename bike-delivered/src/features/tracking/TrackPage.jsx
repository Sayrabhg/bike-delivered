import React from 'react';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockTracking, mockRiders } from '../../mocks/data';

const TrackPage = () => {
  const rider = mockRiders[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Track Your Order</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <Card className="h-96 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-gray-600 font-medium">Map View</p>
              <p className="text-sm text-gray-500 mt-1">Mapbox integration coming soon</p>
            </div>
          </Card>
        </div>

        {/* Tracking Info */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-5">
            <h2 className="text-xl font-semibold mb-4">Order Status</h2>
            
            <div className="mb-4">
              <Badge variant="info" size="lg" dot>
                {mockTracking.status.replace('_', ' ').toUpperCase()}
              </Badge>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Estimated Time</p>
                <p className="text-2xl font-bold text-gray-900">{mockTracking.eta} min</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500">Distance</p>
                <p className="text-lg font-semibold text-gray-900">{mockTracking.distance} km</p>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h3 className="font-semibold mb-3">Rider Information</h3>
            
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-medium text-lg">
                {rider.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{rider.name}</p>
                <p className="text-sm text-gray-500">{rider.vehicleNumber}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div>
                <p className="text-gray-500">Rating</p>
                <p className="font-semibold">{rider.rating} ★</p>
              </div>
              <div>
                <p className="text-gray-500">Deliveries</p>
                <p className="font-semibold">{rider.totalDeliveries}</p>
              </div>
            </div>

            <button className="w-full mt-4 btn-outline">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Rider
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
