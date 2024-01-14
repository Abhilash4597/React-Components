/* eslint-disable react/prop-types */
import { useState } from "react"

function DropDown( {options , onChange , value} ) {
    const [isOpen , setIsOpen] = useState(false);

    const handleDropDown = ()=>{
        setIsOpen(!isOpen)
    }

    const handleClickedOption = (option)=>{
        setIsOpen(false)
        onChange(option.label)
    }

    const renderedOptions = options.map((option)=>{
        return (
            <div onClick={()=>{handleClickedOption(option)}} key={option.value}>
                {option.label}
            </div>
        )
    })

    let content = 'Select...'
    if(value) {
        content = value;
    }

  return (
    <div>
        <div onClick={handleDropDown}> {content} </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default DropDown