import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { themeType } from '../dto/themeDTO';

import { ChildrenProp } from '../@types/children';

import darkTheme from '../theme/darkTheme';
import lightTheme from '../theme/lightTheme';

type ThemeContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  theme: themeType;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }: ChildrenProp) {
  const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');

  const theme = !isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
