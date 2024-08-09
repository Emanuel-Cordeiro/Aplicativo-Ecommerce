import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './App';
import { AuthRoutes } from './Auth';

import { useAuth } from '../hooks/useAuth';
import Loading from '../components/Loading';

const Routes = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {user?.user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
