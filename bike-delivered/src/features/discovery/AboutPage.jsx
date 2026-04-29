import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: '👩‍💼', bio: 'Former Uber Eats executive with 10+ years in food tech' },
    { name: 'Michael Chen', role: 'CTO', image: '👨‍💻', bio: 'Tech visionary from Google with expertise in logistics' },
    { name: 'Emily Rodriguez', role: 'COO', image: '👩‍💼', bio: 'Operations expert who scaled 3 delivery startups' },
    { name: 'David Kim', role: 'Head of Marketing', image: '👨‍💼', bio: 'Growth hacker with passion for sustainable business' }
  ];

  const values = [
    {
      icon: '🌱',
      title: 'Sustainability First',
      description: 'We believe in delivering food without harming the planet. Our bike fleet produces zero emissions.'
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'We support local restaurants and create jobs for riders in every community we serve.'
    },
    {
      icon: '⚡',
      title: 'Speed & Reliability',
      description: 'Fast delivery without compromising food quality. Your satisfaction is our priority.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly improving our technology to provide the best delivery experience possible.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Bike Delivered founded in New York City', icon: '🚀' },
    { year: '2021', event: 'Expanded to Los Angeles and Chicago', icon: '🌆' },
    { year: '2022', event: 'Reached 10,000 orders milestone', icon: '📈' },
    { year: '2023', event: 'Launched in Houston, 500+ restaurant partners', icon: '🏪' },
    { year: '2024', event: '1 million orders delivered, 50K+ happy customers', icon: '🎉' },
    { year: '2025', event: 'Expanding to 10 new cities nationwide', icon: '🗺️' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Bike Delivered</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto">
              We're on a mission to revolutionize food delivery with speed, sustainability, and community impact.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              Bike Delivered was born from a simple idea: food delivery should be fast, affordable, and environmentally responsible. We saw the negative impact of car-based delivery services on our cities' traffic and air quality, and we knew there had to be a better way.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              By using bikes for delivery, we've created a system that's not only faster in urban environments but also produces zero emissions. We're proving that business success and environmental responsibility can go hand in hand.
            </p>
            <div className="bg-brand-50 border-l-4 border-brand-600 p-6 rounded-r-lg">
              <p className="text-brand-900 font-medium italic">
                "We're not just delivering food – we're delivering a sustainable future, one meal at a time."
              </p>
              <p className="text-brand-700 mt-2 font-semibold">— Sarah Johnson, Founder & CEO</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-12 text-white text-center">
            <div className="text-9xl mb-6">🚴</div>
            <div className="text-3xl font-bold mb-2">Since 2020</div>
            <div className="text-brand-100">Delivering happiness on two wheels</div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small startup to a leading eco-friendly delivery platform
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white rounded-xl shadow-md p-6 inline-block">
                      <div className="text-3xl mb-2">{milestone.icon}</div>
                      <div className="text-brand-600 font-bold text-lg mb-1">{milestone.year}</div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-600 rounded-full border-4 border-white shadow"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Bike Delivered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-brand-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-green-100">
              Together, we're making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-2xl mb-2">Car Trips Avoided</div>
              <div className="text-green-100">By choosing bike delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">50 Tons</div>
              <div className="text-2xl mb-2">CO₂ Emissions Saved</div>
              <div className="text-green-100">Equivalent to planting 2,500 trees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <div className="text-5xl font-bold mb-2">1,000+</div>
              <div className="text-2xl mb-2">Green Jobs Created</div>
              <div className="text-green-100">For delivery riders</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Be Part of Our Story</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're a customer, restaurant partner, or rider – you're helping us build a sustainable future
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/restaurants"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              Order Now
            </Link>
            <Link
              to="/partners/restaurant"
              className="bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              Partner With Us
            </Link>
            <Link
              to="/partners/rider"
              className="bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-semibold py-4 px-10 rounded-lg transition-colors text-lg"
            >
              Become a Rider
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
