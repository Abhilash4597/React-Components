/* eslint-disable react/prop-types */

import { useState } from "react";
import { GoChevronDown , GoChevronLeft } from "react-icons/go";

export default function Accordion( {items} ) {

  const [expandedIndex,setExpandedIndex] = useState(null);

  const renderedItems = items.map((item,index)=>{
    const isExpanded = expandedIndex === index;

    const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    return (
    <div key={item.id}>
      <div onClick={()=>{setExpandedIndex(index)}}>
      {item.label}{icon}
      </div>
      {isExpanded && <div>{item.content}</div>}
    </div>
    )
  })

  return (
    <div>{renderedItems}</div>
  )
}
