import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../../screens/SignIn';

const { Navigator, Screen } = createDrawerNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
