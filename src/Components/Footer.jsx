import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-white text-3xl font-bold mb-4">Travel India</h2>
            <p className="text-gray-400">
              Explore the beauty of India with us. From the majestic Himalayas to the serene beaches of Goa, we offer the best travel experiences for you.
            </p>
          </div>

          
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="/aboutus" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/destination" className="hover:text-white">Destinations</a>
              </li>
              <li className="mb-2">
                <a href="/packages" className="hover:text-white">Tours</a>
              </li>
              <li className="mb-2">
                <a href="/contactus" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2024 Travel India. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Made with <span className="text-red-500">❤</span> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
