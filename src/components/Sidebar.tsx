// Sidebar.tsx

import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  sidebarButtons: string[];
  sidebarButtonsPath: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, sidebarButtons, sidebarButtonsPath }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="buttons-container">
        <div id="topRow">
            <button className="top-button">setting</button>
            <button className="top-button">aid</button>
            <button onClick={toggleSidebar} className="top-button">☰</button>
        </div>
        {sidebarButtons.map((button, index) => (
          <NavLink to={sidebarButtonsPath[index]} key={index} className="sidebar-button">
            {button}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;