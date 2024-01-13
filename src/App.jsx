import Accordion from "./components/Accordion"


function App() {

  const items = [
  {
    id:'dxbncb',
    label:'Can I use React on a Project',
    content:'Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project. Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project. Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project. Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.',
  },
  {
    id:'jdsjfj',
    label:'Can I use JavaScript on a Project',
    content:'Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project. Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.Yes you can use JavaScript in a project.',
  },
  {
    id:'jhfnmn',
    label:'Can I use CSS on a Project',
    content:'Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project. Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project. Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project. Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project.Yes you can use CSS in a project.',
  }]

  return (
    <>
      <Accordion items={items} ></Accordion>
    </>
  )
}

export default App
