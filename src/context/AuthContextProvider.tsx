import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

import { api } from '../utils/api';

import { ChildrenProp } from '../@types/children';

import { FormSignIn } from '../dto/formSignInDTO';

type AuthContextData = {
  user: FormSignIn;
  isLoading: boolean;
  signIn: (user: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthContextProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<FormSignIn>({} as FormSignIn);
  const [isLoading, setIsLoading] = useState(false);

  async function signIn(users: string, password: string) {
    // setIsLoading(true);

    try {
      const response = await api.post(
        '/auth/login',
        JSON.stringify({
          username: users,
          password: password,
        }),
      );

      const { id, username, email, firstName, lastName } = response.data;

      if (response.status === 200) {
        setUser({
          id,
          username,
          password,
          email,
          firstName,
          lastName,
          profileImgUrl: response.data.image,
        });
      } else {
        setUser({} as FormSignIn);
      }
    } catch (error) {
      Alert.alert(
        'Atenção',
        'Não foi possível fazer o login agora, tente novamente mais tarde.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  function signOut() {
    setUser({} as FormSignIn);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
