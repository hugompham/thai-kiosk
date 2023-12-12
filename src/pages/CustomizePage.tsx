import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './CustomizePage.css';

const CustomizePage: React.FC = () => {
  const sidebarButtons = ['Main', 'Side', 'Drinks', 'Order', 'Promo'];
  const sidebarButtonsPath = ['/mainMenu', '/sideMenu', '/drinksMenu', '/order', '/promo'];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevIsOpen) => !prevIsOpen);
  };
  const [selectedProtein, setSelectedProtein] = useState<string | null>(null);
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string | null>(null);
  const [selectedPortionSize, setSelectedPortionSize] = useState<string | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const handleProteinClick = (protein: string) => {
    setSelectedProtein(protein === selectedProtein ? null : protein);
  };

  const handleSpiceLevelClick = (spiceLevel: string) => {
    setSelectedSpiceLevel(spiceLevel === selectedSpiceLevel ? null : spiceLevel);
  };

  const handlePortionSizeClick = (portionSize: string) => {
    setSelectedPortionSize(portionSize === selectedPortionSize ? null : portionSize);
  };

  const handleAddonClick = (addon: string) => {
    setSelectedAddons((prevAddons) =>
      prevAddons.includes(addon) ? prevAddons.filter((a) => a !== addon) : [...prevAddons, addon]
    );
  };


  return (
    <div id="page">
      <button onClick={toggleSidebar} className="hamburger-button">
        ☰
      </button>
      <h1 id="title">Customize</h1>
      <div className="containerPage">
      <div className="food-container">
        <div id="img-container">
          <img src="" alt="Food Image" />
        </div>
        <p className="caption">Delicious Food Item</p>
      </div>
      <div className="customize-options">
        {/* Protein Choices */}
        <div className="customize-row">
          <label>Protein Choices</label>
          <div className="options">
            <button
              className={selectedProtein === 'chicken' ? 'selected' : ''}
              onClick={() => handleProteinClick('chicken')}
            >
              Chicken
            </button>
            <button
              className={selectedProtein === 'beef' ? 'selected' : ''}
              onClick={() => handleProteinClick('beef')}
            >
              Beef
            </button>
            <button
              className={selectedProtein === 'tofu' ? 'selected' : ''}
              onClick={() => handleProteinClick('tofu')}
            >
              Tofu
            </button>
          </div>
        </div>
        {/* Spice Level */}
        <div className="customize-row">
          <label>Spice Level</label>
          <div className="options">
            <button
              className={selectedSpiceLevel === 'mild' ? 'selected' : ''}
              onClick={() => handleSpiceLevelClick('mild')}
            >
              Mild
            </button>
            <button
              className={selectedSpiceLevel === 'medium' ? 'selected' : ''}
              onClick={() => handleSpiceLevelClick('medium')}
            >
              Medium
            </button>
            <button
              className={selectedSpiceLevel === 'spicy' ? 'selected' : ''}
              onClick={() => handleSpiceLevelClick('spicy')}
            >
              Spicy
            </button>
            <button
              className={selectedSpiceLevel === 'extra-spicy' ? 'selected' : ''}
              onClick={() => handleSpiceLevelClick('extra-spicy')}
            >
              Extra Spicy
            </button>
            <button
              className={selectedSpiceLevel === 'fire' ? 'selected' : ''}
              onClick={() => handleSpiceLevelClick('fire')}
            >
              Fire!
            </button>
          </div>
        </div>
        {/* Portion Size */}
        <div className="customize-row">
          <label>Portion Size</label>
          <div className="options">
            <button
              className={selectedPortionSize === 'small' ? 'selected' : ''}
              onClick={() => handlePortionSizeClick('small')}
            >
              Small
            </button>
            <button
              className={selectedPortionSize === 'medium' ? 'selected' : ''}
              onClick={() => handlePortionSizeClick('medium')}
            >
              Medium
            </button>
            <button
              className={selectedPortionSize === 'large' ? 'selected' : ''}
              onClick={() => handlePortionSizeClick('large')}
            >
              Large
            </button>
          </div>
        </div>
        {/* Possible Add-ons */}
        <div className="customize-row">
          <label>Possible Add-ons</label>
          <div className="options">
            <button
              className={selectedAddons.includes('addon1') ? 'selected' : ''}
              onClick={() => handleAddonClick('addon1')}
            >
              Addon 1
            </button>
            <button
              className={selectedAddons.includes('addon2') ? 'selected' : ''}
              onClick={() => handleAddonClick('addon2')}
            >
              Addon 2
            </button>
            {/* Add more addons as needed */}
          </div>
        </div>
      <div className="special-requests">
          <label htmlFor="special-requests">Special Requests</label>
          <br></br>
          <textarea id="special-requests" rows={4}></textarea>
        </div>
        <div className="price-details">
          <p>Price: $10.99</p>
          <p>Additional Price (due to customization): +$2.00</p>
          <p>Adjusted Total Price: $12.99</p>
        </div>
        <button className="cancel-button">Cancel</button>
        <button className="confirm-button">Confirm Item</button>
      </div>
    </div>
      
      <Sidebar sidebarButtons={sidebarButtons} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} sidebarButtonsPath={sidebarButtonsPath} />
    </div>   
  );
};

export default CustomizePage;