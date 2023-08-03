import React from 'react'

import Calender from '../Components/Calender/Calender'
import Overwrites from '../Components/Overwrites/Overwrites'

const Outlets:React.FC = () => {
  return (
    <div className='w-full h-full grid grid-cols-[1fr_3fr]'>
      <Overwrites />
      <Calender />
    </div>
  )
}

export default Outlets
