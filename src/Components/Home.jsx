import React from 'react'
import { Outlet } from 'react-router-dom'
import Body from './Body'
import Head from './Head'
function Home() {
  return (
    <div className='bg-[#ffffff]'>
<Head />
< Outlet />

    </div>
  )
}

export default Home