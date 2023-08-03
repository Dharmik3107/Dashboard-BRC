import React from 'react'

import OfferType from './OfferType'
import BlackedDays from './BlackedDays'

import Blackout from "../../assets/Blackout.svg"

const BlackoutDays:React.FC = () => {
  return (
    <div className='w-full flex gap-5 justify-between items-start'>
      <OfferType icon={Blackout} displayText="Blackout days" />
      <BlackedDays />
    </div>
  )
}

export default BlackoutDays
