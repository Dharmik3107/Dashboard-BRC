import React, {InputHTMLAttributes} from 'react'

import { ReactComponent as Info } from "../../assets/Info.svg"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    value: number,
    name: string,
    abbr?: boolean,
    abbrTitle?: string
}

const Input:React.FC<Props> = ({label, value, name,abbr,abbrTitle,  ...otherProps}:Props) => {
  return (
    <div className='w-1/2 h-[72px] flex flex-col justify-end items-center'>
      {label && <label htmlFor={name} className='w-full h-4 flex justify-start items-center gap-2 font-semibold text-neutralGray font-inter'>{label}{abbr && <abbr title={abbrTitle}><Info /></abbr>}</label>}
      <input type="text" name={name} value={value} className='w-full h-10 bg-lightGray indent-2 rounded-md mt-4' {...otherProps}/>
    </div>
  )
}

export default Input
