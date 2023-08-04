import React, {useState, useEffect} from 'react'
import format from 'date-fns/format'
//Store
import {useAppDispatch, useAppSelector} from "../../../Store/hook"
import { removeHour } from '../../../Store/CustomHourSlice'
//Components
import SecondaryButton from '../../Commons/SecondaryButton'
import CustomHoursScheduler from './CustomHoursScheduler'
//Assets
import {ReactComponent as Close} from "../../../assets/Close.svg"

export interface CustomHourType {
  id: string,
  value: string
}

interface DaysType {
	[key:number]: string;
}

//Constant to fetch day based on number
const DAYS:DaysType = {
	0 : "Sun",
	1 : "Mon",
	2 : "Tue",
	3 : "Wed",
	4 : "Thurs",
	5 : "Fri",
	6 : "Sat"
}

const CustomHoursList:React.FC = () => {

    const [customHoursList, setCustomHoursList] = useState<CustomHourType[]>([])
    const [isSchedulerOpen, setSchedulerOpen] = useState<boolean>(false);

    const list = useAppSelector((state)=>state.customHour.CustomHoursList)
    const dispatch = useAppDispatch()

    //Function to handle Scheduler UI open
    const handleSchedulerOpenClick:()=>void = () => {
      setSchedulerOpen(!isSchedulerOpen)
    }

    //Function to handle Scheduler UI remove
    const handleRemoveCustomHourClick:(id:string)=>void = (id) => {
      dispatch(removeHour(id))
      const filteredList = customHoursList.filter((item) => item.id !== id)
      setCustomHoursList(filteredList)
    }

    //Side effect to set custom hours list
    useEffect(() => {
      const customHoursData = list.map((item) =>{
        const id = item.id;
        const day = DAYS[new Date(item.date).getDay()]
        const start = format(new Date(item.start),"h:mm aa");
        const end = format(new Date(item.end),"h:mm aa");
        const offer = item.offer

        const value = `${offer}% ${day} ${start} - ${end}`
        return {id,value}
      })
      setCustomHoursList(customHoursData)
    }, [list, setCustomHoursList])
    
  return (
    <div className='relative w-1/2 h-fit flex justify-start items-start flex-wrap z-10'>
        {customHoursList.length !== 0 && customHoursList.map((item) => {
          return <div key={item.id} className='bg-lightGray px-3 py-1 flex justify-center items-center gap-4 rounded-full font-inter text-xs mt-2'>{item.value}<button type='button' onClick={() => handleRemoveCustomHourClick(item.id)}><Close /></button></div>
        })}
        <div className='relative w-full h-fit flex justify-start items-start flex-wrap z-10'>
          {customHoursList.length !== 6 && <SecondaryButton type='button' displayText='Add custom hours' onClick={handleSchedulerOpenClick}/>}
          {isSchedulerOpen && <CustomHoursScheduler setSchedulerOpen={setSchedulerOpen}/>}
        </div>
    </div>
  )
}

export default CustomHoursList
