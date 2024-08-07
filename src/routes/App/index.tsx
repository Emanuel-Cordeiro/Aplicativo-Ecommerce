import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screens/Home';

const { Navigator, Screen } = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
