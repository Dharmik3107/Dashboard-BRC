import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Outlets from './Outlets'

const Layout:React.FC = () => {
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <div className='w-full h-[calc(100%_-_56px)] grid grid-cols-[1fr_4fr]'>
        <Sidebar/>
        <Outlets/>
      </div>
    </div>
  )
}

export default Layout
