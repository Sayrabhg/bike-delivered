import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockMerchants, mockCategories } from '../../mocks/data';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-brand-600 to-accent-600 rounded-2xl p-8 md:p-12 mb-12 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Fast Delivery, Right to Your Door
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Order from your favorite restaurants and get it delivered in minutes
          </p>
          <Link to="/restaurants">
            <Button variant="secondary" size="lg">
              Order Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {mockCategories.map(category => (
            <Link key={category.id} to={`/restaurants?category=${category.slug}`}>
              <Card className="text-center hover:shadow-medium transition-shadow cursor-pointer p-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-900">{category.name}</h3>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-display font-bold">Featured Restaurants</h2>
          <Link to="/restaurants">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMerchants.filter(m => m.featured).map(merchant => (
            <Link key={merchant.id} to={`/restaurants/${merchant.id}`}>
              <Card className="overflow-hidden hover:shadow-medium transition-shadow cursor-pointer">
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
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{merchant.deliveryTime}</span>
                    <span className="text-gray-600">₹{merchant.deliveryFee} delivery</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-display font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Browse</h3>
            <p className="text-gray-600">Explore restaurants and cuisines near you</p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Order</h3>
            <p className="text-gray-600">Add items to cart and checkout securely</p>
          </Card>
          
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Track</h3>
            <p className="text-gray-600">Track your order in real-time till delivery</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
