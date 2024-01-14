/* eslint-disable react/prop-types */
import { useState } from "react"

function DropDown( {options , onSelect , selection} ) {
    const [isOpen , setIsOpen] = useState(false);

    const handleDropDown = ()=>{
        setIsOpen(!isOpen)
    }

    const handleClickedOption = (option)=>{
        setIsOpen(false)
        onSelect(option.label)
    }

    const renderedOptions = options.map((option)=>{
        return (
            <div onClick={()=>{handleClickedOption(option)}} key={option.value}>
                {option.label}
            </div>
        )
    })

    let content = 'Select...'
    if(selection) {
        content = selection;
    }

  return (
    <div>
        <div onClick={handleDropDown}> {content} </div>
        {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default DropDown