import React from 'react'

interface Props {
    icon: string,
    displayText:string
}

const OfferType:React.FC<Props> = ({icon, displayText}:Props) => {
  return (
    <div className='w-1/2 h-fit flex justify-start items-center gap-2'>
      <img src={icon} alt={displayText} />
      <h1 className='text-neutralGray font-inter font-semibold'>{displayText}</h1>
    </div>
  )
}

export default OfferType
