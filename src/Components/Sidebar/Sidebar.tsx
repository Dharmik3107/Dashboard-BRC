import React from 'react'

import Locations from './Locations'

const Sidebar:React.FC = () => {
  return (
    <div className='w-full h-full'>
      <h1 className='w-full h-12 flex justify-start items-center text-2xl font-bold pl-5'>Edit offer details</h1>
      <Locations/>
    </div>
  )
}

export default Sidebar
