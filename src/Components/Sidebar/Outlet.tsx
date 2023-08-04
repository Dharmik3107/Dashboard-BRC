import React from 'react'

interface Props {
    location: string,
    country: string,
    border: boolean
}

const Outlet:React.FC<Props> = ({location, country, border}:Props) => {
  return (
    <div className='w-full h-12 font-bold hover:bg-lightGray transition-all duration-300 flex justify-start items-center pl-5 z-0' style={{borderBottom: `${border ? "2px solid rgb(209, 213, 219)" : ""}`}}>
        {location} - {country}
    </div>
  )
}

export default Outlet
