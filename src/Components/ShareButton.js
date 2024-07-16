import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const url = `${window.location.origin}/?speed=${speed}&id=${uuidv4()}`;
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard: ' + url);
  };

  return <button onClick={handleShare}>Share</button>;
};

export default ShareButton;
