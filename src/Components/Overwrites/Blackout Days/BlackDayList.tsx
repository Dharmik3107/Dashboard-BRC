  import React, {Dispatch, SetStateAction, useState} from 'react'
  import DatePicker from 'react-datepicker';
  import 'react-datepicker/dist/react-datepicker.css';
  //Components
  import SecondaryButton from '../../Commons/SecondaryButton'
  //Assets
  import {ReactComponent as Close} from "../../../assets/Close.svg"
  //Utils
  import formatDateToAddInBlackDayList from '../../../Utils/dateUtils';
  interface Props {
    blackedDayList: string[],
    setBlackedDayList: Dispatch<SetStateAction<string[]>>
  }

  const BlackDayList:React.FC<Props> = ({blackedDayList, setBlackedDayList}:Props) => {

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isDatePickerOpen, setDatePickerOpen] = useState<boolean>(false);

    //Function handle Date change
    const handleDateChange:(date:Date) => void = (date) => {
      const dateToAdd = formatDateToAddInBlackDayList(date)
      setBlackedDayList([...blackedDayList, dateToAdd])
      setSelectedDate(date);
      setDatePickerOpen(false);
    };

    //Function to add date picker open state
    const handleAddBlackoutDaysClick:() => void = () => {
      setDatePickerOpen(!isDatePickerOpen);
    }

    //Function to remove date picker
    const handleRemoveBlackoutDayClick:(item:string) => void = (item) => {
      const modifiedList = blackedDayList.filter((ele) => ele !== item)
      setBlackedDayList(modifiedList)
    }

    return (
      <div className=' w-full h-fit flex justify-start items-start flex-wrap'>

        {/* Added Blackout Days  */}
        {blackedDayList.length !== 0 && blackedDayList.map((item, index) => {
          return <div key={index} className='bg-lightGray px-3 py-1 flex justify-center items-center gap-4 rounded-full font-inter mt-2'>{item}<button type='button'><Close onClick={()=>handleRemoveBlackoutDayClick(item)}/></button></div>
        })}
        
        {/* DatePicker and add black day button  */}
        <div className='relative w-full h-fit flex justify-start items-start flex-wrap'>
          {blackedDayList.length !== 3 && <SecondaryButton type='button' displayText='Add blackout days' onClick={handleAddBlackoutDaysClick}/>}
          {isDatePickerOpen && (
            <div className='absolute top-10 max-w-[200px] mt-1'>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd.MM.yyyy"
                withPortal
                inline
              />
            </div>
          )}
        </div>
      </div>
    )
  }

  export default BlackDayList
