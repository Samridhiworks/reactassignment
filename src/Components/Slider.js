import React from 'react';

const Slider = ({ speed, setSpeed }) => {
  return (
    <div>
      <input
        type="range"
        min="0.1"
        max="10"
        step="0.1"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
      <span>{speed}x</span>
    </div>
  );
};

export default Slider;
