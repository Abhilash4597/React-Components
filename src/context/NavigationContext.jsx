import { createContext } from "react";

export default function NavigationContext({ children }) {
  return (
    <NavigationContext.Provide>
        {children}
    </NavigationContext.Provide>
  )
}

export {NavigationProvider};