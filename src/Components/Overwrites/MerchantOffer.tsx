import React from 'react'

import Input from '../Commons/Input'

const MerchantOffer:React.FC = () => {
  return (
    <div className='w-full flex gap-5 justify-between items-center'>
        <Input label='Merchant funded offer' abbr={true} abbrTitle='Merchant funded offer' name='merchant-split' value={0} disabled={true}/>
        <Input label='What customers get' abbr={true} abbrTitle='What customers get' name='merchant-split' value={0} disabled={true}/>
    </div>
  )
}

export default MerchantOffer
