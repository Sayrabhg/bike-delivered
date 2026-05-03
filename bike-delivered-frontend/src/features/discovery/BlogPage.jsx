import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Eco-Friendly Food Delivery',
      excerpt: 'How bike delivery is revolutionizing the food industry and reducing carbon emissions in urban areas.',
      category: 'Sustainability',
      date: 'April 15, 2025',
      readTime: '5 min read',
      image: '🌱'
    },
    {
      id: 2,
      title: 'Top 10 Hidden Gem Restaurants in New York',
      excerpt: 'Discover amazing local restaurants you probably didn\'t know existed, now available on Bike Delivered.',
      category: 'Food Guide',
      date: 'April 10, 2025',
      readTime: '7 min read',
      image: '🍽️'
    },
    {
      id: 3,
      title: 'Rider Spotlight: How Maria Earns $30/Hour',
      excerpt: 'Meet one of our top riders and learn her strategies for maximizing earnings on Bike Delivered.',
      category: 'Rider Stories',
      date: 'April 5, 2025',
      readTime: '4 min read',
      image: '🚴'
    },
    {
      id: 4,
      title: 'Behind the Scenes: Our Restaurant Vetting Process',
      excerpt: 'Learn how we ensure quality and safety standards for every restaurant on our platform.',
      category: 'Company News',
      date: 'March 28, 2025',
      readTime: '6 min read',
      image: '✅'
    },
    {
      id: 5,
      title: 'The Science of Food Delivery: Keeping Meals Hot & Fresh',
      excerpt: 'Our innovative packaging and delivery techniques ensure your food arrives in perfect condition.',
      category: 'Technology',
      date: 'March 20, 2025',
      readTime: '8 min read',
      image: '🔬'
    },
    {
      id: 6,
      title: 'Community Impact: 1 Year of Charity Partnerships',
      excerpt: 'How we\'ve donated over 10,000 meals to local shelters and food banks through our charity program.',
      category: 'Community',
      date: 'March 15, 2025',
      readTime: '5 min read',
      image: '❤️'
    }
  ];

  const categories = ['All', 'Sustainability', 'Food Guide', 'Rider Stories', 'Company News', 'Technology', 'Community'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bike Delivered Blog</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto">
              Stories, tips, and insights from the world of eco-friendly food delivery
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                index === 0
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 p-16 flex items-center justify-center">
              <div className="text-9xl">{blogPosts[0].image}</div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-medium">
                  {blogPosts[0].category}
                </span>
                <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 text-lg mb-6">{blogPosts[0].excerpt}</p>
              <Link
                to={`/blog/${blogPosts[0].id}`}
                className="text-brand-600 hover:text-brand-700 font-semibold inline-flex items-center"
              >
                Read More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 text-center">
                <div className="text-6xl">{post.image}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-brand-600 hover:text-brand-700 font-medium text-sm inline-flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-brand-100 mb-6">
              Subscribe to our newsletter for the latest blog posts, exclusive deals, and delivery tips.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-brand-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
