import React, { useState, useEffect } from 'react';

const Fetch = () => {
  const [details, setDetails] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/')
      .then(response => response.json())
      .then(data => {
        setDetails(data.quotes);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % details.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [details.length]);

  return (
    <div className='para'>
      {details.length > 0 && (
        <div className='fetch-text'>
          <p className='fetch-para'>{details[currentQuoteIndex].quote}</p>
        </div>
      )}
    </div>
  );
};

export default Fetch;
