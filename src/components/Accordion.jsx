/* eslint-disable react/prop-types */

import { useState } from "react"

export default function Accordion( {items} ) {

  const [expandedIndex,setExpandedIndex] = useState(null);

  const renderedItems = items.map((item,index)=>{
    const isExpanded = expandedIndex === index;

    return (
    <div key={item.id}>
      <div onClick={()=>{setExpandedIndex(index)}}>{item.label}</div>
      {isExpanded && <div>{item.content}</div>}
    </div>
    )
  })

  return (
    <div>{renderedItems}</div>
  )
}
