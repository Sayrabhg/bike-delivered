import React from 'react';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'We\'re looking for an experienced React developer to help build our customer-facing applications.'
    },
    {
      id: 2,
      title: 'Operations Manager',
      department: 'Operations',
      location: 'Los Angeles',
      type: 'Full-time',
      description: 'Manage daily operations and coordinate with our network of restaurants and delivery riders.'
    },
    {
      id: 3,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Chicago',
      type: 'Full-time',
      description: 'Drive growth through creative marketing campaigns and community engagement initiatives.'
    },
    {
      id: 4,
      title: 'Customer Success Lead',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead our customer support team and ensure exceptional service for our users.'
    },
    {
      id: 5,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote / Houston',
      type: 'Full-time',
      description: 'Build and scale our backend infrastructure to support millions of orders.'
    },
    {
      id: 6,
      title: 'Partnership Manager',
      department: 'Business Development',
      location: 'New York',
      type: 'Full-time',
      description: 'Expand our restaurant network and build strategic partnerships in new markets.'
    }
  ];

  const benefits = [
    { icon: '🏥', title: 'Health & Wellness', description: 'Comprehensive health, dental, and vision insurance' },
    { icon: '🏖️', title: 'Unlimited PTO', description: 'Take the time you need to recharge and stay healthy' },
    { icon: '📚', title: 'Learning Budget', description: '$2,000 annual budget for courses and conferences' },
    { icon: '🏠', title: 'Remote Flexibility', description: 'Work from anywhere with flexible hours' },
    { icon: '🚴', title: 'Free Delivery', description: 'Unlimited free food delivery on our platform' },
    { icon: '💰', title: 'Equity Package', description: 'Own a piece of the company with stock options' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto">
              Be part of the revolution in sustainable food delivery. We're hiring passionate people who want to make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Work at Bike Delivered?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer more than just a job – we offer a mission you can believe in
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your perfect role and help us scale sustainable delivery
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {position.location}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-600">{position.description}</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Culture Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Bike Delivered, we believe in work-life balance, continuous learning, and making a positive impact. Our team is diverse, passionate, and committed to sustainability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Collaborative and inclusive work environment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Regular team building events and company retreats</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Commitment to diversity, equity, and inclusion</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Opportunities for rapid career growth</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-12 text-white text-center">
              <div className="text-8xl mb-6">🎯</div>
              <div className="text-3xl font-bold mb-2">Mission-Driven</div>
              <div className="text-brand-100">Every role contributes to our sustainability goals</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@bikedelivered.com"
            className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg inline-block"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
