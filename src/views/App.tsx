import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import GlobalSidebar from './components/sidebars/GlobalSidebar';
import Home from './pages/HomePage';
import Calendar from './pages/Calendar/CalendarPage';
import EventsSubpage from './pages/Calendar/EventsSubpage';
import TodoSubpage from './pages/Calendar/TodoSubpage';
import SettingsPage from './pages/Settings/SettingsPage';
import { ThemeContext } from './contexts/themeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalSidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />}>
          <Route index element={<EventsSubpage />} />
          <Route path="todo" element={<TodoSubpage />} />
        </Route>
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
