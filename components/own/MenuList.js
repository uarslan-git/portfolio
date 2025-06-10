import { useContext } from "react";
import { MenuContext } from "./MenuContext.js";

export function MenuList({ children }) {
  const { isOpen, closeMenu } = React.useContext(MenuContext);
  
  if (!isOpen) return null;
  
  return (
    <div 
      style={{
        position: 'absolute',
        right: 0,
        minWidth: '200px',
        backgroundColor: 'black',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 1000
      }}
    >
      {React.Children.map(children, child => {
        // Clone each child and add onClick handler to close menu
        return React.cloneElement(child, {
          onClick: () => {
            if (child.props.onClick) child.props.onClick();
            closeMenu();
          }
        });
      })}
    </div>
  );
}
