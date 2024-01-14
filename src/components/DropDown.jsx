/* eslint-disable react/prop-types */
import { useState } from "react"

function DropDown( {options} ) {

    const [isOpen , setIsOpen] = useState(false);

    const handleDropDown = ()=>{
        setIsOpen(!isOpen)
    }

    const renderedOptions = options.map((option)=>{

        return (
            <div key={option.value}>
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