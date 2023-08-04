import React, {InputHTMLAttributes, Dispatch, SetStateAction, ChangeEvent, useState, useEffect} from 'react'
//Assets
import { ReactComponent as Info } from "../../assets/Info.svg"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    value: number,
    name: string,
    abbr?: boolean,
    abbrTitle?: string,
    setValue?: Dispatch<SetStateAction<number>>
}


const Input:React.FC<Props> = ({label, value, name,abbr,abbrTitle, setValue,  ...otherProps}:Props) => {

  //local state to manage user typings in input element
  const [currentValue, setCurrentValue] = useState<number>(value)
  
  //Function to handle value change and storing it to local state
  const handleValueChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(Number(event.target.value) >= 0 && Number(event.target.value) <= 100){
      setCurrentValue(Number(event.target.value));
      if(setValue) setValue(Number(event.target.value))
    }
  }

  //Updating the local state if props-value has some value 
  useEffect(()=>{
    setCurrentValue(Number(value.toFixed(1)))
  }, [value])

  return (
    <div className='w-1/2 h-[72px] flex flex-col justify-end items-center'>
      {label && <label htmlFor={name} className='w-full h-4 flex justify-start items-center gap-2 font-semibold text-neutralGray font-inter'>{label}{abbr && <abbr title={abbrTitle}><Info /></abbr>}</label>}
      <input type="text" name={name} value={currentValue} className='w-full h-10 bg-lightGray indent-2 rounded-md mt-4 outline-none' onChange={handleValueChange} {...otherProps}/>
    </div>
  )
}

export default Input
