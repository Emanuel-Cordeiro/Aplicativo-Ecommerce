import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './App';
import { AuthRoutes } from './Auth';

import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { user } = useAuth();
  console.log(user.user);

  return (
    <NavigationContainer>
      {false ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
