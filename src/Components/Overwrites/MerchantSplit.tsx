import React, {useState} from 'react'
import Select from '../Commons/Select'
import Input from '../Commons/Input'

const MerchantSplit:React.FC = () => {
    const [balanceSplitInput, setBalanceSplitInput] = useState<number>(0)

    const calculateRemainingSplit:(merchantsSplitValue:number) => void = (merchantsSplitValue) => {
        setBalanceSplitInput(100 - merchantsSplitValue)
    } 
  return (
    <div className='w-full flex gap-5 justify-between items-center'>
        <Select label='Merchant Split' abbr={true} abbrTitle='Marchant Split' remainingSplit={calculateRemainingSplit}/>
        <Input label='' name='merchant-split' value={balanceSplitInput} disabled={true}/>
    </div>
  )
}

export default MerchantSplit
