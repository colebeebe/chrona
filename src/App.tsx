import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeContext } from './contexts/themeContext';
import './App.css';

function App() {
  const [ theme, setTheme ] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
