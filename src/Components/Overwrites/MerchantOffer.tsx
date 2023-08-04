import React,{useState, Dispatch, SetStateAction, useEffect } from 'react'
//Components
import Input from '../Commons/Input'

interface Props {
  setMerchantOffer?: Dispatch<SetStateAction<number>>,
  merchantOffer?:number
}

const MerchantOffer:React.FC<Props> = ({setMerchantOffer, merchantOffer = 0}:Props) => {

  const [merchantFundOffer, setMerchantFundOffer] = useState<number>(merchantOffer)
  const [customerFundOffer, setCustomerFundOffer] = useState<number>(0)

  //Function to calculate customer fund offer based on merchant fund offer
  const calculateCustomerFundOffer:(merchantFundOffer:number)=> number = (merchantFundOffer) => {
    const result:number = (merchantFundOffer * 28.5) / 35
    return result
  }

  //Side effect to set customer and merchant fund offer
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
