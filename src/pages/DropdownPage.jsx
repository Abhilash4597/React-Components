import { useState } from "react"
import DropDown from "../components/DropDown"

function DropdownPage() {

  const [selection,SetSelection] = useState('');

  const handleSelection= (option)=>{
    SetSelection(option)
  }
    
  const options = [
    {label:'Red' , value:'red'},
    {label:'Green' , value:'green'},
    {label:'Blue' , value:'blue'},
  ]

  return (
    <div>
      <DropDown options={options} value={selection} onChange={handleSelection} />
    </div>
    )
}

export default DropdownPage
