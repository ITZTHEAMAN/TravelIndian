import React from 'react';
import { FaGlobe, FaSmile, FaShieldAlt, FaMapMarkedAlt, FaClock, FaHeart } from 'react-icons/fa';

const Whychoose = () => {
  const features = [
    {
      icon: <FaSmile size={40} className="text-yellow-500" />,
      title: "Unmatched Customer Support",
      description: "We are available 24/7 to assist you and ensure a seamless travel experience.",
      image: "https://images.unsplash.com/photo-1553775282-20af80779df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1c3RvbWVyJTIwc3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      icon: <FaShieldAlt size={40} className="text-blue-500" />,
      title: "Safety & Trust",
      description: "Your safety is our priority. We ensure all safety protocols are strictly followed.",
      image: "https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <FaMapMarkedAlt size={40} className="text-red-500" />,
      title: "Expert Local Guides",
      description: "Our guides are local experts who will introduce you to hidden gems and cultural experiences.",
      image: "https://plus.unsplash.com/premium_photo-1661425265757-8adc16a6983d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsJTIwZ3VpZGV8ZW58MHx8MHx8fDA%3D"
    },
    {
      icon: <FaClock size={40} className="text-green-500" />,
      title: "Punctual & Reliable",
      description: "We value your time and guarantee timely services for a stress-free journey.",
      image: "https://plus.unsplash.com/premium_photo-1725075084469-b9c0272fdcf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHVuY3R1YWwlMjAlMjYlMjBSZWxpYWJsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      icon: <FaGlobe size={40} className="text-indigo-500" />,
      title: "All India Coverage",
      description: "Explore destinations worldwide with our extensive range of travel packages.",
      image: "https://plus.unsplash.com/premium_photo-1681488347845-6e310c3dd682?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <FaHeart size={40} className="text-pink-500" />,
      title: "Loved by Thousands",
      description: "Thousands of happy customers have enjoyed memorable experiences with us.",
      image: "https://plus.unsplash.com/premium_photo-1661598436357-32062f350e58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhbmQlMjBoZWFydHxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <div className="bg-[#FFFFFF] py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-600 mb-12">Here's why we stand out in the travel industry</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-left">
                <div className="mb-4 flex items-center justify-start">
                  {feature.icon}
                  <h3 className="ml-4 text-2xl font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
