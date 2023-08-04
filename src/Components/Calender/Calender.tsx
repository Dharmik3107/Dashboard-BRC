import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
//Component
import EventModifier from './EventModifier';
//Store
import { useAppSelector, useAppDispatch } from '../../Store/hook';
//styles
import 'react-big-calendar/lib/css/react-big-calendar.css';
//Utils
import { getAllHoursUrl } from '../../Utils/backend';
import { initialEventState, type EventType } from '../../Utils/EventInitialState';
import {fetchHours } from '../../Store/CustomHourSlice';

const localizer = momentLocalizer(moment)


const Calender:React.FC = () => {
  //Fetching list from global state store
  const customHourList = useAppSelector((state) => state.customHour.CustomHoursList) 
  const eventList = useAppSelector((state) => state.customHour.eventList)

  const [currentEvents, setCurrentEvents] = useState<EventType[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventType>(initialEventState)
  const [isModifierOpen, setModifierOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  
  useEffect(() => {
    const fetchBackendData = async() => {
      try{
        const res = await axios.get(`${getAllHoursUrl}`)
        const hourList:EventType[] = res.data.message
        dispatch(fetchHours(hourList))
      }catch(error){
        console.error(error)
      }
    }
    fetchBackendData()

  },[customHourList,dispatch])
  console.log(currentEvents)
  useEffect(()=>{
    const data = eventList.map((item) => {
      const date = new Date(item.date);
      const start = new Date(item.start);
      const end = new Date(item.end)

      const event:EventType = {
        id: item.id,
        title:"No Title",
        date,
        start,
        end,
        offer:item.offer
      }
      return event
    })
    setCurrentEvents(data)
  }, [eventList, dispatch])

  //Updating Selected event and opening dialog box to edit the event
  useEffect(() => {
    const events = customHourList.map((item) => {
      const id = item.id;
      const start = item.start;
      const end = item.end;
      const offer = item.offer
      const date = new Date(item.date)
      return {id:id, title: "No title", start: new Date(start), end: new Date(end), offer, date}
    })
    setCurrentEvents(events)
  }, [customHourList, setCurrentEvents])

  //Function to handle event click on calender
  const handleEvent = (event: EventType) => {

    //Data formatting to save it to local state
    const data:EventType = {
      id:event.id,
      title:event.title,
      date:event.date,
      start: event.start,
      end: event.end,
      offer: event.offer
    }
    setSelectedEvent(data)
    setModifierOpen(!isModifierOpen)
  }

  return (
    <div className='relative w-full h-full overflow-y-scroll no-scroll'>
      <div className='relative w-full h-full'>
        <Calendar
          views={["week"]}
          localizer={localizer}
          events={currentEvents}
          startAccessor="start"
          endAccessor="end"
          defaultView='week'
          selectable
          style={{height: "100%"}}
          onSelectEvent={handleEvent}
        />
      </div>
      {isModifierOpen && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <EventModifier data={selectedEvent} setModifierOpen={setModifierOpen}/>
      </div>}
    </div>
  )
}

export default Calender
