import React from 'react'
import Bodyupper from './Bodyupper'
import TripSearch from './TripSearch'
import RecomArrow from './RecomArrow'
import HomePackage from './HomePackage'
import Homeblog from './Homeblog'
import Whychoose from './Whychoose'
import Review from './Review'
import Footer from './Footer'
import TopDestinations from './Homeplace2'

function Body() {
  return (
    <div className='bg-[#ffffff] h-screen'>
<Bodyupper />
<TripSearch />
<RecomArrow />
<TopDestinations />
<HomePackage />
<Homeblog />
<Whychoose />
<Review />
<Footer />
    </div>
  )
}

export default Body