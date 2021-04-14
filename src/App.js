import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/https://rec-cen-hello-world-backend.herokuapp.com/time').then(res => res.json()).then(data => {
        setCurrentTime(data.time);
        console.log(currentTime);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
        {currentTime !== 0 &&
          <p>
            The current time is {currentTime}.
          </p>
        }
      </header>
    </div>
  );
}

export default App;
