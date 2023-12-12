// MenuItem.tsx

import React from 'react';
import './MenuItem.css';
import { NavLink } from 'react-router-dom';
interface MenuItemProps {
    image: string;
    name: string;
    price: number;
    allergens: string[]; // Array of allergen names
}
  
const MenuItem: React.FC<MenuItemProps> = ({ image, name, price, allergens }) => {
// Define a mapping between allergen names and corresponding icons
const allergenIcons: { [key: string]: string } = {
    Dairy: '🥛',
    Nuts: '🥜',
    Gluten: '🌾',
    Seafood: '🦐',
    // Add more allergen icons as needed
};

return (
    <div className="menu-item">
    <NavLink className="imageLink" to='/customize'>
        <img src={image} alt={name} className="menu-item-image" />
    </NavLink>
    <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-price">${price.toFixed(2)}</p>
        {allergens && (
        <div className="allergen-icons">
            {allergens.map((allergen, index) => (
            <span key={index} className="allergen-icon" role="img" aria-label={allergen}>
                {allergenIcons[allergen]}
            </span>
            ))}
        </div>
        )}
    </div>
    </div>
);
};

export default MenuItem;