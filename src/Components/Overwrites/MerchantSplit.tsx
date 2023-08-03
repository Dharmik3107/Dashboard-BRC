import React, {useState} from 'react'
import Select from '../Commons/Select'
import Input from '../Commons/Input'

const MerchantSplit:React.FC = () => {
    const [balanceSplitInput, setBalanceSplitInput] = useState<number>(0)

    const calculateRemainingSplit:(merchantsSplitValue:number) => void = (merchantsSplitValue) => {
        setBalanceSplitInput(100 - merchantsSplitValue)
    } 
  return (
    <div className='w-full flex flex-col gap-2 justify-center items-center'>
      <div className='w-full h-fit flex justify-between items-center gap-5 '>
        <Select label='Merchant Split' abbr={true} abbrTitle='Marchant Split' remainingSplit={calculateRemainingSplit}/>
        <Input label='' name='merchant-split' value={balanceSplitInput} disabled={true}/>
      </div>
    </div>
  )
}

export default MerchantSplit
