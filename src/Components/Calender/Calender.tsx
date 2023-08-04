import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
//Component
import EventModifier from './EventModifier';
//Store
import { useAppSelector } from '../../Store/hook';
//styles
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

export interface EventType {
  id:string,
  title: string,
  start: Date,
  end:Date,
  offer: number,
  date: Date
}

const Calender:React.FC = () => {

  //Initial State for local state
  const initialEventState:EventType = {
    id : "",
    title : "",
    start : new Date(),
    end: new Date(),
    offer: 0,
    date: new Date()
  }

  //Fetching list from global state store
  const customHourList = useAppSelector((state) => state.customHour.CustomHoursList) 

  const [currentEvents, setCurrentEvents] = useState<EventType[]>([])
  const [selectedEvent, setSelectedEvent] = useState<EventType>(initialEventState)
  const [isModifierOpen, setModifierOpen] = useState<boolean>(false)

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
          defaultDate={new Date()} 
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
