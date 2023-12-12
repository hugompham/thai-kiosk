// MenuCategory.tsx

import React from 'react';
import MenuItem from './MenuItem';
import './MenuCategory.css';

interface MenuCategoryProps {
  categoryTitle: string;
  menuItems: {
    image: string;
    name: string;
    price: number;
    allergens: string[];
  }[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ categoryTitle, menuItems }) => {
  return (
    <div className="menu-category">
      <div className="category-title">{categoryTitle}</div>
      <div className="divider"></div>
      <div className="horizontal-scroller">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
