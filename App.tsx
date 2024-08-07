import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import SignIn from './src/screens/SignIn';

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

      <SignIn />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;
