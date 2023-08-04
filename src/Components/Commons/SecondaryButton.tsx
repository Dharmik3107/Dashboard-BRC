import React, {ButtonHTMLAttributes} from 'react'
//Assets
import {ReactComponent as Add} from "../../assets/Add.svg"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    displayText:string
}

const SecondaryButton:React.FC<Props> = ({displayText,...otherProps}:Props) => {
  return (
    <button className='w-full mt-2 flex justify-center items-center gap-2 bg-primaryBlue px-3 py-1 rounded-full text-white text-sm' {...otherProps}>
      {<Add/>}{displayText}
    </button>
  )
}

export default SecondaryButton
