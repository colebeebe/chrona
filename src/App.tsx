import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const swapTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  };

  return(
    <>
      <title>Chrona | Home</title>

      <div className='container'>
        <div className='pink'></div>
        <div className='red'></div>
        <div className='orange'></div>
        <div className='yellow'></div>
        <div className='green'></div>
        <div className='blue'></div>
        <div className='purple'></div>
      </div>

      <p>Theme set to {theme} mode.</p>
      <button
        onClick={swapTheme}
      >
        Swap Theme
      </button>
    </>
  );
}

export default App;
