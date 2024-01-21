import SideBar from './components/SideBar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropDownPage from './pages/DropdownPage';

function App() {

  return (
    <div>
      <SideBar />
      <div>
        <Route path='/accordion'>
          <AccordionPage></AccordionPage>
        </Route>
        <Route path='/'>
          <DropDownPage></DropDownPage>
        </Route>
      </div>
    </div>
    )
}

export default App
