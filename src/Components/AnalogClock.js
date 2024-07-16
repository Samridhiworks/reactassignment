import React, { useState, useEffect } from 'react';

const AnalogClock = ({ speed = 1 }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() + 1000 * speed));
    }, 1000);
    return () => clearInterval(interval);
  }, [speed]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourStyle = {
    transform: `rotate(${(hours % 12) * 30 + minutes / 2}deg)`, // Added minute contribution for smoother hour hand movement
  };
  const minuteStyle = {
    transform: `rotate(${minutes * 6 + seconds / 10}deg)`, // Added second contribution for smoother minute hand movement
  };
  const secondStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };

  return (
    <div className="clock">
      <div className="hour" style={hourStyle}></div>
      <div className="minute" style={minuteStyle}></div>
      <div className="second" style={secondStyle}></div>
    </div>
  );
};

export default AnalogClock;
