import React from 'react';
import { FaGlobe, FaSmile, FaShieldAlt, FaMapMarkedAlt, FaClock, FaHeart } from 'react-icons/fa';

const Whychoose = () => {
  const features = [
    {
      icon: <FaSmile className="text-yellow-500 text-2xl sm:text-3xl" />,
      title: "Unmatched Customer Support",
      description: "We are available 24/7 to assist you and ensure a seamless travel experience.",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1c3RvbWVyJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl sm:text-3xl" />,
      title: "Safety & Trust",
      description: "Your safety is our priority. We ensure all safety protocols are strictly followed.",
      image: "https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <FaMapMarkedAlt className="text-red-500 text-2xl sm:text-3xl" />,
      title: "Expert Local Guides",
      description: "Our guides are local experts who will introduce you to hidden gems and cultural experiences.",
      image: "https://plus.unsplash.com/premium_photo-1661425265757-8adc16a6983d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwZ3VpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      icon: <FaClock className="text-green-500 text-2xl sm:text-3xl" />,
      title: "Punctual & Reliable",
      description: "We value your time and guarantee timely services for a stress-free journey.",
      image: "https://plus.unsplash.com/premium_photo-1725075084469-b9c0272fdcf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHVuY3R1YWwlMjAlMjYlMjBSZWxpYWJsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      icon: <FaGlobe className="text-indigo-500 text-2xl sm:text-3xl" />,
      title: "All India Coverage",
      description: "Explore destinations worldwide with our extensive range of travel packages.",
      image: "https://plus.unsplash.com/premium_photo-1681488347845-6e310c3dd682?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <FaHeart className="text-pink-500 text-2xl sm:text-3xl" />,
      title: "Loved by Thousands",
      description: "Thousands of happy customers have enjoyed memorable experiences with us.",
      image: "https://plus.unsplash.com/premium_photo-1661598436357-32062f350e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmQlMjBoZWFydHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
        <p className="text-base sm:text-lg text-gray-600 mb-10">Here's why we stand out in the travel industry</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-left">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-36 sm:h-40 object-cover"
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3">
                  {feature.icon}
                  <h3 className="ml-3 text-lg sm:text-xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
