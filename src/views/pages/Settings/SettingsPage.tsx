import { useEffect } from 'react';
import { useThemeContext } from '../../contexts/themeContext';
import './SettingsPage.css';

function SettingsPage() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const swapTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="settings__page">
      <h1>Settings</h1>
      <button className="btn" onClick={swapTheme}>
        Swap Theme
      </button>
    </div>
  );
}

export default SettingsPage;
