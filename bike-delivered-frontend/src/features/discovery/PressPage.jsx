import React from 'react';

const PressPage = () => {
  const pressReleases = [
    {
      date: 'April 20, 2025',
      title: 'Bike Delivered Reaches 1 Million Orders Milestone',
      excerpt: 'The eco-friendly delivery platform celebrates unprecedented growth and announces expansion plans.',
      link: '#'
    },
    {
      date: 'March 15, 2025',
      title: 'Bike Delivered Launches in Houston, Texas',
      excerpt: 'Expanding sustainable food delivery to the fourth largest city in the US.',
      link: '#'
    },
    {
      date: 'February 1, 2025',
      title: 'Partnership with GreenPeace: Delivering Sustainability',
      excerpt: 'New initiative aims to plant 10,000 trees by end of 2025.',
      link: '#'
    },
    {
      date: 'January 10, 2025',
      title: 'Bike Delivered Raises $50M in Series B Funding',
      excerpt: 'Investment will fuel expansion to 20 new cities and technology upgrades.',
      link: '#'
    }
  ];

  const mediaMentions = [
    { source: 'TechCrunch', title: 'How Bike Delivered is Disrupting Food Delivery', date: 'April 2025' },
    { source: 'Forbes', title: 'The Future of Sustainable Delivery', date: 'March 2025' },
    { source: 'Bloomberg', title: 'Green Startups to Watch in 2025', date: 'February 2025' },
    { source: 'The Verge', title: 'Bike Delivery: The Next Big Thing', date: 'January 2025' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Press & Media</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto">
              News, announcements, and media coverage about Bike Delivered
            </p>
          </div>
        </div>
      </div>

      {/* Press Releases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-brand-600 font-semibold mb-2">{release.date}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
              <p className="text-gray-600 mb-4">{release.excerpt}</p>
              <a href={release.link} className="text-brand-600 hover:text-brand-700 font-medium">
                Read Full Release →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Media Mentions */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Media Mentions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaMentions.map((mention, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="text-2xl font-bold text-brand-600 mb-2">{mention.source}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{mention.title}</h3>
                <div className="text-gray-500 text-sm">{mention.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-brand-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Press Inquiries</h3>
              <p className="text-gray-600 mb-2">Email: press@bikedelivered.com</p>
              <p className="text-gray-600 mb-2">Phone: +1 (234) 567-891</p>
              <p className="text-gray-600">Available 24/7 for urgent inquiries</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Media Assets</h3>
              <p className="text-gray-600 mb-4">Download our logo, brand guidelines, and high-resolution images.</p>
              <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
