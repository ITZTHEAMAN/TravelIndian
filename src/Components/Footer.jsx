import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-4">Travel India</h2>
            <p className="text-gray-400 text-sm">
              Explore the beauty of India with us. From the majestic Himalayas to the serene beaches of Goa, we offer the best travel experiences for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/aboutus" className="hover:text-white transition">About Us</a></li>
              <li><a href="/destination" className="hover:text-white transition">Destinations</a></li>
              <li><a href="/packages" className="hover:text-white transition">Tours</a></li>
              <li><a href="/contactus" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-800 hover:bg-white hover:text-black p-2 rounded-full transition">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:from-blue-600 hover:to-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p className="text-gray-500">© 2024 Travel India. All rights reserved.</p>
          <p className="text-gray-500 mt-1">Made with <span className="text-red-500">❤</span> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
