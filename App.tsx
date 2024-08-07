import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Routes } from './src/routes';

import { AuthContextProvider } from './src/context/AuthContextProvider';
import { ThemeContextProvider, useTheme } from './src/context/ThemeContext';

const AppContent = () => {
  const { isDarkMode, theme } = useTheme();

  return (
    <SafeAreaView
      style={{ backgroundColor: theme.colors.application_background }}>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.application_background}
      />

      <Routes />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <AppContent />
      </AuthContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
