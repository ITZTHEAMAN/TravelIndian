import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Have any questions or feedback? We'd love to hear from you!
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:example@gmail.com"
            className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        <div className="mt-10">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
