import React, {useState,useEffect, Dispatch, SetStateAction} from 'react'
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

import MerchantOffer from '../MerchantOffer';

import { formatDateToAddInBlackDayList } from '../Blackout Days/BlackDayList';
import PrimaryButton from '../../Commons/PrimaryButton';

import type { CustomHourType } from './CustomHoursList';

interface Props {
	setCustomHoursList: Dispatch<SetStateAction<CustomHourType[]>>,
	setSchedulerOpen: Dispatch<SetStateAction<boolean>>
}

interface DaysType {
	[key:number]: string;
}

const DAYS:DaysType = {
	0 : "Sun",
	1 : "Mon",
	2 : "Tue",
	3 : "Wed",
	4 : "Thurs",
	5 : "Fri",
	6 : "Sat"
}

const CustomHoursScheduler:React.FC<Props> = ({setCustomHoursList, setSchedulerOpen}:Props) => {
		//Main List to display in Custom Hours
		const [displayList, setDisplayList] = useState<CustomHourType[]>([])

		//For Display
    const [selectedDateString, setSelectedDateString] = useState<string | null>(null);
		const [startTimeString, setStartTimeString] = useState<string | null>(null);
    const [endTimeString, setEndTimeString] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
		const [merchantOffer, setMerchantOffer] = useState<number>(0)

		//For Date Picker
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);

		//Pop-up Openers
		const [isDatePickerOpen, setDatePickerOpen] = useState<boolean>(false)
		const [isStartTimePickerOpen, setStartTimePickerOpen] = useState<boolean>(false)
		const [isEndTimePickerOpen, setEndTimePickerOpen] = useState<boolean>(false)
  
    // Function to handle date selection
    const handleDateChange:(date:Date) => void = (date) => {
			//Updating date for Date Picker
			setSelectedDate(date)

			//Fetching day for display
			const day = date.getDay()
			setSelectedDay(DAYS[day])

			//Getting Date in string type
			const selDate = formatDateToAddInBlackDayList(date)
      setSelectedDateString(selDate);

			//Closing Popup after selecting date
			setDatePickerOpen(false)
    };
  
    // Function to handle start time selection
    const handleStartTimeChange:(time:Date) => void = (time) => {
      setStartTime(time);

			const formattedTime = format(time , "h:mm aa")
			setStartTimeString(formattedTime)
			setStartTimePickerOpen(false)
    };
  
    // Function to handle end time selection
    const handleEndTimeChange:(time:Date) => void = (time) => {
      setEndTime(time);

			const formattedTime = format(time , "h:mm aa")
			setEndTimeString(formattedTime)
			setEndTimePickerOpen(false)
    };
    
		const handleDateSelectClick:() => void = () =>{
			setDatePickerOpen(!isDatePickerOpen)
		}

		const handleStartTimeSelectClick:() => void = () =>{
			setStartTimePickerOpen(!isStartTimePickerOpen)
		}

		const handleEndTimeSelectClick:() => void = () =>{
			setEndTimePickerOpen(!isEndTimePickerOpen)
		}

		const handleDiscardChangesClick:() => void = () => {
			setSelectedDateString(null);
			setStartTimeString(null);
			setEndTimeString(null);
			setSelectedDay(null);
			setSelectedDate(null);
			setStartTime(null);
			setEndTime(null);
			setSchedulerOpen(false)
		}

		const handleSaveChangesClick:() => void = () => {
			if(merchantOffer && selectedDay && startTimeString && endTimeString){
				setDisplayList([...displayList,{id: `${Date.now()}` ,value: `${merchantOffer}% ${selectedDay} ${startTimeString} - ${endTimeString}`}]);
				handleDiscardChangesClick()
				setSchedulerOpen(false)
			}
		}


		//! Side Effects
		useEffect(() => {
			setCustomHoursList(displayList)
		}, [displayList, setCustomHoursList])


  return (
    <div className='absolute top-12 right-0 w-[400px] h-[330px] bg-white shadow-2xl p-4'>
			<h1 className='font-inter text-black font-bold mb-5'>Create new custom hour </h1>
			<MerchantOffer setMerchantOffer={setMerchantOffer}/>
			<p className='font-inter text-xs my-1'>Edit custom offer value for specific hours of a day. You can add maximum 2 overrides per day</p>
      <div className='relative w-full h-fit flex justify-between items-center gap-2 my-5'>
          <h2 className='w-1/2 text-neutralGray font-semibold font-inter'>Select a Date:</h2>
					<div className='w-1/2 h-fit bg-lightGray px-3 py-1 rounded-md flex justify-center items-center cursor-pointer text-neutralGray text-sm font-inter' onClick={handleDateSelectClick}>{selectedDateString || "--Select a date--"}</div>
					{isDatePickerOpen && <div className='absolute bottom-8 right-10 max-w-[200px] mt-1'>
						<DatePicker 
							selected={selectedDate} 
							onChange={handleDateChange}  
							withPortal 
							inline
						/>
					</div>}
      </div>
			<div className='w-full h-fit flex justify-between items-center gap-2 my-5'>
				<div className='relative w-1/2 h-fit bg-lightGray px-3 py-1 rounded-md flex justify-center items-center cursor-pointer text-neutralGray text-sm font-inter' onClick={handleStartTimeSelectClick}>{startTimeString || "--Select a start--"}
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
				<div className='relative w-1/2 h-fit bg-lightGray px-3 py-1 rounded-md flex justify-center items-center cursor-pointer text-neutralGray text-sm font-inter' onClick={handleEndTimeSelectClick}>{endTimeString || "--Select a end--"}
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
			<div className='w-full h-fit flex justify-between items-center gap-2'>
				<PrimaryButton type='button' displayText='Discard Changes' isPrimary={true} onClick={handleDiscardChangesClick}/>
				<PrimaryButton type='button' displayText='Save Changes' isPrimary={false} onClick={handleSaveChangesClick}/>
			</div>
    </div>
  )
}

export default CustomHoursScheduler
