import { useContext } from "react";
import { MenuContext } from "./MenuContext.js";

export function MenuButton({ children, as: Component, ...props }) {
  const { toggleMenu } = useContext(MenuContext);
  
  // If an 'as' prop is provided, use that component
  if (Component) {
    return (
      <Component onClick={toggleMenu} {...props}>
        {children}
      </Component>
    );
  }
  
  // Default button
  return (
    <button onClick={toggleMenu} {...props}>
      {children}
    </button>
  );
}
