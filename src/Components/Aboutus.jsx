import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-slate-100 text-gray-800">
      {/* Header */}
      <header className="pt-24 bg-slate-600 text-white py-10 sm:py-16">
        <h1 className="text-3xl mt-[30px] sm:text-4xl font-extrabold text-center">About Us</h1>
        <p className="mt-3 sm:mt-4 text-center text-base sm:text-lg">
          Discover the beauty of India with us!
        </p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4 text-sm sm:text-base">
              We are a dedicated team of travel enthusiasts committed to providing the best travel experiences across India...
            </p>
            <p className="text-sm sm:text-base">
              Whether you're looking for adventure, relaxation, or cultural immersion, we have tailored experiences that cater to all types of travelers.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://i.imghippo.com/files/0JLVz1727471260.png"
              alt="About Us"
              className="w-full max-w-sm md:max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base leading-relaxed">
            At TRAVEL INDIA, our aim is to make traveling in India accessible and enjoyable for everyone...
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-10 sm:mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
            {['Customer Satisfaction', 'Sustainable Travel', 'Authentic Experiences'].map((value, idx) => (
              <li className="flex items-start" key={idx}>
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z" />
                </svg>
                {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="mt-10 sm:mt-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-sm sm:text-base">If you have any questions or need assistance, feel free to contact us!</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedinIn size={24} />
            </a>
            <a href="mailto:example@gmail.com" className="text-blue-600 hover:text-blue-800">
              <FaEnvelope size={24} />
            </a>
          </div>
          <Link to="/contactus">
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
