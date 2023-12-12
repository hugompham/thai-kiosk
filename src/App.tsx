// App.tsx 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainMenu from './pages/MainMenu';
import SideMenu from './pages/SideMenu';
import DrinksMenu from './pages/DrinksMenu';
import CustomizePage from './pages/CustomizePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainMenu" element={<MainMenu />} />
        <Route path="/sideMenu" element={<SideMenu />} />
        <Route path="/drinksMenu" element={<DrinksMenu />} />
        <Route path="/customize" element={<CustomizePage />} />
      </Routes>
    </Router>
  );
};

export default App;
