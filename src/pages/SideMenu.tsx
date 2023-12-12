import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './SideMenu.css';

import AllergenLegend from '../components/AllergenLegend';
import MenuCategory from '../components/MenuCategory';



const SideMenu: React.FC = () => {
  const sidebarButtons = ['Main', 'Side', 'Drinks', 'Order', 'Promo'];
  const sidebarButtonsPath = ['/mainMenu', '/sideMenu', '/drinksMenu', '/order', '/promo'];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };
  const popularMenuItems = [
    { image: 'url_to_image_1', name: 'Item 1', price: 9.99, allergens: ['Gluten', 'Dairy'] },
    { image: 'url_to_image_2', name: 'Item 2', price: 12.99, allergens: ['Nuts'] }
  ];
  const specialMenuItems = [
    { image: 'url_to_image_1', name: 'Item 1', price: 9.99, allergens: ['Gluten', 'Dairy'] },
    { image: 'url_to_image_2', name: 'Item 2', price: 12.99, allergens: ['Nuts'] }
  ];
  const etcMenuItems = [
    { image: 'url_to_image_1', name: 'Item 1', price: 9.99, allergens: ['Gluten', 'Dairy'] },
    { image: 'url_to_image_2', name: 'Item 2', price: 12.99, allergens: ['Nuts'] },
  ];

  return (
    <div id="page">
      <button onClick={toggleSidebar} className="hamburger-button">
        ☰
      </button>
      <div id="onTop">
        <h1 id="title">Side Menu</h1>
        <AllergenLegend />
      </div>
      <Sidebar sidebarButtons={sidebarButtons} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidebarButtonsPath={sidebarButtonsPath} />
      <MenuCategory categoryTitle="Popular" menuItems={popularMenuItems} />
      <MenuCategory categoryTitle="Special" menuItems={specialMenuItems} />
      <MenuCategory categoryTitle="Items" menuItems={etcMenuItems} />
    </div>    
  );
};

export default SideMenu;
