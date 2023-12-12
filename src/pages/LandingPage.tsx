import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to the Landing Page!</h1>
      <NavLink to="/mainMenu">
        Go to Main Menu
      </NavLink>
    </div>
  );
};

export default LandingPage;