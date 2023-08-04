import React from 'react'
//Components
import OverwriteForm from './OverwriteForm'

const OfferSettings:React.FC = () => {
  return (
    <div className='w-full h-[calc(100%_-_56px)] z-10'>
      <h1 className='font-bold text-gray-400 text-lg font-inter mb-5'>Offer overwrites</h1>
      <OverwriteForm />
    </div>
  )
}

export default OfferSettings
