import React, { createContext, useState, useEffect } from 'react';

import { api } from '../utils/api';

import { ChildrenProp } from '../@types/children';

import { formSignIn } from '../dto/formSignInDTO';

type AuthContextData = {
  user: formSignIn;
  isLoading: boolean;
  signIn: (user: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthContextProvider({ children }: ChildrenProp) {
  const [user, setUser] = useState<formSignIn>({} as formSignIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  async function signIn(users: string, password: string) {
    setIsLoading(true);

    try {
      const response = await api.post(
        '/auth/login',
        JSON.stringify({
          username: users,
          password: password,
        }),
      );

      if (response.status === 200) {
        setUser({ user: users, password });
      } else {
        setUser({} as formSignIn);
      }
    } catch (error) {
      console.log(`err ${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  function signOut() {
    setUser({} as formSignIn);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
