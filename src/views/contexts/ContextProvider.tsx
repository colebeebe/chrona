import { useState, useEffect } from 'react';

import { UserContext } from './userContext';
import { ThemeContext, AccentColorContext } from './themeContext';

import type { ReactNode } from 'react';

type ContextProviderProps = {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  // TODO: Abstract this even further
  const [theme, setTheme] = useState('light');
  const [accentColor, setAccentColor] = useState('green');
  const [user, setUser] = useState({ id: 0 });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch('/api/auth/me', {
          credentials: 'include',
        });

        let data = null;
        if (response.ok) {
          data = await response.json();
        }

        const settingsResponse = await fetch('/api/user/settings', {
          credentials: 'include',
        });

        let settings = null;
        if (settingsResponse.ok) {
          settings = await settingsResponse.json();
        }

        const user = {
          id: data.id,
          firstName: data.first_name,
          lastName: data.lastName,
          email: data.email,
        }

        setUser(user);
        setTheme(settings.theme);
        setAccentColor(settings.accent);
      } catch {
        setUser({ id: 0 });
      }
    }

    getUserInfo();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', `var(--${accentColor})`);
    document.documentElement.style.setProperty(
      '--accent__alt',
      `var(--${accentColor}__alt)`,
    );
  }, [accentColor])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <AccentColorContext.Provider value={{accentColor, setAccentColor}}>
          {children}
        </AccentColorContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}