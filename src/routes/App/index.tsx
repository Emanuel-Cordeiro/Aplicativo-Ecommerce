import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import { useTheme } from '../../context/ThemeContext';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.text_color,
        drawerInactiveTintColor: theme.colors.text_color,
        drawerStyle: {
          backgroundColor: theme.colors.application_background,
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
