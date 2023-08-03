import React from 'react'

interface Props {
    icon?: string,
    displaytext: string
}

const URLBlocks:React.FC<Props> = ({icon, displaytext}:Props) => {
  return (
    <div className='w-fit h-fit flex justify-center items-center gap-2 px-3 py-1 bg-lightGray rounded-md font-inter font-normal text-base'>
      {icon && <img src={icon} alt="Home" className='w-4 h-4'/>}
      <p>{displaytext}</p>
    </div>
  )
}

export default URLBlocks
