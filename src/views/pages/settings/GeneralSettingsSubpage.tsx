import { useEffect } from 'react';
import { useThemeContext } from '../../contexts/themeContext';
import './GeneralSettingsSubpage.css';

function GeneralSettingsSubpage() {
  const { theme, setTheme } = useThemeContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const lightTheme = () => {
    setTheme('light');
  };

  const darkTheme = () => {
    setTheme('dark');
  };

  const setAccent = (color: string) => {
    document.documentElement.style.setProperty('--accent', `var(--${color})`);
  };

  return (
    <div className="general-settings__subpage">
      <h1>Settings</h1>
      <title>Chrona | General Settings</title>
      <section className="theme-section major-section">
        <h2>Aesthetics</h2>
        <div className="light-dark-theme minor-section">
          <h3>Theme</h3>
          <div className="theme-button-container">
            <button className="btn" onClick={lightTheme}>Light</button>
            <button className="btn" onClick={darkTheme}>Dark</button>
          </div>
        </div>
        <div className="accent-color-theme minor-section">
          <h3>Accent Color</h3>
          {/* TODO: Create these dynamically so that the selected accent can update */}
          <div className="accent-color-container">
            <button className="accent-color-pink" onClick={() => setAccent('pink')}></button>
            <button className="accent-color-red" onClick={() => setAccent('red')}></button>
            <button className="accent-color-yellow" onClick={() => setAccent('yellow')}></button>
            <button className="accent-color-orange" onClick={() => setAccent('orange')}></button>
            <button className="accent-color-green selected-accent" onClick={() => setAccent('green')}></button>
            <button className="accent-color-blue" onClick={() => setAccent('blue')}></button>
            <button className="accent-color-purple" onClick={() => setAccent('purple')}></button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GeneralSettingsSubpage;
