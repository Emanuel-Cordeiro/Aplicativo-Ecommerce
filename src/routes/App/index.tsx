import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/Home';

const Drawer = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}
