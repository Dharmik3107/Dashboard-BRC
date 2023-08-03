import React from 'react'

import OfferType from '../OfferType'
import CustomHoursList from './CustomHoursList'

import Custom from "../../../assets/Custom.svg"

const CustomHours:React.FC = () => {
  return (
    <div className='w-full flex gap-5 justify-between items-start'>
      <OfferType icon={Custom} displayText="Custom hours" />
      <CustomHoursList />
    </div>
  )
}

export default CustomHours
