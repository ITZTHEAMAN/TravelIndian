import React from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";

function Head() {
  return (
    <div className='h-20 w-full bg-black flex fixed pl-16 z-30' >
        <div className='h-16 overflow-hidden '>
           <Link to={'/'}> <img className='h-[80px]  ' src="https://i.imghippo.com/files/0JLVz1727471260.png" alt="" /> </Link>
        </div>
        <div  className='flex text-lg items-center gap-20 ml-40 pointer '>
        <Link to={'/destination'}> <h1 className='hover:text-red-600' >Our Destination's</h1> </Link>
        <Link to={'/packages'}> <h1 className='hover:text-red-600'>Package's </h1> </Link>
        <Link to={'/SpecialPack'}> <h1 className='hover:text-red-600'>Special Package's</h1> </Link>
        <Link to={'/blogs'}> <h1 className='hover:text-red-600'>Blog's</h1> </Link>
        <Link to={'/aboutus'}> <h1 className='hover:text-red-600'>About us</h1> </Link>
         <Link to={'/authentication'}> <div className='flex items-center gap-2'><button className='hover:text-red-600'>sign up</button><CgProfile className='h-[30px] w-[30px]' /> </div> </Link>
        </div>
        
         
    </div>
  )
}

export default Head