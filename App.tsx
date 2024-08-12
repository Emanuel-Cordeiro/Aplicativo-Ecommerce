/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';

import { AuthContextProvider } from './src/context/AuthContextProvider';
import { ThemeContextProvider, useTheme } from './src/context/ThemeContext';

import Routes from './src/routes/routes';

const AppContent = () => {
  const { isDarkMode, theme } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.application_background}
        translucent
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.application_background,
          marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}>
        <Routes />
      </SafeAreaView>
    </>
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
