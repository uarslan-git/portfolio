import React, { createContext, useState, useContext } from 'react';

// Create a context to share state between menu components
export const MenuContext = createContext();

export function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Function to toggle menu
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Function to close menu
  const closeMenu = () => setIsOpen(false);
  
  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu, closeMenu }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {children}
      </div>
    </MenuContext.Provider>
  );
}
