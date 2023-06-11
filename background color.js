import React, { useState } from 'react';

const RandomBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeBackgroundColor = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ backgroundColor }}>
      <h2>Random Background Color</h2>
      <button onClick={changeBackgroundColor}>Change Color</button>
    </div>
  );
};

export default RandomBackgroundColor;
