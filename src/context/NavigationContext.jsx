/* eslint-disable react/prop-types */
import { createContext } from "react";

const NavigationContext = createContext();

export default function NavigationProvider({ children }) {
    

  return (
    <NavigationContext.Provide>
        {children}
    </NavigationContext.Provide>
  )
}

export {NavigationProvider};