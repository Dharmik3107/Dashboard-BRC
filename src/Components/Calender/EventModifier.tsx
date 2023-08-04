import React , {useState, Dispatch, SetStateAction} from 'react'
import format from 'date-fns/format';
import DatePicker from 'react-datepicker';
import axios from 'axios';
//Types
import { type EventType } from '../../Utils/EventInitialState';
//Component
import MerchantOffer from '../Overwrites/MerchantOffer'
import PrimaryButton from '../Commons/PrimaryButton';
//Store
import { EventDataType, editHour } from '../../Store/CustomHourSlice';
import { useAppDispatch } from '../../Store/hook';
//Assets
import {ReactComponent as Day} from "../../assets/Day.svg"
//Utils
import { editHourUrl } from '../../Utils/backend';

interface Props {
  data: EventType,
  setModifierOpen: Dispatch<SetStateAction<boolean>>
}

interface DaysType {
	[key:number]: string;
}

//Utility Helper object to get selected Day
const DAYS:DaysType = {
	0 : "Sunday",
	1 : "Monday",
	2 : "Tuesday",
	3 : "Wednesday",
	4 : "Thursday",
	5 : "Friday",
	6 : "Saturday"
}

const EventModifier:React.FC<Props> = ({data, setModifierOpen}:Props) => {

  //Data processing for display purpose
  const selectedDay = DAYS[data.date.getDay()]
  const formatStart = format(data.start, "h:mm aa")
  const formatEnd = format(data.end, "h:mm aa")
  
  const dispatch = useAppDispatch()

  //States for application usage 
  const [merchantOffer, setMerchantOffer] = useState<number>(data.offer)
  const [startTime, setStartTime] = useState<Date>(data.start)
  const [endTime, setEndTime] = useState<Date>(data.end)

  //States for display purpose
  const [startTimeFormatted, setStartTimeFormatted] = useState<string>(formatStart)
  const [endTimeFormatted, setEndTimeFormatted] = useState<string>(formatEnd)

  //Boolean states for UI interactivity
  const [isStartTimePickerOpen, setStartTimePickerOpen] = useState<boolean>(false)
  const [isEndTimePickerOpen, setEndTimePickerOpen] = useState<boolean>(false)

  //Function to handle Start time selection
  const handleStartTimeChange:(time:Date)=>void = (time) => {
    setStartTime(time)
    const formatStart = format(time, "h:mm aa");
    setStartTimeFormatted(formatStart)
    setStartTimePickerOpen(false)
  }

  //Function to handle End time selection
  const handleEndTimeChange:(time:Date)=>void = (time) => {
    setEndTime(time)
    const formatStart = format(time, "h:mm aa");
    setEndTimeFormatted(formatStart)
    setEndTimePickerOpen(false)
  }

  //Function to open start time list to select time
  const handleStartTimePickerClick:()=>void = () => {
    setStartTimePickerOpen(!isStartTimePickerOpen)
  }

  //Function to open end time list to select time
  const handleEndTimePickerClick:()=>void = () => {
    setEndTimePickerOpen(!isEndTimePickerOpen)
  }

  //Function to handle discard changes button click
  const handleDiscardChangesClick:() => void = () => {
    setStartTimeFormatted(formatStart);
    setEndTimeFormatted(formatEnd);
    setStartTime(data.start);
    setEndTime(data.end);
    setModifierOpen(false)
  }

  const editHourDataInDatabase = async(data:EventType) => {
    try{
      const res = await axios.put(`${editHourUrl}`, data )
      if(res.status === 200){
        alert("Event edited")
      }
    }catch(error){
      console.error(error)
    }
  }
    

  //Function to handle Save changes button click
  const handleSaveChangesClick:() => void = () => {
    if(merchantOffer && startTimeFormatted && endTimeFormatted){
      const eventData:EventDataType = {
        id:data.id,
        date:data.date.toISOString(),
        offer:merchantOffer,
        start:startTime.toISOString(),
        end:endTime.toISOString()
      }
      const databaseEvent:EventType = {
        id: data.id,
        date: data.date,
        offer: data.offer,
        start: data.start,
        end: data.end,
        title: data.title
      }
      dispatch(editHour(eventData))
      editHourDataInDatabase(databaseEvent)
      handleDiscardChangesClick()
    }
    setModifierOpen(false)
  }

  return (
    <div className='w-[400px] h-[300px] bg-white shadow-2xl p-4'>
      <h1 className='font-inter text-black font-bold mb-5'>Custom hour override</h1>
      <MerchantOffer setMerchantOffer={setMerchantOffer} merchantOffer={merchantOffer}/>
      <p className='font-inter text-xs my-1'>Edit custom offer value for specific hours of a day. You can add maximum 2 overrides per day</p>
      <div className='w-full h-fit flex justify-between items-center mt-2'>
        <div className='flex justify-center items-center gap-3'><Day /> {selectedDay}</div>
        <div className='flex justify-center items-center gap-2'>
          <div className='relative w-fit px-2 py-1 bg-lightGray'>
            <div className='cursor-pointer' onClick={handleStartTimePickerClick}>{startTimeFormatted}</div>
            {isStartTimePickerOpen && <div className='absolute bottom-10 max-w-[200px] mt-1'>
            <DatePicker
                selected={startTime}
                onChange={handleStartTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                withPortal 
                inline
            />
						</div>}
          </div>
          <div>-</div>
          <div className='relative w-fit px-2 py-1 bg-lightGray'>
            <div className='cursor-pointer' onClick={handleEndTimePickerClick}>{endTimeFormatted}</div>
            {isEndTimePickerOpen && <div className='absolute bottom-10 max-w-[200px] mt-1'>
              <DatePicker
                  selected={endTime}
                  onChange={handleEndTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="h:mm aa"
                  withPortal 
                  inline
              />
            </div>}
          </div>
        </div>
      </div>
      <div className='w-full h-fit flex justify-between items-center gap-2 mt-5'>
				<PrimaryButton type='button' displayText='Discard Changes' isPrimary={true} onClick={handleDiscardChangesClick}/>
				<PrimaryButton type='button' displayText='Save Changes' isPrimary={false} onClick={handleSaveChangesClick}/>
			</div>
    </div>
  )
}

export default EventModifier
