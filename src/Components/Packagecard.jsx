import React from 'react'

function Packagecard(item) {
  console.log(item)
  return (
    <div className='h-auto min-w-[250px] mt-4  '>
      <div className='w-full h-48 overflow-hidden'>  <img className='w-full h-full object-cover shadow-lg rounded-lg' src={item.item.photos} alt={item.item.name} /></div>
        <h1 className='text-lg font-bold mt-4'>{item.item.name}</h1>
        <p className='text-sm  text-slate-700'>{item.item.description}</p>
        <p className='text-mg font-'>{item.item.duration}</p>
    </div>
  )
}

export default Packagecard