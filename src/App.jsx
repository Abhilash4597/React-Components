import DropDown from "./components/DropDown"


function App() {
    
  const options = [
    {label:'Red' , value:'red'},
    {label:'Green' , value:'green'},
    {label:'Blue' , value:'blue'},
  ]

  return (
    <div>
      <DropDown options={options} />
    </div>
    )
}

export default App
