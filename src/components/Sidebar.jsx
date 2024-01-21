import Link from "./Link";

export default function SideBar() {

    const links = [
    {
        label:'Dropdown',
        path:'/'
    },
    {
        label:'Accordion',
        path:'/accordion'
    },
    {
        label:'Buttons',
        path:'/buttons'
    }
]

    const renderedLinks = links.map((link,index)=>{
        return <Link key={index} to={link.path} >{link.label}</Link>
    })

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
        {renderedLinks}
    </div>
  )
}
