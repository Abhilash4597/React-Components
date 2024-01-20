import Link from "./components/Link";
import Route from "./components/Route";
import Accordion from "./components/Accordion"
import DropDown from "./components/DropDown"

function App() {

  return (
    <div>
      <Link to='/Accordion'>Accordion</Link>
      <Link to='/DropDown'>Dropdown</Link>

      <Route path='/accordion'>
        <Accordion></Accordion>
      </Route>
      <Route path='/DropDown'>
        <DropDown></DropDown>
      </Route>
    </div>
    )
}

export default App
