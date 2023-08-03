import React from 'react'
import MerchantSplit from './MerchantSplit'

const OverwriteForm:React.FC = () => {
  return (
    <form className='w-full h-fit flex flex-col justify-start items-center'>
      <MerchantSplit />
    </form>
  )
}

export default OverwriteForm
