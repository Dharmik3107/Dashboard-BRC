import React, {useState} from 'react'

import SecondaryButton from '../../Commons/SecondaryButton'
import CustomHoursScheduler from './CustomHoursScheduler'

import {ReactComponent as Close} from "../../../assets/Close.svg"

export interface CustomHourType {
  id: string,
  value: string
}

const CustomHoursList:React.FC = () => {
    const [customHoursList, setCustomHoursList] = useState<CustomHourType[]>([])
    const [isSchedulerOpen, setSchedulerOpen] = useState<boolean>(true);

    const handleSchedulerOpenClick:()=>void = () => {
      setSchedulerOpen(!isSchedulerOpen)
    }

    const handleRemoveCustomHourClick:(id:string)=>void = (id) => {
      const filteredList = customHoursList.filter((item) => item.id !== id)
      setCustomHoursList(filteredList)
    }

  return (
    <div className='relative w-1/2 h-fit flex justify-start items-start flex-wrap'>
        {customHoursList.length !== 0 && customHoursList.map((item) => {
          return <div key={item.id} className='bg-lightGray px-3 py-1 flex justify-center items-center gap-4 rounded-full font-inter text-xs mt-2'>{item.value}<button type='button' onClick={() => handleRemoveCustomHourClick(item.id)}><Close /></button></div>
        })}
        <div className='relative w-full h-fit flex justify-start items-start flex-wrap'>
          {customHoursList.length !== 6 && <SecondaryButton type='button' displayText='Add blackout days' onClick={handleSchedulerOpenClick}/>}
          {isSchedulerOpen && <CustomHoursScheduler setCustomHoursList={setCustomHoursList} setSchedulerOpen={setSchedulerOpen}/>}
        </div>
    </div>
  )
}

export default CustomHoursList
