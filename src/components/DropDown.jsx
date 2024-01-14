/* eslint-disable react/prop-types */
import { useState } from "react"

function DropDown( {options} ) {

    const [isOpen , setIsOpen] = useState(false);

    const handleDropDown = ()=>{
        setIsOpen(!isOpen)
    }

    const handleClickedOption = (option)=>{
        setIsOpen(false)

        console.log(option)
    }

    const renderedOptions = options.map((option)=>{

        return (
            <div onClick={()=>{handleClickedOption(option)}} key={option.value}>
                {option.label}
            </div>
        )
    })
  return (
    <div>
        <div onClick={handleDropDown}>
            Select...
        </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default DropDown