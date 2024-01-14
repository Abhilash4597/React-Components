/* eslint-disable react/prop-types */
import { useState } from "react"
import { GoChevronDown } from "react-icons/go";

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
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>{handleClickedOption(option)}} key={option.value}>
                {option.label}
            </div>
        )
    })

    let content = 'Select...'
    if(value) {
        content = value;
    }

  return (
    <div className="w-48 relative">
        <div className="flex justify-between item-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleDropDown}>
            {content}
            <GoChevronDown className="text-lg mt-1" />
        </div>
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
    </div>
  )
}

export default DropDown