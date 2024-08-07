import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../../screens/SignIn';

const Drawer = createDrawerNavigator();

export function AuthRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="SignIn"
      screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="SignIn" component={SignIn} />
    </Drawer.Navigator>
  );
}
