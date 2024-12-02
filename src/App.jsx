import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(true);
    }
  };
  useEffect(() => {
    toggleFullScreen();
  }, []);

  return (
    <div className="App">
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Salir de pantalla completa' : 'Entrar en pantalla completa'}
      </button>
      <div className="container">
        <div className="contador">
          <p>Tu contenido aquí</p>
        </div>
      </div>
    </div>
  );
};

export default App;