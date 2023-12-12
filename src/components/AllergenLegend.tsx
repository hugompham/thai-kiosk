// AllergenLegend.tsx

import React from 'react';
import './AllergenLegend.css';

const AllergenLegend: React.FC = () => {
  return (
    <div className="allergen-legend">
      <div className="legend-item">
        <span className="legend-icon" role="img" aria-label="Dairy">
          🥛
        </span>
        <span className="legend-label">Dairy</span>
      </div>
      <div className="legend-item">
        <span className="legend-icon" role="img" aria-label="Nuts">
          🥜
        </span>
        <span className="legend-label">Nuts</span>
      </div>
      <div className="legend-item">
        <span className="legend-icon" role="img" aria-label="Gluten">
          🌾
        </span>
        <span className="legend-label">Gluten</span>
      </div>
      <div className="legend-item">
        <span className="legend-icon" role="img" aria-label="Seafood">
          🦐
        </span>
        <span className="legend-label">Seafood</span>
      </div>
    </div>
  );
};

export default AllergenLegend;
