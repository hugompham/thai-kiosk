import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to the Thai Restaurant!</h1>
      <NavLink to="/mainMenu">
        Go to order
      </NavLink>
    </div>
  );
};

export default LandingPage;
