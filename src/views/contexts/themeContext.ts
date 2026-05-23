import { createContext, useContext } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useThemeContext must be used within a ThemeContext element',
    );
  }

  return context;
}

type AccentColorType = {
  accentColor: string;
  setAccentColor: React.Dispatch<React.SetStateAction<string>>;
};

export const AccentColorContext = createContext<AccentColorType | undefined>(
  undefined,
);

export function useAccentColorContext() {
  const context = useContext(AccentColorContext);

  if (!context) {
    throw new Error(
      'useAccentColorContext must be used within an AccentColorContext element',
    );
  }

  return context;
}
