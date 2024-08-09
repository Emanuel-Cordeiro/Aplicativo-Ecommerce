import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
