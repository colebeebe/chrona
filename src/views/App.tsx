import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import { AccentColorContext, ThemeContext } from './contexts/themeContext';
import { ProtectedRoute } from './components/ProtectedRoute';

import GlobalSidebar from './components/sidebars/GlobalSidebar';
import Home from './pages/home/HomePage';
import Calendar from './pages/calendar/CalendarPage';
import EventsSubpage from './pages/calendar/EventsSubpage';
import TodoSubpage from './pages/calendar/TodoSubpage';
import SettingsPage from './pages/settings/SettingsPage';
import GeneralSettingsSubpage from './pages/settings/GeneralSettingsSubpage';
import RegistrationPage from './pages/registration/RegistrationPage';
import ErrorPage from './pages/errors/ErrorPage';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('green');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AccentColorContext.Provider value={{ accentColor, setAccentColor }}>
        <GlobalSidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          >
            <Route index element={<EventsSubpage />} />
            <Route path="todo" element={<TodoSubpage />} />
          </Route>
          <Route path="/settings" element={<SettingsPage />}>
            <Route index element={<GeneralSettingsSubpage />} />
          </Route>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AccentColorContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
