import React, {useState} from 'react'

import BlackDayList from './BlackDayList'

const BlackedDays:React.FC = () => {
    const [blackedDayList, setBlackedDayList] = useState<string[]>([])
  return (
    <div className='w-1/2 h-fit flex justify-start items-start flex-wrap'>
      <BlackDayList blackedDayList={blackedDayList} setBlackedDayList={setBlackedDayList}/>
    </div>
  )
}

export default BlackedDays
