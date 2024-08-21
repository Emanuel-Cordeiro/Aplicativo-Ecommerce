import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import { useTheme } from '../context/ThemeContext';
import CustomDrawerContent from '../components/CustomDrawerContent';

import { Home } from '../screens/Home';
import Homee from '../screens/Homee';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  const { theme } = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Profile"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.colors.text_color,
        drawerInactiveTintColor: theme.colors.text_color,
        drawerStyle: {
          backgroundColor: theme.colors.application_background,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Homee"
        component={Homee}
        options={{
          title: 'teste',
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
}
