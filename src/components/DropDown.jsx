/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown( {options , onChange , value} ) {
    const [isOpen , setIsOpen] = useState(false);
    
    const divElement = useRef();

    useEffect(()=>{
        const handler = (event)=>{

            if(!divElement.current){
                return;
            }

            if(!divElement.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click',handler,true)

        return ()=>{
            document.removeEventListener('click',handler)
        }

    },[])

    const handleDropDown = ()=>{
        setIsOpen(!isOpen);
    }

    const handleClickedOption = (option)=>{
        setIsOpen(false);
        onChange(option.label);
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
    <div ref={divElement} className="w-48 relative">
        <Panel className="flex justify-between item-center cursor-pointer" onClick={handleDropDown}>
            {content}
            <GoChevronDown className="text-lg mt-1" />
        </Panel>
        {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
    </div>
  )
}

export default DropDown