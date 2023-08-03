import React,{useState, Dispatch, SetStateAction, useEffect } from 'react'

import Input from '../Commons/Input'

interface Props {
  setMerchantOffer?: Dispatch<SetStateAction<number>>
}

const MerchantOffer:React.FC<Props> = ({setMerchantOffer}:Props) => {
  const [merchantFundOffer, setMerchantFundOffer] = useState<number>(0)
  const [customerFundOffer, setCustomerFundOffer] = useState<number>(0)

  const calculateCustomerFundOffer:(merchantFundOffer:number)=> number = (merchantFundOffer) => {
    const result:number = (merchantFundOffer * 28.5) / 35
    return result
  }

  useEffect(() => {
    if(setMerchantOffer) setMerchantOffer(merchantFundOffer)
    setCustomerFundOffer(calculateCustomerFundOffer(merchantFundOffer))
  }, [merchantFundOffer, setCustomerFundOffer, setMerchantOffer])

  return (
    <div className='w-full flex gap-5 justify-between items-center'>
        <Input label='Merchant funded offer' abbr={true} abbrTitle='Merchant funded offer' name='merchant-split' value={merchantFundOffer} disabled={false} setValue={setMerchantFundOffer}/>
        <Input label='What customers get' abbr={true} abbrTitle='What customers get' name='merchant-split' value={customerFundOffer} disabled={true}/>
    </div>
  )
}

export default MerchantOffer
