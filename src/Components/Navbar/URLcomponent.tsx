import React from 'react'
//Components
import URLBlocks from './URLBlocks'
//Assets
import StartIcon from "../../assets/Start.svg"

//Constant list of path elements
const customURL = ["Start","Merchants","Starbucks", "Outlets", "Offer settings"]

const URLcomponent:React.FC = () => {

  const lastIndex:number = customURL.length - 1

  return (
    <div className='w-full h-full flex justify-start items-center gap-2 text-xl'>
      {customURL.map((item, index) => {
        return <React.Fragment key={index}>
          <URLBlocks icon={index === 0 ? StartIcon : ""} displaytext={item} />
          {lastIndex !== index && <span>/</span>}
        </React.Fragment>
      })}
    </div>
  )
}

export default URLcomponent
