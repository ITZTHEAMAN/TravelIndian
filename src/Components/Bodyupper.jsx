import React from 'react';
import { Link } from 'react-router-dom';

function Bodyupper() {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:px-10 py-10 lg:h-screen bg-[#FFFFFF]'>
      
      {/* Text Section */}
      <div className='flex flex-col items-center lg:items-start justify-center text-black text-center lg:text-left max-w-xl'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic'>Explore The Beauty</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic'>Of India</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold italic'>With Us</h1>

        <p className='text-slate-500 text-base sm:text-lg mt-4 px-2'>
          "Discover India's beauty and culture with customized trips
        </p>
        <p className='text-slate-500 text-base sm:text-lg'>
          designed for unforgettable experiences."
        </p>

        {/* Buttons */}
        <div className='pt-6 flex flex-col sm:flex-row items-center gap-4'>
          <Link to="/plantrip">
            <button className='border-2 rounded-full px-8 py-3 bg-red-500 hover:bg-red-600 text-white text-[16px]'>
              Plan a Trip
            </button>
          </Link>
          <Link to="/blogs">
            <button className='border-2 rounded-full px-8 py-3 bg-slate-200 hover:border-gray-400 text-black text-[16px]'>
              Watch Our Blog's
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full max-w-md mb-10 lg:mb-0'>
        <img className='w-full h-auto' src="https://i.imghippo.com/files/N9P7M1727471106.jpg" alt="India Travel" />
      </div>
    </div>
  );
}

export default Bodyupper;
