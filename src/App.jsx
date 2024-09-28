import React from 'react'
import Packgaes from './Components/Packgaes'
import Blogs from './Components/Blogs'
import AboutUs from './Components/Aboutus'
import Signup from './Components/Signup'
import Specialpackages from './Components/SpecialPackages'
import Body from './Components/Body'
import DestinationComponent from './Components/Innercard/Destination'
import Home from './Components/Home'
import Plantrip from './Components/Plantrip'
import Contactus from './Components/Contactus'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

 
const route = createBrowserRouter([
  {path:"/",
  element:<Home />,
  children:[
    {path:"/",
    element:<Body />
  },
{
  path:'/destination',
  element:<DestinationComponent />
},

{
  path:"/packages",
  element:<Packgaes />
},
{path:'/SpecialPack',
  element:<Specialpackages />

},
{
  path:'/blogs',
  element:<Blogs />
},{
  path:'/aboutus',
  element: <AboutUs />
},
{path:'/authentication',
  element:<Signup />
},
{
  path:'/plantrip',
  element: <Plantrip />
},
{
  path:"/contactus",
  element:<Contactus />
}]
}
  ])

function App() {
  return (
   <RouterProvider router={route}></RouterProvider>
  )
}
export default App