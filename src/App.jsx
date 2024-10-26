// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './styles/App.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    let counterUp = document.getElementById('counterUp');
    let counterDown = document.getElementById('counterDown');
    let counterNumber = document.getElementById('counterNumber');

    const handleIncrement = () => {
      let currentValue = parseInt(counterNumber.innerText, 10);
      counterNumber.innerText = currentValue + 1;
    };

    const handleDecrement = () => {
      let currentValue = parseInt(counterNumber.innerText, 10);
      counterNumber.innerText = currentValue - 1;
    };

    counterUp.addEventListener("click", handleIncrement);
    counterDown.addEventListener("click", handleDecrement);

    return () => {
      counterUp.removeEventListener("click", handleIncrement);
      counterDown.removeEventListener("click", handleDecrement);
    };
  }, []);

  return (
    <React.Fragment>
      <header className='header'>
        <div className="header">
          <button id='counterUp'>+</button>
          <span id='counterNumber'>0</span>
          <button id='counterDown'>-</button>
        </div>
      </header>
    </React.Fragment>
  );
}

export default App;
