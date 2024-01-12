import Accordion from "./components/Accordion"


function App() {

  const items = [
  {
    label:'Can I use React on a Project',
    content:'Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.',
  },
  {
    label:'Can I use JavaScript on a Project',
    content:'Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.',
  },
  {
    label:'Can I use CSS on a Project',
    content:'Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.Yes you can use React in a project.',
  }]

  return (
    <>
      <Accordion items={items} ></Accordion>
    </>
  )
}

export default App
