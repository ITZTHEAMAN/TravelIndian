import React from 'react'
import { TiLocation } from "react-icons/ti";
import { BsFillPeopleFill, BsCurrencyRupee } from "react-icons/bs";

function TripSearch() {
  return (
    <div className='w-full h-auto pb-24 bg-[#ffffff] flex flex-col items-center bg-no-repeat bg-center bg-cover bg-[url("./src/assets/download4.jpeg")]'>
      
      {/* Heading Section */}
      <div className='border-2 bg-red-300 rounded-full mb-6 mt-4 px-6 py-2'>
        <h1 className='text-red-600 text-xl font-bold'>Let's Explore</h1>
      </div>
      <h1 className='text-slate-600 text-xl'>The Beauty</h1>
      <h1 className='text-black text-4xl sm:text-5xl md:text-6xl font-extrabold text-center m-4 px-4'>
        Where You Would Like To Visit?
      </h1>
      <h1 className='text-slate-700 text-xl mb-6 text-center px-2'>
        Explore The India with Travel India.
      </h1>

      {/* Search Box */}
      <div className='w-full max-w-5xl rounded-lg bg-neutral-300 p-4 sm:p-8 mx-4'>
        <div className='flex flex-col lg:flex-row gap-4 justify-between'>

          {/* Destination */}
          <div className='flex-1'>
            <h1 className='text-black mb-1'>Destination</h1>
            <div className='flex items-center relative'>
              <TiLocation className='absolute ml-2 text-gray-500' />
              <input
                className='w-full bg-slate-100 rounded pl-8 py-2 text-black'
                type="text"
                placeholder='Location'
              />
            </div>
          </div>

          {/* Date */}
          <div className='flex-1'>
            <h1 className='text-black mb-1'>Date</h1>
            <input
              className='w-full bg-slate-100 text-black rounded py-2 px-2'
              type="date"
            />
          </div>

          {/* Budget */}
          <div className='flex-1'>
            <h1 className='text-black mb-1'>Budget</h1>
            <div className='flex items-center relative'>
              <BsCurrencyRupee className='absolute ml-2 text-gray-500' />
              <input
                className='w-full bg-slate-100 text-black rounded py-2 pl-8'
                type="number"
                placeholder='Enter the amount'
              />
            </div>
          </div>

          {/* Guests */}
          <div className='flex-1'>
            <h1 className='text-black mb-1'>Guest's</h1>
            <div className='flex items-center relative'>
              <BsFillPeopleFill className='absolute ml-2 text-gray-500 h-5' />
              <input
                className='w-full bg-slate-100 text-black rounded py-2 pl-8'
                type="number"
                placeholder="Guest's"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className='flex justify-center mt-6'>
          <button className='text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-6 rounded shadow-md'>
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripSearch;
