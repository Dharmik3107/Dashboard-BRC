import React from 'react'
//Components
import Outlet from './Outlet'

interface LocationDataObjectType {
  location: string,
  country: string
}

//Constant outlet location to display on sidebar
const LocationData:LocationDataObjectType[] = [
  {
    location: "Dubai mall",
    country: "Dubai"
  },
  {
    location: "Marina mall",
    country: "Dubai"
  },
  {
    location: "JBR the beach 1",
    country: "Dubai"
  },
]

const Locations:React.FC = () => {

  const lastIndex:number = LocationData.length - 1
  
  return (
    <div className='w-full h-[calc(100%_-_48px)] shadow-rightShadow flex flex-col justify-start items-center py-5 font-inter z-[-1]'>
      <h1 className='w-full self-start pl-5 font-bold text-lg text-gray-400 mb-5'>Outlets</h1>
      {LocationData.map((data, index) =>{
        return <Outlet key={index} location={data.location} country={data.country} border={index !== lastIndex ? true : false}/>
      } )}
    </div>
  )
}

export default Locations
