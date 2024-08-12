import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../screens/SignIn';

import { useTheme } from '../context/ThemeContext';

const Drawer = createDrawerNavigator();

export function AuthRoutes() {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.text_color,
        drawerInactiveTintColor: theme.colors.text_color,
        drawerStyle: {
          backgroundColor: theme.colors.application_background,
        },
      }}>
      <Drawer.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Entrar',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
}
