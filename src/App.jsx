import SideBar from './components/SideBar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';

function App() {

  return (
    <div>
      <SideBar />
      <div>
        <Route path='/'>
          <DropDownPage></DropDownPage>
        </Route>
        <Route path='/accordion'>
          <AccordionPage></AccordionPage>
        </Route>
        <Route path='/buttons'>
          <ButtonPage></ButtonPage>
        </Route>
      </div>
    </div>
    )
}

export default App
