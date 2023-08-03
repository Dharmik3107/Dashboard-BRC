import React, {ButtonHTMLAttributes} from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    displayText:string,
    isPrimary: boolean
}



const PrimaryButton:React.FC<Props> = ({displayText, isPrimary, ...otherProps}:Props) => {
  return (
    <button className='w-full max-w-[200px] h-10 flex justify-center items-center rounded-md text-white' style={{backgroundColor:`${isPrimary ? "#FF3373" : "#001FFF"}`}} {...otherProps}>
      {displayText}
    </button>
  )
}

export default PrimaryButton
