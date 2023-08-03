import React from 'react'

import URLcomponent from './URLcomponent'
import Profile from './Profile'

import ProfileImage from "../../assets/Profile.png"

const Navbar:React.FC = () => {
  return (
    <div className='w-full h-[56px] flex justify-between items-center border-b-2 border-solid border-lightGray px-5'>
      <URLcomponent />
      <Profile profileImage={ProfileImage}/>
    </div>
  )
}

export default Navbar
