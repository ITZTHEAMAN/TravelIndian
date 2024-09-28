import React from 'react'
import { Link } from 'react-router-dom'

function Bodyupper() {
  return (

    <div className='flex  justify-evenly h-screen bg-[#FFFFFF] '>
        <div className='flex flex-col items-center  justify-center text-black'>
            <h1 className='text-6xl font-extrabold italic' >Explore The Beauty</h1>
            <h1 className='text-6xl font-extrabold italic'>Of India</h1>
            <h1 className='text-6xl font-extrabold italic'>With Us</h1>
             <p className='text-slate-500 text-lg'>"Discover India's beauty and culture with customized trips </p>
             <p className='text-slate-500 text-lg'>designed for unforgettable experiences."</p>
             <div className='pt-8' >
            <Link to={"/plantrip"}> <button className='border-2 rounded-full mt-6 p-4 pl-8 pr-8 bg-red-500 hover:bg-red-600'><h1 className='text-[18px]'>Plan a Trip</h1> </button> </Link>
             <Link to={"/blogs"}><button className='m-8 hover:border-2 p-4 rounded-full bg-slate-200'><h1 className='text-[18px]'> Watch Our Blog's</h1></button></Link>
             </div>
             
        </div>
   <div > 
    <img className='mt-28' src="https://i.imghippo.com/files/N9P7M1727471106.jpg" alt="" />
   </div>
   
    </div>
    
  )
}

export default Bodyupper
