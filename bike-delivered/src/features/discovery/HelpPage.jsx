import React from 'react';
import { Link } from 'react-router-dom';

const HelpPage = () => {
  const helpCategories = [
    { icon: '📦', title: 'Orders', description: 'Track, modify, or cancel orders', link: '/faq' },
    { icon: '💳', title: 'Payments', description: 'Payment methods, refunds, and billing', link: '/faq' },
    { icon: '🚴', title: 'Delivery', description: 'Delivery times, fees, and tracking', link: '/faq' },
    { icon: '👤', title: 'Account', description: 'Profile settings and preferences', link: '/faq' },
    { icon: '🏪', title: 'Restaurants', description: 'Partner restaurant information', link: '/faq' },
    { icon: '🎁', title: 'Promotions', description: 'Discounts, codes, and loyalty rewards', link: '/faq' }
  ];

  const popularArticles = [
    'How do I track my order?',
    'What is the delivery fee?',
    'How do I request a refund?',
    'Can I schedule an order for later?',
    'How do I update my payment method?',
    'What are your delivery hours?'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Help Center</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto mb-8">
              How can we help you today?
            </p>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-brand-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-900 font-medium">{article}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-brand-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is available 24/7 to assist you
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:support@bikedelivered.com"
                className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Email Support
              </a>
              <a
                href="tel:+1234567890"
                className="bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Call Us
              </a>
              <button className="bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
