import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // Set the initial state to the red color code to make it active by default
  const [bgColor, setBgColor] = useState('#bb1a30');

  useEffect(() => {
    // Set the background color to red when the component mounts
    setBgColor('#bb1a30');
  }, []);

  const handleButtonClick = (color) => {
    setBgColor(color); // Update the background color
  };

  return (
    <div className="parent">
      <div className="inner-container" style={{ backgroundColor: bgColor }}>
        {/* Heading */}
        <h1 className="heading">Background Color Change</h1>

        {/* Buttons */}
        <div className="button-group">
          <button
            onClick={() => handleButtonClick('#6a0808')}
            className={`button red ${bgColor === '#6a0808' ? 'active' : ''}`}
          >
            RED
          </button>
          <button
            onClick={() => handleButtonClick('#03064f')}
            className={`button blue ${bgColor === '#03064f' ? 'active' : ''}`}
          >
            BLUE
          </button>
          <button
            onClick={() => handleButtonClick('#075d19')}
            className={`button green ${bgColor === '#075d19' ? 'active' : ''}`}
          >
            GREEN
          </button>
          <button
            onClick={() => handleButtonClick('#2c034f')}
            className={`button purple ${bgColor === '#2c034f' ? 'active' : ''}`}
          >
            PURPLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
