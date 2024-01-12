/* eslint-disable react/prop-types */

export default function Accordion( {items} ) {

  let renderedItems = items.map((item)=>{
    return (
    <div key={item.id}>
      <div>{item.label}</div>
      <div>{item.content}</div>
    </div>
    )
  })
  return (
    <div>{renderedItems}</div>
  )
}
