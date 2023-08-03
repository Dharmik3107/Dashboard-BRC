import React from 'react'

import Calender from '../Components/Calender/Calender'
import Overwrites from '../Components/Overwrites/Overwrites'

const Outlets:React.FC = () => {
  return (
    <div className='w-full h-full grid grid-cols-[2fr_4fr]'>
      <Overwrites />
      <Calender />
    </div>
  )
}

export default Outlets
