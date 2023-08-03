import React, {InputHTMLAttributes} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    value: number,
    name: string
}

const Input:React.FC<Props> = ({label, value, name, ...otherProps}:Props) => {
  return (
    <div className='w-1/2 h-[72px] flex flex-col justify-end items-center'>
      {label && <label htmlFor={name} className='w-full min-h-4'>{label}</label>}
      <input type="text" name={name} value={value} className='w-full h-10 bg-lightGray indent-2 rounded-md' {...otherProps}/>
    </div>
  )
}

export default Input
