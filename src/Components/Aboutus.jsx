import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="bg-slate-100 text-gray-800">
      
      <header className=" pt-24 bg-slate-600 text-white py-12">
        <h1 className="text-4xl font-extrabold text-center">About Us</h1>
        <p className="mt-4 text-center text-lg">
          Discover the beauty of India with us!
        </p>
      </header>

     
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
         
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="mb-4">
              We are a dedicated team of travel enthusiasts committed to providing the best travel experiences across India. Our goal is to help you explore the incredible landscapes, rich culture, and diverse heritage that this beautiful country has to offer.
            </p>
            <p>
              Whether you're looking for adventure, relaxation, or cultural immersion, we have tailored experiences that cater to all types of travelers. Join us on this journey to explore India like never before!
            </p>
          </div>

          
          <div className="flex justify-center items-center">
            <img
              src="https://i.imghippo.com/files/0JLVz1727471260.png"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p>
          At TRAVEL INDIA, our aim is to make traveling in India accessible and enjoyable for everyone. We are dedicated to offering our customers affordable travel packages that are rich in experiences and fully guided, ensuring that you explore the breathtaking beauty and diverse culture of India without breaking the bank.

We believe that every traveler deserves to discover the wonders of this incredible country, from its vibrant cities to serene landscapes, all while enjoying a seamless travel experience. Our expert guides are committed to providing insightful information and support throughout your journey, allowing you to immerse yourself in the local culture and create unforgettable memories.

Join us on an adventure where budget meets exploration, and let us guide you through the amazing tapestry of India!
          </p>
        </div>

        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z" />
              </svg>
              Customer Satisfaction
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z" />
              </svg>
              Sustainable Travel
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 14h-2v-2h2v2zm0-4h-2V7h2v4z" />
              </svg>
              Authentic Experiences
            </li>
          </ul>
        </div>

      
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p>If you have any questions or need assistance, feel free to contact us!</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="mailto:example@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEnvelope size={30} />
            </a>
          </div>
        <Link to={'/contactus'}>  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
            Contact Us
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
