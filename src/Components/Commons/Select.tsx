import React, { useState, useEffect } from 'react'
//Components
import SelectMenu from './SelectMenu'
//Assets
import { ReactComponent as DropDown } from "../../assets/DropDown.svg"
import { ReactComponent as Info } from "../../assets/Info.svg"

interface Props {
  label: string,
  abbr: boolean,
  abbrTitle: string,
  remainingSplit: (remainingSplit: number) => void
}

//Creating number Array with diff of 5 from 0 - 100
const numberArray: number[] = [...Array(21)].map((_, index) => {
  return index * 5
})

const Select: React.FC<Props> = ({ label, abbr, abbrTitle, remainingSplit }: Props) => {

  const [isSelectMenuOpen, setSelectMenuOpen] = useState<boolean>(false)
  const [currentSelectedValue, setSelectedValue] = useState<number>(0)

  //Function to handle menu click
  const handleSelectMenuClick: () => void = () => {
    setSelectMenuOpen(isSelectMenuOpen => !isSelectMenuOpen)
  }

  //Side effect to calculate remaining split
  useEffect(() => {
    remainingSplit(currentSelectedValue)
  }, [currentSelectedValue, remainingSplit])

  return (
    <div className='w-1/2 h-[72px]'>
      <label className='w-full h-4 flex justify-start text-neutralGray font-inter font-semibold items-center gap-1'>{label} {abbr && <abbr title={abbrTitle}><Info /></abbr>}</label>
      <div className='relative w-full h-10 bg-lightGray flex justify-between items-center px-2 rounded-md text-neutralGray mt-4' onClick={handleSelectMenuClick}>
        <span>{currentSelectedValue}</span>
        <span><DropDown /></span>
        {isSelectMenuOpen && <SelectMenu list={numberArray} setSelectedValue={setSelectedValue} />}
      </div>
    </div>

  )
}

export default Select
