import React, { useState, useEffect } from 'react';
import AnalogClock from './AnalogClock';
import Slider from './Slider';
import ShareButton from './ShareButton';
import Fetch from './Fetch';

const TrackingScreen = () => {
 

  const [speed, setSpeed] = useState(1);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tracking Screen</h1>
      <AnalogClock speed={speed} />
      <Slider speed={speed} setSpeed={setSpeed} />
      <ShareButton speed={speed} />
     <Fetch/>
    </div>
  );
};

export default TrackingScreen;
