import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksPage = () => {
  const steps = [
    {
      number: 1,
      title: 'Browse Restaurants',
      description: 'Explore hundreds of local restaurants in your area. Filter by cuisine, rating, delivery time, or deals.',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: 'Choose Your Meal',
      description: 'Select your favorite dishes from the menu. Customize your order with special instructions or add-ons.',
      icon: '🍔',
      color: 'from-green-500 to-green-600'
    },
    {
      number: 3,
      title: 'Place Your Order',
      description: 'Add items to your cart, choose your payment method, and confirm your order. It\'s that simple!',
      icon: '📱',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 4,
      title: 'Track in Real-Time',
      description: 'Watch your order being prepared and track your bike rider in real-time as they head to your location.',
      icon: '🚴',
      color: 'from-orange-500 to-orange-600'
    },
    {
      number: 5,
      title: 'Enjoy Your Food',
      description: 'Receive your hot, fresh meal at your doorstep. Rate your experience and earn loyalty points!',
      icon: '😋',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Average delivery time of 30-45 minutes. Our bike riders navigate traffic efficiently to bring you hot food fast.'
    },
    {
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'Zero emissions with bike delivery. We\'re committed to sustainable practices and reducing our carbon footprint.'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'No hidden fees. Menu prices match restaurant prices. Plus, exclusive deals and loyalty rewards.'
    },
    {
      icon: '📍',
      title: 'Real-Time Tracking',
      description: 'Track your order from preparation to delivery with live GPS tracking and status updates.'
    },
    {
      icon: '🛡️',
      title: 'Secure Payments',
      description: 'Multiple payment options with industry-standard encryption. Your data is always protected.'
    },
    {
      icon: '🎧',
      title: '24/7 Support',
      description: 'Our customer support team is available round the clock to assist you with any issues.'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Happy Customers', icon: '👥' },
    { value: '500+', label: 'Partner Restaurants', icon: '🏪' },
    { value: '1M+', label: 'Orders Delivered', icon: '📦' },
    { value: '4.8★', label: 'Average Rating', icon: '⭐' }
  ];

  const riderBenefits = [
    'Flexible working hours - be your own boss',
    'Competitive pay: $15-$25/hour including tips',
    'Weekly payments directly to your account',
    'Bonuses for peak hours and high performance',
    'Keep 100% of customer tips',
    'Free insurance coverage during deliveries',
    'Supportive community of riders',
    'Easy onboarding process'
  ];

  const restaurantBenefits = [
    'Access to 50,000+ active customers',
    'Increased revenue by 30-40%',
    'Marketing and promotional support',
    'Dedicated account manager',
    'Analytics dashboard with insights',
    'Streamlined order management system',
    'Reliable bike delivery network',
    '24/7 partner support'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">How Bike Delivered Works</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto mb-8">
              From restaurant to your doorstep in 5 simple steps. Fast, reliable, and eco-friendly food delivery.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/restaurants"
                className="bg-white text-brand-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Order Now
              </Link>
              <Link
                to="/signup"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-600 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-brand-600 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">5 Simple Steps</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your favorite food delivered has never been easier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-3xl text-white`}>
                  {step.icon}
                </div>
                <div className="inline-block bg-brand-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Bike Delivered?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another delivery app. Here's what makes us special.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For Riders Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Become a Delivery Rider</h2>
              <p className="text-xl text-green-100 mb-8">
                Join our team of bike riders and earn money on your own schedule. Be your own boss!
              </p>
              <ul className="space-y-3 mb-8">
                {riderBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/partners/rider"
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Apply Now
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-8xl text-center">🚴</div>
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold mb-2">$15-$25/hour</div>
                <div className="text-green-100">Average rider earnings including tips</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Restaurants Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-8xl text-center">🏪</div>
              <div className="mt-6 text-center">
                <div className="text-4xl font-bold mb-2">+30-40%</div>
                <div className="text-purple-100">Average revenue increase for partners</div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner Your Restaurant</h2>
              <p className="text-xl text-purple-100 mb-8">
                Join 500+ restaurants growing their business with Bike Delivered. Reach more customers today!
              </p>
              <ul className="space-y-3 mb-8">
                {restaurantBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/partners/restaurant"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers enjoying fast, eco-friendly food delivery
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/restaurants"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              Order Food Now
            </Link>
            <Link
              to="/faq"
              className="bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
