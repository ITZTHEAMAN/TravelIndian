import React from 'react';

function RecomArrow() {
  return (
    <div className='bg-[#ffffff] py-8 px-4'>
      
      {/* Heading */}
      <div className='flex justify-center text-center mb-6'>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-black">
          Or Choose From Here
        </h1>
      </div>

      {/* Arrow Image */}
      <div className='flex justify-center'>
        <img
          className='h-24 sm:h-28 md:h-32 rotate-12'
          src="https://i.imghippo.com/files/uhfI51727471343.avif"
          alt="Arrow"
        />
      </div>
    </div>
  );
}

export default RecomArrow;
