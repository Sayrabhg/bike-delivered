import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Press', path: '/press' },
    ],
    support: [
      { name: 'Help Center', path: '/help' },
      { name: 'Safety', path: '/safety' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
    cities: [
      { name: 'New York', path: '/cities/new-york' },
      { name: 'Los Angeles', path: '/cities/los-angeles' },
      { name: 'Chicago', path: '/cities/chicago' },
      { name: 'Houston', path: '/cities/houston' },
    ],
    partners: [
      { name: 'Add Restaurant', path: '/partners/restaurant' },
      { name: 'Become a Rider', path: '/partners/rider' },
      { name: 'Business Account', path: '/partners/business' },
      { name: 'Franchise', path: '/partners/franchise' },
    ],
    categories: [
      { name: 'Pizza', path: '/restaurants?category=pizza' },
      { name: 'Burgers', path: '/restaurants?category=burgers' },
      { name: 'Sushi', path: '/restaurants?category=sushi' },
      { name: 'Chinese', path: '/restaurants?category=chinese' },
    ],
    popular: [
      { name: 'Near Me', path: '/restaurants?filter=nearby' },
      { name: 'Top Rated', path: '/restaurants?filter=top-rated' },
      { name: 'Fast Delivery', path: '/restaurants?filter=fast-delivery' },
      { name: 'Deals', path: '/restaurants?filter=deals' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">🚴</span>
              <span className="ml-2 text-xl font-bold">Bike Delivered</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Fast, reliable food delivery right to your doorstep. 
              We connect you with the best local restaurants and deliver 
              your favorite meals with care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.876.237-1.803.282-2.713.107.769 2.395 2.994 4.14 5.618 4.19-2.078 1.628-4.678 2.586-7.508 2.586-.488 0-.972-.028-1.452-.084 2.679 1.707 5.858 2.702 9.253 2.702 11.103 0 17.178-9.215 16.797-17.407.953-.687 1.782-1.542 2.442-2.512z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Cities</h3>
            <ul className="space-y-2">
              {footerLinks.cities.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partner With Us</h3>
            <ul className="space-y-2">
              {footerLinks.partners.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Filters */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Filters</h3>
            <ul className="space-y-2">
              {footerLinks.popular.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Operating Hours Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Delivery Street<br />Food City, FC 12345</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@bikedelivered.com" className="hover:text-white transition-colors">support@bikedelivered.com</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white">8:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">9:00 AM - 10:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-green-900/30 border border-green-700 rounded-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Currently Open</span>
              </div>
            </div>
          </div>

          {/* Social Responsibility */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Responsibility</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sustainability" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Community Programs
                </Link>
              </li>
              <li>
                <Link to="/eco-packaging" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Eco-Friendly Packaging
                </Link>
              </li>
              <li>
                <Link to="/charity" className="text-gray-400 hover:text-white transition-colors flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Charity Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Download App & Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pt-8 border-t border-gray-800">
          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Get the best experience with our mobile app. Order food, track deliveries, and manage your account on the go.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg px-4 py-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.35-1.09-.46-2.09-.48-3.23 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.79 3.06.85 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.8 3.38 2.03-3.24 1.87-2.89 6.21.47 7.43-.53 1.48-1.24 2.92-2.48 4.15zM12.05 5.67c-.15-1.83 1.36-3.47 3.14-3.67.28 2.15-1.98 3.81-3.14 3.67z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg px-4 py-2 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.18 22.74c-.12-.17-.18-.38-.18-.62V1.88c0-.24.06-.45.18-.62l7.34 10.74-7.34 10.74zM17.31 12l-3.87 3.87 5.14 5.14c.43.28.97.28 1.41 0l2.14-1.27c.43-.28.71-.74.71-1.27 0-.53-.28-.99-.71-1.27l-4.82-5.2-3.87 3.87zM13.44 11.13l-7.34-7.34c-.43.28-.71.74-.71 1.27 0 .53.28.99.71 1.27l5.14 5.14 2.2-3.34zM17.31 12l-2.2 3.34-5.14-5.14 7.34-7.34c.43.28.71.74.71 1.27 0 .53-.28.99-.71 1.27z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Subscribe to our newsletter for exclusive deals, new restaurant additions, and delivery updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-white placeholder-gray-500 flex-grow"
              />
              <button
                type="submit"
                className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold mb-4 text-center">We Accept</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-800 rounded-lg px-4 py-2 flex items-center">
              <svg className="w-8 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 7h20v10H2V7zm2 2v6h16V9H4zm1 1h4v4H5v-4zm5 0h3v4h-3v-4zm4 0h4v4h-4v-4z"/>
              </svg>
              <span className="text-sm">Credit Card</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2 flex items-center">
              <svg className="w-8 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 7h20v10H2V7zm2 2v6h16V9H4zm1 1h4v4H5v-4zm5 0h3v4h-3v-4zm4 0h4v4h-4v-4z"/>
              </svg>
              <span className="text-sm">Debit Card</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2 flex items-center">
              <svg className="w-8 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.13-.29-1.75-.63-1.75-1.22 0-.63.66-1.07 1.73-1.07 1.17 0 1.73.5 1.78 1.42h1.6c-.06-1.52-1.13-2.37-2.6-2.37-1.67 0-2.73.95-2.73 2.17 0 1.33 1.02 1.87 2.43 2.17 1.27.27 1.75.68 1.75 1.27 0 .72-.75 1.15-1.89 1.15-1.37 0-2.17-.63-2.2-1.62h-1.6c.08 1.74 1.34 2.56 2.93 2.56 1.67 0 2.77-.92 2.77-2.27 0-1.4-1.07-1.97-2.59-2.17z"/>
              </svg>
              <span className="text-sm">UPI</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2 flex items-center">
              <svg className="w-8 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <span className="text-sm">Wallet</span>
            </div>
            <div className="bg-gray-800 rounded-lg px-4 py-2 flex items-center">
              <svg className="w-8 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
              </svg>
              <span className="text-sm">Cash</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Bike Delivered. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
