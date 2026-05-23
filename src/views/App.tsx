import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import GlobalSidebar from './components/sidebars/GlobalSidebar';
import Home from './pages/home/HomePage';
import Calendar from './pages/calendar/CalendarPage';
import EventsSubpage from './pages/calendar/EventsSubpage';
import TodoSubpage from './pages/calendar/TodoSubpage';
import SettingsPage from './pages/settings/SettingsPage';
import ErrorPage from './pages/errors/ErrorPage';
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
