import React from 'react'

import MerchantSplit from './MerchantSplit'
import MerchantOffer from './MerchantOffer'
import BlackoutDays from './Blackout Days/BlackoutDays'
import CustomHours from './CustomHours/CustomHours'

const OverwriteForm:React.FC = () => {
  return (
    <form className='w-full h-fit flex flex-col justify-start items-center gap-5'>
      <MerchantSplit />
      <MerchantOffer />
      <BlackoutDays />
      <CustomHours />
    </form>
  )
}

export default OverwriteForm
