/* eslint-disable react/prop-types */
import classNames from "classnames";

export default function Button({ 
  children,
  primary,
  secondary,
  success,
  danger,
  warning,
  outline,
  rounded,
  ...rest
  }) {

  const classes = classNames(rest.className && [...rest.className],
    'flex items-center gap-x-1 px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white' : primary,
      'border-gray-900 bg-gray-900 text-white' : secondary,
      'border-green-500 bg-green-500 text-white' : success,
      'border-red-500 bg-red-500 text-white' : danger,
      'border-yellow-500 bg-yellow-500 text-white' : warning,
      'rounded-full' : rounded,
      'bg-white' : outline,
      'text-blue-500' : outline && primary,
      'text-gray-900' : outline && secondary,
      'text-green-500' : outline && success,
      'text-red-500' : outline && danger,
      'text-yellow-500' : outline && warning,
    })
    
      return (
        <button {...rest} className= {classes}> {children} </button>
      )
    }
