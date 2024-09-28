import React from 'react'
import { TiLocation } from "react-icons/ti";
import { BsFillPeopleFill,BsCurrencyRupee } from "react-icons/bs";

function TripSearch() {
  return (
        
    <div className='w-full h-auto pb-24 bg-[#ffffff] flex flex-col items-center bg-no-repeat bg-center bg-cover bg-[url("./src/assets/download4.jpeg")]'>
       <div className='border-2 bg-red-300 rounded-full mb-14 mt-4 pt-2  pl-6 pr-6'> <h1 className='text-red-600 mb-4 text-xl text-bold'>Let's Explore</h1> </div>
       <h1 className='text-slate-600 text-xl'>The Beauty</h1>
        <h1 className='text-black text-7xl text-extrabold m-4 ' >Where You Would Like To Visit?</h1>
        <h1 className='text-slate-700 text-xl mb-4 ' >Explore The India with Travel India.</h1>
        <div  className=' rounded-lg bg-neutral-300  pl-4 pr-4'><div className=' p-8 w-3/4  p-8 flex gap-2 ' >
        <div className='text-black '> <h1>Destination</h1><div className='flex text-black items-center'> <TiLocation className='absolute  ' /> <input  className='bg-slate-100 rounded pl-4 pt-1 ' type="text" name="" id=""  placeholder='Location' /> </div> </div>
       <div className='text-black'> <h1>Date</h1><input className='bg-slate-100 text-black  rounded  ' type="date" /> </div> 
       <div className='text-black'> <h1>Budget</h1><div className='flex items-center '><BsCurrencyRupee className='absolute ' /><input className='bg-slate-100 text-black pl-6 rounded pt-1 ' type="number" placeholder='Enter the amount'/></div> </div> 
        <div className='text-black'> <h1>Guest's</h1><div className=' text-black flex items-center pl-2 '> <BsFillPeopleFill className='absolute text-black h-6' /><input className='bg-slate-100 pl-6 rounded pt-1'type="number" name="" id="" placeholder="Guest's" /> </div> </div>
        </div  >
        <div className='flex justify-center'><button className='text-black drop-shadow-xl rounded bg-red-400 hover:bg-red-500 p-1 pl-4 pr-4 m-2 w-[120px]'> SEARCH</button></div>
        </div>
    </div>
  )
}

export default TripSearch
