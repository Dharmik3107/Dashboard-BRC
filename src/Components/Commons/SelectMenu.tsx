import React, {Dispatch, SetStateAction} from 'react'

interface Props{
    list: (number)[],
    setSelectedValue: Dispatch<SetStateAction<number>>
}

const SelectMenu:React.FC<Props> = ({list, setSelectedValue}:Props) => {

  //Function to handle value click to set it to state
  const handleSelectValueClick:(item:number) => void = (item) => {
    setSelectedValue(item)
  }

  return (
    <div className='absolute top-10 left-0 w-full h-[400px] overflow-y-scroll rounded-md no-scroll'>
      {list.map((item, index) => {
        return <div key={index} onClick={() => handleSelectValueClick(item)} className='w-full h-8 bg-gray-200 pl-2 flex justify-start items-center font-semibold text-neutralGray hover:bg-white'>{item}</div>
      })}
    </div>
  )
}

export default SelectMenu
