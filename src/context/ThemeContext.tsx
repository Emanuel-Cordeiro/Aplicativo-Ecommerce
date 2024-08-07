import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { themeType } from '../dto/themeDTO';

import darkTheme from '../theme/darkTheme';
import lightTheme from '../theme/lightTheme';

type ThemeContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  theme: themeType;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');

  const theme = !isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
