/* eslint-disable react/prop-types */
import classNames from "classnames"

export default function Button({ 
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded
})  {

  const classes = classNames( 'px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500 text-white' : primary,
    'border-slate-500 bg-slate-500 text-white' : secondary,
    'border-green-500 bg-green-500 text-white' : success,
    'border-red-500 bg-red-500 text-white' : danger,
    'border-yellow-500 bg-yellow-500 text-white' : warning,
  })
      return (
        <button className= {classes}> {children} </button>
      )
    }
