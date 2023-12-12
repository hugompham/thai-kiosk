  import React, { useState } from 'react';
  import Sidebar from '../components/Sidebar';
  import './MainMenu.css';

  import AllergenLegend from '../components/AllergenLegend';
  import MenuCategory from '../components/MenuCategory';



  const MainMenu: React.FC = () => {
    const sidebarButtons = ['Main', 'Side', 'Drinks', 'Order', 'Promo'];
    const sidebarButtonsPath = ['/mainMenu', '/sideMenu', '/drinksMenu', '/order', '/promo'];
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
    };
    const popularMenuItems = [
      {
        image: 'url_to_image_1',
        name: 'Pad Thai',
        price: 9.99,
        allergens: ['Gluten', 'Peanuts', 'Shellfish'],
      },
      {
        image: 'url_to_image_2',
        name: 'Green Curry',
        price: 12.99,
        allergens: ['Dairy', 'Soy', 'Fish'],
      },
      {
        image: 'url_to_image_3',
        name: 'Tom Yum Soup',
        price: 8.99,
        allergens: ['Soy', 'Shellfish'],
      },
      {
        image: 'url_to_image_4',
        name: 'Pad See Ew',
        price: 10.99,
        allergens: ['Gluten', 'Soy', 'Eggs'],
      },
      {
        image: 'url_to_image_5',
        name: 'Mango Sticky Rice',
        price: 6.99,
        allergens: ['Dairy'],
      },
    ];
    const specialMenuItems = [
      {
        image: 'url_to_image_1',
        name: 'Massaman Curry',
        price: 14.99,
        allergens: ['Peanuts', 'Tree Nuts', 'Fish'],
      },
      {
        image: 'url_to_image_2',
        name: 'Pineapple Fried Rice',
        price: 11.99,
        allergens: ['Soy', 'Eggs'],
      },
      {
        image: 'url_to_image_3',
        name: 'Basil Chicken ',
        price: 13.99,
        allergens: ['Soy', 'Shellfish'],
      },
      {
        image: 'url_to_image_4',
        name: 'Panang Curry',
        price: 15.99,
        allergens: ['Peanuts', 'Fish'],
      },
      {
        image: 'url_to_image_5',
        name: 'Thai BBQ Skewers',
        price: 10.99,
        allergens: ['Soy', 'Shellfish'],
      },
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
          <h1 id="title">Main Menu</h1>
          <AllergenLegend />
        </div>
        <Sidebar sidebarButtons={sidebarButtons} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidebarButtonsPath={sidebarButtonsPath} />
        <MenuCategory categoryTitle="Popular" menuItems={popularMenuItems} />
        <MenuCategory categoryTitle="Special" menuItems={specialMenuItems} />
        <MenuCategory categoryTitle="Items" menuItems={etcMenuItems} />
      </div>   
    );
  };

  export default MainMenu;
