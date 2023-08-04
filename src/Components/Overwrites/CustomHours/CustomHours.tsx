import React from 'react'
//Components
import OfferType from '../OfferType'
import CustomHoursList from './CustomHoursList'
//Assets
import Custom from "../../../assets/Custom.svg"

const CustomHours:React.FC = () => {
  return (
    <div className='w-full flex gap-5 justify-between items-start z-10'>
      <OfferType icon={Custom} displayText="Custom hours" />
      <CustomHoursList />
    </div>
  )
}

export default CustomHours
