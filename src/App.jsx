import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropdownPage';

function App() {

  return (
    <div>
      <Link to='/Accordion'>Accordion</Link>
      <Link to='/DropDown'>Dropdown</Link>

      <Route path='/Accordion'>
        <AccordionPage></AccordionPage>
      </Route>
      <Route path='/DropDown'>
        <DropDownPage></DropDownPage>
      </Route>
    </div>
    )
}

export default App
